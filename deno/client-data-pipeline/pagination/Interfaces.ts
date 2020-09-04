import { DataPipeline } from "../DataPipeline.ts";
import { DataPipelineClient } from "../DataPipelineClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DataPipelinePaginationConfiguration extends PaginationConfiguration {
  client: DataPipeline | DataPipelineClient;
}
