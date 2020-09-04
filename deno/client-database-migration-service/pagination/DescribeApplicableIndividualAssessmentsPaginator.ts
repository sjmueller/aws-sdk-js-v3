import { DatabaseMigrationService } from "../DatabaseMigrationService.ts";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient.ts";
import {
  DescribeApplicableIndividualAssessmentsCommand,
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput,
} from "../commands/DescribeApplicableIndividualAssessmentsCommand.ts";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeApplicableIndividualAssessmentsCommandInput,
  ...args: any
): Promise<DescribeApplicableIndividualAssessmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeApplicableIndividualAssessmentsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeApplicableIndividualAssessmentsCommandInput,
  ...args: any
): Promise<DescribeApplicableIndividualAssessmentsCommandOutput> => {
  // @ts-ignore
  return await client.describeApplicableIndividualAssessments(input, ...args);
};
export async function* describeApplicableIndividualAssessmentsPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeApplicableIndividualAssessmentsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeApplicableIndividualAssessmentsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeApplicableIndividualAssessmentsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
