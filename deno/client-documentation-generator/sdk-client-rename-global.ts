import * as ts from "typescript.ts";
import {
  Component,
  RendererComponent
} from "typedoc/dist/lib/output/components.ts";
import { RendererEvent } from "typedoc/dist/lib/output/events.ts";
import { NavigationPlugin } from "typedoc/dist/lib/output/plugins.ts";

@Component({ name: "SdkClientRenameGlobal" })
export class SdkClientRenameGlobalPlugin extends RendererComponent {
  private navigationPlugin: NavigationPlugin;
  initialize() {
    this.navigationPlugin = <any>(
      this.owner.application.renderer.getComponent("navigation")
    );
    this.listenTo(this.owner, {
      [RendererEvent.BEGIN]: this.onRenderedBegin
    });
  }

  onRenderedBegin(event: RendererEvent) {
    const navigationItem = this.navigationPlugin.navigation;
    if (!navigationItem) {
      return;
    }

    navigationItem.children.forEach(item => {
      if (item.isGlobals && item.title === "Globals") {
        item.title = "Public Exports";
      }
    });
  }
}
