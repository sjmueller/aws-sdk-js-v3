import { defaultRegionInfoProvider } from "./endpoints.ts";

export const ClientSharedValues = {
  apiVersion: "2013-11-01",
  disableHostPrefix: false,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "cloudtrail"
};
