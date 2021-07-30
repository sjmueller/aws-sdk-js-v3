import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudFormationClientConfig } from "./CloudFormationClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudFormationClientConfig = {}) => ({
  apiVersion: "2010-05-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudFormation",
  urlParser: config.urlParser ?? parseUrl,
});
