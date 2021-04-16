import { Route53Resolver } from "../Route53Resolver.ts";
import { Route53ResolverClient } from "../Route53ResolverClient.ts";
import {
  ListFirewallRulesCommand,
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput,
} from "../commands/ListFirewallRulesCommand.ts";
import { Route53ResolverPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListFirewallRulesCommandInput,
  ...args: any
): Promise<ListFirewallRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFirewallRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53Resolver,
  input: ListFirewallRulesCommandInput,
  ...args: any
): Promise<ListFirewallRulesCommandOutput> => {
  // @ts-ignore
  return await client.listFirewallRules(input, ...args);
};
export async function* paginateListFirewallRules(
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListFirewallRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFirewallRulesCommandOutput;
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
