import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { WorkSpacesClientConfig } from "./WorkSpacesClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkSpacesClientConfig = {}) => ({
  apiVersion: "2015-04-08",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "WorkSpaces",
  urlParser: config.urlParser ?? parseUrl,
});
