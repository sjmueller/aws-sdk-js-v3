
import { CodeCommit } from "../CodeCommit.ts";
import { CodeCommitClient } from "../CodeCommitClient.ts";
import {
  ListPullRequestsCommand,
  ListPullRequestsCommandInput,
  ListPullRequestsCommandOutput,
} from "../commands/ListPullRequestsCommand.ts";
import { CodeCommitPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListPullRequestsCommandInput,
  ...args: any
): Promise<ListPullRequestsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPullRequestsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeCommit,
  input: ListPullRequestsCommandInput,
  ...args: any
): Promise<ListPullRequestsCommandOutput> => {
  // @ts-ignore
  return await client.listPullRequests(input, ...args);
};
export async function* paginateListPullRequests(
  config: CodeCommitPaginationConfiguration,
  input: ListPullRequestsCommandInput,
  ...additionalArguments: any
): Paginator<ListPullRequestsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPullRequestsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
