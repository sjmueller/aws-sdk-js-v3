
import { CloudDirectory } from "../CloudDirectory.ts";
import { CloudDirectoryClient } from "../CloudDirectoryClient.ts";
import {
  ListAttachedIndicesCommand,
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "../commands/ListAttachedIndicesCommand.ts";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListAttachedIndicesCommandInput,
  ...args: any
): Promise<ListAttachedIndicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttachedIndicesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListAttachedIndicesCommandInput,
  ...args: any
): Promise<ListAttachedIndicesCommandOutput> => {
  // @ts-ignore
  return await client.listAttachedIndices(input, ...args);
};
export async function* paginateListAttachedIndices(
  config: CloudDirectoryPaginationConfiguration,
  input: ListAttachedIndicesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttachedIndicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttachedIndicesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
