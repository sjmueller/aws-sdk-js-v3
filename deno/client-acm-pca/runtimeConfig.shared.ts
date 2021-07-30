import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ACMPCAClientConfig } from "./ACMPCAClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ACMPCAClientConfig = {}) => ({
  apiVersion: "2017-08-22",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ACM PCA",
  urlParser: config.urlParser ?? parseUrl,
});
