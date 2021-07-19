import {
  AssociateDRTLogBucketCommandInput,
  AssociateDRTLogBucketCommandOutput,
} from "./commands/AssociateDRTLogBucketCommand.ts";
import { AssociateDRTRoleCommandInput, AssociateDRTRoleCommandOutput } from "./commands/AssociateDRTRoleCommand.ts";
import {
  AssociateHealthCheckCommandInput,
  AssociateHealthCheckCommandOutput,
} from "./commands/AssociateHealthCheckCommand.ts";
import {
  AssociateProactiveEngagementDetailsCommandInput,
  AssociateProactiveEngagementDetailsCommandOutput,
} from "./commands/AssociateProactiveEngagementDetailsCommand.ts";
import { CreateProtectionCommandInput, CreateProtectionCommandOutput } from "./commands/CreateProtectionCommand.ts";
import {
  CreateProtectionGroupCommandInput,
  CreateProtectionGroupCommandOutput,
} from "./commands/CreateProtectionGroupCommand.ts";
import { CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput } from "./commands/CreateSubscriptionCommand.ts";
import { DeleteProtectionCommandInput, DeleteProtectionCommandOutput } from "./commands/DeleteProtectionCommand.ts";
import {
  DeleteProtectionGroupCommandInput,
  DeleteProtectionGroupCommandOutput,
} from "./commands/DeleteProtectionGroupCommand.ts";
import { DeleteSubscriptionCommandInput, DeleteSubscriptionCommandOutput } from "./commands/DeleteSubscriptionCommand.ts";
import { DescribeAttackCommandInput, DescribeAttackCommandOutput } from "./commands/DescribeAttackCommand.ts";
import {
  DescribeAttackStatisticsCommandInput,
  DescribeAttackStatisticsCommandOutput,
} from "./commands/DescribeAttackStatisticsCommand.ts";
import { DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput } from "./commands/DescribeDRTAccessCommand.ts";
import {
  DescribeEmergencyContactSettingsCommandInput,
  DescribeEmergencyContactSettingsCommandOutput,
} from "./commands/DescribeEmergencyContactSettingsCommand.ts";
import { DescribeProtectionCommandInput, DescribeProtectionCommandOutput } from "./commands/DescribeProtectionCommand.ts";
import {
  DescribeProtectionGroupCommandInput,
  DescribeProtectionGroupCommandOutput,
} from "./commands/DescribeProtectionGroupCommand.ts";
import {
  DescribeSubscriptionCommandInput,
  DescribeSubscriptionCommandOutput,
} from "./commands/DescribeSubscriptionCommand.ts";
import {
  DisableProactiveEngagementCommandInput,
  DisableProactiveEngagementCommandOutput,
} from "./commands/DisableProactiveEngagementCommand.ts";
import {
  DisassociateDRTLogBucketCommandInput,
  DisassociateDRTLogBucketCommandOutput,
} from "./commands/DisassociateDRTLogBucketCommand.ts";
import {
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput,
} from "./commands/DisassociateDRTRoleCommand.ts";
import {
  DisassociateHealthCheckCommandInput,
  DisassociateHealthCheckCommandOutput,
} from "./commands/DisassociateHealthCheckCommand.ts";
import {
  EnableProactiveEngagementCommandInput,
  EnableProactiveEngagementCommandOutput,
} from "./commands/EnableProactiveEngagementCommand.ts";
import {
  GetSubscriptionStateCommandInput,
  GetSubscriptionStateCommandOutput,
} from "./commands/GetSubscriptionStateCommand.ts";
import { ListAttacksCommandInput, ListAttacksCommandOutput } from "./commands/ListAttacksCommand.ts";
import {
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
} from "./commands/ListProtectionGroupsCommand.ts";
import { ListProtectionsCommandInput, ListProtectionsCommandOutput } from "./commands/ListProtectionsCommand.ts";
import {
  ListResourcesInProtectionGroupCommandInput,
  ListResourcesInProtectionGroupCommandOutput,
} from "./commands/ListResourcesInProtectionGroupCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateEmergencyContactSettingsCommandInput,
  UpdateEmergencyContactSettingsCommandOutput,
} from "./commands/UpdateEmergencyContactSettingsCommand.ts";
import {
  UpdateProtectionGroupCommandInput,
  UpdateProtectionGroupCommandOutput,
} from "./commands/UpdateProtectionGroupCommand.ts";
import { UpdateSubscriptionCommandInput, UpdateSubscriptionCommandOutput } from "./commands/UpdateSubscriptionCommand.ts";
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
  | AssociateDRTLogBucketCommandInput
  | AssociateDRTRoleCommandInput
  | AssociateHealthCheckCommandInput
  | AssociateProactiveEngagementDetailsCommandInput
  | CreateProtectionCommandInput
  | CreateProtectionGroupCommandInput
  | CreateSubscriptionCommandInput
  | DeleteProtectionCommandInput
  | DeleteProtectionGroupCommandInput
  | DeleteSubscriptionCommandInput
  | DescribeAttackCommandInput
  | DescribeAttackStatisticsCommandInput
  | DescribeDRTAccessCommandInput
  | DescribeEmergencyContactSettingsCommandInput
  | DescribeProtectionCommandInput
  | DescribeProtectionGroupCommandInput
  | DescribeSubscriptionCommandInput
  | DisableProactiveEngagementCommandInput
  | DisassociateDRTLogBucketCommandInput
  | DisassociateDRTRoleCommandInput
  | DisassociateHealthCheckCommandInput
  | EnableProactiveEngagementCommandInput
  | GetSubscriptionStateCommandInput
  | ListAttacksCommandInput
  | ListProtectionGroupsCommandInput
  | ListProtectionsCommandInput
  | ListResourcesInProtectionGroupCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEmergencyContactSettingsCommandInput
  | UpdateProtectionGroupCommandInput
  | UpdateSubscriptionCommandInput;

