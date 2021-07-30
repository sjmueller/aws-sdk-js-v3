import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { Macie2ClientConfig } from "./Macie2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Macie2ClientConfig = {}) => ({
  apiVersion: "2020-01-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Macie2",
  urlParser: config.urlParser ?? parseUrl,
});
