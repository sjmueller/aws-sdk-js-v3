
import { Forecast } from "../Forecast.ts";
import { ForecastClient } from "../ForecastClient.ts";
import {
  ListForecastsCommand,
  ListForecastsCommandInput,
  ListForecastsCommandOutput,
} from "../commands/ListForecastsCommand.ts";
import { ForecastPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListForecastsCommandInput,
  ...args: any
): Promise<ListForecastsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListForecastsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Forecast,
  input: ListForecastsCommandInput,
  ...args: any
): Promise<ListForecastsCommandOutput> => {
  // @ts-ignore
  return await client.listForecasts(input, ...args);
};
export async function* listForecastsPaginate(
  config: ForecastPaginationConfiguration,
  input: ListForecastsCommandInput,
  ...additionalArguments: any
): Paginator<ListForecastsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListForecastsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Forecast) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ForecastClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Forecast | ForecastClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
