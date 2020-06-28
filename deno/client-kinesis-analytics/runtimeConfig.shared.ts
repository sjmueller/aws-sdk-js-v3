import { defaultRegionInfoProvider } from "./endpoints.ts";

export const ClientSharedValues = {
  apiVersion: "2015-08-14",
  disableHostPrefix: false,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "kinesisanalytics"
};
