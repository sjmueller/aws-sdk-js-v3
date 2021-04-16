import { IotDeviceAdvisor } from "../IotDeviceAdvisor.ts";
import { IotDeviceAdvisorClient } from "../IotDeviceAdvisorClient.ts";
import {
  ListSuiteDefinitionsCommand,
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput,
} from "../commands/ListSuiteDefinitionsCommand.ts";
import { IotDeviceAdvisorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IotDeviceAdvisorClient,
  input: ListSuiteDefinitionsCommandInput,
  ...args: any
): Promise<ListSuiteDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSuiteDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IotDeviceAdvisor,
  input: ListSuiteDefinitionsCommandInput,
  ...args: any
): Promise<ListSuiteDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listSuiteDefinitions(input, ...args);
};
export async function* paginateListSuiteDefinitions(
  config: IotDeviceAdvisorPaginationConfiguration,
  input: ListSuiteDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSuiteDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSuiteDefinitionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IotDeviceAdvisor) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IotDeviceAdvisorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IotDeviceAdvisor | IotDeviceAdvisorClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
