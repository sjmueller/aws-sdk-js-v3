
import { SFN } from "../SFN.ts";
import { SFNClient } from "../SFNClient.ts";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "../commands/ListExecutionsCommand.ts";
import { SFNPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SFNClient,
  input: ListExecutionsCommandInput,
  ...args: any
): Promise<ListExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExecutionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SFN,
  input: ListExecutionsCommandInput,
  ...args: any
): Promise<ListExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listExecutions(input, ...args);
};
export async function* listExecutionsPaginate(
  config: SFNPaginationConfiguration,
  input: ListExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListExecutionsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SFN) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SFNClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SFN | SFNClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
