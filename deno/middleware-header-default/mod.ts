import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware
} from "../types/mod.ts";
import { HttpRequest } from "../protocol-http/mod.ts";

export interface HeaderDefaultArgs {
  [header: string]: string;
}

export function headerDefault(
  headerBag: HeaderDefaultArgs
): BuildMiddleware<any, any> {
  return (next: BuildHandler<any, any>) => {
    return (args: BuildHandlerArguments<any>) => {
      if (HttpRequest.isInstance(args.request)) {
        const headers = { ...args.request.headers };

        for (const name of Object.keys(headerBag)) {
          if (!(name in headers)) {
            headers[name] = headerBag[name];
          }
        }

        return next({
          ...args,
          request: {
            ...args.request,
            headers
          }
        });
      } else {
        return next(args);
      }
    };
  };
}
