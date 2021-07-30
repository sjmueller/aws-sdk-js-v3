import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ElastiCacheClientConfig } from "./ElastiCacheClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElastiCacheClientConfig = {}) => ({
  apiVersion: "2015-02-02",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ElastiCache",
  urlParser: config.urlParser ?? parseUrl,
});
