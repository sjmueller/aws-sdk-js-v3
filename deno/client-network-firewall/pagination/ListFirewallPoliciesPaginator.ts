
import { NetworkFirewall } from "../NetworkFirewall.ts";
import { NetworkFirewallClient } from "../NetworkFirewallClient.ts";
import {
  ListFirewallPoliciesCommand,
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
} from "../commands/ListFirewallPoliciesCommand.ts";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: NetworkFirewallClient,
  input: ListFirewallPoliciesCommandInput,
  ...args: any
): Promise<ListFirewallPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFirewallPoliciesCommand(input), ...args);
};
const makePagedRequest = async (
  client: NetworkFirewall,
  input: ListFirewallPoliciesCommandInput,
  ...args: any
): Promise<ListFirewallPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listFirewallPolicies(input, ...args);
};
export async function* paginateListFirewallPolicies(
  config: NetworkFirewallPaginationConfiguration,
  input: ListFirewallPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListFirewallPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFirewallPoliciesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkFirewall) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkFirewallClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkFirewall | NetworkFirewallClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
