
import { CognitoIdentityProvider } from "../CognitoIdentityProvider.ts";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CognitoIdentityProviderPaginationConfiguration extends PaginationConfiguration {
  client: CognitoIdentityProvider | CognitoIdentityProviderClient;
}
