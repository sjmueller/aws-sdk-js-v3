
import { Connect } from "../Connect.ts";
import { ConnectClient } from "../ConnectClient.ts";
import {
  ListContactFlowsCommand,
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput,
} from "../commands/ListContactFlowsCommand.ts";
import { ConnectPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListContactFlowsCommandInput,
  ...args: any
): Promise<ListContactFlowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactFlowsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Connect,
  input: ListContactFlowsCommandInput,
  ...args: any
): Promise<ListContactFlowsCommandOutput> => {
  // @ts-ignore
  return await client.listContactFlows(input, ...args);
};
export async function* paginateListContactFlows(
  config: ConnectPaginationConfiguration,
  input: ListContactFlowsCommandInput,
  ...additionalArguments: any
): Paginator<ListContactFlowsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactFlowsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
