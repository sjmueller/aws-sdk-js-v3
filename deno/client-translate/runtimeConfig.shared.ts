import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { TranslateClientConfig } from "./TranslateClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TranslateClientConfig = {}) => ({
  apiVersion: "2017-07-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Translate",
  urlParser: config.urlParser ?? parseUrl,
});
