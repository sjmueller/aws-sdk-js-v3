import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { TransferClientConfig } from "./TransferClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TransferClientConfig = {}) => ({
  apiVersion: "2018-11-05",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Transfer",
  urlParser: config.urlParser ?? parseUrl,
});
