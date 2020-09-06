
import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import {
  ListRecoveryPointsByResourceCommand,
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "../commands/ListRecoveryPointsByResourceCommand.ts";
import { BackupPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListRecoveryPointsByResourceCommandInput,
  ...args: any
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecoveryPointsByResourceCommand(input, ...args));
};
const makePagedRequest = async (
  client: Backup,
  input: ListRecoveryPointsByResourceCommandInput,
  ...args: any
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  // @ts-ignore
  return await client.listRecoveryPointsByResource(input, ...args);
};
export async function* listRecoveryPointsByResourcePaginate(
  config: BackupPaginationConfiguration,
  input: ListRecoveryPointsByResourceCommandInput,
  ...additionalArguments: any
): Paginator<ListRecoveryPointsByResourceCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRecoveryPointsByResourceCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
