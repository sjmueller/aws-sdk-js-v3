import { CodeBuild } from "../CodeBuild.ts";
import { CodeBuildClient } from "../CodeBuildClient.ts";
import {
  DescribeTestCasesCommand,
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput,
} from "../commands/DescribeTestCasesCommand.ts";
import { CodeBuildPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: DescribeTestCasesCommandInput,
  ...args: any
): Promise<DescribeTestCasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTestCasesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeBuild,
  input: DescribeTestCasesCommandInput,
  ...args: any
): Promise<DescribeTestCasesCommandOutput> => {
  // @ts-ignore
  return await client.describeTestCases(input, ...args);
};
export async function* describeTestCasesPaginate(
  config: CodeBuildPaginationConfiguration,
  input: DescribeTestCasesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTestCasesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeTestCasesCommandOutput;
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
