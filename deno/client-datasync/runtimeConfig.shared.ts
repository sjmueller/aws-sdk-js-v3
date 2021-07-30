import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DataSyncClientConfig } from "./DataSyncClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DataSyncClientConfig = {}) => ({
  apiVersion: "2018-11-09",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "DataSync",
  urlParser: config.urlParser ?? parseUrl,
});
