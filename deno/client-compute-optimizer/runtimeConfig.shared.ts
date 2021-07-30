import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ComputeOptimizerClientConfig } from "./ComputeOptimizerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ComputeOptimizerClientConfig = {}) => ({
  apiVersion: "2019-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Compute Optimizer",
  urlParser: config.urlParser ?? parseUrl,
});
