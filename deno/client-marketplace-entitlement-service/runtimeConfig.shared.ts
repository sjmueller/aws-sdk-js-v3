import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MarketplaceEntitlementServiceClientConfig } from "./MarketplaceEntitlementServiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceEntitlementServiceClientConfig = {}) => ({
  apiVersion: "2017-01-11",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Marketplace Entitlement Service",
  urlParser: config.urlParser ?? parseUrl,
});
