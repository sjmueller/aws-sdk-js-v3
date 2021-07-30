import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { NimbleClientConfig } from "./NimbleClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NimbleClientConfig = {}) => ({
  apiVersion: "2020-08-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "nimble",
  urlParser: config.urlParser ?? parseUrl,
});
