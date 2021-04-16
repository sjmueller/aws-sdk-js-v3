import { Fis } from "../Fis.ts";
import { FisClient } from "../FisClient.ts";
import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "../commands/ListExperimentsCommand.ts";
import { FisPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FisClient,
  input: ListExperimentsCommandInput,
  ...args: any
): Promise<ListExperimentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExperimentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Fis,
  input: ListExperimentsCommandInput,
  ...args: any
): Promise<ListExperimentsCommandOutput> => {
  // @ts-ignore
  return await client.listExperiments(input, ...args);
};
export async function* paginateListExperiments(
  config: FisPaginationConfiguration,
  input: ListExperimentsCommandInput,
  ...additionalArguments: any
): Paginator<ListExperimentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExperimentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Fis) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FisClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Fis | FisClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
