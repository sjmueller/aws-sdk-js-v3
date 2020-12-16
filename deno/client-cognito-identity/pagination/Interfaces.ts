import { CognitoIdentity } from "../CognitoIdentity.ts";
import { CognitoIdentityClient } from "../CognitoIdentityClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CognitoIdentityPaginationConfiguration extends PaginationConfiguration {
  client: CognitoIdentity | CognitoIdentityClient;
}
