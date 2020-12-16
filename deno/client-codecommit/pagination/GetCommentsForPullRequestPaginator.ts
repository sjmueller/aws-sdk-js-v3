import { CodeCommit } from "../CodeCommit.ts";
import { CodeCommitClient } from "../CodeCommitClient.ts";
import {
  GetCommentsForPullRequestCommand,
  GetCommentsForPullRequestCommandInput,
  GetCommentsForPullRequestCommandOutput,
} from "../commands/GetCommentsForPullRequestCommand.ts";
import { CodeCommitPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetCommentsForPullRequestCommandInput,
  ...args: any
): Promise<GetCommentsForPullRequestCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCommentsForPullRequestCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCommit,
  input: GetCommentsForPullRequestCommandInput,
  ...args: any
): Promise<GetCommentsForPullRequestCommandOutput> => {
  // @ts-ignore
  return await client.getCommentsForPullRequest(input, ...args);
};
export async function* paginateGetCommentsForPullRequest(
  config: CodeCommitPaginationConfiguration,
  input: GetCommentsForPullRequestCommandInput,
  ...additionalArguments: any
): Paginator<GetCommentsForPullRequestCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCommentsForPullRequestCommandOutput;
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
