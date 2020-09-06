import { S3 } from "../../deno/client-s3/mod.ts";

const s3 = new S3({
  region: Deno.env.get("AWS_REGION"),
  credentials: {
    accessKeyId: Deno.env.get("AWS_ACCESS_KEY_ID")!,
    secretAccessKey: Deno.env.get("AWS_SECRET_ACCESS_KEY")!,
  },
});

const { Buckets = [] } = await s3.listBuckets({});
Buckets.forEach((bucket) => console.log(bucket.Name));
