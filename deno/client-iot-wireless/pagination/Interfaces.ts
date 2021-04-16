import { IoTWireless } from "../IoTWireless.ts";
import { IoTWirelessClient } from "../IoTWirelessClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IoTWirelessPaginationConfiguration extends PaginationConfiguration {
  client: IoTWireless | IoTWirelessClient;
}
