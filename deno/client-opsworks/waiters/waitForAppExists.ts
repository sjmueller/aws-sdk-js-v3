import { OpsWorksClient } from "../OpsWorksClient.ts";
import { DescribeAppsCommand, DescribeAppsCommandInput } from "../commands/DescribeAppsCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: OpsWorksClient, input: DescribeAppsCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeAppsCommand(input));
    return { state: WaiterState.SUCCESS };
  } catch (exception) {
    return { state: WaiterState.FAILURE };
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeAppsCommand for polling.
 */
export const waitForAppExists = async (
  params: WaiterConfiguration<OpsWorksClient>,
  input: DescribeAppsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
