import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { LexRuntimeServiceClientConfig } from "./LexRuntimeServiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexRuntimeServiceClientConfig = {}) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Lex Runtime Service",
  urlParser: config.urlParser ?? parseUrl,
});
