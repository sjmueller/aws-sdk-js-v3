import { Detective } from "../Detective.ts";
import { DetectiveClient } from "../DetectiveClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DetectivePaginationConfiguration extends PaginationConfiguration {
  client: Detective | DetectiveClient;
}
