import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CostExplorerClientConfig } from "./CostExplorerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CostExplorerClientConfig = {}) => ({
  apiVersion: "2017-10-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Cost Explorer",
  urlParser: config.urlParser ?? parseUrl,
});
