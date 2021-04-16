import { LookoutEquipment } from "../LookoutEquipment.ts";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient.ts";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "../commands/ListDatasetsCommand.ts";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListDatasetsCommandInput,
  ...args: any
): Promise<ListDatasetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutEquipment,
  input: ListDatasetsCommandInput,
  ...args: any
): Promise<ListDatasetsCommandOutput> => {
  // @ts-ignore
  return await client.listDatasets(input, ...args);
};
export async function* paginateListDatasets(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListDatasetsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LookoutEquipment) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LookoutEquipmentClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LookoutEquipment | LookoutEquipmentClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
