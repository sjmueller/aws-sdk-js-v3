
import { Batch } from "../Batch.ts";
import { BatchClient } from "../BatchClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface BatchPaginationConfiguration extends PaginationConfiguration {
  client: Batch | BatchClient;
}
