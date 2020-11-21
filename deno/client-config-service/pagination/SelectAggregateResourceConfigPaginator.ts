
import { ConfigService } from "../ConfigService.ts";
import { ConfigServiceClient } from "../ConfigServiceClient.ts";
import {
  SelectAggregateResourceConfigCommand,
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
} from "../commands/SelectAggregateResourceConfigCommand.ts";
import { ConfigServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: SelectAggregateResourceConfigCommandInput,
  ...args: any
): Promise<SelectAggregateResourceConfigCommandOutput> => {
  // @ts-ignore
  return await client.send(new SelectAggregateResourceConfigCommand(input), ...args);
};
const makePagedRequest = async (
  client: ConfigService,
  input: SelectAggregateResourceConfigCommandInput,
  ...args: any
): Promise<SelectAggregateResourceConfigCommandOutput> => {
  // @ts-ignore
  return await client.selectAggregateResourceConfig(input, ...args);
};
export async function* paginateSelectAggregateResourceConfig(
  config: ConfigServicePaginationConfiguration,
  input: SelectAggregateResourceConfigCommandInput,
  ...additionalArguments: any
): Paginator<SelectAggregateResourceConfigCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SelectAggregateResourceConfigCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
