import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SSOClientConfig } from "./SSOClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSOClientConfig = {}) => ({
  apiVersion: "2019-06-10",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SSO",
  urlParser: config.urlParser ?? parseUrl,
});
