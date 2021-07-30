import { Route53RecoveryReadiness } from "../Route53RecoveryReadiness.ts";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient.ts";
import {
  ListRecoveryGroupsCommand,
  ListRecoveryGroupsCommandInput,
  ListRecoveryGroupsCommandOutput,
} from "../commands/ListRecoveryGroupsCommand.ts";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53RecoveryReadinessClient,
  input: ListRecoveryGroupsCommandInput,
  ...args: any
): Promise<ListRecoveryGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecoveryGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53RecoveryReadiness,
  input: ListRecoveryGroupsCommandInput,
  ...args: any
): Promise<ListRecoveryGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listRecoveryGroups(input, ...args);
};
export async function* paginateListRecoveryGroups(
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListRecoveryGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListRecoveryGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecoveryGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53RecoveryReadiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53RecoveryReadinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53RecoveryReadiness | Route53RecoveryReadinessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
