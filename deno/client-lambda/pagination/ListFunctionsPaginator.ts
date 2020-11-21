
import { Lambda } from "../Lambda.ts";
import { LambdaClient } from "../LambdaClient.ts";
import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "../commands/ListFunctionsCommand.ts";
import { LambdaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListFunctionsCommandInput,
  ...args: any
): Promise<ListFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFunctionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Lambda,
  input: ListFunctionsCommandInput,
  ...args: any
): Promise<ListFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.listFunctions(input, ...args);
};
export async function* paginateListFunctions(
  config: LambdaPaginationConfiguration,
  input: ListFunctionsCommandInput,
  ...additionalArguments: any
): Paginator<ListFunctionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFunctionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Lambda) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LambdaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Lambda | LambdaClient");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
