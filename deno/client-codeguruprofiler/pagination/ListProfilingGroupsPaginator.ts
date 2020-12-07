import { CodeGuruProfiler } from "../CodeGuruProfiler.ts";
import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient.ts";
import {
  ListProfilingGroupsCommand,
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput,
} from "../commands/ListProfilingGroupsCommand.ts";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeGuruProfilerClient,
  input: ListProfilingGroupsCommandInput,
  ...args: any
): Promise<ListProfilingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProfilingGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeGuruProfiler,
  input: ListProfilingGroupsCommandInput,
  ...args: any
): Promise<ListProfilingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listProfilingGroups(input, ...args);
};
export async function* paginateListProfilingGroups(
  config: CodeGuruProfilerPaginationConfiguration,
  input: ListProfilingGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListProfilingGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProfilingGroupsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruProfiler) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeGuruProfilerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruProfiler | CodeGuruProfilerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
