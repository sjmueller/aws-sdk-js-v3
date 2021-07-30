import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { WAFClientConfig } from "./WAFClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WAFClientConfig = {}) => ({
  apiVersion: "2015-08-24",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "WAF",
  urlParser: config.urlParser ?? parseUrl,
});
