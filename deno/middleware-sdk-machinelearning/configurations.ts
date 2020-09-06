
import { UrlParser } from "../types/mod.ts";

export interface PredictEndpointMiddlewareInputConfig {}

interface PreviouslyResolved {
  urlParser: UrlParser;
}

export interface ResolvedPredictEndpointMiddlewareConfig {
  urlParser: UrlParser;
}

export function resolvePredictEndpointMiddlewareConfig<T>(
  input: T & PreviouslyResolved & PredictEndpointMiddlewareInputConfig
): T & ResolvedPredictEndpointMiddlewareConfig {
  return {
    ...input,
  };
}
