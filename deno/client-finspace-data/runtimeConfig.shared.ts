import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { FinspaceDataClientConfig } from "./FinspaceDataClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FinspaceDataClientConfig = {}) => ({
  apiVersion: "2020-07-13",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "finspace data",
  urlParser: config.urlParser ?? parseUrl,
});
