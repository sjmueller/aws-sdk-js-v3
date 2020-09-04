import { CodeBuild } from "../CodeBuild.ts";
import { CodeBuildClient } from "../CodeBuildClient.ts";
import {
  ListReportGroupsCommand,
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput,
} from "../commands/ListReportGroupsCommand.ts";
import { CodeBuildPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListReportGroupsCommandInput,
  ...args: any
): Promise<ListReportGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReportGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeBuild,
  input: ListReportGroupsCommandInput,
  ...args: any
): Promise<ListReportGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listReportGroups(input, ...args);
};
export async function* listReportGroupsPaginate(
  config: CodeBuildPaginationConfiguration,
  input: ListReportGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListReportGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListReportGroupsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
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
