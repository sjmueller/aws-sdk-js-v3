import { ElasticTranscoderClient } from "../ElasticTranscoderClient.ts";
import { ReadJobCommand, ReadJobCommandInput } from "../commands/ReadJobCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: ElasticTranscoderClient, input: ReadJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new ReadJobCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.Job.Status;
      };
      if (returnComparator() === "Complete") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Job.Status;
      };
      if (returnComparator() === "Canceled") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Job.Status;
      };
      if (returnComparator() === "Error") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilJobComplete instead. waitForJobComplete does not throw error in non-success cases.
 */
export const waitForJobComplete = async (
  params: WaiterConfiguration<ElasticTranscoderClient>,
  input: ReadJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to ReadJobCommand for polling.
 */
export const waitUntilJobComplete = async (
  params: WaiterConfiguration<ElasticTranscoderClient>,
  input: ReadJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
