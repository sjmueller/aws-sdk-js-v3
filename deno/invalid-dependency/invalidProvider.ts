import { Provider } from "../types/mod.ts";
export const invalidProvider: (message: string) => Provider<any> = (message: string) => () => Promise.reject(message);
