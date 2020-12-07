const fsx = require("fs-extra");
const path = require("path");

const DENO_STD_VERSION = "0.79.0";

async function copyPackage(packageName, packageDir, destinationDir) {
  if (packageName.endsWith("-deno")) {
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
    if (dpath === "e2e") {
      continue;
    }
    if (dpath === "package.json") {
      let topath = dpath;
      await fsx.copyFile(path.join(packageDir, dpath), path.join(destinationDir, packageName, topath));
    }
    if (dpath.endsWith(".ts")) {
      let topath = dpath;

      // skip the other runtime configs
      if (dpath === "runtimeConfig.native.ts") {
        continue;
      }
      if (dpath === "runtimeConfig.browser.ts") {
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

// Overwrite some packages with a deno implementation instead of editing the node implementation
async function copyDenoPackage(packageName, packageDir, destinationDir) {
  const resultPackageName = packageName.replace(/-deno$/g, "");
  await fsx.mkdirp(path.join(destinationDir, resultPackageName));
  await fsx.copy(packageDir, path.join(destinationDir, resultPackageName));
}

async function copyDenoPackages(sourceDirs, destinationDir) {
  for (const packagesDir of sourceDirs) {
    for (const packageName of await fsx.readdir(packagesDir)) {
      if (!packageName.endsWith("-deno")) {
        continue;
      }
      await copyDenoPackage(packageName, path.join(packagesDir, packageName), destinationDir);
    }
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
  const fileContent = await fsx.readFile(file);
  const lines = fileContent.toString().split("\n");

  const extraHeaderLines = {};
  const output = [];

  let state = "nothing";

  const isRuntimeConfig = file.endsWith("/runtimeConfig.ts");

  // very fragile line & regex based fixer-upper:   assuming fairly pretty source lines
  for (const line of lines) {
    let replaced = line;

    if (line.match(/\bBuffer\b/)) {
      extraHeaderLines["buffer"] = `import { Buffer } from "https://deno.land/std@${DENO_STD_VERSION}/node/buffer.ts";`;
    }
    if (line.match(/\bprocess\b/)) {
      extraHeaderLines["process"] = `import process from "https://deno.land/std@${DENO_STD_VERSION}/node/process.ts";`;
    }

    if (
      line === 'import { Hash } from "@aws-sdk/hash-node";' ||
      line === 'import { Sha256 } from "@aws-crypto/sha256-browser";'
    ) {
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
        "`aws-sdk-js-v3-deno-${name}/${version}`"
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
            console.error(`denoifyTsFile ${file} - Cannot find ${checkAt}`);
          }
          replaced = `${match[1]}from "${relpath}${importFromAWSSDKmatch[1]}/mod.ts";`;
        } else {
          const absImportFromMatch = importFrom.match(/^([^.].*)/);

          if (absImportFromMatch) {
            if (importFrom.startsWith("https://deno.land/std")) {
              // ignore
            } else if (importFrom === "uuid") {
              replaced = `${match[1]}from "${relpath}uuid/mod.ts";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "fast-xml-parser") {
              replaced = `${match[1]}from "https://jspm.dev/fast-xml-parser";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "stream") {
              if (line === 'import { Readable } from "stream";') {
                // type only
                replaced = "type Readable = any;";
                output.push(replaced);
                continue;
              }
            } else if (importFrom === "fs") {
              replaced = `${match[1]}from "https://deno.land/std@${DENO_STD_VERSION}/node/fs.ts";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "os") {
              replaced = `${match[1]}from "https://deno.land/std@${DENO_STD_VERSION}/node/os.ts";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "path") {
              replaced = `${match[1]}from "https://deno.land/std@${DENO_STD_VERSION}/node/path.ts";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "crypto") {
              continue;
            } else if (importFrom === "url") {
              continue;
            } else if (importFrom === "http") {
              // TODO
            } else if (importFrom === "buffer") {
              continue;
            } else if (importFrom === "@aws-crypto/crc32") {
              replaced = `${match[1]}from "https://jspm.dev/@aws-crypto/crc32";`;
              output.push(replaced);
              continue;
            } else if (importFrom === "http2") {
              // TODO
            } else if (importFrom === "https") {
              // TODO
            } else if (importFrom === "net") {
              // TODO
            } else if (importFrom === "nock") {
              // TODO
            } else if (importFrom === "child_process") {
              continue;
            } else if (importFrom === "process") {
              continue;
            } else if (importFrom === "stream") {
              // TODO
            } else {
              console.error(`Absolute import of: ${importFrom} (${file})`);
            }
          }

          if (!importFrom.endsWith(".ts")) {
            replaced = `${importLhs}from "${importFrom}.ts";`;
          }
        }
      }
    }

    if (isRuntimeConfig) {
      let match;
      if ((match = line.match(/runtime: "node"/))) {
        replaced = line.replace(match[0], 'runtime: "deno"');
      }

      // Use fetch API instead of http module
      else if ((match = line.match(/import .* NodeHttpHandler,? .* from .*/))) {
        replaced = line.replace(
          match[0],
          'import { FetchHttpHandler, streamCollector } from "../fetch-http-handler/mod.ts";'
        );
      } else if ((match = line.match(/requestHandler: *new NodeHttpHandler\(/))) {
        replaced = line.replace(match[0], "requestHandler: new FetchHttpHandler(");
      }

      // Use blobHasher instead of fileStreamHasher
      else if ((match = line.match(/import .* fileStreamHasher,? .* from .*/))) {
        replaced = line.replace(match[0], 'import { blobHasher as streamHasher } from "../hash-blob-browser/mod.ts";');
      }

      // Use eventstream-serde-browser
      else if ((match = line.match(/import .* eventStreamSerdeProvider,? .* from .*/))) {
        replaced = line.replace(
          match[0],
          'import { eventStreamSerdeProvider } from "../eventstream-serde-browser/mod.ts";'
        );
      }

      // Use url-parser-browser
      else if ((match = line.match(/import .* parseUrl,? .* from .*/))) {
        replaced = line.replace(match[0], 'import { parseUrl } from "../url-parser-browser/mod.ts";');
      }
    }

    output.push(replaced);
  }

  await fsx.writeFile(file, [...Object.values(extraHeaderLines), ...output].join("\n"));
}

async function copyToDeno(sourceDirs, destinationDir) {
  await fsx.emptyDir(destinationDir);

  const excludePackages = ["md5-js"];

  const keepBrowserPackages = [
    "eventstream-serde-browser",
    "hash-blob-browser",
    "url-parser-browser",
    "util-base64-browser",
  ];

  for (const packagesDir of sourceDirs) {
    for (const package of await fsx.readdir(packagesDir)) {
      if (excludePackages.includes(package)) {
        continue;
      }
      // (using the node flavoured implementations)
      // skip implementation packages for native and browser
      if (package.endsWith("-native")) {
        continue;
      }
      if (package.endsWith("-browser")) {
        if (!keepBrowserPackages.includes(package)) {
          continue;
        }
      }
      if (package.endsWith("documentation-generator")) {
        continue;
      }

      await copyPackage(package, path.join(packagesDir, package), destinationDir);
    }
  }

  await denoifyTree(destinationDir, 0);

  // Overwrite some packages with a deno implementation instead of editing the node implementation
  await copyDenoPackages(sourceDirs, destinationDir);
}

if (require.main === module) {
  (async () => {
    await copyToDeno(["./clients", "./packages"], "./deno");
  })();
}

module.exports = {
  copyToDeno,
};
