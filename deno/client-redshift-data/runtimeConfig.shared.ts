import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { RedshiftDataClientConfig } from "./RedshiftDataClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RedshiftDataClientConfig = {}) => ({
  apiVersion: "2019-12-20",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Redshift Data",
  urlParser: config.urlParser ?? parseUrl,
});
