import { AuditManager } from "../AuditManager.ts";
import { AuditManagerClient } from "../AuditManagerClient.ts";
import {
  ListAssessmentsCommand,
  ListAssessmentsCommandInput,
  ListAssessmentsCommandOutput,
} from "../commands/ListAssessmentsCommand.ts";
import { AuditManagerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: ListAssessmentsCommandInput,
  ...args: any
): Promise<ListAssessmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssessmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: ListAssessmentsCommandInput,
  ...args: any
): Promise<ListAssessmentsCommandOutput> => {
  // @ts-ignore
  return await client.listAssessments(input, ...args);
};
export async function* paginateListAssessments(
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssessmentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AuditManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AuditManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AuditManager | AuditManagerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
