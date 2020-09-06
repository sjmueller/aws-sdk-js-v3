
import { WorkDocs } from "../WorkDocs.ts";
import { WorkDocsClient } from "../WorkDocsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface WorkDocsPaginationConfiguration extends PaginationConfiguration {
  client: WorkDocs | WorkDocsClient;
}
