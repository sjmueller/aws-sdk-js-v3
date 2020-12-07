import { Signer } from "../Signer.ts";
import { SignerClient } from "../SignerClient.ts";
import {
  ListSigningJobsCommand,
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput,
} from "../commands/ListSigningJobsCommand.ts";
import { SignerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SignerClient,
  input: ListSigningJobsCommandInput,
  ...args: any
): Promise<ListSigningJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSigningJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Signer,
  input: ListSigningJobsCommandInput,
  ...args: any
): Promise<ListSigningJobsCommandOutput> => {
  // @ts-ignore
  return await client.listSigningJobs(input, ...args);
};
export async function* paginateListSigningJobs(
  config: SignerPaginationConfiguration,
  input: ListSigningJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListSigningJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSigningJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Signer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SignerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Signer | SignerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
