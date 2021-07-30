import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SignerClientConfig } from "./SignerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SignerClientConfig = {}) => ({
  apiVersion: "2017-08-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "signer",
  urlParser: config.urlParser ?? parseUrl,
});
