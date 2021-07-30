import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DataPipelineClientConfig } from "./DataPipelineClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DataPipelineClientConfig = {}) => ({
  apiVersion: "2012-10-29",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Data Pipeline",
  urlParser: config.urlParser ?? parseUrl,
});
