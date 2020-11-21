
import { RoboMaker } from "../RoboMaker.ts";
import { RoboMakerClient } from "../RoboMakerClient.ts";
import {
  ListSimulationApplicationsCommand,
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "../commands/ListSimulationApplicationsCommand.ts";
import { RoboMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListSimulationApplicationsCommandInput,
  ...args: any
): Promise<ListSimulationApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSimulationApplicationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListSimulationApplicationsCommandInput,
  ...args: any
): Promise<ListSimulationApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listSimulationApplications(input, ...args);
};
export async function* paginateListSimulationApplications(
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSimulationApplicationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSimulationApplicationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
