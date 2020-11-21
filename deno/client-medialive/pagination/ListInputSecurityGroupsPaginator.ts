
import { MediaLive } from "../MediaLive.ts";
import { MediaLiveClient } from "../MediaLiveClient.ts";
import {
  ListInputSecurityGroupsCommand,
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput,
} from "../commands/ListInputSecurityGroupsCommand.ts";
import { MediaLivePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListInputSecurityGroupsCommandInput,
  ...args: any
): Promise<ListInputSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInputSecurityGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaLive,
  input: ListInputSecurityGroupsCommandInput,
  ...args: any
): Promise<ListInputSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listInputSecurityGroups(input, ...args);
};
export async function* paginateListInputSecurityGroups(
  config: MediaLivePaginationConfiguration,
  input: ListInputSecurityGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListInputSecurityGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInputSecurityGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaLive) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaLiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaLive | MediaLiveClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
