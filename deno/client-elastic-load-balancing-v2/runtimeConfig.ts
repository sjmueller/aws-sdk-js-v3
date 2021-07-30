import process from "https://deno.land/std@0.101.0/node/process.ts";
const packageInfo = { version: "3.24.0" };

import { decorateDefaultCredentialProvider } from "../client-sts/mod.ts";
import { NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS } from "../config-resolver/mod.ts";
import { defaultProvider as credentialDefaultProvider } from "../credential-provider-node/mod.ts";
import { Hash } from "https://jspm.dev/@aws-sdk/hash-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "../middleware-retry/mod.ts";
import { loadConfig as loadNodeConfig } from "../node-config-provider/mod.ts";
import { FetchHttpHandler, streamCollector } from "../fetch-http-handler/mod.ts";
import { fromBase64, toBase64 } from "../util-base64-node/mod.ts";
import { calculateBodyLength } from "../util-body-length-node/mod.ts";
import { defaultUserAgent } from "../util-user-agent-node/mod.ts";
import { fromUtf8, toUtf8 } from "../util-utf8-node/mod.ts";
import { ElasticLoadBalancingV2ClientConfig } from "./ElasticLoadBalancingV2Client.ts";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared.ts";
import { emitWarningIfUnsupportedVersion } from "../smithy-client/mod.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticLoadBalancingV2ClientConfig = {}) => {
  emitWarningIfUnsupportedVersion(process.version);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "deno",
    base64Decoder: config.base64Decoder ?? fromBase64,
    base64Encoder: config.base64Encoder ?? toBase64,
    bodyLengthChecker: config.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider:
      config.credentialDefaultProvider ?? decorateDefaultCredentialProvider(credentialDefaultProvider),
    defaultUserAgentProvider:
      config.defaultUserAgentProvider ??
      defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
    maxAttempts: config.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config.region ?? loadNodeConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config.requestHandler ?? new FetchHttpHandler(),
    retryModeProvider: config.retryModeProvider ?? loadNodeConfig(NODE_RETRY_MODE_CONFIG_OPTIONS),
    sha256: config.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config.streamCollector ?? streamCollector,
    utf8Decoder: config.utf8Decoder ?? fromUtf8,
    utf8Encoder: config.utf8Encoder ?? toUtf8,
  };
};
