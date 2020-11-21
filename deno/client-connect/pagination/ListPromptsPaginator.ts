
import { Connect } from "../Connect.ts";
import { ConnectClient } from "../ConnectClient.ts";
import { ListPromptsCommand, ListPromptsCommandInput, ListPromptsCommandOutput } from "../commands/ListPromptsCommand.ts";
import { ConnectPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListPromptsCommandInput,
  ...args: any
): Promise<ListPromptsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPromptsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Connect,
  input: ListPromptsCommandInput,
  ...args: any
): Promise<ListPromptsCommandOutput> => {
  // @ts-ignore
  return await client.listPrompts(input, ...args);
};
export async function* paginateListPrompts(
  config: ConnectPaginationConfiguration,
  input: ListPromptsCommandInput,
  ...additionalArguments: any
): Paginator<ListPromptsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPromptsCommandOutput;
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
