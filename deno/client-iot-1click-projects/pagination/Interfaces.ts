import { IoT1ClickProjects } from "../IoT1ClickProjects.ts";
import { IoT1ClickProjectsClient } from "../IoT1ClickProjectsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IoT1ClickProjectsPaginationConfiguration extends PaginationConfiguration {
  client: IoT1ClickProjects | IoT1ClickProjectsClient;
}
