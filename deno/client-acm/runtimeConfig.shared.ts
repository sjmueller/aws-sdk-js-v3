import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ACMClientConfig } from "./ACMClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ACMClientConfig = {}) => ({
  apiVersion: "2015-12-08",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ACM",
  urlParser: config.urlParser ?? parseUrl,
});
