import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AppMeshClientConfig } from "./AppMeshClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppMeshClientConfig = {}) => ({
  apiVersion: "2019-01-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "App Mesh",
  urlParser: config.urlParser ?? parseUrl,
});
