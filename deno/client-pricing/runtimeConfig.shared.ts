import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { PricingClientConfig } from "./PricingClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PricingClientConfig = {}) => ({
  apiVersion: "2017-10-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Pricing",
  urlParser: config.urlParser ?? parseUrl,
});
