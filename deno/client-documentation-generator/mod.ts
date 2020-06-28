import { ConverterComponent } from "typedoc/dist/lib/converter/components.ts";
import { PluginHost } from "typedoc/dist/lib/utils.ts";
import { SdkClientTocPlugin } from "./sdk-client-toc-plugin.ts";
import { SdkClientSourceUpdatePlugin } from "./sdk-client-source-update.ts";
import { SdkClientRenameGlobalPlugin } from "./sdk-client-rename-global.ts";

/**
 *
 * @param pluginHost An instance of PluginHost.
 */
module.exports = function load(pluginHost: PluginHost) {
  const application = pluginHost.owner;

  // Add renderer plugins
  application.renderer.addComponent(
    "SdkClientTocPlugin",
    SdkClientTocPlugin as any
  );
  application.renderer.addComponent(
    "SdkClientRenameGlobalPlugin",
    SdkClientRenameGlobalPlugin as any
  );

  // Add converter plugins
  application.converter.addComponent(
    "SdkClientSourceUpdatePlugin",
    SdkClientSourceUpdatePlugin as any
  );
};
