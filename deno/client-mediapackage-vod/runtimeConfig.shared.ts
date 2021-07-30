import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MediaPackageVodClientConfig } from "./MediaPackageVodClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaPackageVodClientConfig = {}) => ({
  apiVersion: "2018-11-07",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MediaPackage Vod",
  urlParser: config.urlParser ?? parseUrl,
});
