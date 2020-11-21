
import { Connect } from "../Connect.ts";
import { ConnectClient } from "../ConnectClient.ts";
import {
  ListRoutingProfileQueuesCommand,
  ListRoutingProfileQueuesCommandInput,
  ListRoutingProfileQueuesCommandOutput,
} from "../commands/ListRoutingProfileQueuesCommand.ts";
import { ConnectPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListRoutingProfileQueuesCommandInput,
  ...args: any
): Promise<ListRoutingProfileQueuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoutingProfileQueuesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Connect,
  input: ListRoutingProfileQueuesCommandInput,
  ...args: any
): Promise<ListRoutingProfileQueuesCommandOutput> => {
  // @ts-ignore
  return await client.listRoutingProfileQueues(input, ...args);
};
export async function* paginateListRoutingProfileQueues(
  config: ConnectPaginationConfiguration,
  input: ListRoutingProfileQueuesCommandInput,
  ...additionalArguments: any
): Paginator<ListRoutingProfileQueuesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRoutingProfileQueuesCommandOutput;
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
