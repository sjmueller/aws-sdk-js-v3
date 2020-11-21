
import { Kafka } from "../Kafka.ts";
import { KafkaClient } from "../KafkaClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface KafkaPaginationConfiguration extends PaginationConfiguration {
  client: Kafka | KafkaClient;
}
