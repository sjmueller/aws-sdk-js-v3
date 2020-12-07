import { MigrationHub } from "../MigrationHub.ts";
import { MigrationHubClient } from "../MigrationHubClient.ts";
import {
  ListMigrationTasksCommand,
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput,
} from "../commands/ListMigrationTasksCommand.ts";
import { MigrationHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListMigrationTasksCommandInput,
  ...args: any
): Promise<ListMigrationTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMigrationTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHub,
  input: ListMigrationTasksCommandInput,
  ...args: any
): Promise<ListMigrationTasksCommandOutput> => {
  // @ts-ignore
  return await client.listMigrationTasks(input, ...args);
};
export async function* paginateListMigrationTasks(
  config: MigrationHubPaginationConfiguration,
  input: ListMigrationTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListMigrationTasksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMigrationTasksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MigrationHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MigrationHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHub | MigrationHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
