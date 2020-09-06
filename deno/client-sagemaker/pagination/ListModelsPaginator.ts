
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListModelsCommandInput,
  ...args: any
): Promise<ListModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListModelsCommandInput,
  ...args: any
): Promise<ListModelsCommandOutput> => {
  // @ts-ignore
  return await client.listModels(input, ...args);
};
export async function* listModelsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListModelsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
