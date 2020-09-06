
import { ResourceGroups } from "../ResourceGroups.ts";
import { ResourceGroupsClient } from "../ResourceGroupsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ResourceGroupsPaginationConfiguration extends PaginationConfiguration {
  client: ResourceGroups | ResourceGroupsClient;
}
