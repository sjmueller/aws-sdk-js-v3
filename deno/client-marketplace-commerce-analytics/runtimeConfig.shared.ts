import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MarketplaceCommerceAnalyticsClientConfig } from "./MarketplaceCommerceAnalyticsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceCommerceAnalyticsClientConfig = {}) => ({
  apiVersion: "2015-07-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Marketplace Commerce Analytics",
  urlParser: config.urlParser ?? parseUrl,
});
