import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { RAMClientConfig } from "./RAMClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RAMClientConfig = {}) => ({
  apiVersion: "2018-01-04",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "RAM",
  urlParser: config.urlParser ?? parseUrl,
});
