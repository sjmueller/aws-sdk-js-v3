import { Health } from "../Health.ts";
import { HealthClient } from "../HealthClient.ts";
import {
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
} from "../commands/DescribeAffectedEntitiesCommand.ts";
import { HealthPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeAffectedEntitiesCommandInput,
  ...args: any
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAffectedEntitiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Health,
  input: DescribeAffectedEntitiesCommandInput,
  ...args: any
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.describeAffectedEntities(input, ...args);
};
export async function* paginateDescribeAffectedEntities(
  config: HealthPaginationConfiguration,
  input: DescribeAffectedEntitiesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAffectedEntitiesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAffectedEntitiesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Health) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HealthClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Health | HealthClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
