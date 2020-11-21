
import { EBS } from "../EBS.ts";
import { EBSClient } from "../EBSClient.ts";
import {
  ListChangedBlocksCommand,
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput,
} from "../commands/ListChangedBlocksCommand.ts";
import { EBSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: EBSClient,
  input: ListChangedBlocksCommandInput,
  ...args: any
): Promise<ListChangedBlocksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChangedBlocksCommand(input), ...args);
};
const makePagedRequest = async (
  client: EBS,
  input: ListChangedBlocksCommandInput,
  ...args: any
): Promise<ListChangedBlocksCommandOutput> => {
  // @ts-ignore
  return await client.listChangedBlocks(input, ...args);
};
export async function* paginateListChangedBlocks(
  config: EBSPaginationConfiguration,
  input: ListChangedBlocksCommandInput,
  ...additionalArguments: any
): Paginator<ListChangedBlocksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChangedBlocksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EBS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EBSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EBS | EBSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
