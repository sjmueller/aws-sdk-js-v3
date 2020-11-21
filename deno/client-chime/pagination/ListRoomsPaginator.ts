
import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import { ListRoomsCommand, ListRoomsCommandInput, ListRoomsCommandOutput } from "../commands/ListRoomsCommand.ts";
import { ChimePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListRoomsCommandInput,
  ...args: any
): Promise<ListRoomsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoomsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Chime,
  input: ListRoomsCommandInput,
  ...args: any
): Promise<ListRoomsCommandOutput> => {
  // @ts-ignore
  return await client.listRooms(input, ...args);
};
export async function* paginateListRooms(
  config: ChimePaginationConfiguration,
  input: ListRoomsCommandInput,
  ...additionalArguments: any
): Paginator<ListRoomsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRoomsCommandOutput;
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
