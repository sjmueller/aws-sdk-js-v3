import { HealthLake } from "../HealthLake.ts";
import { HealthLakeClient } from "../HealthLakeClient.ts";
import {
  ListFHIRDatastoresCommand,
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput,
} from "../commands/ListFHIRDatastoresCommand.ts";
import { HealthLakePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HealthLakeClient,
  input: ListFHIRDatastoresCommandInput,
  ...args: any
): Promise<ListFHIRDatastoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFHIRDatastoresCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: HealthLake,
  input: ListFHIRDatastoresCommandInput,
  ...args: any
): Promise<ListFHIRDatastoresCommandOutput> => {
  // @ts-ignore
  return await client.listFHIRDatastores(input, ...args);
};
export async function* paginateListFHIRDatastores(
  config: HealthLakePaginationConfiguration,
  input: ListFHIRDatastoresCommandInput,
  ...additionalArguments: any
): Paginator<ListFHIRDatastoresCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFHIRDatastoresCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof HealthLake) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HealthLakeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected HealthLake | HealthLakeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
