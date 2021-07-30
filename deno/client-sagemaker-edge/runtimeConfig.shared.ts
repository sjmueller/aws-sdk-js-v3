import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SagemakerEdgeClientConfig } from "./SagemakerEdgeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SagemakerEdgeClientConfig = {}) => ({
  apiVersion: "2020-09-23",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Sagemaker Edge",
  urlParser: config.urlParser ?? parseUrl,
});
