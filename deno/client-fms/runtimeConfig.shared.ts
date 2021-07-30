import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { FMSClientConfig } from "./FMSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FMSClientConfig = {}) => ({
  apiVersion: "2018-01-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "FMS",
  urlParser: config.urlParser ?? parseUrl,
});
