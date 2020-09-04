import { Organizations } from "../Organizations.ts";
import { OrganizationsClient } from "../OrganizationsClient.ts";
import {
  ListPoliciesForTargetCommand,
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
} from "../commands/ListPoliciesForTargetCommand.ts";
import { OrganizationsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListPoliciesForTargetCommandInput,
  ...args: any
): Promise<ListPoliciesForTargetCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPoliciesForTargetCommand(input, ...args));
};
const makePagedRequest = async (
  client: Organizations,
  input: ListPoliciesForTargetCommandInput,
  ...args: any
): Promise<ListPoliciesForTargetCommandOutput> => {
  // @ts-ignore
  return await client.listPoliciesForTarget(input, ...args);
};
export async function* listPoliciesForTargetPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListPoliciesForTargetCommandInput,
  ...additionalArguments: any
): Paginator<ListPoliciesForTargetCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPoliciesForTargetCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Organizations) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
