
import { QLDB } from "../QLDB.ts";
import { QLDBClient } from "../QLDBClient.ts";
import { ListLedgersCommand, ListLedgersCommandInput, ListLedgersCommandOutput } from "../commands/ListLedgersCommand.ts";
import { QLDBPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: QLDBClient,
  input: ListLedgersCommandInput,
  ...args: any
): Promise<ListLedgersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLedgersCommand(input, ...args));
};
const makePagedRequest = async (
  client: QLDB,
  input: ListLedgersCommandInput,
  ...args: any
): Promise<ListLedgersCommandOutput> => {
  // @ts-ignore
  return await client.listLedgers(input, ...args);
};
export async function* listLedgersPaginate(
  config: QLDBPaginationConfiguration,
  input: ListLedgersCommandInput,
  ...additionalArguments: any
): Paginator<ListLedgersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListLedgersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QLDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QLDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QLDB | QLDBClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
