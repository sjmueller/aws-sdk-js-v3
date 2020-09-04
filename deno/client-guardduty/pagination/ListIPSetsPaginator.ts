import { GuardDuty } from "../GuardDuty.ts";
import { GuardDutyClient } from "../GuardDutyClient.ts";
import { ListIPSetsCommand, ListIPSetsCommandInput, ListIPSetsCommandOutput } from "../commands/ListIPSetsCommand.ts";
import { GuardDutyPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListIPSetsCommandInput,
  ...args: any
): Promise<ListIPSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIPSetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: GuardDuty,
  input: ListIPSetsCommandInput,
  ...args: any
): Promise<ListIPSetsCommandOutput> => {
  // @ts-ignore
  return await client.listIPSets(input, ...args);
};
export async function* listIPSetsPaginate(
  config: GuardDutyPaginationConfiguration,
  input: ListIPSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListIPSetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListIPSetsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
