
import { DeviceFarm } from "../DeviceFarm.ts";
import { DeviceFarmClient } from "../DeviceFarmClient.ts";
import {
  ListUniqueProblemsCommand,
  ListUniqueProblemsCommandInput,
  ListUniqueProblemsCommandOutput,
} from "../commands/ListUniqueProblemsCommand.ts";
import { DeviceFarmPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListUniqueProblemsCommandInput,
  ...args: any
): Promise<ListUniqueProblemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUniqueProblemsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListUniqueProblemsCommandInput,
  ...args: any
): Promise<ListUniqueProblemsCommandOutput> => {
  // @ts-ignore
  return await client.listUniqueProblems(input, ...args);
};
export async function* listUniqueProblemsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListUniqueProblemsCommandInput,
  ...additionalArguments: any
): Paginator<ListUniqueProblemsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListUniqueProblemsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
