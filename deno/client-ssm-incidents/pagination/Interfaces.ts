import { SSMIncidents } from "../SSMIncidents.ts";
import { SSMIncidentsClient } from "../SSMIncidentsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SSMIncidentsPaginationConfiguration extends PaginationConfiguration {
  client: SSMIncidents | SSMIncidentsClient;
}
