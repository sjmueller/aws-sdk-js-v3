
import { EMR } from "../EMR.ts";
import { EMRClient } from "../EMRClient.ts";
import {
  ListInstanceFleetsCommand,
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput,
} from "../commands/ListInstanceFleetsCommand.ts";
import { EMRPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: EMRClient,
  input: ListInstanceFleetsCommandInput,
  ...args: any
): Promise<ListInstanceFleetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceFleetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: EMR,
  input: ListInstanceFleetsCommandInput,
  ...args: any
): Promise<ListInstanceFleetsCommandOutput> => {
  // @ts-ignore
  return await client.listInstanceFleets(input, ...args);
};
export async function* paginateListInstanceFleets(
  config: EMRPaginationConfiguration,
  input: ListInstanceFleetsCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceFleetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceFleetsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
