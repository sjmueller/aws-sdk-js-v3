import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AppSyncClientConfig } from "./AppSyncClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppSyncClientConfig = {}) => ({
  apiVersion: "2017-07-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "AppSync",
  urlParser: config.urlParser ?? parseUrl,
});
