
import { Route53Resolver } from "../Route53Resolver.ts";
import { Route53ResolverClient } from "../Route53ResolverClient.ts";
import {
  ListResolverRuleAssociationsCommand,
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput,
} from "../commands/ListResolverRuleAssociationsCommand.ts";
import { Route53ResolverPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListResolverRuleAssociationsCommandInput,
  ...args: any
): Promise<ListResolverRuleAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResolverRuleAssociationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Route53Resolver,
  input: ListResolverRuleAssociationsCommandInput,
  ...args: any
): Promise<ListResolverRuleAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listResolverRuleAssociations(input, ...args);
};
export async function* listResolverRuleAssociationsPaginate(
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverRuleAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListResolverRuleAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListResolverRuleAssociationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53Resolver) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53ResolverClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53Resolver | Route53ResolverClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
