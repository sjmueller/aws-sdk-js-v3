import { Schemas } from "../Schemas.ts";
import { SchemasClient } from "../SchemasClient.ts";
import {
  SearchSchemasCommand,
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput,
} from "../commands/SearchSchemasCommand.ts";
import { SchemasPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SchemasClient,
  input: SearchSchemasCommandInput,
  ...args: any
): Promise<SearchSchemasCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchSchemasCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Schemas,
  input: SearchSchemasCommandInput,
  ...args: any
): Promise<SearchSchemasCommandOutput> => {
  // @ts-ignore
  return await client.searchSchemas(input, ...args);
};
export async function* paginateSearchSchemas(
  config: SchemasPaginationConfiguration,
  input: SearchSchemasCommandInput,
  ...additionalArguments: any
): Paginator<SearchSchemasCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchSchemasCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof Schemas) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SchemasClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Schemas | SchemasClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
