
import { CodeBuild } from "../CodeBuild.ts";
import { CodeBuildClient } from "../CodeBuildClient.ts";
import {
  ListBuildBatchesCommand,
  ListBuildBatchesCommandInput,
  ListBuildBatchesCommandOutput,
} from "../commands/ListBuildBatchesCommand.ts";
import { CodeBuildPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListBuildBatchesCommandInput,
  ...args: any
): Promise<ListBuildBatchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildBatchesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeBuild,
  input: ListBuildBatchesCommandInput,
  ...args: any
): Promise<ListBuildBatchesCommandOutput> => {
  // @ts-ignore
  return await client.listBuildBatches(input, ...args);
};
export async function* paginateListBuildBatches(
  config: CodeBuildPaginationConfiguration,
  input: ListBuildBatchesCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildBatchesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBuildBatchesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
