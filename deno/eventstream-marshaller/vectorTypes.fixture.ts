import { Message } from "./Message.ts";

export interface NegativeTestVector {
  expectation: "failure";
  encoded: Uint8Array;
}

export interface PositiveTestVector {
  expectation: "success";
  encoded: Uint8Array;
  decoded: Message;
}

export type TestVector = NegativeTestVector | PositiveTestVector;

export interface TestVectors {
  [vectorName: string]: TestVector;
}
