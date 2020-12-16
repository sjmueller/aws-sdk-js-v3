import { IAMClient } from "../IAMClient.ts";
import { GetInstanceProfileCommand, GetInstanceProfileCommandInput } from "../commands/GetInstanceProfileCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: IAMClient, input: GetInstanceProfileCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetInstanceProfileCommand(input));
    return { state: WaiterState.SUCCESS };
  } catch (exception) {
    if (exception.name && exception.name == "NoSuchEntityException") {
      return { state: WaiterState.RETRY };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetInstanceProfileCommand for polling.
 */
export const waitForInstanceProfileExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetInstanceProfileCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
