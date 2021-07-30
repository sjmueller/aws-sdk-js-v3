import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { XRayClientConfig } from "./XRayClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: XRayClientConfig = {}) => ({
  apiVersion: "2016-04-12",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "XRay",
  urlParser: config.urlParser ?? parseUrl,
});
