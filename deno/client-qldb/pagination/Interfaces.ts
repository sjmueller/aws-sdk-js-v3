
import { QLDB } from "../QLDB.ts";
import { QLDBClient } from "../QLDBClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface QLDBPaginationConfiguration extends PaginationConfiguration {
  client: QLDB | QLDBClient;
}
