
import { SageMakerA2IRuntime } from "../SageMakerA2IRuntime.ts";
import { SageMakerA2IRuntimeClient } from "../SageMakerA2IRuntimeClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SageMakerA2IRuntimePaginationConfiguration extends PaginationConfiguration {
  client: SageMakerA2IRuntime | SageMakerA2IRuntimeClient;
}
