import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MqClientConfig } from "./MqClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MqClientConfig = {}) => ({
  apiVersion: "2017-11-27",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "mq",
  urlParser: config.urlParser ?? parseUrl,
});
