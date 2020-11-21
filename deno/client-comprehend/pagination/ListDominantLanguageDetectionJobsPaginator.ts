
import { Comprehend } from "../Comprehend.ts";
import { ComprehendClient } from "../ComprehendClient.ts";
import {
  ListDominantLanguageDetectionJobsCommand,
  ListDominantLanguageDetectionJobsCommandInput,
  ListDominantLanguageDetectionJobsCommandOutput,
} from "../commands/ListDominantLanguageDetectionJobsCommand.ts";
import { ComprehendPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListDominantLanguageDetectionJobsCommandInput,
  ...args: any
): Promise<ListDominantLanguageDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDominantLanguageDetectionJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Comprehend,
  input: ListDominantLanguageDetectionJobsCommandInput,
  ...args: any
): Promise<ListDominantLanguageDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDominantLanguageDetectionJobs(input, ...args);
};
export async function* paginateListDominantLanguageDetectionJobs(
  config: ComprehendPaginationConfiguration,
  input: ListDominantLanguageDetectionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDominantLanguageDetectionJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDominantLanguageDetectionJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Comprehend) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
