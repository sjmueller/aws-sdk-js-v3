import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { EC2InstanceConnectClientConfig } from "./EC2InstanceConnectClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EC2InstanceConnectClientConfig = {}) => ({
  apiVersion: "2018-04-02",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "EC2 Instance Connect",
  urlParser: config.urlParser ?? parseUrl,
});
