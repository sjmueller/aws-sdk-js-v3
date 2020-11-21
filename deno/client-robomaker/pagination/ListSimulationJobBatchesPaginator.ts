
import { RoboMaker } from "../RoboMaker.ts";
import { RoboMakerClient } from "../RoboMakerClient.ts";
import {
  ListSimulationJobBatchesCommand,
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
} from "../commands/ListSimulationJobBatchesCommand.ts";
import { RoboMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListSimulationJobBatchesCommandInput,
  ...args: any
): Promise<ListSimulationJobBatchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSimulationJobBatchesCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListSimulationJobBatchesCommandInput,
  ...args: any
): Promise<ListSimulationJobBatchesCommandOutput> => {
  // @ts-ignore
  return await client.listSimulationJobBatches(input, ...args);
};
export async function* paginateListSimulationJobBatches(
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationJobBatchesCommandInput,
  ...additionalArguments: any
): Paginator<ListSimulationJobBatchesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSimulationJobBatchesCommandOutput;
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
