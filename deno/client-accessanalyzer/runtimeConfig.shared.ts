import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AccessAnalyzerClientConfig } from "./AccessAnalyzerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AccessAnalyzerClientConfig = {}) => ({
  apiVersion: "2019-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "AccessAnalyzer",
  urlParser: config.urlParser ?? parseUrl,
});
