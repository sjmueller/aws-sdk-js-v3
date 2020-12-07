import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import { ListSkillsCommand, ListSkillsCommandInput, ListSkillsCommandOutput } from "../commands/ListSkillsCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListSkillsCommandInput,
  ...args: any
): Promise<ListSkillsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSkillsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListSkillsCommandInput,
  ...args: any
): Promise<ListSkillsCommandOutput> => {
  // @ts-ignore
  return await client.listSkills(input, ...args);
};
export async function* paginateListSkills(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsCommandInput,
  ...additionalArguments: any
): Paginator<ListSkillsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSkillsCommandOutput;
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
