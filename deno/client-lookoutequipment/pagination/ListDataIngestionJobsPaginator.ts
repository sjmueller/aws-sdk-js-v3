import { LookoutEquipment } from "../LookoutEquipment.ts";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient.ts";
import {
  ListDataIngestionJobsCommand,
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput,
} from "../commands/ListDataIngestionJobsCommand.ts";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListDataIngestionJobsCommandInput,
  ...args: any
): Promise<ListDataIngestionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataIngestionJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutEquipment,
  input: ListDataIngestionJobsCommandInput,
  ...args: any
): Promise<ListDataIngestionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDataIngestionJobs(input, ...args);
};
export async function* paginateListDataIngestionJobs(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListDataIngestionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataIngestionJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataIngestionJobsCommandOutput;
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
