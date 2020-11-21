
import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IoTPaginationConfiguration extends PaginationConfiguration {
  client: IoT | IoTClient;
}
