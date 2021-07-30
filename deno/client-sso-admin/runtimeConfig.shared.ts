import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SSOAdminClientConfig } from "./SSOAdminClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSOAdminClientConfig = {}) => ({
  apiVersion: "2020-07-20",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SSO Admin",
  urlParser: config.urlParser ?? parseUrl,
});
