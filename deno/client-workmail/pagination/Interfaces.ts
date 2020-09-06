
import { WorkMail } from "../WorkMail.ts";
import { WorkMailClient } from "../WorkMailClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface WorkMailPaginationConfiguration extends PaginationConfiguration {
  client: WorkMail | WorkMailClient;
}
