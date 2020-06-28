import { HttpRequest } from "./httpRequest.ts";
import { HttpResponse } from "./httpResponse.ts";
import { RequestHandler, HttpHandlerOptions } from "../types/mod.ts";

export type HttpHandler = RequestHandler<
  HttpRequest,
  HttpResponse,
  HttpHandlerOptions
>;
