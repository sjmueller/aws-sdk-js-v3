import { Upload } from "../../deno/lib-storage/mod.ts";
import { S3 } from "../../deno/client-s3/mod.ts";

const client = new S3({});

const createReadStream = (filename: string) => {
  let file: Deno.File;
  let buf: any;

  return new ReadableStream({
    async start(c) {
      file = await Deno.open(filename);
      buf = new Uint8Array(16 * 1024);
    },
    async pull(c) {
      const n = await Deno.read(file.rid, buf);
      if (n !== null) {
        c.enqueue(buf.slice(0, n));
      } else {
        c.close();
      }
    },
  });
};

const [filename, bucket, optionalKey] = Deno.args;

const fileStream = createReadStream(filename);

const key = optionalKey || filename;

console.log(`uploading: ${filename} -> s3://${bucket}/${key}`);

const upload = new Upload({
  params: {
    Bucket: bucket,
    Key: key,
    Body: fileStream,
  },
  client,
  queueSize: 3,
});

upload.on("httpUploadProgress", (progress: any) => {
  console.log(progress);
});

await upload.done();
