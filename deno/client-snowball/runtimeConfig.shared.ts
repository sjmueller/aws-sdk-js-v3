import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SnowballClientConfig } from "./SnowballClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SnowballClientConfig = {}) => ({
  apiVersion: "2016-06-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Snowball",
  urlParser: config.urlParser ?? parseUrl,
});
