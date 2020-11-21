
import { CodeCommit } from "../CodeCommit.ts";
import { CodeCommitClient } from "../CodeCommitClient.ts";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
} from "../commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand.ts";
import { CodeCommitPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...args: any
): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedApprovalRuleTemplatesForRepositoryCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeCommit,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...args: any
): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> => {
  // @ts-ignore
  return await client.listAssociatedApprovalRuleTemplatesForRepository(input, ...args);
};
export async function* paginateListAssociatedApprovalRuleTemplatesForRepository(
  config: CodeCommitPaginationConfiguration,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
