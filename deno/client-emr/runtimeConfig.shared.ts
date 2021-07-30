import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { EMRClientConfig } from "./EMRClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EMRClientConfig = {}) => ({
  apiVersion: "2009-03-31",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "EMR",
  urlParser: config.urlParser ?? parseUrl,
});
