import { Glacier } from "../../deno/client-glacier/mod.ts";
import { STS } from "../../deno/client-sts/mod.ts";

const sts = new STS({});
const { Account: accountId } = await sts.getCallerIdentity({});

const glacier = new Glacier({});
const { VaultList: vaults = [] } = await glacier.listVaults({ accountId });

vaults.forEach((vault) => console.log(vault));
