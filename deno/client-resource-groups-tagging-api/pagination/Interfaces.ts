
import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI.ts";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ResourceGroupsTaggingAPIPaginationConfiguration extends PaginationConfiguration {
  client: ResourceGroupsTaggingAPI | ResourceGroupsTaggingAPIClient;
}
