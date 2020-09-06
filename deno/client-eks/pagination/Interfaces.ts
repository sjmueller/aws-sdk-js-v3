
import { EKS } from "../EKS.ts";
import { EKSClient } from "../EKSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface EKSPaginationConfiguration extends PaginationConfiguration {
  client: EKS | EKSClient;
}
