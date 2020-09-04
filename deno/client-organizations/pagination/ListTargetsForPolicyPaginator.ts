import { Organizations } from "../Organizations.ts";
import { OrganizationsClient } from "../OrganizationsClient.ts";
import {
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "../commands/ListTargetsForPolicyCommand.ts";
import { OrganizationsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListTargetsForPolicyCommandInput,
  ...args: any
): Promise<ListTargetsForPolicyCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTargetsForPolicyCommand(input, ...args));
};
const makePagedRequest = async (
  client: Organizations,
  input: ListTargetsForPolicyCommandInput,
  ...args: any
): Promise<ListTargetsForPolicyCommandOutput> => {
  // @ts-ignore
  return await client.listTargetsForPolicy(input, ...args);
};
export async function* listTargetsForPolicyPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListTargetsForPolicyCommandInput,
  ...additionalArguments: any
): Paginator<ListTargetsForPolicyCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTargetsForPolicyCommandOutput;
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
