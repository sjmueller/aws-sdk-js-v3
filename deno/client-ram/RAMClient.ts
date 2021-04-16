import {
  AcceptResourceShareInvitationCommandInput,
  AcceptResourceShareInvitationCommandOutput,
} from "./commands/AcceptResourceShareInvitationCommand.ts";
import {
  AssociateResourceShareCommandInput,
  AssociateResourceShareCommandOutput,
} from "./commands/AssociateResourceShareCommand.ts";
import {
  AssociateResourceSharePermissionCommandInput,
  AssociateResourceSharePermissionCommandOutput,
} from "./commands/AssociateResourceSharePermissionCommand.ts";
import {
  CreateResourceShareCommandInput,
  CreateResourceShareCommandOutput,
} from "./commands/CreateResourceShareCommand.ts";
import {
  DeleteResourceShareCommandInput,
  DeleteResourceShareCommandOutput,
} from "./commands/DeleteResourceShareCommand.ts";
import {
  DisassociateResourceShareCommandInput,
  DisassociateResourceShareCommandOutput,
} from "./commands/DisassociateResourceShareCommand.ts";
import {
  DisassociateResourceSharePermissionCommandInput,
  DisassociateResourceSharePermissionCommandOutput,
} from "./commands/DisassociateResourceSharePermissionCommand.ts";
import {
  EnableSharingWithAwsOrganizationCommandInput,
  EnableSharingWithAwsOrganizationCommandOutput,
} from "./commands/EnableSharingWithAwsOrganizationCommand.ts";
import { GetPermissionCommandInput, GetPermissionCommandOutput } from "./commands/GetPermissionCommand.ts";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand.ts";
import {
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
} from "./commands/GetResourceShareAssociationsCommand.ts";
import {
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
} from "./commands/GetResourceShareInvitationsCommand.ts";
import { GetResourceSharesCommandInput, GetResourceSharesCommandOutput } from "./commands/GetResourceSharesCommand.ts";
import {
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
} from "./commands/ListPendingInvitationResourcesCommand.ts";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand.ts";
import { ListPrincipalsCommandInput, ListPrincipalsCommandOutput } from "./commands/ListPrincipalsCommand.ts";
import {
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
} from "./commands/ListResourceSharePermissionsCommand.ts";
import { ListResourceTypesCommandInput, ListResourceTypesCommandOutput } from "./commands/ListResourceTypesCommand.ts";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand.ts";
import {
  PromoteResourceShareCreatedFromPolicyCommandInput,
  PromoteResourceShareCreatedFromPolicyCommandOutput,
} from "./commands/PromoteResourceShareCreatedFromPolicyCommand.ts";
import {
  RejectResourceShareInvitationCommandInput,
  RejectResourceShareInvitationCommandOutput,
} from "./commands/RejectResourceShareInvitationCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateResourceShareCommandInput,
  UpdateResourceShareCommandOutput,
} from "./commands/UpdateResourceShareCommand.ts";
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
  Provider,
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
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | AcceptResourceShareInvitationCommandInput
  | AssociateResourceShareCommandInput
  | AssociateResourceSharePermissionCommandInput
  | CreateResourceShareCommandInput
  | DeleteResourceShareCommandInput
  | DisassociateResourceShareCommandInput
  | DisassociateResourceSharePermissionCommandInput
  | EnableSharingWithAwsOrganizationCommandInput
  | GetPermissionCommandInput
  | GetResourcePoliciesCommandInput
  | GetResourceShareAssociationsCommandInput
  | GetResourceShareInvitationsCommandInput
  | GetResourceSharesCommandInput
  | ListPendingInvitationResourcesCommandInput
  | ListPermissionsCommandInput
  | ListPrincipalsCommandInput
  | ListResourceSharePermissionsCommandInput
  | ListResourceTypesCommandInput
  | ListResourcesCommandInput
  | PromoteResourceShareCreatedFromPolicyCommandInput
  | RejectResourceShareInvitationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateResourceShareCommandInput;

export type ServiceOutputTypes =
  | AcceptResourceShareInvitationCommandOutput
  | AssociateResourceShareCommandOutput
  | AssociateResourceSharePermissionCommandOutput
  | CreateResourceShareCommandOutput
  | DeleteResourceShareCommandOutput
  | DisassociateResourceShareCommandOutput
  | DisassociateResourceSharePermissionCommandOutput
  | EnableSharingWithAwsOrganizationCommandOutput
  | GetPermissionCommandOutput
  | GetResourcePoliciesCommandOutput
  | GetResourceShareAssociationsCommandOutput
  | GetResourceShareInvitationsCommandOutput
  | GetResourceSharesCommandOutput
  | ListPendingInvitationResourcesCommandOutput
  | ListPermissionsCommandOutput
  | ListPrincipalsCommandOutput
  | ListResourceSharePermissionsCommandOutput
  | ListResourceTypesCommandOutput
  | ListResourcesCommandOutput
  | PromoteResourceShareCreatedFromPolicyCommandOutput
  | RejectResourceShareInvitationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateResourceShareCommandOutput;

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
   * Default credentials provider; Not available in browser runtime.
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

export type RAMClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type RAMClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <p>Use AWS Resource Access Manager to share AWS resources between AWS accounts. To share a resource, you
 *           create a resource share, associate the resource with the resource share, and specify the principals that
 *           can access the resources associated with the resource share. The following principals are supported:
 *           AWS accounts, organizational units (OU) from AWS Organizations, and organizations from
 *           AWS Organizations.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/ram/latest/userguide/">AWS Resource Access Manager User Guide</a>.</p>
 */
export class RAMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RAMClientResolvedConfig
> {
  readonly config: RAMClientResolvedConfig;

  constructor(configuration: RAMClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
