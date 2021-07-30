import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SavingsplansClientConfig } from "./SavingsplansClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SavingsplansClientConfig = {}) => ({
  apiVersion: "2019-06-28",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "savingsplans",
  urlParser: config.urlParser ?? parseUrl,
});
