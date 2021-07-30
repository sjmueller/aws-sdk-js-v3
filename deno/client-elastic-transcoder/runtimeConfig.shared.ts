import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ElasticTranscoderClientConfig } from "./ElasticTranscoderClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticTranscoderClientConfig = {}) => ({
  apiVersion: "2012-09-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Elastic Transcoder",
  urlParser: config.urlParser ?? parseUrl,
});
