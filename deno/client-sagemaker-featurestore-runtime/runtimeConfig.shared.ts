import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SageMakerFeatureStoreRuntimeClientConfig } from "./SageMakerFeatureStoreRuntimeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerFeatureStoreRuntimeClientConfig = {}) => ({
  apiVersion: "2020-07-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SageMaker FeatureStore Runtime",
  urlParser: config.urlParser ?? parseUrl,
});
