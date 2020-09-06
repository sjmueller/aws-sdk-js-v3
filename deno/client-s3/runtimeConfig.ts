
const name = "@aws-sdk/client-s3";
const version = "1.0.0-gamma.8";
import { Hash } from "https://jspm.dev/@aws-sdk/hash-node";
import { eventStreamSerdeProvider } from "../eventstream-serde-browser/mod.ts";
import { FetchHttpHandler, streamCollector } from "../fetch-http-handler/mod.ts";
import { blobHasher as streamHasher } from "../hash-blob-browser/mod.ts";
import { invalidFunction } from "../invalid-dependency/mod.ts";
import { Md5 } from "../md5-js/mod.ts";
import { DEFAULT_MAX_ATTEMPTS } from "../middleware-retry/mod.ts";
import { parseUrl } from "../url-parser-browser/mod.ts";
import { fromBase64, toBase64 } from "../util-base64-browser/mod.ts";
import { calculateBodyLength } from "../util-body-length-browser/mod.ts";
import { defaultUserAgent } from "../util-user-agent-browser/mod.ts";
import { fromUtf8, toUtf8 } from "../util-utf8-browser/mod.ts";
import { ClientDefaults } from "./S3Client.ts";
import { ClientSharedValues } from "./runtimeConfig.shared.ts";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...ClientSharedValues,
  runtime: "browser",
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  bodyLengthChecker: calculateBodyLength,
  credentialDefaultProvider: invalidFunction("Credential is missing") as any,
  defaultUserAgent: defaultUserAgent(name, version),
  eventStreamSerdeProvider,
  maxAttempts: DEFAULT_MAX_ATTEMPTS,
  md5: Md5,
  region: invalidFunction("Region is missing") as any,
  requestHandler: new FetchHttpHandler(),
  sha256: Sha256,
  streamCollector,
  streamHasher,
  urlParser: parseUrl,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
};
