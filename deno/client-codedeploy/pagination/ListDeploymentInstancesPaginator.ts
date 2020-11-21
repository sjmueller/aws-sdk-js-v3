
import { CodeDeploy } from "../CodeDeploy.ts";
import { CodeDeployClient } from "../CodeDeployClient.ts";
import {
  ListDeploymentInstancesCommand,
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
} from "../commands/ListDeploymentInstancesCommand.ts";
import { CodeDeployPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentInstancesCommandInput,
  ...args: any
): Promise<ListDeploymentInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentInstancesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListDeploymentInstancesCommandInput,
  ...args: any
): Promise<ListDeploymentInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentInstances(input, ...args);
};
export async function* paginateListDeploymentInstances(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentInstancesCommandOutput;
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
