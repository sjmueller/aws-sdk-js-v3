
import { S3Control } from "../S3Control.ts";
import { S3ControlClient } from "../S3ControlClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface S3ControlPaginationConfiguration extends PaginationConfiguration {
  client: S3Control | S3ControlClient;
}
