import { S3Outposts } from "../S3Outposts.ts";
import { S3OutpostsClient } from "../S3OutpostsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface S3OutpostsPaginationConfiguration extends PaginationConfiguration {
  client: S3Outposts | S3OutpostsClient;
}
