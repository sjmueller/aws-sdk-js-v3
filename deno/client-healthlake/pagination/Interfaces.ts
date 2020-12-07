import { HealthLake } from "../HealthLake.ts";
import { HealthLakeClient } from "../HealthLakeClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface HealthLakePaginationConfiguration extends PaginationConfiguration {
  client: HealthLake | HealthLakeClient;
}
