import { BuildHandlerOptions, HttpHandlerOptions, MiddlewareStack, Pluggable } from "../types/mod.ts";

import { endpointDiscoveryMiddleware } from "./endpointDiscoveryMiddleware.ts";
import { EndpointDiscoveryResolvedConfig, PreviouslyResolved } from "./resolveEndpointDiscoveryConfig.ts";

export const endpointDiscoveryMiddlewareOptions: BuildHandlerOptions = {
  name: "endpointDiscoveryMiddleware",
  step: "build",
  tags: ["ENDPOINT_DISCOVERY"],
  override: true,
};

export interface EndpointDiscoveryMiddlewareConfig {
  isDiscoveredEndpointRequired: boolean;
  clientStack: MiddlewareStack<any, any>;
  options?: HttpHandlerOptions;
  identifiers?: { [key: string]: string };
}

export const getEndpointDiscoveryPlugin = (
  pluginConfig: EndpointDiscoveryResolvedConfig & PreviouslyResolved,
  middlewareConfig: EndpointDiscoveryMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(endpointDiscoveryMiddleware(pluginConfig, middlewareConfig), endpointDiscoveryMiddlewareOptions);
  },
});

export const getEndpointDiscoveryRequiredPlugin = (
  pluginConfig: EndpointDiscoveryResolvedConfig & PreviouslyResolved,
  middlewareConfig: Omit<EndpointDiscoveryMiddlewareConfig, "isDiscoveredEndpointRequired">
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(
      endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: true }),
      endpointDiscoveryMiddlewareOptions
    );
  },
});

export const getEndpointDiscoveryOptionalPlugin = (
  pluginConfig: EndpointDiscoveryResolvedConfig & PreviouslyResolved,
  middlewareConfig: Omit<EndpointDiscoveryMiddlewareConfig, "isDiscoveredEndpointRequired">
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(
      endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: false }),
      endpointDiscoveryMiddlewareOptions
    );
  },
});
