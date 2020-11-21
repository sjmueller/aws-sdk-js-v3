
import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import {
  GetPartitionIndexesCommand,
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "../commands/GetPartitionIndexesCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetPartitionIndexesCommandInput,
  ...args: any
): Promise<GetPartitionIndexesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPartitionIndexesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Glue,
  input: GetPartitionIndexesCommandInput,
  ...args: any
): Promise<GetPartitionIndexesCommandOutput> => {
  // @ts-ignore
  return await client.getPartitionIndexes(input, ...args);
};
export async function* paginateGetPartitionIndexes(
  config: GluePaginationConfiguration,
  input: GetPartitionIndexesCommandInput,
  ...additionalArguments: any
): Paginator<GetPartitionIndexesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetPartitionIndexesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
