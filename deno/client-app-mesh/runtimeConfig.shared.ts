import { defaultRegionInfoProvider } from "./endpoints.ts";

export const ClientSharedValues = {
  apiVersion: "2019-01-25",
  disableHostPrefix: false,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "appmesh"
};
