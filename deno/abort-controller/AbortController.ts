import { AbortController as IAbortController } from "../types/mod.ts";
import { AbortSignal } from "./AbortSignal.ts";

export class AbortController implements IAbortController {
  public readonly signal: AbortSignal = new AbortSignal();

  abort(): void {
    this.signal.abort();
  }
}
