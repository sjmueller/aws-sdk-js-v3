import { ElasticsearchService } from "../ElasticsearchService.ts";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ElasticsearchServicePaginationConfiguration extends PaginationConfiguration {
  client: ElasticsearchService | ElasticsearchServiceClient;
}
