import { LookoutEquipment } from "../LookoutEquipment.ts";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface LookoutEquipmentPaginationConfiguration extends PaginationConfiguration {
  client: LookoutEquipment | LookoutEquipmentClient;
}
