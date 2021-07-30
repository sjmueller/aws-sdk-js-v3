import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MachineLearningClientConfig } from "./MachineLearningClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MachineLearningClientConfig = {}) => ({
  apiVersion: "2014-12-12",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Machine Learning",
  urlParser: config.urlParser ?? parseUrl,
});
