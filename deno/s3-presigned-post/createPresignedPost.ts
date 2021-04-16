import { S3Client } from "../client-s3/mod.ts";
import { createScope, getSigningKey } from "../signature-v4/mod.ts";
import { HashConstructor, SourceData } from "../types/mod.ts";
import { formatUrl } from "../util-format-url/mod.ts";
import { toHex } from "../util-hex-encoding/mod.ts";

import {
  ALGORITHM_IDENTIFIER,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_QUERY_PARAM,
  CREDENTIAL_QUERY_PARAM,
  SIGNATURE_QUERY_PARAM,
  TOKEN_QUERY_PARAM,
} from "./constants.ts";
import { Conditions as PolicyEntry } from "./types.ts";

type Fields = { [key: string]: string };

export interface PresignedPostOptions {
  Bucket: string;
  Key: string;
  Conditions?: PolicyEntry[];
  Fields?: Fields;
  Expires?: number;
}

export interface PresignedPost {
  url: string;
  fields: Fields;
}

/**
 * Builds the url and the form fields used for a presigned s3 post.
 */
export const createPresignedPost = async (
  client: S3Client,
  { Bucket, Key, Conditions = [], Fields = {}, Expires = 3600 }: PresignedPostOptions
): Promise<PresignedPost> => {
  const { systemClockOffset, base64Encoder, utf8Decoder, sha256 } = client.config;
  const now = new Date(Date.now() + systemClockOffset);

  // signingDate in format like '20201028T070711Z'.
  const signingDate = iso8601(now).replace(/[\-:]/g, "");
  const shortDate = signingDate.substr(0, 8);
  const clientRegion = await client.config.region();

  // Prepare credentials.
  const credentialScope = createScope(shortDate, clientRegion, "s3");
  const clientCredentials = await client.config.credentials();
  const credential = `${clientCredentials.accessKeyId}/${credentialScope}`;

  const fields: Fields = {
    ...Fields,
    bucket: Bucket,
    [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
    [CREDENTIAL_QUERY_PARAM]: credential,
    [AMZ_DATE_QUERY_PARAM]: signingDate,
    ...(clientCredentials.sessionToken ? { [TOKEN_QUERY_PARAM]: clientCredentials.sessionToken } : {}),
  };

  // Prepare policies.
  const expiration = new Date(now.valueOf() + Expires * 1000);
  const conditions: PolicyEntry[] = [
    ...Conditions,
    ...Object.entries(fields).map(([k, v]) => ({ [k]: v })),
    Key.endsWith("${filename}")
      ? ["starts-with", "$key", Key.substring(0, Key.lastIndexOf("${filename}"))]
      : { key: Key },
  ];
  const encodedPolicy = base64Encoder(
    utf8Decoder(
      JSON.stringify({
        expiration: iso8601(expiration),
        conditions,
      })
    )
  );

  // Sign the request.
  const signingKey = await getSigningKey(sha256, clientCredentials, shortDate, clientRegion, "s3");
  const signature = await hmac(sha256, signingKey, encodedPolicy);

  const endpoint = await client.config.endpoint();
  if (!client.config.bucketEndpoint) {
    endpoint.path = `/${Bucket}`;
  }

  return {
    url: formatUrl(endpoint),
    fields: {
      ...fields,
      key: Key,
      Policy: encodedPolicy,
      [SIGNATURE_QUERY_PARAM]: toHex(signature),
    },
  };
};

const iso8601 = (date: Date) => date.toISOString().replace(/\.\d{3}Z$/, "Z");

const hmac = (ctor: HashConstructor, secret: SourceData, data: SourceData): Promise<Uint8Array> => {
  const hash = new ctor(secret);
  hash.update(data);
  return hash.digest();
};
