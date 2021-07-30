import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { EFSClientConfig } from "./EFSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EFSClientConfig = {}) => ({
  apiVersion: "2015-02-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "EFS",
  urlParser: config.urlParser ?? parseUrl,
});
