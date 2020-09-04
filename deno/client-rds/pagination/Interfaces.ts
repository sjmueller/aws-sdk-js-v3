import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface RDSPaginationConfiguration extends PaginationConfiguration {
  client: RDS | RDSClient;
}
