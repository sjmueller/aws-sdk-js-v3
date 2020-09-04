import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import {
  ListBackupPlanTemplatesCommand,
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "../commands/ListBackupPlanTemplatesCommand.ts";
import { BackupPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupPlanTemplatesCommandInput,
  ...args: any
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupPlanTemplatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Backup,
  input: ListBackupPlanTemplatesCommandInput,
  ...args: any
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listBackupPlanTemplates(input, ...args);
};
export async function* listBackupPlanTemplatesPaginate(
  config: BackupPaginationConfiguration,
  input: ListBackupPlanTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupPlanTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListBackupPlanTemplatesCommandOutput;
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
