
import { ECR } from "../ECR.ts";
import { ECRClient } from "../ECRClient.ts";
import {
  GetLifecyclePolicyPreviewCommand,
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
} from "../commands/GetLifecyclePolicyPreviewCommand.ts";
import { ECRPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ECRClient,
  input: GetLifecyclePolicyPreviewCommandInput,
  ...args: any
): Promise<GetLifecyclePolicyPreviewCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLifecyclePolicyPreviewCommand(input), ...args);
};
const makePagedRequest = async (
  client: ECR,
  input: GetLifecyclePolicyPreviewCommandInput,
  ...args: any
): Promise<GetLifecyclePolicyPreviewCommandOutput> => {
  // @ts-ignore
  return await client.getLifecyclePolicyPreview(input, ...args);
};
export async function* paginateGetLifecyclePolicyPreview(
  config: ECRPaginationConfiguration,
  input: GetLifecyclePolicyPreviewCommandInput,
  ...additionalArguments: any
): Paginator<GetLifecyclePolicyPreviewCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetLifecyclePolicyPreviewCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECR | ECRClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
