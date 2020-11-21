
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListEndpointConfigsCommand,
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput,
} from "../commands/ListEndpointConfigsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListEndpointConfigsCommandInput,
  ...args: any
): Promise<ListEndpointConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEndpointConfigsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListEndpointConfigsCommandInput,
  ...args: any
): Promise<ListEndpointConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listEndpointConfigs(input, ...args);
};
export async function* paginateListEndpointConfigs(
  config: SageMakerPaginationConfiguration,
  input: ListEndpointConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListEndpointConfigsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEndpointConfigsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
