const fsx = require("fs-extra");
const path = require("path");

async function copyPackage(packageName, packageDir, destinationDir) {
  if (packageName.startsWith("deno-")) {
    // skip here - copy instead at the end
    return;
  }

  await fsx.mkdirp(path.join(destinationDir, packageName));

  let hasSrc = false;
  let hasTsFiles = false;
  for (const dpath of await fsx.readdir(packageDir)) {
    if (dpath === "src") {
      hasSrc = true;
    }
    if (dpath.endsWith(".ts")) {
      hasTsFiles = true;
    }
  }
  if (hasSrc && hasTsFiles) {
    throw new Error("has mix of inline srcs and src dir");
  }

  if (hasSrc) {
    return copyPackage(packageName, path.join(packageDir, "src"), destinationDir);
  }

  for (const dpath of await fsx.readdir(packageDir)) {
    if (dpath.endsWith(".spec.ts")) {
      continue;
    }
    if (dpath === "package.json") {
      let topath = dpath;
      await fsx.copyFile(path.join(packageDir, dpath), path.join(destinationDir, packageName, topath));
    }
    if (dpath.endsWith(".ts")) {
      let topath = dpath;

      // take the browser runtime config
      if (dpath === "runtimeConfig.browser.ts") {
        topath = "runtimeConfig.ts";
      }

      // skip the other runtime configs
      if (dpath === "runtimeConfig.native.ts") {
        continue;
      }
      if (dpath === "runtimeConfig.ts") {
        continue;
      }
      if (dpath === "index.ts") {
        topath = "mod.ts";
      }

      await fsx.copyFile(path.join(packageDir, dpath), path.join(destinationDir, packageName, topath));
      continue;
    }

    const stat = await fsx.stat(path.join(packageDir, dpath));

    if (stat.isDirectory()) {
      if (dpath.endsWith("node_modules")) {
        continue;
      }
      await fsx.copy(path.join(packageDir, dpath), path.join(destinationDir, packageName, dpath));
    }
  }
}

/** Overwrite some packages with a deno implementation
 * instead of editing the node implementation
 */
async function copyDenoPackage(packageName, packageDir, destinationDir) {
  if (packageName.startsWith("deno-")) {
    console.log(packageName, packageDir);
    const resultPackageName = packageName.replace(/^deno-/g, "");
    await fsx.mkdirp(path.join(destinationDir, resultPackageName));
    await fsx.copy(packageDir, path.join(destinationDir, resultPackageName));
    return;
  }
}

async function denoifyTree(tpath, depth) {
  const stat = await fsx.stat(tpath);
  if (stat.isDirectory()) {
    for (const dpath of await fsx.readdir(tpath)) {
      await denoifyTree(path.join(tpath, dpath), depth + 1);
    }
    return;
  }
  await denoifyTsFile(tpath, depth);
}

