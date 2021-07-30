import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KendraClientConfig } from "./KendraClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KendraClientConfig = {}) => ({
  apiVersion: "2019-02-03",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "kendra",
  urlParser: config.urlParser ?? parseUrl,
});
