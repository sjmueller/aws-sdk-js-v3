
import { Kinesis } from "../Kinesis.ts";
import { KinesisClient } from "../KinesisClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface KinesisPaginationConfiguration extends PaginationConfiguration {
  client: Kinesis | KinesisClient;
}
