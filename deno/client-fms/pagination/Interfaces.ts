
import { FMS } from "../FMS.ts";
import { FMSClient } from "../FMSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface FMSPaginationConfiguration extends PaginationConfiguration {
  client: FMS | FMSClient;
}
