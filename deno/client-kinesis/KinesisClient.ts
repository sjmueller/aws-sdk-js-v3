import { AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput } from "./commands/AddTagsToStreamCommand.ts";
import { CreateStreamCommandInput, CreateStreamCommandOutput } from "./commands/CreateStreamCommand.ts";
import {
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput,
} from "./commands/DecreaseStreamRetentionPeriodCommand.ts";
import { DeleteStreamCommandInput, DeleteStreamCommandOutput } from "./commands/DeleteStreamCommand.ts";
import {
  DeregisterStreamConsumerCommandInput,
  DeregisterStreamConsumerCommandOutput,
} from "./commands/DeregisterStreamConsumerCommand.ts";
import { DescribeLimitsCommandInput, DescribeLimitsCommandOutput } from "./commands/DescribeLimitsCommand.ts";
import { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "./commands/DescribeStreamCommand.ts";
import {
  DescribeStreamConsumerCommandInput,
  DescribeStreamConsumerCommandOutput,
} from "./commands/DescribeStreamConsumerCommand.ts";
import {
  DescribeStreamSummaryCommandInput,
  DescribeStreamSummaryCommandOutput,
} from "./commands/DescribeStreamSummaryCommand.ts";
import {
  DisableEnhancedMonitoringCommandInput,
  DisableEnhancedMonitoringCommandOutput,
} from "./commands/DisableEnhancedMonitoringCommand.ts";
import {
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput,
} from "./commands/EnableEnhancedMonitoringCommand.ts";
import { GetRecordsCommandInput, GetRecordsCommandOutput } from "./commands/GetRecordsCommand.ts";
import { GetShardIteratorCommandInput, GetShardIteratorCommandOutput } from "./commands/GetShardIteratorCommand.ts";
import {
  IncreaseStreamRetentionPeriodCommandInput,
  IncreaseStreamRetentionPeriodCommandOutput,
} from "./commands/IncreaseStreamRetentionPeriodCommand.ts";
import { ListShardsCommandInput, ListShardsCommandOutput } from "./commands/ListShardsCommand.ts";
import {
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
} from "./commands/ListStreamConsumersCommand.ts";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand.ts";
import { ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput } from "./commands/ListTagsForStreamCommand.ts";
import { MergeShardsCommandInput, MergeShardsCommandOutput } from "./commands/MergeShardsCommand.ts";
import { PutRecordCommandInput, PutRecordCommandOutput } from "./commands/PutRecordCommand.ts";
import { PutRecordsCommandInput, PutRecordsCommandOutput } from "./commands/PutRecordsCommand.ts";
import {
  RegisterStreamConsumerCommandInput,
  RegisterStreamConsumerCommandOutput,
} from "./commands/RegisterStreamConsumerCommand.ts";
import {
  RemoveTagsFromStreamCommandInput,
  RemoveTagsFromStreamCommandOutput,
} from "./commands/RemoveTagsFromStreamCommand.ts";
import { SplitShardCommandInput, SplitShardCommandOutput } from "./commands/SplitShardCommand.ts";
import {
  StartStreamEncryptionCommandInput,
  StartStreamEncryptionCommandOutput,
} from "./commands/StartStreamEncryptionCommand.ts";
import {
  StopStreamEncryptionCommandInput,
  StopStreamEncryptionCommandOutput,
} from "./commands/StopStreamEncryptionCommand.ts";
import { SubscribeToShardCommandInput, SubscribeToShardCommandOutput } from "./commands/SubscribeToShardCommand.ts";
import { UpdateShardCountCommandInput, UpdateShardCountCommandOutput } from "./commands/UpdateShardCountCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "../eventstream-serde-config-resolver/mod.ts";
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
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
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
  | AddTagsToStreamCommandInput
  | CreateStreamCommandInput
  | DecreaseStreamRetentionPeriodCommandInput
  | DeleteStreamCommandInput
  | DeregisterStreamConsumerCommandInput
  | DescribeLimitsCommandInput
  | DescribeStreamCommandInput
  | DescribeStreamConsumerCommandInput
  | DescribeStreamSummaryCommandInput
  | DisableEnhancedMonitoringCommandInput
  | EnableEnhancedMonitoringCommandInput
  | GetRecordsCommandInput
  | GetShardIteratorCommandInput
  | IncreaseStreamRetentionPeriodCommandInput
  | ListShardsCommandInput
  | ListStreamConsumersCommandInput
  | ListStreamsCommandInput
  | ListTagsForStreamCommandInput
  | MergeShardsCommandInput
  | PutRecordCommandInput
  | PutRecordsCommandInput
  | RegisterStreamConsumerCommandInput
  | RemoveTagsFromStreamCommandInput
  | SplitShardCommandInput
  | StartStreamEncryptionCommandInput
  | StopStreamEncryptionCommandInput
  | SubscribeToShardCommandInput
  | UpdateShardCountCommandInput;

export type ServiceOutputTypes =
  | AddTagsToStreamCommandOutput
  | CreateStreamCommandOutput
  | DecreaseStreamRetentionPeriodCommandOutput
  | DeleteStreamCommandOutput
  | DeregisterStreamConsumerCommandOutput
  | DescribeLimitsCommandOutput
  | DescribeStreamCommandOutput
  | DescribeStreamConsumerCommandOutput
  | DescribeStreamSummaryCommandOutput
  | DisableEnhancedMonitoringCommandOutput
  | EnableEnhancedMonitoringCommandOutput
  | GetRecordsCommandOutput
  | GetShardIteratorCommandOutput
  | IncreaseStreamRetentionPeriodCommandOutput
  | ListShardsCommandOutput
  | ListStreamConsumersCommandOutput
  | ListStreamsCommandOutput
  | ListTagsForStreamCommandOutput
  | MergeShardsCommandOutput
  | PutRecordCommandOutput
  | PutRecordsCommandOutput
  | RegisterStreamConsumerCommandOutput
  | RemoveTagsFromStreamCommandOutput
  | SplitShardCommandOutput
  | StartStreamEncryptionCommandOutput
  | StopStreamEncryptionCommandOutput
  | SubscribeToShardCommandOutput
  | UpdateShardCountCommandOutput;

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

  /**
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;
}

type KinesisClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  EventStreamSerdeInputConfig;
/**
 * The configuration interface of KinesisClient class constructor that set the region, credentials and other options.
 */
export interface KinesisClientConfig extends KinesisClientConfigType {}

type KinesisClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  EventStreamSerdeResolvedConfig;
/**
 * The resolved configuration interface of KinesisClient class. This is resolved and normalized from the {@link KinesisClientConfig | constructor configuration interface}.
 */
export interface KinesisClientResolvedConfig extends KinesisClientResolvedConfigType {}

/**
 * <fullname>Amazon Kinesis Data Streams Service API Reference</fullname>
 *         <p>Amazon Kinesis Data Streams is a managed service that scales elastically for
 *             real-time processing of streaming big data.</p>
 */
export class KinesisClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KinesisClientResolvedConfig
> {
  /**
   * The resolved configuration of KinesisClient class. This is resolved and normalized from the {@link KinesisClientConfig | constructor configuration interface}.
   */
  readonly config: KinesisClientResolvedConfig;

  constructor(configuration: KinesisClientConfig) {
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
    let _config_7 = resolveEventStreamSerdeConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
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
