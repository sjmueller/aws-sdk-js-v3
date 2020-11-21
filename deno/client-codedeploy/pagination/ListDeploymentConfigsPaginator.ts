
import { CodeDeploy } from "../CodeDeploy.ts";
import { CodeDeployClient } from "../CodeDeployClient.ts";
import {
  ListDeploymentConfigsCommand,
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput,
} from "../commands/ListDeploymentConfigsCommand.ts";
import { CodeDeployPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentConfigsCommandInput,
  ...args: any
): Promise<ListDeploymentConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentConfigsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListDeploymentConfigsCommandInput,
  ...args: any
): Promise<ListDeploymentConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentConfigs(input, ...args);
};
export async function* paginateListDeploymentConfigs(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentConfigsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentConfigsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeDeploy) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeDeployClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeDeploy | CodeDeployClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
