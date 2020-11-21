
import { TimestreamQuery } from "../TimestreamQuery.ts";
import { TimestreamQueryClient } from "../TimestreamQueryClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface TimestreamQueryPaginationConfiguration extends PaginationConfiguration {
  client: TimestreamQuery | TimestreamQueryClient;
}
