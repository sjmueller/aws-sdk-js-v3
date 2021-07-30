import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MediaPackageClientConfig } from "./MediaPackageClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaPackageClientConfig = {}) => ({
  apiVersion: "2017-10-12",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MediaPackage",
  urlParser: config.urlParser ?? parseUrl,
});
