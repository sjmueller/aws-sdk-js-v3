import { CodeGuruProfiler } from "../CodeGuruProfiler.ts";
import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient.ts";
import {
  GetFindingsReportAccountSummaryCommand,
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput,
} from "../commands/GetFindingsReportAccountSummaryCommand.ts";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeGuruProfilerClient,
  input: GetFindingsReportAccountSummaryCommandInput,
  ...args: any
): Promise<GetFindingsReportAccountSummaryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFindingsReportAccountSummaryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeGuruProfiler,
  input: GetFindingsReportAccountSummaryCommandInput,
  ...args: any
): Promise<GetFindingsReportAccountSummaryCommandOutput> => {
  // @ts-ignore
  return await client.getFindingsReportAccountSummary(input, ...args);
};
export async function* paginateGetFindingsReportAccountSummary(
  config: CodeGuruProfilerPaginationConfiguration,
  input: GetFindingsReportAccountSummaryCommandInput,
  ...additionalArguments: any
): Paginator<GetFindingsReportAccountSummaryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetFindingsReportAccountSummaryCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruProfiler) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeGuruProfilerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruProfiler | CodeGuruProfilerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
