
import { CodeDeploy } from "../CodeDeploy.ts";
import { CodeDeployClient } from "../CodeDeployClient.ts";
import {
  ListDeploymentGroupsCommand,
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput,
} from "../commands/ListDeploymentGroupsCommand.ts";
import { CodeDeployPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentGroupsCommandInput,
  ...args: any
): Promise<ListDeploymentGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListDeploymentGroupsCommandInput,
  ...args: any
): Promise<ListDeploymentGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentGroups(input, ...args);
};
export async function* listDeploymentGroupsPaginate(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDeploymentGroupsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof CodeDeploy) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeDeployClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeDeploy | CodeDeployClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
