import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SageMakerA2IRuntimeClientConfig } from "./SageMakerA2IRuntimeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerA2IRuntimeClientConfig = {}) => ({
  apiVersion: "2019-11-07",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SageMaker A2I Runtime",
  urlParser: config.urlParser ?? parseUrl,
});
