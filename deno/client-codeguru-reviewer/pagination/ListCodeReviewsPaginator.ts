import { CodeGuruReviewer } from "../CodeGuruReviewer.ts";
import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient.ts";
import {
  ListCodeReviewsCommand,
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput,
} from "../commands/ListCodeReviewsCommand.ts";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeGuruReviewerClient,
  input: ListCodeReviewsCommandInput,
  ...args: any
): Promise<ListCodeReviewsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCodeReviewsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeGuruReviewer,
  input: ListCodeReviewsCommandInput,
  ...args: any
): Promise<ListCodeReviewsCommandOutput> => {
  // @ts-ignore
  return await client.listCodeReviews(input, ...args);
};
export async function* paginateListCodeReviews(
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListCodeReviewsCommandInput,
  ...additionalArguments: any
): Paginator<ListCodeReviewsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCodeReviewsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruReviewer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeGuruReviewerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruReviewer | CodeGuruReviewerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
