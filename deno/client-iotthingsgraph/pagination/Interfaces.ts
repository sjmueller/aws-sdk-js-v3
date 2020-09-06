
import { IoTThingsGraph } from "../IoTThingsGraph.ts";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IoTThingsGraphPaginationConfiguration extends PaginationConfiguration {
  client: IoTThingsGraph | IoTThingsGraphClient;
}
