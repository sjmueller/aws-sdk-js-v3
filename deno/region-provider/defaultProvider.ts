import { EnvConfiguration, fromEnv } from "./fromEnv.ts";
import {
  SharedConfigInit,
  fromSharedConfigFiles
} from "./fromSharedConfigFiles.ts";
import { chain, memoize } from "../property-provider/mod.ts";
import { Provider } from "../types/mod.ts";

export type RegionProviderConfiguration = EnvConfiguration & SharedConfigInit;

export const defaultProvider = (
  configuration: RegionProviderConfiguration = {}
): Provider<string> =>
  memoize(chain(fromEnv(configuration), fromSharedConfigFiles(configuration)));
