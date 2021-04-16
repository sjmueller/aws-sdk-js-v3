import { IoTFleetHub } from "../IoTFleetHub.ts";
import { IoTFleetHubClient } from "../IoTFleetHubClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IoTFleetHubPaginationConfiguration extends PaginationConfiguration {
  client: IoTFleetHub | IoTFleetHubClient;
}
