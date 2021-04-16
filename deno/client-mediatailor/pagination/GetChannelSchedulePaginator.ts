import { MediaTailor } from "../MediaTailor.ts";
import { MediaTailorClient } from "../MediaTailorClient.ts";
import {
  GetChannelScheduleCommand,
  GetChannelScheduleCommandInput,
  GetChannelScheduleCommandOutput,
} from "../commands/GetChannelScheduleCommand.ts";
import { MediaTailorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaTailorClient,
  input: GetChannelScheduleCommandInput,
  ...args: any
): Promise<GetChannelScheduleCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetChannelScheduleCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaTailor,
  input: GetChannelScheduleCommandInput,
  ...args: any
): Promise<GetChannelScheduleCommandOutput> => {
  // @ts-ignore
  return await client.getChannelSchedule(input, ...args);
};
export async function* paginateGetChannelSchedule(
  config: MediaTailorPaginationConfiguration,
  input: GetChannelScheduleCommandInput,
  ...additionalArguments: any
): Paginator<GetChannelScheduleCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetChannelScheduleCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaTailor) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaTailorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaTailor | MediaTailorClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
