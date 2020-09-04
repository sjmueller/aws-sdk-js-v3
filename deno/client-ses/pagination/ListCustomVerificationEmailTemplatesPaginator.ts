import { SES } from "../SES.ts";
import { SESClient } from "../SESClient.ts";
import {
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "../commands/ListCustomVerificationEmailTemplatesCommand.ts";
import { SESPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SESClient,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...args: any
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomVerificationEmailTemplatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: SES,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...args: any
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listCustomVerificationEmailTemplates(input, ...args);
};
export async function* listCustomVerificationEmailTemplatesPaginate(
  config: SESPaginationConfiguration,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomVerificationEmailTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListCustomVerificationEmailTemplatesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SES) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SESClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SES | SESClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
