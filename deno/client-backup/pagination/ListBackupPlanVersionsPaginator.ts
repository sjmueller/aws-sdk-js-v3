import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import {
  ListBackupPlanVersionsCommand,
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "../commands/ListBackupPlanVersionsCommand.ts";
import { BackupPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupPlanVersionsCommandInput,
  ...args: any
): Promise<ListBackupPlanVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupPlanVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Backup,
  input: ListBackupPlanVersionsCommandInput,
  ...args: any
): Promise<ListBackupPlanVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listBackupPlanVersions(input, ...args);
};
export async function* paginateListBackupPlanVersions(
  config: BackupPaginationConfiguration,
  input: ListBackupPlanVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupPlanVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBackupPlanVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
