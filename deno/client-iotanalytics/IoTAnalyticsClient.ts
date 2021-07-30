import { BatchPutMessageCommandInput, BatchPutMessageCommandOutput } from "./commands/BatchPutMessageCommand.ts";
import {
  CancelPipelineReprocessingCommandInput,
  CancelPipelineReprocessingCommandOutput,
} from "./commands/CancelPipelineReprocessingCommand.ts";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand.ts";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand.ts";
import {
  CreateDatasetContentCommandInput,
  CreateDatasetContentCommandOutput,
} from "./commands/CreateDatasetContentCommand.ts";
import { CreateDatastoreCommandInput, CreateDatastoreCommandOutput } from "./commands/CreateDatastoreCommand.ts";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand.ts";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand.ts";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand.ts";
import {
  DeleteDatasetContentCommandInput,
  DeleteDatasetContentCommandOutput,
} from "./commands/DeleteDatasetContentCommand.ts";
import { DeleteDatastoreCommandInput, DeleteDatastoreCommandOutput } from "./commands/DeleteDatastoreCommand.ts";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand.ts";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand.ts";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand.ts";
import { DescribeDatastoreCommandInput, DescribeDatastoreCommandOutput } from "./commands/DescribeDatastoreCommand.ts";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand.ts";
import { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "./commands/DescribePipelineCommand.ts";
import { GetDatasetContentCommandInput, GetDatasetContentCommandOutput } from "./commands/GetDatasetContentCommand.ts";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand.ts";
import {
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput,
} from "./commands/ListDatasetContentsCommand.ts";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand.ts";
import { ListDatastoresCommandInput, ListDatastoresCommandOutput } from "./commands/ListDatastoresCommand.ts";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "./commands/PutLoggingOptionsCommand.ts";
import {
  RunPipelineActivityCommandInput,
  RunPipelineActivityCommandOutput,
} from "./commands/RunPipelineActivityCommand.ts";
import { SampleChannelDataCommandInput, SampleChannelDataCommandOutput } from "./commands/SampleChannelDataCommand.ts";
import {
  StartPipelineReprocessingCommandInput,
  StartPipelineReprocessingCommandOutput,
} from "./commands/StartPipelineReprocessingCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand.ts";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand.ts";
import { UpdateDatastoreCommandInput, UpdateDatastoreCommandOutput } from "./commands/UpdateDatastoreCommand.ts";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand.ts";
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
  | BatchPutMessageCommandInput
  | CancelPipelineReprocessingCommandInput
  | CreateChannelCommandInput
  | CreateDatasetCommandInput
  | CreateDatasetContentCommandInput
  | CreateDatastoreCommandInput
  | CreatePipelineCommandInput
  | DeleteChannelCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetContentCommandInput
  | DeleteDatastoreCommandInput
  | DeletePipelineCommandInput
  | DescribeChannelCommandInput
  | DescribeDatasetCommandInput
  | DescribeDatastoreCommandInput
  | DescribeLoggingOptionsCommandInput
  | DescribePipelineCommandInput
  | GetDatasetContentCommandInput
  | ListChannelsCommandInput
  | ListDatasetContentsCommandInput
  | ListDatasetsCommandInput
  | ListDatastoresCommandInput
  | ListPipelinesCommandInput
  | ListTagsForResourceCommandInput
  | PutLoggingOptionsCommandInput
  | RunPipelineActivityCommandInput
  | SampleChannelDataCommandInput
  | StartPipelineReprocessingCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput
  | UpdateDatasetCommandInput
  | UpdateDatastoreCommandInput
  | UpdatePipelineCommandInput;

export type ServiceOutputTypes =
  | BatchPutMessageCommandOutput
  | CancelPipelineReprocessingCommandOutput
  | CreateChannelCommandOutput
  | CreateDatasetCommandOutput
  | CreateDatasetContentCommandOutput
  | CreateDatastoreCommandOutput
  | CreatePipelineCommandOutput
  | DeleteChannelCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetContentCommandOutput
  | DeleteDatastoreCommandOutput
  | DeletePipelineCommandOutput
  | DescribeChannelCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDatastoreCommandOutput
  | DescribeLoggingOptionsCommandOutput
  | DescribePipelineCommandOutput
  | GetDatasetContentCommandOutput
  | ListChannelsCommandOutput
  | ListDatasetContentsCommandOutput
  | ListDatasetsCommandOutput
  | ListDatastoresCommandOutput
  | ListPipelinesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutLoggingOptionsCommandOutput
  | RunPipelineActivityCommandOutput
  | SampleChannelDataCommandOutput
  | StartPipelineReprocessingCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput
  | UpdateDatasetCommandOutput
  | UpdateDatastoreCommandOutput
  | UpdatePipelineCommandOutput;

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

type IoTAnalyticsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of IoTAnalyticsClient class constructor that set the region, credentials and other options.
 */
export interface IoTAnalyticsClientConfig extends IoTAnalyticsClientConfigType {}

type IoTAnalyticsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of IoTAnalyticsClient class. This is resolved and normalized from the {@link IoTAnalyticsClientConfig | constructor configuration interface}.
 */
export interface IoTAnalyticsClientResolvedConfig extends IoTAnalyticsClientResolvedConfigType {}

/**
 * <p>AWS IoT Analytics allows you to collect large amounts of device data, process messages, and store them.
 *     You can then query the data and run sophisticated analytics on it.  AWS IoT Analytics enables advanced
 *     data exploration through integration with Jupyter Notebooks and data visualization through integration
 *     with Amazon QuickSight.</p>
 *
 *          <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data
 *     often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result
 *     the data from these devices can have significant gaps, corrupted messages, and false readings that must be
 *     cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data
 *     from external sources. </p>
 *
 *          <p>AWS IoT Analytics automates the steps required to analyze data from IoT devices. AWS IoT Analytics
 *     filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You
 *     can set up the service to collect only the data you need from your devices, apply mathematical transforms
 *     to process the data, and enrich the data with device-specific metadata such as device type and location
 *     before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine,
 *     or perform more complex analytics and machine learning inference. AWS IoT Analytics includes pre-built models
 *     for common IoT use cases so you can answer questions like which devices are about to fail or which customers
 *     are at risk of abandoning their wearable devices.</p>
 */
export class IoTAnalyticsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTAnalyticsClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTAnalyticsClient class. This is resolved and normalized from the {@link IoTAnalyticsClientConfig | constructor configuration interface}.
   */
  readonly config: IoTAnalyticsClientResolvedConfig;

  constructor(configuration: IoTAnalyticsClientConfig) {
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
