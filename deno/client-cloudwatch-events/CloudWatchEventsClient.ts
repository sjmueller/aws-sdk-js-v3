import {
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
} from "./commands/ActivateEventSourceCommand.ts";
import { CancelReplayCommandInput, CancelReplayCommandOutput } from "./commands/CancelReplayCommand.ts";
import {
  CreateApiDestinationCommandInput,
  CreateApiDestinationCommandOutput,
} from "./commands/CreateApiDestinationCommand.ts";
import { CreateArchiveCommandInput, CreateArchiveCommandOutput } from "./commands/CreateArchiveCommand.ts";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand.ts";
import { CreateEventBusCommandInput, CreateEventBusCommandOutput } from "./commands/CreateEventBusCommand.ts";
import {
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
} from "./commands/CreatePartnerEventSourceCommand.ts";
import {
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
} from "./commands/DeactivateEventSourceCommand.ts";
import {
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
} from "./commands/DeauthorizeConnectionCommand.ts";
import {
  DeleteApiDestinationCommandInput,
  DeleteApiDestinationCommandOutput,
} from "./commands/DeleteApiDestinationCommand.ts";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "./commands/DeleteArchiveCommand.ts";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand.ts";
import { DeleteEventBusCommandInput, DeleteEventBusCommandOutput } from "./commands/DeleteEventBusCommand.ts";
import {
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
} from "./commands/DeletePartnerEventSourceCommand.ts";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand.ts";
import {
  DescribeApiDestinationCommandInput,
  DescribeApiDestinationCommandOutput,
} from "./commands/DescribeApiDestinationCommand.ts";
import { DescribeArchiveCommandInput, DescribeArchiveCommandOutput } from "./commands/DescribeArchiveCommand.ts";
import { DescribeConnectionCommandInput, DescribeConnectionCommandOutput } from "./commands/DescribeConnectionCommand.ts";
import { DescribeEventBusCommandInput, DescribeEventBusCommandOutput } from "./commands/DescribeEventBusCommand.ts";
import {
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
} from "./commands/DescribeEventSourceCommand.ts";
import {
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
} from "./commands/DescribePartnerEventSourceCommand.ts";
import { DescribeReplayCommandInput, DescribeReplayCommandOutput } from "./commands/DescribeReplayCommand.ts";
import { DescribeRuleCommandInput, DescribeRuleCommandOutput } from "./commands/DescribeRuleCommand.ts";
import { DisableRuleCommandInput, DisableRuleCommandOutput } from "./commands/DisableRuleCommand.ts";
import { EnableRuleCommandInput, EnableRuleCommandOutput } from "./commands/EnableRuleCommand.ts";
import {
  ListApiDestinationsCommandInput,
  ListApiDestinationsCommandOutput,
} from "./commands/ListApiDestinationsCommand.ts";
import { ListArchivesCommandInput, ListArchivesCommandOutput } from "./commands/ListArchivesCommand.ts";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "./commands/ListConnectionsCommand.ts";
import { ListEventBusesCommandInput, ListEventBusesCommandOutput } from "./commands/ListEventBusesCommand.ts";
import { ListEventSourcesCommandInput, ListEventSourcesCommandOutput } from "./commands/ListEventSourcesCommand.ts";
import {
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
} from "./commands/ListPartnerEventSourceAccountsCommand.ts";
import {
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
} from "./commands/ListPartnerEventSourcesCommand.ts";
import { ListReplaysCommandInput, ListReplaysCommandOutput } from "./commands/ListReplaysCommand.ts";
import {
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
} from "./commands/ListRuleNamesByTargetCommand.ts";
import { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput } from "./commands/ListTargetsByRuleCommand.ts";
import { PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand.ts";
import { PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput } from "./commands/PutPartnerEventsCommand.ts";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "./commands/PutPermissionCommand.ts";
import { PutRuleCommandInput, PutRuleCommandOutput } from "./commands/PutRuleCommand.ts";
import { PutTargetsCommandInput, PutTargetsCommandOutput } from "./commands/PutTargetsCommand.ts";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand.ts";
import { RemoveTargetsCommandInput, RemoveTargetsCommandOutput } from "./commands/RemoveTargetsCommand.ts";
import { StartReplayCommandInput, StartReplayCommandOutput } from "./commands/StartReplayCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { TestEventPatternCommandInput, TestEventPatternCommandOutput } from "./commands/TestEventPatternCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateApiDestinationCommandInput,
  UpdateApiDestinationCommandOutput,
} from "./commands/UpdateApiDestinationCommand.ts";
import { UpdateArchiveCommandInput, UpdateArchiveCommandOutput } from "./commands/UpdateArchiveCommand.ts";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand.ts";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig.ts";
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
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | ActivateEventSourceCommandInput
  | CancelReplayCommandInput
  | CreateApiDestinationCommandInput
  | CreateArchiveCommandInput
  | CreateConnectionCommandInput
  | CreateEventBusCommandInput
  | CreatePartnerEventSourceCommandInput
  | DeactivateEventSourceCommandInput
  | DeauthorizeConnectionCommandInput
  | DeleteApiDestinationCommandInput
  | DeleteArchiveCommandInput
  | DeleteConnectionCommandInput
  | DeleteEventBusCommandInput
  | DeletePartnerEventSourceCommandInput
  | DeleteRuleCommandInput
  | DescribeApiDestinationCommandInput
  | DescribeArchiveCommandInput
  | DescribeConnectionCommandInput
  | DescribeEventBusCommandInput
  | DescribeEventSourceCommandInput
  | DescribePartnerEventSourceCommandInput
  | DescribeReplayCommandInput
  | DescribeRuleCommandInput
  | DisableRuleCommandInput
  | EnableRuleCommandInput
  | ListApiDestinationsCommandInput
  | ListArchivesCommandInput
  | ListConnectionsCommandInput
  | ListEventBusesCommandInput
  | ListEventSourcesCommandInput
  | ListPartnerEventSourceAccountsCommandInput
  | ListPartnerEventSourcesCommandInput
  | ListReplaysCommandInput
  | ListRuleNamesByTargetCommandInput
  | ListRulesCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetsByRuleCommandInput
  | PutEventsCommandInput
  | PutPartnerEventsCommandInput
  | PutPermissionCommandInput
  | PutRuleCommandInput
  | PutTargetsCommandInput
  | RemovePermissionCommandInput
  | RemoveTargetsCommandInput
  | StartReplayCommandInput
  | TagResourceCommandInput
  | TestEventPatternCommandInput
  | UntagResourceCommandInput
  | UpdateApiDestinationCommandInput
  | UpdateArchiveCommandInput
  | UpdateConnectionCommandInput;

