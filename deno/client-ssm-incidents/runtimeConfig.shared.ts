import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SSMIncidentsClientConfig } from "./SSMIncidentsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMIncidentsClientConfig = {}) => ({
  apiVersion: "2018-05-10",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SSM Incidents",
  urlParser: config.urlParser ?? parseUrl,
});
