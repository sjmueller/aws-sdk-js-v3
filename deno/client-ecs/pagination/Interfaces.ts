import { ECS } from "../ECS.ts";
import { ECSClient } from "../ECSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ECSPaginationConfiguration extends PaginationConfiguration {
  client: ECS | ECSClient;
}
