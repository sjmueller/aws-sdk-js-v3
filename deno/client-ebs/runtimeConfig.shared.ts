import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { EBSClientConfig } from "./EBSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EBSClientConfig = {}) => ({
  apiVersion: "2019-11-02",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "EBS",
  urlParser: config.urlParser ?? parseUrl,
});
