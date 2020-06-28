const fsx = require("fs-extra");
const path = require("path");

async function copyPackage(packageName, packageDir, destinationDir) {
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
    return copyPackage(
      packageName,
      path.join(packageDir, "src"),
      destinationDir
    );
  }

  for (const dpath of await fsx.readdir(packageDir)) {
    if (dpath.endsWith(".spec.ts")) {
      continue;
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

      await fsx.copyFile(
        path.join(packageDir, dpath),
        path.join(destinationDir, packageName, topath)
      );
      continue;
    }

    const stat = await fsx.stat(path.join(packageDir, dpath));

    if (stat.isDirectory()) {
      if (dpath.endsWith("node_modules")) {
        continue;
      }
      await fsx.copy(
        path.join(packageDir, dpath),
        path.join(destinationDir, packageName, dpath)
      );
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
  //console.log("read file ", file);
  const fileContent = await fsx.readFile(file);
  const lines = fileContent.toString().split("\n");

  const output = [];

  let state = "nothing";
  // very fragile line & regex based fixer-upper:   assuming fairly pretty source lines
  for (const line of lines) {
    let replaced = line;
    if (state === "nothing") {
      const match = line.match(/^[ ]*import/);
      if (match) {
        state = "import";
      }
    }

    if (state === "import") {
      const match = line.match(/^(.*)from[ ]+("|')([^"']+)("|');/);
      if (match) {
        state = "import_from";
        importfrom = match[3];

        const importFromAWSSDKmatch = importfrom.match(/@aws-sdk\/(.*)/);
        if (importFromAWSSDKmatch) {
          if (depth === 0) {
            throw new Error("unexpected import to @aws-sdk at depth 0");
          }
          let relpath = "";
          for (let i = 1; i < depth; ++i) {
            relpath = relpath + "../";
          }

          const checkAt = path.resolve(
            path.join(
              file,
              "..",
              `${relpath}${importFromAWSSDKmatch[1]}/mod.ts`
            )
          );
          const exists = await fsx.exists(checkAt);
          if (!exists) {
            throw new Error(
              `Cannot find @aws-sdk${importFromAWSSDKmatch[1]}/mod.ts`
            );
          }
          replaced = `${match[1]}from "${relpath}${importFromAWSSDKmatch[1]}/mod.ts";`;
        } else {
          replaced = `${match[1]}from "${match[3]}.ts";`;
        }

        state = "nothing";
      }
    }

    output.push(replaced);
  }

  const outputContent = output.join("\n");
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
        continue;
      }

      await copyPackage(
        package,
        path.join(packagesDir, package),
        destinationDir
      );
    }
  }

  await denoifyTree(destinationDir, 0);
}

// dev:
copyToDeno(["./clients", "./packages"], "./deno");

module.exports = {
  copyToDeno
};
