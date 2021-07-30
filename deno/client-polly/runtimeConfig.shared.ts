import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { PollyClientConfig } from "./PollyClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PollyClientConfig = {}) => ({
  apiVersion: "2016-06-10",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Polly",
  urlParser: config.urlParser ?? parseUrl,
});
