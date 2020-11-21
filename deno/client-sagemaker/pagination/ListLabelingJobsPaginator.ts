
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListLabelingJobsCommand,
  ListLabelingJobsCommandInput,
  ListLabelingJobsCommandOutput,
} from "../commands/ListLabelingJobsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListLabelingJobsCommandInput,
  ...args: any
): Promise<ListLabelingJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLabelingJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListLabelingJobsCommandInput,
  ...args: any
): Promise<ListLabelingJobsCommandOutput> => {
  // @ts-ignore
  return await client.listLabelingJobs(input, ...args);
};
export async function* paginateListLabelingJobs(
  config: SageMakerPaginationConfiguration,
  input: ListLabelingJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListLabelingJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLabelingJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
