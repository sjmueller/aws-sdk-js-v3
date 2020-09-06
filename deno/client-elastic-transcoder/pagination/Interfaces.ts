
import { ElasticTranscoder } from "../ElasticTranscoder.ts";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ElasticTranscoderPaginationConfiguration extends PaginationConfiguration {
  client: ElasticTranscoder | ElasticTranscoderClient;
}
