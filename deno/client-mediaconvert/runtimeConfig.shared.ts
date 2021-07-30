import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MediaConvertClientConfig } from "./MediaConvertClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaConvertClientConfig = {}) => ({
  apiVersion: "2017-08-29",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MediaConvert",
  urlParser: config.urlParser ?? parseUrl,
});
