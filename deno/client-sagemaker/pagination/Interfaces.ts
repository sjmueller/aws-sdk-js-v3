import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SageMakerPaginationConfiguration extends PaginationConfiguration {
  client: SageMaker | SageMakerClient;
}
