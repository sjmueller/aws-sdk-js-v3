
import { Route53Resolver } from "../Route53Resolver.ts";
import { Route53ResolverClient } from "../Route53ResolverClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface Route53ResolverPaginationConfiguration extends PaginationConfiguration {
  client: Route53Resolver | Route53ResolverClient;
}
