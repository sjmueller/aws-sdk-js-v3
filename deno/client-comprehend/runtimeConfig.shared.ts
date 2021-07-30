import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ComprehendClientConfig } from "./ComprehendClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ComprehendClientConfig = {}) => ({
  apiVersion: "2017-11-27",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Comprehend",
  urlParser: config.urlParser ?? parseUrl,
});
