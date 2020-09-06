
import { CodeBuild } from "../CodeBuild.ts";
import { CodeBuildClient } from "../CodeBuildClient.ts";
import {
  ListBuildsForProjectCommand,
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
} from "../commands/ListBuildsForProjectCommand.ts";
import { CodeBuildPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListBuildsForProjectCommandInput,
  ...args: any
): Promise<ListBuildsForProjectCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildsForProjectCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeBuild,
  input: ListBuildsForProjectCommandInput,
  ...args: any
): Promise<ListBuildsForProjectCommandOutput> => {
  // @ts-ignore
  return await client.listBuildsForProject(input, ...args);
};
export async function* listBuildsForProjectPaginate(
  config: CodeBuildPaginationConfiguration,
  input: ListBuildsForProjectCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildsForProjectCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListBuildsForProjectCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
