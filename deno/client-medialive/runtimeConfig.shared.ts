import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MediaLiveClientConfig } from "./MediaLiveClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaLiveClientConfig = {}) => ({
  apiVersion: "2017-10-14",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MediaLive",
  urlParser: config.urlParser ?? parseUrl,
});
