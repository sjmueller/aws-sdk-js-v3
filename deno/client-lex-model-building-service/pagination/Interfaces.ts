import { LexModelBuildingService } from "../LexModelBuildingService.ts";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface LexModelBuildingServicePaginationConfiguration extends PaginationConfiguration {
  client: LexModelBuildingService | LexModelBuildingServiceClient;
}
