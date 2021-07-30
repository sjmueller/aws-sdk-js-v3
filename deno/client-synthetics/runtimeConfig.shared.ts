import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SyntheticsClientConfig } from "./SyntheticsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SyntheticsClientConfig = {}) => ({
  apiVersion: "2017-10-11",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "synthetics",
  urlParser: config.urlParser ?? parseUrl,
});
