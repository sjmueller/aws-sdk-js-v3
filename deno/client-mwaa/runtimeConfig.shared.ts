import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MWAAClientConfig } from "./MWAAClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MWAAClientConfig = {}) => ({
  apiVersion: "2020-07-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MWAA",
  urlParser: config.urlParser ?? parseUrl,
});
