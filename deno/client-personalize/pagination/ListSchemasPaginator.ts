import { Personalize } from "../Personalize.ts";
import { PersonalizeClient } from "../PersonalizeClient.ts";
import {
  ListSchemasCommand,
  ListSchemasCommandInput,
  ListSchemasCommandOutput,
} from "../commands/ListSchemasCommand.ts";
import { PersonalizePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListSchemasCommandInput,
  ...args: any
): Promise<ListSchemasCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSchemasCommand(input, ...args));
};
const makePagedRequest = async (
  client: Personalize,
  input: ListSchemasCommandInput,
  ...args: any
): Promise<ListSchemasCommandOutput> => {
  // @ts-ignore
  return await client.listSchemas(input, ...args);
};
export async function* listSchemasPaginate(
  config: PersonalizePaginationConfiguration,
  input: ListSchemasCommandInput,
  ...additionalArguments: any
): Paginator<ListSchemasCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSchemasCommandOutput;
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
