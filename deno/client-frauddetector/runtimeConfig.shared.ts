import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { FraudDetectorClientConfig } from "./FraudDetectorClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FraudDetectorClientConfig = {}) => ({
  apiVersion: "2019-11-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "FraudDetector",
  urlParser: config.urlParser ?? parseUrl,
});
