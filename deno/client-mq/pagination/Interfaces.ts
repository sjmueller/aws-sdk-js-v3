import { Mq } from "../Mq.ts";
import { MqClient } from "../MqClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MqPaginationConfiguration extends PaginationConfiguration {
  client: Mq | MqClient;
}
