import { AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput } from "./commands/AcceptHandshakeCommand.ts";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand.ts";
import { CancelHandshakeCommandInput, CancelHandshakeCommandOutput } from "./commands/CancelHandshakeCommand.ts";
import { CreateAccountCommandInput, CreateAccountCommandOutput } from "./commands/CreateAccountCommand.ts";
import {
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput,
} from "./commands/CreateGovCloudAccountCommand.ts";
import { CreateOrganizationCommandInput, CreateOrganizationCommandOutput } from "./commands/CreateOrganizationCommand.ts";
import {
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput,
} from "./commands/CreateOrganizationalUnitCommand.ts";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand.ts";
import { DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput } from "./commands/DeclineHandshakeCommand.ts";
import { DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput } from "./commands/DeleteOrganizationCommand.ts";
import {
  DeleteOrganizationalUnitCommandInput,
  DeleteOrganizationalUnitCommandOutput,
} from "./commands/DeleteOrganizationalUnitCommand.ts";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand.ts";
import {
  DeregisterDelegatedAdministratorCommandInput,
  DeregisterDelegatedAdministratorCommandOutput,
} from "./commands/DeregisterDelegatedAdministratorCommand.ts";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "./commands/DescribeAccountCommand.ts";
import {
  DescribeCreateAccountStatusCommandInput,
  DescribeCreateAccountStatusCommandOutput,
} from "./commands/DescribeCreateAccountStatusCommand.ts";
import {
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput,
} from "./commands/DescribeEffectivePolicyCommand.ts";
import { DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput } from "./commands/DescribeHandshakeCommand.ts";
import {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand.ts";
import {
  DescribeOrganizationalUnitCommandInput,
  DescribeOrganizationalUnitCommandOutput,
} from "./commands/DescribeOrganizationalUnitCommand.ts";
import { DescribePolicyCommandInput, DescribePolicyCommandOutput } from "./commands/DescribePolicyCommand.ts";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand.ts";
import {
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput,
} from "./commands/DisableAWSServiceAccessCommand.ts";
import { DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput } from "./commands/DisablePolicyTypeCommand.ts";
import {
  EnableAWSServiceAccessCommandInput,
  EnableAWSServiceAccessCommandOutput,
} from "./commands/EnableAWSServiceAccessCommand.ts";
import { EnableAllFeaturesCommandInput, EnableAllFeaturesCommandOutput } from "./commands/EnableAllFeaturesCommand.ts";
import { EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput } from "./commands/EnablePolicyTypeCommand.ts";
import {
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
} from "./commands/InviteAccountToOrganizationCommand.ts";
import { LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput } from "./commands/LeaveOrganizationCommand.ts";
import {
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "./commands/ListAWSServiceAccessForOrganizationCommand.ts";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "./commands/ListAccountsCommand.ts";
import {
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "./commands/ListAccountsForParentCommand.ts";
import { ListChildrenCommandInput, ListChildrenCommandOutput } from "./commands/ListChildrenCommand.ts";
import {
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
} from "./commands/ListCreateAccountStatusCommand.ts";
import {
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "./commands/ListDelegatedAdministratorsCommand.ts";
import {
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "./commands/ListDelegatedServicesForAccountCommand.ts";
import {
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "./commands/ListHandshakesForAccountCommand.ts";
import {
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "./commands/ListHandshakesForOrganizationCommand.ts";
import {
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
} from "./commands/ListOrganizationalUnitsForParentCommand.ts";
import { ListParentsCommandInput, ListParentsCommandOutput } from "./commands/ListParentsCommand.ts";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand.ts";
import {
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
} from "./commands/ListPoliciesForTargetCommand.ts";
import { ListRootsCommandInput, ListRootsCommandOutput } from "./commands/ListRootsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "./commands/ListTargetsForPolicyCommand.ts";
import { MoveAccountCommandInput, MoveAccountCommandOutput } from "./commands/MoveAccountCommand.ts";
import {
  RegisterDelegatedAdministratorCommandInput,
  RegisterDelegatedAdministratorCommandOutput,
} from "./commands/RegisterDelegatedAdministratorCommand.ts";
import {
  RemoveAccountFromOrganizationCommandInput,
  RemoveAccountFromOrganizationCommandOutput,
} from "./commands/RemoveAccountFromOrganizationCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput,
} from "./commands/UpdateOrganizationalUnitCommand.ts";
import { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "./commands/UpdatePolicyCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | AcceptHandshakeCommandInput
  | AttachPolicyCommandInput
  | CancelHandshakeCommandInput
  | CreateAccountCommandInput
  | CreateGovCloudAccountCommandInput
  | CreateOrganizationCommandInput
  | CreateOrganizationalUnitCommandInput
  | CreatePolicyCommandInput
  | DeclineHandshakeCommandInput
  | DeleteOrganizationCommandInput
  | DeleteOrganizationalUnitCommandInput
  | DeletePolicyCommandInput
  | DeregisterDelegatedAdministratorCommandInput
  | DescribeAccountCommandInput
  | DescribeCreateAccountStatusCommandInput
  | DescribeEffectivePolicyCommandInput
  | DescribeHandshakeCommandInput
  | DescribeOrganizationCommandInput
  | DescribeOrganizationalUnitCommandInput
  | DescribePolicyCommandInput
  | DetachPolicyCommandInput
  | DisableAWSServiceAccessCommandInput
  | DisablePolicyTypeCommandInput
  | EnableAWSServiceAccessCommandInput
  | EnableAllFeaturesCommandInput
  | EnablePolicyTypeCommandInput
  | InviteAccountToOrganizationCommandInput
  | LeaveOrganizationCommandInput
  | ListAWSServiceAccessForOrganizationCommandInput
  | ListAccountsCommandInput
  | ListAccountsForParentCommandInput
  | ListChildrenCommandInput
  | ListCreateAccountStatusCommandInput
  | ListDelegatedAdministratorsCommandInput
  | ListDelegatedServicesForAccountCommandInput
  | ListHandshakesForAccountCommandInput
  | ListHandshakesForOrganizationCommandInput
  | ListOrganizationalUnitsForParentCommandInput
  | ListParentsCommandInput
  | ListPoliciesCommandInput
  | ListPoliciesForTargetCommandInput
  | ListRootsCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetsForPolicyCommandInput
  | MoveAccountCommandInput
  | RegisterDelegatedAdministratorCommandInput
  | RemoveAccountFromOrganizationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateOrganizationalUnitCommandInput
  | UpdatePolicyCommandInput;

export type ServiceOutputTypes =
  | AcceptHandshakeCommandOutput
  | AttachPolicyCommandOutput
  | CancelHandshakeCommandOutput
  | CreateAccountCommandOutput
  | CreateGovCloudAccountCommandOutput
  | CreateOrganizationCommandOutput
  | CreateOrganizationalUnitCommandOutput
  | CreatePolicyCommandOutput
  | DeclineHandshakeCommandOutput
  | DeleteOrganizationCommandOutput
  | DeleteOrganizationalUnitCommandOutput
  | DeletePolicyCommandOutput
  | DeregisterDelegatedAdministratorCommandOutput
  | DescribeAccountCommandOutput
  | DescribeCreateAccountStatusCommandOutput
  | DescribeEffectivePolicyCommandOutput
  | DescribeHandshakeCommandOutput
  | DescribeOrganizationCommandOutput
  | DescribeOrganizationalUnitCommandOutput
  | DescribePolicyCommandOutput
  | DetachPolicyCommandOutput
  | DisableAWSServiceAccessCommandOutput
  | DisablePolicyTypeCommandOutput
  | EnableAWSServiceAccessCommandOutput
  | EnableAllFeaturesCommandOutput
  | EnablePolicyTypeCommandOutput
  | InviteAccountToOrganizationCommandOutput
  | LeaveOrganizationCommandOutput
  | ListAWSServiceAccessForOrganizationCommandOutput
  | ListAccountsCommandOutput
  | ListAccountsForParentCommandOutput
  | ListChildrenCommandOutput
  | ListCreateAccountStatusCommandOutput
  | ListDelegatedAdministratorsCommandOutput
  | ListDelegatedServicesForAccountCommandOutput
  | ListHandshakesForAccountCommandOutput
  | ListHandshakesForOrganizationCommandOutput
  | ListOrganizationalUnitsForParentCommandOutput
  | ListParentsCommandOutput
  | ListPoliciesCommandOutput
  | ListPoliciesForTargetCommandOutput
  | ListRootsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetsForPolicyCommandOutput
  | MoveAccountCommandOutput
  | RegisterDelegatedAdministratorCommandOutput
  | RemoveAccountFromOrganizationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateOrganizationalUnitCommandOutput
  | UpdatePolicyCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type OrganizationsClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type OrganizationsClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Organizations</fullname>
 */
export class OrganizationsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OrganizationsClientResolvedConfig
> {
  readonly config: OrganizationsClientResolvedConfig;

  constructor(configuration: OrganizationsClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
