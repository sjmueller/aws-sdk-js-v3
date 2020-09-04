import { EMR } from "../EMR.ts";
import { EMRClient } from "../EMRClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface EMRPaginationConfiguration extends PaginationConfiguration {
  client: EMR | EMRClient;
}
