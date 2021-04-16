import { Athena } from "../Athena.ts";
import { AthenaClient } from "../AthenaClient.ts";
import {
  ListPreparedStatementsCommand,
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "../commands/ListPreparedStatementsCommand.ts";
import { AthenaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListPreparedStatementsCommandInput,
  ...args: any
): Promise<ListPreparedStatementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPreparedStatementsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Athena,
  input: ListPreparedStatementsCommandInput,
  ...args: any
): Promise<ListPreparedStatementsCommandOutput> => {
  // @ts-ignore
  return await client.listPreparedStatements(input, ...args);
};
export async function* paginateListPreparedStatements(
  config: AthenaPaginationConfiguration,
  input: ListPreparedStatementsCommandInput,
  ...additionalArguments: any
): Paginator<ListPreparedStatementsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPreparedStatementsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
