
import { RoboMaker } from "../RoboMaker.ts";
import { RoboMakerClient } from "../RoboMakerClient.ts";
import {
  ListRobotApplicationsCommand,
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
} from "../commands/ListRobotApplicationsCommand.ts";
import { RoboMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListRobotApplicationsCommandInput,
  ...args: any
): Promise<ListRobotApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRobotApplicationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListRobotApplicationsCommandInput,
  ...args: any
): Promise<ListRobotApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listRobotApplications(input, ...args);
};
export async function* paginateListRobotApplications(
  config: RoboMakerPaginationConfiguration,
  input: ListRobotApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRobotApplicationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRobotApplicationsCommandOutput;
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
