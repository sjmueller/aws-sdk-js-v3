import { Commander } from "../Commander.ts";
import { CommanderClient } from "../CommanderClient.ts";
import {
  ListTimelineEventsCommand,
  ListTimelineEventsCommandInput,
  ListTimelineEventsCommandOutput,
} from "../commands/ListTimelineEventsCommand.ts";
import { CommanderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CommanderClient,
  input: ListTimelineEventsCommandInput,
  ...args: any
): Promise<ListTimelineEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTimelineEventsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Commander,
  input: ListTimelineEventsCommandInput,
  ...args: any
): Promise<ListTimelineEventsCommandOutput> => {
  // @ts-ignore
  return await client.listTimelineEvents(input, ...args);
};
export async function* paginateListTimelineEvents(
  config: CommanderPaginationConfiguration,
  input: ListTimelineEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListTimelineEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTimelineEventsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Commander) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CommanderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Commander | CommanderClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
