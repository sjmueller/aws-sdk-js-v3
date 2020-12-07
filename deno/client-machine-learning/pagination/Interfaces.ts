import { MachineLearning } from "../MachineLearning.ts";
import { MachineLearningClient } from "../MachineLearningClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MachineLearningPaginationConfiguration extends PaginationConfiguration {
  client: MachineLearning | MachineLearningClient;
}
