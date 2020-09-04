import { DeviceFarm } from "../DeviceFarm.ts";
import { DeviceFarmClient } from "../DeviceFarmClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DeviceFarmPaginationConfiguration extends PaginationConfiguration {
  client: DeviceFarm | DeviceFarmClient;
}
