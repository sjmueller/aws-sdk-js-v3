import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MarketplaceCatalogClientConfig } from "./MarketplaceCatalogClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceCatalogClientConfig = {}) => ({
  apiVersion: "2018-09-17",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Marketplace Catalog",
  urlParser: config.urlParser ?? parseUrl,
});
