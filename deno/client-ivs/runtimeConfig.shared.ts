import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IvsClientConfig } from "./IvsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IvsClientConfig = {}) => ({
  apiVersion: "2020-07-14",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ivs",
  urlParser: config.urlParser ?? parseUrl,
});
