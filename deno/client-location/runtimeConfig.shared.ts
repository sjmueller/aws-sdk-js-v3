import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { LocationClientConfig } from "./LocationClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LocationClientConfig = {}) => ({
  apiVersion: "2020-11-19",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Location",
  urlParser: config.urlParser ?? parseUrl,
});
