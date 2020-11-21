
import { RoboMaker } from "../RoboMaker.ts";
import { RoboMakerClient } from "../RoboMakerClient.ts";
import {
  ListWorldExportJobsCommand,
  ListWorldExportJobsCommandInput,
  ListWorldExportJobsCommandOutput,
} from "../commands/ListWorldExportJobsCommand.ts";
import { RoboMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListWorldExportJobsCommandInput,
  ...args: any
): Promise<ListWorldExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorldExportJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListWorldExportJobsCommandInput,
  ...args: any
): Promise<ListWorldExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listWorldExportJobs(input, ...args);
};
export async function* paginateListWorldExportJobs(
  config: RoboMakerPaginationConfiguration,
  input: ListWorldExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorldExportJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorldExportJobsCommandOutput;
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
