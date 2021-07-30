import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { LookoutVisionClientConfig } from "./LookoutVisionClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LookoutVisionClientConfig = {}) => ({
  apiVersion: "2020-11-20",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "LookoutVision",
  urlParser: config.urlParser ?? parseUrl,
});
