import { EBS } from "../EBS.ts";
import { EBSClient } from "../EBSClient.ts";
import {
  ListSnapshotBlocksCommand,
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput,
} from "../commands/ListSnapshotBlocksCommand.ts";
import { EBSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: EBSClient,
  input: ListSnapshotBlocksCommandInput,
  ...args: any
): Promise<ListSnapshotBlocksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSnapshotBlocksCommand(input, ...args));
};
const makePagedRequest = async (
  client: EBS,
  input: ListSnapshotBlocksCommandInput,
  ...args: any
): Promise<ListSnapshotBlocksCommandOutput> => {
  // @ts-ignore
  return await client.listSnapshotBlocks(input, ...args);
};
export async function* listSnapshotBlocksPaginate(
  config: EBSPaginationConfiguration,
  input: ListSnapshotBlocksCommandInput,
  ...additionalArguments: any
): Paginator<ListSnapshotBlocksCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSnapshotBlocksCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EBS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EBSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EBS | EBSClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
