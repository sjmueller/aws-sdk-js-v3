
import { MigrationHub } from "../MigrationHub.ts";
import { MigrationHubClient } from "../MigrationHubClient.ts";
import {
  ListCreatedArtifactsCommand,
  ListCreatedArtifactsCommandInput,
  ListCreatedArtifactsCommandOutput,
} from "../commands/ListCreatedArtifactsCommand.ts";
import { MigrationHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListCreatedArtifactsCommandInput,
  ...args: any
): Promise<ListCreatedArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCreatedArtifactsCommand(input, ...args));
};
const makePagedRequest = async (
  client: MigrationHub,
  input: ListCreatedArtifactsCommandInput,
  ...args: any
): Promise<ListCreatedArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.listCreatedArtifacts(input, ...args);
};
export async function* listCreatedArtifactsPaginate(
  config: MigrationHubPaginationConfiguration,
  input: ListCreatedArtifactsCommandInput,
  ...additionalArguments: any
): Paginator<ListCreatedArtifactsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListCreatedArtifactsCommandOutput;
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
