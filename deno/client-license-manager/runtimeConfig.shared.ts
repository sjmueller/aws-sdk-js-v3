import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { LicenseManagerClientConfig } from "./LicenseManagerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LicenseManagerClientConfig = {}) => ({
  apiVersion: "2018-08-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "License Manager",
  urlParser: config.urlParser ?? parseUrl,
});
