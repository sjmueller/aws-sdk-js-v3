import { Athena } from "../Athena.ts";
import { AthenaClient } from "../AthenaClient.ts";
import {
  ListQueryExecutionsCommand,
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "../commands/ListQueryExecutionsCommand.ts";
import { AthenaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListQueryExecutionsCommandInput,
  ...args: any
): Promise<ListQueryExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQueryExecutionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Athena,
  input: ListQueryExecutionsCommandInput,
  ...args: any
): Promise<ListQueryExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listQueryExecutions(input, ...args);
};
export async function* listQueryExecutionsPaginate(
  config: AthenaPaginationConfiguration,
  input: ListQueryExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListQueryExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListQueryExecutionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
