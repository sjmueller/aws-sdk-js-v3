
import { CloudDirectory } from "../CloudDirectory.ts";
import { CloudDirectoryClient } from "../CloudDirectoryClient.ts";
import {
  ListPolicyAttachmentsCommand,
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "../commands/ListPolicyAttachmentsCommand.ts";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListPolicyAttachmentsCommandInput,
  ...args: any
): Promise<ListPolicyAttachmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPolicyAttachmentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListPolicyAttachmentsCommandInput,
  ...args: any
): Promise<ListPolicyAttachmentsCommandOutput> => {
  // @ts-ignore
  return await client.listPolicyAttachments(input, ...args);
};
export async function* paginateListPolicyAttachments(
  config: CloudDirectoryPaginationConfiguration,
  input: ListPolicyAttachmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListPolicyAttachmentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPolicyAttachmentsCommandOutput;
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
