import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { LexModelsV2ClientConfig } from "./LexModelsV2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexModelsV2ClientConfig = {}) => ({
  apiVersion: "2020-08-07",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Lex Models V2",
  urlParser: config.urlParser ?? parseUrl,
});
