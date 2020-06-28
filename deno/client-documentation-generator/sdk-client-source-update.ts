import { sep } from "path.ts";
import * as ts from "typescript.ts";
import {
  ConverterComponent,
  Component
} from "typedoc/dist/lib/converter/components.ts";
import { Converter } from "typedoc/dist/lib/converter.ts";
import { Context } from "typedoc/dist/lib/converter/context.ts";
import { SourceFile } from "typedoc/dist/lib/models.ts";

const basePathsToIgnore = ["model"];

@Component({ name: "SdkClientSourceUpdatePlugin" })
export class SdkClientSourceUpdatePlugin extends ConverterComponent {
  initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_BEGIN]: this.onBegin
    });
  }

  /**
   * Purge source files we wish to ignore.
   * @param context
   */
  onBegin(context: Context) {
    const program = context.program;
    const basePath = (program as any).getCommonSourceDirectory();
    const sourceFiles: ts.SourceFile[] = <any>program.getSourceFiles();
    for (let i = sourceFiles.length - 1; i >= 0; i--) {
      const sourceFile = sourceFiles[i];
      if (sourceFile.fileName.indexOf(basePath) !== 0) {
        continue;
      }

      let localPath = sourceFile.fileName.substring(basePath.length);
      localPath = localPath.split(sep)[0];
      if (!basePathsToIgnore.every(basePath => basePath !== localPath)) {
        // the file should be ignored, so remove it
        sourceFiles.splice(i, 1);
      }
    }
  }
}
