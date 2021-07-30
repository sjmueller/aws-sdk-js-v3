import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { OrganizationsClientConfig } from "./OrganizationsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OrganizationsClientConfig = {}) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Organizations",
  urlParser: config.urlParser ?? parseUrl,
});
