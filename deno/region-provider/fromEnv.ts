import { ProviderError } from "../property-provider/mod.ts";
import { Provider } from "../types/mod.ts";

export const ENV_REGION = "AWS_REGION";

export interface EnvConfiguration {
  environmentVariableName?: string;
}

export const fromEnv = ({
  environmentVariableName = ENV_REGION
}: EnvConfiguration = {}): Provider<string> => async () => {
  const envRegion = process.env[environmentVariableName];
  if (envRegion) {
    return envRegion;
  }

  throw new ProviderError(
    `No value defined for the ${environmentVariableName} environment variable`
  );
};
