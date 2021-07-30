import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { HoneycodeClientConfig } from "./HoneycodeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: HoneycodeClientConfig = {}) => ({
  apiVersion: "2020-03-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Honeycode",
  urlParser: config.urlParser ?? parseUrl,
});
