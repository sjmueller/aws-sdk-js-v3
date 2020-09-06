
// alternative to NodeJS.ProcessEnv for use in deno

export type ProcessEnv = {
  [key: string]: string | undefined;
};
