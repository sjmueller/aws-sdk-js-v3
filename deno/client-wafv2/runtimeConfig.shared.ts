import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { WAFV2ClientConfig } from "./WAFV2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WAFV2ClientConfig = {}) => ({
  apiVersion: "2019-07-29",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "WAFV2",
  urlParser: config.urlParser ?? parseUrl,
});
