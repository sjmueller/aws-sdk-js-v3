
import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IoTSiteWisePaginationConfiguration extends PaginationConfiguration {
  client: IoTSiteWise | IoTSiteWiseClient;
}
