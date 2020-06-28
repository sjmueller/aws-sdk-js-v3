const name = "@aws-sdk/client-opsworks";
const version = "1.0.0-gamma.2";
import { Sha256 } from "https://deno.land/std@0.59.0/hash/sha256.ts";
import { FetchHttpHandler, streamCollector } from "../fetch-http-handler/mod.ts";
import { invalidFunction } from "../invalid-dependency/mod.ts";
import { parseUrl } from "../url-parser-browser/mod.ts";
import { fromBase64, toBase64 } from "../util-base64-browser/mod.ts";
import { calculateBodyLength } from "../util-body-length-browser/mod.ts";
import { defaultUserAgent } from "../util-user-agent-browser/mod.ts";
import { fromUtf8, toUtf8 } from "../util-utf8-browser/mod.ts";
import { ClientDefaults } from "./OpsWorksClient.ts";
import { ClientSharedValues } from "./runtimeConfig.shared.ts";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...ClientSharedValues,
  runtime: "browser",
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  bodyLengthChecker: calculateBodyLength,
  credentialDefaultProvider: invalidFunction("Credential is missing") as any,
  defaultUserAgent: defaultUserAgent(name, version),
  maxAttemptsDefaultProvider: (() => "3") as any,
  regionDefaultProvider: invalidFunction("Region is missing") as any,
  requestHandler: new FetchHttpHandler(),
  sha256: Sha256,
  streamCollector,
  urlParser: parseUrl,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8
};
