
import { Personalize } from "../Personalize.ts";
import { PersonalizeClient } from "../PersonalizeClient.ts";
import {
  ListSolutionVersionsCommand,
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput,
} from "../commands/ListSolutionVersionsCommand.ts";
import { PersonalizePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListSolutionVersionsCommandInput,
  ...args: any
): Promise<ListSolutionVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSolutionVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Personalize,
  input: ListSolutionVersionsCommandInput,
  ...args: any
): Promise<ListSolutionVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listSolutionVersions(input, ...args);
};
export async function* listSolutionVersionsPaginate(
  config: PersonalizePaginationConfiguration,
  input: ListSolutionVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSolutionVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSolutionVersionsCommandOutput;
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
