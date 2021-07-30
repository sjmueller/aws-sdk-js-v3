import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { RoboMakerClientConfig } from "./RoboMakerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RoboMakerClientConfig = {}) => ({
  apiVersion: "2018-06-29",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "RoboMaker",
  urlParser: config.urlParser ?? parseUrl,
});
