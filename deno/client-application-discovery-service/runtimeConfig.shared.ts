import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ApplicationDiscoveryServiceClientConfig } from "./ApplicationDiscoveryServiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationDiscoveryServiceClientConfig = {}) => ({
  apiVersion: "2015-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Application Discovery Service",
  urlParser: config.urlParser ?? parseUrl,
});
