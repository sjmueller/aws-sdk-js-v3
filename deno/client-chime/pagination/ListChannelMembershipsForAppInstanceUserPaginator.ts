import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import {
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "../commands/ListChannelMembershipsForAppInstanceUserCommand.ts";
import { ChimePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...args: any
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelMembershipsForAppInstanceUserCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...args: any
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  // @ts-ignore
  return await client.listChannelMembershipsForAppInstanceUser(input, ...args);
};
export async function* paginateListChannelMembershipsForAppInstanceUser(
  config: ChimePaginationConfiguration,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMembershipsForAppInstanceUserCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelMembershipsForAppInstanceUserCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
