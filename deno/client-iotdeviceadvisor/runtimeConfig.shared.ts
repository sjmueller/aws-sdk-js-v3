import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IotDeviceAdvisorClientConfig } from "./IotDeviceAdvisorClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IotDeviceAdvisorClientConfig = {}) => ({
  apiVersion: "2020-09-18",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "IotDeviceAdvisor",
  urlParser: config.urlParser ?? parseUrl,
});
