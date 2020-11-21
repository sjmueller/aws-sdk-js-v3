
import { Personalize } from "../Personalize.ts";
import { PersonalizeClient } from "../PersonalizeClient.ts";
import {
  ListEventTrackersCommand,
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput,
} from "../commands/ListEventTrackersCommand.ts";
import { PersonalizePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListEventTrackersCommandInput,
  ...args: any
): Promise<ListEventTrackersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventTrackersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Personalize,
  input: ListEventTrackersCommandInput,
  ...args: any
): Promise<ListEventTrackersCommandOutput> => {
  // @ts-ignore
  return await client.listEventTrackers(input, ...args);
};
export async function* paginateListEventTrackers(
  config: PersonalizePaginationConfiguration,
  input: ListEventTrackersCommandInput,
  ...additionalArguments: any
): Paginator<ListEventTrackersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventTrackersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Personalize) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
