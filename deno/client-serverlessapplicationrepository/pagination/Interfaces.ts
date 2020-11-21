
import { ServerlessApplicationRepository } from "../ServerlessApplicationRepository.ts";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ServerlessApplicationRepositoryPaginationConfiguration extends PaginationConfiguration {
  client: ServerlessApplicationRepository | ServerlessApplicationRepositoryClient;
}
