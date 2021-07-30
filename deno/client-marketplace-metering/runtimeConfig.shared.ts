import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MarketplaceMeteringClientConfig } from "./MarketplaceMeteringClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceMeteringClientConfig = {}) => ({
  apiVersion: "2016-01-14",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Marketplace Metering",
  urlParser: config.urlParser ?? parseUrl,
});
