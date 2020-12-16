import { CloudFront } from "../CloudFront.ts";
import { CloudFrontClient } from "../CloudFrontClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CloudFrontPaginationConfiguration extends PaginationConfiguration {
  client: CloudFront | CloudFrontClient;
}
