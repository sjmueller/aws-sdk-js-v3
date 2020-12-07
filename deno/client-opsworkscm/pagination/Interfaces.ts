import { OpsWorksCM } from "../OpsWorksCM.ts";
import { OpsWorksCMClient } from "../OpsWorksCMClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface OpsWorksCMPaginationConfiguration extends PaginationConfiguration {
  client: OpsWorksCM | OpsWorksCMClient;
}
