import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MediaStoreClientConfig } from "./MediaStoreClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaStoreClientConfig = {}) => ({
  apiVersion: "2017-09-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MediaStore",
  urlParser: config.urlParser ?? parseUrl,
});
