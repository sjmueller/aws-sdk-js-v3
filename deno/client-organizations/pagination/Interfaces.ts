import { Organizations } from "../Organizations.ts";
import { OrganizationsClient } from "../OrganizationsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface OrganizationsPaginationConfiguration extends PaginationConfiguration {
  client: Organizations | OrganizationsClient;
}
