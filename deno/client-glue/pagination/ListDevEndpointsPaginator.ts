import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import {
  ListDevEndpointsCommand,
  ListDevEndpointsCommandInput,
  ListDevEndpointsCommandOutput,
} from "../commands/ListDevEndpointsCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: ListDevEndpointsCommandInput,
  ...args: any
): Promise<ListDevEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDevEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: ListDevEndpointsCommandInput,
  ...args: any
): Promise<ListDevEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listDevEndpoints(input, ...args);
};
export async function* paginateListDevEndpoints(
  config: GluePaginationConfiguration,
  input: ListDevEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListDevEndpointsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDevEndpointsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
