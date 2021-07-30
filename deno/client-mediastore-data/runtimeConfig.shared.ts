import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MediaStoreDataClientConfig } from "./MediaStoreDataClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaStoreDataClientConfig = {}) => ({
  apiVersion: "2017-09-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MediaStore Data",
  urlParser: config.urlParser ?? parseUrl,
});
