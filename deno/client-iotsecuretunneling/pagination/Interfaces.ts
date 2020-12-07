import { IoTSecureTunneling } from "../IoTSecureTunneling.ts";
import { IoTSecureTunnelingClient } from "../IoTSecureTunnelingClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IoTSecureTunnelingPaginationConfiguration extends PaginationConfiguration {
  client: IoTSecureTunneling | IoTSecureTunnelingClient;
}
