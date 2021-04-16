import { Fis } from "../Fis.ts";
import { FisClient } from "../FisClient.ts";
import {
  ListExperimentTemplatesCommand,
  ListExperimentTemplatesCommandInput,
  ListExperimentTemplatesCommandOutput,
} from "../commands/ListExperimentTemplatesCommand.ts";
import { FisPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FisClient,
  input: ListExperimentTemplatesCommandInput,
  ...args: any
): Promise<ListExperimentTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExperimentTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Fis,
  input: ListExperimentTemplatesCommandInput,
  ...args: any
): Promise<ListExperimentTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listExperimentTemplates(input, ...args);
};
export async function* paginateListExperimentTemplates(
  config: FisPaginationConfiguration,
  input: ListExperimentTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListExperimentTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExperimentTemplatesCommandOutput;
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
