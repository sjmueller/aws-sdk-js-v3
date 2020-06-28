import { ProviderError } from "../property-provider/mod.ts";
import {
  loadSharedConfigFiles,
  SharedConfigFiles,
  SharedConfigInit as BaseSharedConfigInit
} from "../shared-ini-file-loader/mod.ts";
import { Provider } from "../types/mod.ts";

const DEFAULT_PROFILE = "default";
export const ENV_PROFILE = "AWS_PROFILE";

export interface SharedConfigInit extends BaseSharedConfigInit {
  /**
   * The configuration profile to use.
   */
  profile?: string;

  /**
   * A promise that will be resolved with loaded and parsed credentials files.
   * Used to avoid loading shared config files multiple times.
   */
  loadedConfig?: Promise<SharedConfigFiles>;
}

export const fromSharedConfigFiles = (
  init: SharedConfigInit = {},
  configKey: string
): Provider<string> => async () => {
  const {
    loadedConfig = loadSharedConfigFiles(init),
    profile = process.env[ENV_PROFILE] || DEFAULT_PROFILE
  } = init;

  const { configFile } = await loadedConfig;
  const { [configKey]: configValue } = configFile[profile] || {};
  if (typeof configValue === "string") {
    return configValue;
  }

  throw new ProviderError(
    `No ${configKey} found for profile ${profile} in SDK configuration files`
  );
};
