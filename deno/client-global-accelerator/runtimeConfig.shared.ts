import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { GlobalAcceleratorClientConfig } from "./GlobalAcceleratorClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GlobalAcceleratorClientConfig = {}) => ({
  apiVersion: "2018-08-08",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Global Accelerator",
  urlParser: config.urlParser ?? parseUrl,
});
