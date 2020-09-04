import { Kendra } from "../Kendra.ts";
import { KendraClient } from "../KendraClient.ts";
import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand.ts";
import { KendraPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: KendraClient,
  input: ListDataSourceSyncJobsCommandInput,
  ...args: any
): Promise<ListDataSourceSyncJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSourceSyncJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Kendra,
  input: ListDataSourceSyncJobsCommandInput,
  ...args: any
): Promise<ListDataSourceSyncJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDataSourceSyncJobs(input, ...args);
};
export async function* listDataSourceSyncJobsPaginate(
  config: KendraPaginationConfiguration,
  input: ListDataSourceSyncJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSourceSyncJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDataSourceSyncJobsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Kendra) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
