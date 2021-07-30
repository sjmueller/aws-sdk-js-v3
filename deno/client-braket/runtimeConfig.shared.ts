import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { BraketClientConfig } from "./BraketClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BraketClientConfig = {}) => ({
  apiVersion: "2019-09-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Braket",
  urlParser: config.urlParser ?? parseUrl,
});
