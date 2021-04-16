import { EKS } from "../EKS.ts";
import { EKSClient } from "../EKSClient.ts";
import {
  ListIdentityProviderConfigsCommand,
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
} from "../commands/ListIdentityProviderConfigsCommand.ts";
import { EKSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: ListIdentityProviderConfigsCommandInput,
  ...args: any
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdentityProviderConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EKS,
  input: ListIdentityProviderConfigsCommandInput,
  ...args: any
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listIdentityProviderConfigs(input, ...args);
};
export async function* paginateListIdentityProviderConfigs(
  config: EKSPaginationConfiguration,
  input: ListIdentityProviderConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListIdentityProviderConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIdentityProviderConfigsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
