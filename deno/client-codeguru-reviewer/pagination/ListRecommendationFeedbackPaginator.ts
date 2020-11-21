
import { CodeGuruReviewer } from "../CodeGuruReviewer.ts";
import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient.ts";
import {
  ListRecommendationFeedbackCommand,
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
} from "../commands/ListRecommendationFeedbackCommand.ts";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeGuruReviewerClient,
  input: ListRecommendationFeedbackCommandInput,
  ...args: any
): Promise<ListRecommendationFeedbackCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendationFeedbackCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeGuruReviewer,
  input: ListRecommendationFeedbackCommandInput,
  ...args: any
): Promise<ListRecommendationFeedbackCommandOutput> => {
  // @ts-ignore
  return await client.listRecommendationFeedback(input, ...args);
};
export async function* paginateListRecommendationFeedback(
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListRecommendationFeedbackCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendationFeedbackCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendationFeedbackCommandOutput;
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
