
import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  SearchProfilesCommand,
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput,
} from "../commands/SearchProfilesCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchProfilesCommandInput,
  ...args: any
): Promise<SearchProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchProfilesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchProfilesCommandInput,
  ...args: any
): Promise<SearchProfilesCommandOutput> => {
  // @ts-ignore
  return await client.searchProfiles(input, ...args);
};
export async function* paginateSearchProfiles(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchProfilesCommandInput,
  ...additionalArguments: any
): Paginator<SearchProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchProfilesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
