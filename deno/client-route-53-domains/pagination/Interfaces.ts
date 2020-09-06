
import { Route53Domains } from "../Route53Domains.ts";
import { Route53DomainsClient } from "../Route53DomainsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface Route53DomainsPaginationConfiguration extends PaginationConfiguration {
  client: Route53Domains | Route53DomainsClient;
}
