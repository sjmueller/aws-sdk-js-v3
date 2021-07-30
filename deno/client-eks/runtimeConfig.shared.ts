import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { EKSClientConfig } from "./EKSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EKSClientConfig = {}) => ({
  apiVersion: "2017-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "EKS",
  urlParser: config.urlParser ?? parseUrl,
});
