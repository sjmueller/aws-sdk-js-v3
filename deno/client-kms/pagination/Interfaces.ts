import { KMS } from "../KMS.ts";
import { KMSClient } from "../KMSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface KMSPaginationConfiguration extends PaginationConfiguration {
  client: KMS | KMSClient;
}
