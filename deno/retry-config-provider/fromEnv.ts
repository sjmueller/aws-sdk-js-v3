import { ProviderError } from "../property-provider/mod.ts";
import { Provider } from "../types/mod.ts";

export const fromEnv = (envVarName: string): Provider<string> => async () => {
  const envVar = process.env[envVarName];
  if (envVar) {
    return envVar;
  }

  throw new ProviderError(
    `No value defined for the ${envVarName} environment variable`
  );
};
