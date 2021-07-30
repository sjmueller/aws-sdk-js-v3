import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ServiceCatalogAppRegistryClientConfig } from "./ServiceCatalogAppRegistryClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceCatalogAppRegistryClientConfig = {}) => ({
  apiVersion: "2020-06-24",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Service Catalog AppRegistry",
  urlParser: config.urlParser ?? parseUrl,
});
