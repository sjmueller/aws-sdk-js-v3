import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { RDSDataClientConfig } from "./RDSDataClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RDSDataClientConfig = {}) => ({
  apiVersion: "2018-08-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "RDS Data",
  urlParser: config.urlParser ?? parseUrl,
});
