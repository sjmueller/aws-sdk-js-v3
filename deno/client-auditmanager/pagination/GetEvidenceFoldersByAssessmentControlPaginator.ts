import { AuditManager } from "../AuditManager.ts";
import { AuditManagerClient } from "../AuditManagerClient.ts";
import {
  GetEvidenceFoldersByAssessmentControlCommand,
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentControlCommand.ts";
import { AuditManagerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  ...args: any
): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEvidenceFoldersByAssessmentControlCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  ...args: any
): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> => {
  // @ts-ignore
  return await client.getEvidenceFoldersByAssessmentControl(input, ...args);
};
export async function* paginateGetEvidenceFoldersByAssessmentControl(
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  ...additionalArguments: any
): Paginator<GetEvidenceFoldersByAssessmentControlCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEvidenceFoldersByAssessmentControlCommandOutput;
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
