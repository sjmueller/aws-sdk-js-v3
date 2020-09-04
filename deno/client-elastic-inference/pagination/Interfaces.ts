import { ElasticInference } from "../ElasticInference.ts";
import { ElasticInferenceClient } from "../ElasticInferenceClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ElasticInferencePaginationConfiguration extends PaginationConfiguration {
  client: ElasticInference | ElasticInferenceClient;
}
