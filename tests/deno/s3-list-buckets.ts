import { S3 } from "../../deno/client-s3/mod.ts"

const s3 = new S3({})

const { Buckets = [] } = await s3.listBuckets({})
Buckets.forEach(bucket => console.log(bucket.Name))
