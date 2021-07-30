import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DLMClientConfig } from "./DLMClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DLMClientConfig = {}) => ({
  apiVersion: "2018-01-12",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "DLM",
  urlParser: config.urlParser ?? parseUrl,
});
