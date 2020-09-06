
import { SFN } from "../SFN.ts";
import { SFNClient } from "../SFNClient.ts";
import {
  ListActivitiesCommand,
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
} from "../commands/ListActivitiesCommand.ts";
import { SFNPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SFNClient,
  input: ListActivitiesCommandInput,
  ...args: any
): Promise<ListActivitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActivitiesCommand(input, ...args));
};
const makePagedRequest = async (
  client: SFN,
  input: ListActivitiesCommandInput,
  ...args: any
): Promise<ListActivitiesCommandOutput> => {
  // @ts-ignore
  return await client.listActivities(input, ...args);
};
export async function* listActivitiesPaginate(
  config: SFNPaginationConfiguration,
  input: ListActivitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListActivitiesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListActivitiesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SFN) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SFNClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SFN | SFNClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
