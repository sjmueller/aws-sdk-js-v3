import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IAMClientConfig } from "./IAMClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IAMClientConfig = {}) => ({
  apiVersion: "2010-05-08",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "IAM",
  urlParser: config.urlParser ?? parseUrl,
});