export type ServiceOutputTypes =
  | ActivateEventSourceCommandOutput
  | CancelReplayCommandOutput
  | CreateApiDestinationCommandOutput
  | CreateArchiveCommandOutput
  | CreateConnectionCommandOutput
  | CreateEventBusCommandOutput
  | CreatePartnerEventSourceCommandOutput
  | DeactivateEventSourceCommandOutput
  | DeauthorizeConnectionCommandOutput
  | DeleteApiDestinationCommandOutput
  | DeleteArchiveCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteEventBusCommandOutput
  | DeletePartnerEventSourceCommandOutput
  | DeleteRuleCommandOutput
  | DescribeApiDestinationCommandOutput
  | DescribeArchiveCommandOutput
  | DescribeConnectionCommandOutput
  | DescribeEventBusCommandOutput
  | DescribeEventSourceCommandOutput
  | DescribePartnerEventSourceCommandOutput
  | DescribeReplayCommandOutput
  | DescribeRuleCommandOutput
  | DisableRuleCommandOutput
  | EnableRuleCommandOutput
  | ListApiDestinationsCommandOutput
  | ListArchivesCommandOutput
  | ListConnectionsCommandOutput
  | ListEventBusesCommandOutput
  | ListEventSourcesCommandOutput
  | ListPartnerEventSourceAccountsCommandOutput
  | ListPartnerEventSourcesCommandOutput
  | ListReplaysCommandOutput
  | ListRuleNamesByTargetCommandOutput
  | ListRulesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetsByRuleCommandOutput
  | PutEventsCommandOutput
  | PutPartnerEventsCommandOutput
  | PutPermissionCommandOutput
  | PutRuleCommandOutput
  | PutTargetsCommandOutput
  | RemovePermissionCommandOutput
  | RemoveTargetsCommandOutput
  | StartReplayCommandOutput
  | TagResourceCommandOutput
  | TestEventPatternCommandOutput
  | UntagResourceCommandOutput
  | UpdateApiDestinationCommandOutput
  | UpdateArchiveCommandOutput
  | UpdateConnectionCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
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
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

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

type CloudWatchEventsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CloudWatchEventsClient class constructor that set the region, credentials and other options.
 */
export interface CloudWatchEventsClientConfig extends CloudWatchEventsClientConfigType {}

type CloudWatchEventsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CloudWatchEventsClient class. This is resolved and normalized from the {@link CloudWatchEventsClientConfig | constructor configuration interface}.
 */
export interface CloudWatchEventsClientResolvedConfig extends CloudWatchEventsClientResolvedConfigType {}

/**
 * <p>Amazon EventBridge helps you to respond to state changes in your AWS resources. When your
 *       resources change state, they automatically send events into an event stream. You can create
 *       rules that match selected events in the stream and route them to targets to take action. You
 *       can also use rules to take action on a predetermined schedule. For example, you can configure
 *       rules to:</p>
 *          <ul>
 *             <li>
 *                <p>Automatically invoke an AWS Lambda function to update DNS entries when an event
 *           notifies you that Amazon EC2 instance enters the running state.</p>
 *             </li>
 *             <li>
 *                <p>Direct specific API records from AWS CloudTrail to an Amazon Kinesis data stream for
 *           detailed analysis of potential security or availability risks.</p>
 *             </li>
 *             <li>
 *                <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS
 *           volume.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User
 *         Guide</a>.</p>
 */
export class CloudWatchEventsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudWatchEventsClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudWatchEventsClient class. This is resolved and normalized from the {@link CloudWatchEventsClientConfig | constructor configuration interface}.
   */
  readonly config: CloudWatchEventsClientResolvedConfig;

  constructor(configuration: CloudWatchEventsClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
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
