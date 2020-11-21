
import { MediaConvert } from "../MediaConvert.ts";
import { MediaConvertClient } from "../MediaConvertClient.ts";
import { ListPresetsCommand, ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand.ts";
import { MediaConvertPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MediaConvertClient,
  input: ListPresetsCommandInput,
  ...args: any
): Promise<ListPresetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPresetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaConvert,
  input: ListPresetsCommandInput,
  ...args: any
): Promise<ListPresetsCommandOutput> => {
  // @ts-ignore
  return await client.listPresets(input, ...args);
};
export async function* paginateListPresets(
  config: MediaConvertPaginationConfiguration,
  input: ListPresetsCommandInput,
  ...additionalArguments: any
): Paginator<ListPresetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPresetsCommandOutput;
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
