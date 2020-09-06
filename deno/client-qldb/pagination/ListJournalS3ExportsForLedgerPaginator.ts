
import { QLDB } from "../QLDB.ts";
import { QLDBClient } from "../QLDBClient.ts";
import {
  ListJournalS3ExportsForLedgerCommand,
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
} from "../commands/ListJournalS3ExportsForLedgerCommand.ts";
import { QLDBPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: QLDBClient,
  input: ListJournalS3ExportsForLedgerCommandInput,
  ...args: any
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJournalS3ExportsForLedgerCommand(input, ...args));
};
const makePagedRequest = async (
  client: QLDB,
  input: ListJournalS3ExportsForLedgerCommandInput,
  ...args: any
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  // @ts-ignore
  return await client.listJournalS3ExportsForLedger(input, ...args);
};
export async function* listJournalS3ExportsForLedgerPaginate(
  config: QLDBPaginationConfiguration,
  input: ListJournalS3ExportsForLedgerCommandInput,
  ...additionalArguments: any
): Paginator<ListJournalS3ExportsForLedgerCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListJournalS3ExportsForLedgerCommandOutput;
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
