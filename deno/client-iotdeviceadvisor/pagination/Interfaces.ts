import { IotDeviceAdvisor } from "../IotDeviceAdvisor.ts";
import { IotDeviceAdvisorClient } from "../IotDeviceAdvisorClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IotDeviceAdvisorPaginationConfiguration extends PaginationConfiguration {
  client: IotDeviceAdvisor | IotDeviceAdvisorClient;
}
