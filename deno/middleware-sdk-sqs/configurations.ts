
import { Hash } from "../types/mod.ts";

export interface PreviouslyResolved {
  md5: { new (): Hash };
}
