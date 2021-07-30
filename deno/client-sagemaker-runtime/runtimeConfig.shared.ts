import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SageMakerRuntimeClientConfig } from "./SageMakerRuntimeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerRuntimeClientConfig = {}) => ({
  apiVersion: "2017-05-13",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SageMaker Runtime",
  urlParser: config.urlParser ?? parseUrl,
});
