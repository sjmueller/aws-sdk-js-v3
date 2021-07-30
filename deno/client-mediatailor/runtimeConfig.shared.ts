import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MediaTailorClientConfig } from "./MediaTailorClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaTailorClientConfig = {}) => ({
  apiVersion: "2018-04-23",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MediaTailor",
  urlParser: config.urlParser ?? parseUrl,
});
