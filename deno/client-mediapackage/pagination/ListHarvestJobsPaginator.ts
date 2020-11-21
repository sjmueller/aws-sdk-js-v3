
import { MediaPackage } from "../MediaPackage.ts";
import { MediaPackageClient } from "../MediaPackageClient.ts";
import {
  ListHarvestJobsCommand,
  ListHarvestJobsCommandInput,
  ListHarvestJobsCommandOutput,
} from "../commands/ListHarvestJobsCommand.ts";
import { MediaPackagePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MediaPackageClient,
  input: ListHarvestJobsCommandInput,
  ...args: any
): Promise<ListHarvestJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHarvestJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaPackage,
  input: ListHarvestJobsCommandInput,
  ...args: any
): Promise<ListHarvestJobsCommandOutput> => {
  // @ts-ignore
  return await client.listHarvestJobs(input, ...args);
};
export async function* paginateListHarvestJobs(
  config: MediaPackagePaginationConfiguration,
  input: ListHarvestJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListHarvestJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHarvestJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaPackage) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaPackageClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaPackage | MediaPackageClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
