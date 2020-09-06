
import { WorkLink } from "../WorkLink.ts";
import { WorkLinkClient } from "../WorkLinkClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface WorkLinkPaginationConfiguration extends PaginationConfiguration {
  client: WorkLink | WorkLinkClient;
}
