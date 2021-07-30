import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ECRPUBLICClientConfig } from "./ECRPUBLICClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECRPUBLICClientConfig = {}) => ({
  apiVersion: "2020-10-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ECR PUBLIC",
  urlParser: config.urlParser ?? parseUrl,
});
