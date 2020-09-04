import { Personalize } from "../Personalize.ts";
import { PersonalizeClient } from "../PersonalizeClient.ts";
import {
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "../commands/ListDatasetImportJobsCommand.ts";
import { PersonalizePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListDatasetImportJobsCommandInput,
  ...args: any
): Promise<ListDatasetImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetImportJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Personalize,
  input: ListDatasetImportJobsCommandInput,
  ...args: any
): Promise<ListDatasetImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDatasetImportJobs(input, ...args);
};
export async function* listDatasetImportJobsPaginate(
  config: PersonalizePaginationConfiguration,
  input: ListDatasetImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetImportJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDatasetImportJobsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Personalize) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
