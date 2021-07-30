import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { LightsailClientConfig } from "./LightsailClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LightsailClientConfig = {}) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Lightsail",
  urlParser: config.urlParser ?? parseUrl,
});