export type ServiceOutputTypes =
  | AssociateDRTLogBucketCommandOutput
  | AssociateDRTRoleCommandOutput
  | AssociateHealthCheckCommandOutput
  | AssociateProactiveEngagementDetailsCommandOutput
  | CreateProtectionCommandOutput
  | CreateProtectionGroupCommandOutput
  | CreateSubscriptionCommandOutput
  | DeleteProtectionCommandOutput
  | DeleteProtectionGroupCommandOutput
  | DeleteSubscriptionCommandOutput
  | DescribeAttackCommandOutput
  | DescribeAttackStatisticsCommandOutput
  | DescribeDRTAccessCommandOutput
  | DescribeEmergencyContactSettingsCommandOutput
  | DescribeProtectionCommandOutput
  | DescribeProtectionGroupCommandOutput
  | DescribeSubscriptionCommandOutput
  | DisableProactiveEngagementCommandOutput
  | DisassociateDRTLogBucketCommandOutput
  | DisassociateDRTRoleCommandOutput
  | DisassociateHealthCheckCommandOutput
  | EnableProactiveEngagementCommandOutput
  | GetSubscriptionStateCommandOutput
  | ListAttacksCommandOutput
  | ListProtectionGroupsCommandOutput
  | ListProtectionsCommandOutput
  | ListResourcesInProtectionGroupCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEmergencyContactSettingsCommandOutput
  | UpdateProtectionGroupCommandOutput
  | UpdateSubscriptionCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
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
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type ShieldClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ShieldClient class constructor that set the region, credentials and other options.
 */
export interface ShieldClientConfig extends ShieldClientConfigType {}

type ShieldClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ShieldClient class. This is resolved and normalized from the {@link ShieldClientConfig | constructor configuration interface}.
 */
export interface ShieldClientResolvedConfig extends ShieldClientResolvedConfigType {}

/**
 * <fullname>AWS Shield Advanced</fullname>
 *          <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions,
 *          data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>
 */
export class ShieldClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ShieldClientResolvedConfig
> {
  /**
   * The resolved configuration of ShieldClient class. This is resolved and normalized from the {@link ShieldClientConfig | constructor configuration interface}.
   */
  readonly config: ShieldClientResolvedConfig;

  constructor(configuration: ShieldClientConfig) {
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
