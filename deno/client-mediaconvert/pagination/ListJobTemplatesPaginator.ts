
import { MediaConvert } from "../MediaConvert.ts";
import { MediaConvertClient } from "../MediaConvertClient.ts";
import {
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "../commands/ListJobTemplatesCommand.ts";
import { MediaConvertPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MediaConvertClient,
  input: ListJobTemplatesCommandInput,
  ...args: any
): Promise<ListJobTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobTemplatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaConvert,
  input: ListJobTemplatesCommandInput,
  ...args: any
): Promise<ListJobTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listJobTemplates(input, ...args);
};
export async function* paginateListJobTemplates(
  config: MediaConvertPaginationConfiguration,
  input: ListJobTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListJobTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobTemplatesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConvert) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaConvertClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConvert | MediaConvertClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
