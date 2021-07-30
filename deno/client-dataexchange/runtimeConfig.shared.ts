import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DataExchangeClientConfig } from "./DataExchangeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DataExchangeClientConfig = {}) => ({
  apiVersion: "2017-07-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "DataExchange",
  urlParser: config.urlParser ?? parseUrl,
});
