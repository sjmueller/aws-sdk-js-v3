import { DocDB } from "../DocDB.ts";
import { DocDBClient } from "../DocDBClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DocDBPaginationConfiguration extends PaginationConfiguration {
  client: DocDB | DocDBClient;
}
