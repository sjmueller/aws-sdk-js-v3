
const name = "@aws-sdk/client-transcribe-streaming";
const version = "1.0.0-rc.7";

import { Hash } from "https://jspm.dev/@aws-sdk/hash-node";
import { eventStreamSerdeProvider } from "../eventstream-serde-browser/mod.ts";
import { streamCollector } from "../fetch-http-handler/mod.ts";
import { invalidFunction } from "../invalid-dependency/mod.ts";
import { DEFAULT_MAX_ATTEMPTS } from "../middleware-retry/mod.ts";
import { WebSocketHandler, eventStreamPayloadHandler } from "../middleware-sdk-transcribe-streaming/mod.ts";
import { parseUrl } from "../url-parser-browser/mod.ts";
import { fromBase64, toBase64 } from "../util-base64-browser/mod.ts";
import { calculateBodyLength } from "../util-body-length-browser/mod.ts";
import { fromUtf8, toUtf8 } from "../util-utf8-browser/mod.ts";
import { ClientDefaults } from "./TranscribeStreamingClient.ts";
import { ClientSharedValues } from "./runtimeConfig.shared.ts";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...ClientSharedValues,
  runtime: "browser",
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  bodyLengthChecker: calculateBodyLength,
  credentialDefaultProvider: invalidFunction("Credential is missing") as any,
  defaultUserAgent: `aws-sdk-js-v3-deno-${name}/${version}`,
  eventStreamPayloadHandlerProvider: () => eventStreamPayloadHandler,
  eventStreamSerdeProvider,
  maxAttempts: DEFAULT_MAX_ATTEMPTS,
  region: invalidFunction("Region is missing") as any,
  requestHandler: new WebSocketHandler(),
  sha256: Hash.bind(null, "sha256"),
  streamCollector,
  urlParser: parseUrl,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
};
