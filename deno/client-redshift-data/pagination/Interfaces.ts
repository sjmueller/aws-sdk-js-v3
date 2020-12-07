import { RedshiftData } from "../RedshiftData.ts";
import { RedshiftDataClient } from "../RedshiftDataClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface RedshiftDataPaginationConfiguration extends PaginationConfiguration {
  client: RedshiftData | RedshiftDataClient;
}
