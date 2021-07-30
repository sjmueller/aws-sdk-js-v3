import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ServiceDiscoveryClientConfig } from "./ServiceDiscoveryClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceDiscoveryClientConfig = {}) => ({
  apiVersion: "2017-03-14",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ServiceDiscovery",
  urlParser: config.urlParser ?? parseUrl,
});
