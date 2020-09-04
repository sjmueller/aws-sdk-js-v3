import { CodeBuild } from "../CodeBuild.ts";
import { CodeBuildClient } from "../CodeBuildClient.ts";
import {
  ListReportsForReportGroupCommand,
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput,
} from "../commands/ListReportsForReportGroupCommand.ts";
import { CodeBuildPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListReportsForReportGroupCommandInput,
  ...args: any
): Promise<ListReportsForReportGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReportsForReportGroupCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeBuild,
  input: ListReportsForReportGroupCommandInput,
  ...args: any
): Promise<ListReportsForReportGroupCommandOutput> => {
  // @ts-ignore
  return await client.listReportsForReportGroup(input, ...args);
};
export async function* listReportsForReportGroupPaginate(
  config: CodeBuildPaginationConfiguration,
  input: ListReportsForReportGroupCommandInput,
  ...additionalArguments: any
): Paginator<ListReportsForReportGroupCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListReportsForReportGroupCommandOutput;
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
