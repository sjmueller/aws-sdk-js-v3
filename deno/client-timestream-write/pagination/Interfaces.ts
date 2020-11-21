
import { TimestreamWrite } from "../TimestreamWrite.ts";
import { TimestreamWriteClient } from "../TimestreamWriteClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface TimestreamWritePaginationConfiguration extends PaginationConfiguration {
  client: TimestreamWrite | TimestreamWriteClient;
}
