import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { TextractClientConfig } from "./TextractClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TextractClientConfig = {}) => ({
  apiVersion: "2018-06-27",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Textract",
  urlParser: config.urlParser ?? parseUrl,
});
