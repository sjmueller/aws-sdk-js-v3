
import { Provider } from "../types/mod.ts";

export interface Logins {
  [providerName: string]: string | Provider<string>;
}

export interface ResolvedLogins {
  [providerName: string]: string;
}
