import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KafkaClientConfig } from "./KafkaClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KafkaClientConfig = {}) => ({
  apiVersion: "2018-11-14",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Kafka",
  urlParser: config.urlParser ?? parseUrl,
});
