import { AbortSignal } from "../../abort-controller/mod.ts";

import { WaiterResult, WaiterState } from "../waiter.ts";

export const sleep = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const waiterTimeout = async (seconds: number): Promise<WaiterResult> => {
  await sleep(seconds);
  return { state: WaiterState.RETRY };
};

export const abortTimeout = async (abortSignal: AbortSignal): Promise<WaiterResult> => {
  return new Promise((resolve) => {
    abortSignal.onabort = () => resolve({ state: WaiterState.ABORTED });
  });
};
