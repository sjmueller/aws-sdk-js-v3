import { RAM } from "../RAM.ts";
import { RAMClient } from "../RAMClient.ts";
import {
  ListResourceTypesCommand,
  ListResourceTypesCommandInput,
  ListResourceTypesCommandOutput,
} from "../commands/ListResourceTypesCommand.ts";
import { RAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RAMClient,
  input: ListResourceTypesCommandInput,
  ...args: any
): Promise<ListResourceTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RAM,
  input: ListResourceTypesCommandInput,
  ...args: any
): Promise<ListResourceTypesCommandOutput> => {
  // @ts-ignore
  return await client.listResourceTypes(input, ...args);
};
export async function* paginateListResourceTypes(
  config: RAMPaginationConfiguration,
  input: ListResourceTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
