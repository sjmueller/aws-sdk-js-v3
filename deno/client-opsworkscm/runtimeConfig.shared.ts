import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { OpsWorksCMClientConfig } from "./OpsWorksCMClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OpsWorksCMClientConfig = {}) => ({
  apiVersion: "2016-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "OpsWorksCM",
  urlParser: config.urlParser ?? parseUrl,
});
