import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand.ts";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand.ts";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand.ts";
import {
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput,
} from "./commands/DescribeUserHierarchyGroupCommand.ts";
import {
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput,
} from "./commands/DescribeUserHierarchyStructureCommand.ts";
import {
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput,
} from "./commands/GetContactAttributesCommand.ts";
import {
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
} from "./commands/GetCurrentMetricDataCommand.ts";
import {
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
} from "./commands/GetFederationTokenCommand.ts";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "./commands/GetMetricDataCommand.ts";
import { ListContactFlowsCommandInput, ListContactFlowsCommandOutput } from "./commands/ListContactFlowsCommand.ts";
import {
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
} from "./commands/ListHoursOfOperationsCommand.ts";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "./commands/ListPhoneNumbersCommand.ts";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand.ts";
import {
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
} from "./commands/ListRoutingProfilesCommand.ts";
import {
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "./commands/ListSecurityProfilesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "./commands/ListUserHierarchyGroupsCommand.ts";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand.ts";
import {
  ResumeContactRecordingCommandInput,
  ResumeContactRecordingCommandOutput,
} from "./commands/ResumeContactRecordingCommand.ts";
import { StartChatContactCommandInput, StartChatContactCommandOutput } from "./commands/StartChatContactCommand.ts";
import {
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
} from "./commands/StartContactRecordingCommand.ts";
import {
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
} from "./commands/StartOutboundVoiceContactCommand.ts";
import { StopContactCommandInput, StopContactCommandOutput } from "./commands/StopContactCommand.ts";
import {
  StopContactRecordingCommandInput,
  StopContactRecordingCommandOutput,
} from "./commands/StopContactRecordingCommand.ts";
import {
  SuspendContactRecordingCommandInput,
  SuspendContactRecordingCommandOutput,
} from "./commands/SuspendContactRecordingCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
} from "./commands/UpdateContactAttributesCommand.ts";
import {
  UpdateUserHierarchyCommandInput,
  UpdateUserHierarchyCommandOutput,
} from "./commands/UpdateUserHierarchyCommand.ts";
import {
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput,
} from "./commands/UpdateUserIdentityInfoCommand.ts";
import {
  UpdateUserPhoneConfigCommandInput,
  UpdateUserPhoneConfigCommandOutput,
} from "./commands/UpdateUserPhoneConfigCommand.ts";
import {
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
} from "./commands/UpdateUserRoutingProfileCommand.ts";
import {
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput,
} from "./commands/UpdateUserSecurityProfilesCommand.ts";
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
  | CreateUserCommandInput
  | DeleteUserCommandInput
  | DescribeUserCommandInput
  | DescribeUserHierarchyGroupCommandInput
  | DescribeUserHierarchyStructureCommandInput
  | GetContactAttributesCommandInput
  | GetCurrentMetricDataCommandInput
  | GetFederationTokenCommandInput
  | GetMetricDataCommandInput
  | ListContactFlowsCommandInput
  | ListHoursOfOperationsCommandInput
  | ListPhoneNumbersCommandInput
  | ListQueuesCommandInput
  | ListRoutingProfilesCommandInput
  | ListSecurityProfilesCommandInput
  | ListTagsForResourceCommandInput
  | ListUserHierarchyGroupsCommandInput
  | ListUsersCommandInput
  | ResumeContactRecordingCommandInput
  | StartChatContactCommandInput
  | StartContactRecordingCommandInput
  | StartOutboundVoiceContactCommandInput
  | StopContactCommandInput
  | StopContactRecordingCommandInput
  | SuspendContactRecordingCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateContactAttributesCommandInput
  | UpdateUserHierarchyCommandInput
  | UpdateUserIdentityInfoCommandInput
  | UpdateUserPhoneConfigCommandInput
  | UpdateUserRoutingProfileCommandInput
  | UpdateUserSecurityProfilesCommandInput;

export type ServiceOutputTypes =
  | CreateUserCommandOutput
  | DeleteUserCommandOutput
  | DescribeUserCommandOutput
  | DescribeUserHierarchyGroupCommandOutput
  | DescribeUserHierarchyStructureCommandOutput
  | GetContactAttributesCommandOutput
  | GetCurrentMetricDataCommandOutput
  | GetFederationTokenCommandOutput
  | GetMetricDataCommandOutput
  | ListContactFlowsCommandOutput
  | ListHoursOfOperationsCommandOutput
  | ListPhoneNumbersCommandOutput
  | ListQueuesCommandOutput
  | ListRoutingProfilesCommandOutput
  | ListSecurityProfilesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUserHierarchyGroupsCommandOutput
  | ListUsersCommandOutput
  | ResumeContactRecordingCommandOutput
  | StartChatContactCommandOutput
  | StartContactRecordingCommandOutput
  | StartOutboundVoiceContactCommandOutput
  | StopContactCommandOutput
  | StopContactRecordingCommandOutput
  | SuspendContactRecordingCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateContactAttributesCommandOutput
  | UpdateUserHierarchyCommandOutput
  | UpdateUserIdentityInfoCommandOutput
  | UpdateUserPhoneConfigCommandOutput
  | UpdateUserRoutingProfileCommandOutput
  | UpdateUserSecurityProfilesCommandOutput;

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
   * The service name with which to sign requests.
   */
  signingName?: string;

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

export type ConnectClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ConnectClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a
 *    customer contact center and provide reliable customer engagement at any scale.</p>
 *          <p>Amazon Connect provides rich metrics and real-time reporting that allow you to optimize contact
 *    routing. You can also resolve customer issues more efficiently by putting customers in touch with
 *    the right agents.</p>
 *          <p>There are limits to the number of Amazon Connect resources that you can create and limits to the
 *    number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect
 *     Service Limits</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 */
export class ConnectClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ConnectClientResolvedConfig
> {
  readonly config: ConnectClientResolvedConfig;

  constructor(configuration: ConnectClientConfig) {
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
