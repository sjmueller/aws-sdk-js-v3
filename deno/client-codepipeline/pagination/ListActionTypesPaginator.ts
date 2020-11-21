
import { CodePipeline } from "../CodePipeline.ts";
import { CodePipelineClient } from "../CodePipelineClient.ts";
import {
  ListActionTypesCommand,
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput,
} from "../commands/ListActionTypesCommand.ts";
import { CodePipelinePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodePipelineClient,
  input: ListActionTypesCommandInput,
  ...args: any
): Promise<ListActionTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActionTypesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodePipeline,
  input: ListActionTypesCommandInput,
  ...args: any
): Promise<ListActionTypesCommandOutput> => {
  // @ts-ignore
  return await client.listActionTypes(input, ...args);
};
export async function* paginateListActionTypes(
  config: CodePipelinePaginationConfiguration,
  input: ListActionTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListActionTypesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListActionTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodePipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodePipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodePipeline | CodePipelineClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
