import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { TimestreamWriteClientConfig } from "./TimestreamWriteClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TimestreamWriteClientConfig = {}) => ({
  apiVersion: "2018-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Timestream Write",
  urlParser: config.urlParser ?? parseUrl,
});
