import { ECRPUBLIC } from "../ECRPUBLIC.ts";
import { ECRPUBLICClient } from "../ECRPUBLICClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ECRPUBLICPaginationConfiguration extends PaginationConfiguration {
  client: ECRPUBLIC | ECRPUBLICClient;
}
