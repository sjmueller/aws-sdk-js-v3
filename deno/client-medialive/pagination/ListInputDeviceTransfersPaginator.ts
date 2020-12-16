import { MediaLive } from "../MediaLive.ts";
import { MediaLiveClient } from "../MediaLiveClient.ts";
import {
  ListInputDeviceTransfersCommand,
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
} from "../commands/ListInputDeviceTransfersCommand.ts";
import { MediaLivePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListInputDeviceTransfersCommandInput,
  ...args: any
): Promise<ListInputDeviceTransfersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInputDeviceTransfersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaLive,
  input: ListInputDeviceTransfersCommandInput,
  ...args: any
): Promise<ListInputDeviceTransfersCommandOutput> => {
  // @ts-ignore
  return await client.listInputDeviceTransfers(input, ...args);
};
export async function* paginateListInputDeviceTransfers(
  config: MediaLivePaginationConfiguration,
  input: ListInputDeviceTransfersCommandInput,
  ...additionalArguments: any
): Paginator<ListInputDeviceTransfersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInputDeviceTransfersCommandOutput;
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
