import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { RekognitionClientConfig } from "./RekognitionClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RekognitionClientConfig = {}) => ({
  apiVersion: "2016-06-27",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Rekognition",
  urlParser: config.urlParser ?? parseUrl,
});
