
import { MigrationHub } from "../MigrationHub.ts";
import { MigrationHubClient } from "../MigrationHubClient.ts";
import {
  ListProgressUpdateStreamsCommand,
  ListProgressUpdateStreamsCommandInput,
  ListProgressUpdateStreamsCommandOutput,
} from "../commands/ListProgressUpdateStreamsCommand.ts";
import { MigrationHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListProgressUpdateStreamsCommandInput,
  ...args: any
): Promise<ListProgressUpdateStreamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProgressUpdateStreamsCommand(input, ...args));
};
const makePagedRequest = async (
  client: MigrationHub,
  input: ListProgressUpdateStreamsCommandInput,
  ...args: any
): Promise<ListProgressUpdateStreamsCommandOutput> => {
  // @ts-ignore
  return await client.listProgressUpdateStreams(input, ...args);
};
export async function* listProgressUpdateStreamsPaginate(
  config: MigrationHubPaginationConfiguration,
  input: ListProgressUpdateStreamsCommandInput,
  ...additionalArguments: any
): Paginator<ListProgressUpdateStreamsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListProgressUpdateStreamsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MigrationHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MigrationHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHub | MigrationHubClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
