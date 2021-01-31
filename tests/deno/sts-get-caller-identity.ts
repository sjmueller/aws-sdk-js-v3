import { STS } from "../../deno/client-sts/mod.ts";

const sts = new STS({});

const response = await sts.getCallerIdentity({});
console.log(response);
