import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ServiceCatalogClientConfig } from "./ServiceCatalogClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceCatalogClientConfig = {}) => ({
  apiVersion: "2015-12-10",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Service Catalog",
  urlParser: config.urlParser ?? parseUrl,
});
