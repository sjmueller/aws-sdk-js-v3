import { HttpRequest } from "../types/mod.ts";

export function defaultUserAgent(
  packageName: string,
  packageVersion: string
): string {
  return `aws-sdk-js-v3-${packageName}/${packageVersion}`;
}
