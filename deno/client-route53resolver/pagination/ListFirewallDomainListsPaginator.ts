import { Route53Resolver } from "../Route53Resolver.ts";
import { Route53ResolverClient } from "../Route53ResolverClient.ts";
import {
  ListFirewallDomainListsCommand,
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput,
} from "../commands/ListFirewallDomainListsCommand.ts";
import { Route53ResolverPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListFirewallDomainListsCommandInput,
  ...args: any
): Promise<ListFirewallDomainListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFirewallDomainListsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53Resolver,
  input: ListFirewallDomainListsCommandInput,
  ...args: any
): Promise<ListFirewallDomainListsCommandOutput> => {
  // @ts-ignore
  return await client.listFirewallDomainLists(input, ...args);
};
export async function* paginateListFirewallDomainLists(
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallDomainListsCommandInput,
  ...additionalArguments: any
): Paginator<ListFirewallDomainListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFirewallDomainListsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53Resolver) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53ResolverClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53Resolver | Route53ResolverClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
