import { EMRContainers } from "../EMRContainers.ts";
import { EMRContainersClient } from "../EMRContainersClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface EMRContainersPaginationConfiguration extends PaginationConfiguration {
  client: EMRContainers | EMRContainersClient;
}
