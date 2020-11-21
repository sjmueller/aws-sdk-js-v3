
import { GroundStation } from "../GroundStation.ts";
import { GroundStationClient } from "../GroundStationClient.ts";
import {
  ListMissionProfilesCommand,
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput,
} from "../commands/ListMissionProfilesCommand.ts";
import { GroundStationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListMissionProfilesCommandInput,
  ...args: any
): Promise<ListMissionProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMissionProfilesCommand(input), ...args);
};
const makePagedRequest = async (
  client: GroundStation,
  input: ListMissionProfilesCommandInput,
  ...args: any
): Promise<ListMissionProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listMissionProfiles(input, ...args);
};
export async function* paginateListMissionProfiles(
  config: GroundStationPaginationConfiguration,
  input: ListMissionProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListMissionProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMissionProfilesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GroundStation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GroundStationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GroundStation | GroundStationClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
