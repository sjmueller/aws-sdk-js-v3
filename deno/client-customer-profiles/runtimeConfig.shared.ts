import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CustomerProfilesClientConfig } from "./CustomerProfilesClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CustomerProfilesClientConfig = {}) => ({
  apiVersion: "2020-08-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Customer Profiles",
  urlParser: config.urlParser ?? parseUrl,
});