// fixup imports for deno and also refer any @aws- imports to the local copy
async function denoifyTsFile(file, depth) {
  //console.log("read file ", file);
  const fileContent = await fsx.readFile(file);
  const lines = fileContent.toString().split("\n");

  const extraHeaderLines = {};
  const output = [];

  let state = "nothing";
  // very fragile line & regex based fixer-upper:   assuming fairly pretty source lines
  for (const line of lines) {
    let replaced = line;

    if (line.match(/ Buffer/)) {
      if (depth === 3) {
        extraHeaderLines["buffer"] = 'import { Buffer } from "../../buffer/mod.ts";';
      } else if (depth === 2) {
        extraHeaderLines["buffer"] = 'import { Buffer } from "../buffer/mod.ts";';
      } else {
        throw new Error(`Error fixing type Buffer for import from ${file}`);
      }
    }

    if (line === 'import { Sha256 } from "@aws-crypto/sha256-browser";') {
      replaced = 'import { Hash } from "https://jspm.dev/@aws-sdk/hash-node";';
      output.push(replaced);
      continue;
    }
    if (line.match(/sha256: Sha256,/)) {
      replaced = line.replace("Sha256", 'Hash.bind(null, "sha256")');
    }

    if (line === 'import packageInfo from "./package.json";') {
      const pkgjson = await fsx.readJson(path.join(path.dirname(file), "package.json"));
      output.push(`const name = "${pkgjson.name}";`);
      output.push(`const version = "${pkgjson.version}";`);
      continue;
    }

    if (line.match(/tagValueProcessor: \(val, tagName\) => decodeEscapedXML\(val\),/)) {
      replaced = line.replace("(val, tagName)", "(val: string)");
    }

    if (line.match(/import \{ defaultUserAgent }\ from /)) {
      continue;
    }
    if (line.match(/defaultUserAgent: defaultUserAgent\(packageInfo\.name, packageInfo\.version\),/)) {
      replaced = line.replace(
        "defaultUserAgent(packageInfo.name, packageInfo.version)",
        "`aws-sdk-js-v3-${name}/${version}`"
      );
    }

    if (state === "nothing") {
      const match = line.match(/^[ ]*import/);
      if (match) {
        state = "import";
      }
    }
    if (state === "nothing") {
      const match = line.match(/^[ ]*export/);
      if (match) {
        state = "export";
      }
    }

    if (state === "import" || state === "export") {
      const match = line.match(/^(.*)from[ ]+("|')([^"']+)("|');/);
      if (match) {
        const importLhs = match[1];
        const importFrom = match[3];

        state = "nothing";

        let relpath = "";
        for (let i = 1; i < depth; ++i) {
          relpath = relpath + "../";
        }

        const importFromAWSSDKmatch = importFrom.match(/@aws-sdk\/(.*)/);
        if (importFromAWSSDKmatch) {
          if (depth === 0) {
            throw new Error(`denoifyTsFile ${file} - unexpected import to @aws-sdk at depth 0`);
          }

          const checkAt = path.resolve(path.join(file, "..", `${relpath}${importFromAWSSDKmatch[1]}/mod.ts`));
          const exists = await fsx.exists(checkAt);
          if (!exists) {
            throw new Error(`denoifyTsFile ${file} - Cannot find ${checkAt}`);
          }
          replaced = `${match[1]}from "${relpath}${importFromAWSSDKmatch[1]}/mod.ts";`;
        } else {
          //import { Readable } from "stream.ts";
          const absImportFromMatch = importFrom.match(/^([^.].*)/);

          if (absImportFromMatch) {
            if (importFrom === "uuid") {
              replaced = `${match[1]}from "${relpath}uuid/mod.ts";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "fast-xml-parser") {
              replaced = `${match[1]}from "https://jspm.dev/fast-xml-parser";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "stream") {
              // import { Readable } from "stream.ts"; -> type only
              if (line === 'import { Readable } from "stream";') {
                replaced = "type Readable = any;";
                output.push(replaced);
                continue;
              }
            } else if (importFrom === "fs") {
              replaced = `${match[1]}from "https://deno.land/std@0.68.0/node/fs.ts";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "os") {
              replaced = `${match[1]}from "https://deno.land/std@0.68.0/node/os.ts";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "path") {
              replaced = `${match[1]}from "https://deno.land/std@0.68.0/node/path.ts";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "url") {
              //...
            } else if (importFrom === "http") {
              //...
            } else if (importFrom === "buffer") {
              //...
            } else if (importFrom === "@aws-crypto/crc32") {
              replaced = `${match[1]}from "https://jspm.dev/@aws-crypto/crc32";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "http2") {
              //...
            } else if (importFrom === "https") {
              //...
            } else if (importFrom === "net") {
              //...
            } else {
              //throw new Error(`Absolute import of: |${importfrom}|`);
              //console.log(`Absolute import of: |${importfrom}|`);
            }
          }

          if (!importFrom.endsWith(".ts")) {
            replaced = `${importLhs}from "${importFrom}.ts";`;
          }
        }
      }
    }

    output.push(replaced);
  }

  const outputContent = Object.values(extraHeaderLines).join("\n") + "\n" + output.join("\n");
  await fsx.writeFile(file, outputContent);
}

async function copyToDeno(sourceDirs, destinationDir) {
  await fsx.emptyDir(destinationDir);

  for (const packagesDir of sourceDirs) {
    for (const package of await fsx.readdir(packagesDir)) {
      // (using the browser flavoured implementations)
      // skip implementation packages for native and node
      if (package.endsWith("native")) {
        continue;
      }
      if (package.endsWith("node")) {
        if (package === "credential-provider-node") {
          // lets see whats in it
        } else {
          // skip
          continue;
        }
      }
      if (package.startsWith("node")) {
        if (package === "node-config-provider") {
          // lets see whats in it
        } else {
          // skip
          continue;
        }
      }
      if (package.endsWith("client-documentation-generator")) {
        continue;
      }
      /*if (package.endsWith("credential-provider-process")) {
        continue;
      }*/

      try {
        await copyPackage(package, path.join(packagesDir, package), destinationDir);
      } catch (err) {
        console.log(`Error from copyPackage ${package}`);
        throw err;
      }
    }
  }

  await denoifyTree(destinationDir, 0);

  /** Overwrite some packages with a deno implementation
   * instead of editing the node implementation
   */
  for (const packagesDir of sourceDirs) {
    for (const package of await fsx.readdir(packagesDir)) {
      try {
        await copyDenoPackage(package, path.join(packagesDir, package), destinationDir);
      } catch (err) {
        console.log(`Error from copyDenoPackage ${package}`);
        throw err;
      }
    }
  }
}

if (require.main === module) {
  (async () => {
    await copyToDeno(["./clients", "./packages"], "./deno");
  })();
}

module.exports = {
  copyToDeno,
};
