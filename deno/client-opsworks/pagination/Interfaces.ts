import { OpsWorks } from "../OpsWorks.ts";
import { OpsWorksClient } from "../OpsWorksClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface OpsWorksPaginationConfiguration extends PaginationConfiguration {
  client: OpsWorks | OpsWorksClient;
}
