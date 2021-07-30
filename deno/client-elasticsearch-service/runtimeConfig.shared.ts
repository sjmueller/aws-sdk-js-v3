import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ElasticsearchServiceClientConfig } from "./ElasticsearchServiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticsearchServiceClientConfig = {}) => ({
  apiVersion: "2015-01-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Elasticsearch Service",
  urlParser: config.urlParser ?? parseUrl,
});
