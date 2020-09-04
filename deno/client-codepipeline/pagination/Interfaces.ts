import { CodePipeline } from "../CodePipeline.ts";
import { CodePipelineClient } from "../CodePipelineClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CodePipelinePaginationConfiguration extends PaginationConfiguration {
  client: CodePipeline | CodePipelineClient;
}
