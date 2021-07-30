import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { QuickSightClientConfig } from "./QuickSightClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QuickSightClientConfig = {}) => ({
  apiVersion: "2018-04-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "QuickSight",
  urlParser: config.urlParser ?? parseUrl,
});
