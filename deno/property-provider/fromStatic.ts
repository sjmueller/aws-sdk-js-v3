import { Provider } from "../types/mod.ts";

export function fromStatic<T>(staticValue: T): Provider<T> {
  const promisified = Promise.resolve(staticValue);
  return () => promisified;
}
