import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { GroundStationClientConfig } from "./GroundStationClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GroundStationClientConfig = {}) => ({
  apiVersion: "2019-05-23",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "GroundStation",
  urlParser: config.urlParser ?? parseUrl,
});
