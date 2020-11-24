
import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import {
  ListProtectedResourcesCommand,
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "../commands/ListProtectedResourcesCommand.ts";
import { BackupPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListProtectedResourcesCommandInput,
  ...args: any
): Promise<ListProtectedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtectedResourcesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Backup,
  input: ListProtectedResourcesCommandInput,
  ...args: any
): Promise<ListProtectedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listProtectedResources(input, ...args);
};
export async function* paginateListProtectedResources(
  config: BackupPaginationConfiguration,
  input: ListProtectedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListProtectedResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProtectedResourcesCommandOutput;
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
