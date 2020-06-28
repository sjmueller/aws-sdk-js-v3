import { defaultRegionInfoProvider } from "./endpoints.ts";

export const ClientSharedValues = {
  apiVersion: "2013-02-18",
  disableHostPrefix: false,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "opsworks"
};
