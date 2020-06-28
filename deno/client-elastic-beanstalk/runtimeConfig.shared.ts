import { defaultRegionInfoProvider } from "./endpoints.ts";

export const ClientSharedValues = {
  apiVersion: "2010-12-01",
  disableHostPrefix: false,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "elasticbeanstalk"
};
