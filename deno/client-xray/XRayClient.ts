
import { BatchGetTracesCommandInput, BatchGetTracesCommandOutput } from "./commands/BatchGetTracesCommand.ts";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand.ts";
import { CreateSamplingRuleCommandInput, CreateSamplingRuleCommandOutput } from "./commands/CreateSamplingRuleCommand.ts";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand.ts";
import { DeleteSamplingRuleCommandInput, DeleteSamplingRuleCommandOutput } from "./commands/DeleteSamplingRuleCommand.ts";
import {
  GetEncryptionConfigCommandInput,
  GetEncryptionConfigCommandOutput,
} from "./commands/GetEncryptionConfigCommand.ts";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand.ts";
import { GetGroupsCommandInput, GetGroupsCommandOutput } from "./commands/GetGroupsCommand.ts";
import { GetInsightCommandInput, GetInsightCommandOutput } from "./commands/GetInsightCommand.ts";
import { GetInsightEventsCommandInput, GetInsightEventsCommandOutput } from "./commands/GetInsightEventsCommand.ts";
import {
  GetInsightImpactGraphCommandInput,
  GetInsightImpactGraphCommandOutput,
} from "./commands/GetInsightImpactGraphCommand.ts";
import {
  GetInsightSummariesCommandInput,
  GetInsightSummariesCommandOutput,
} from "./commands/GetInsightSummariesCommand.ts";
import { GetSamplingRulesCommandInput, GetSamplingRulesCommandOutput } from "./commands/GetSamplingRulesCommand.ts";
import {
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput,
} from "./commands/GetSamplingStatisticSummariesCommand.ts";
import { GetSamplingTargetsCommandInput, GetSamplingTargetsCommandOutput } from "./commands/GetSamplingTargetsCommand.ts";
import { GetServiceGraphCommandInput, GetServiceGraphCommandOutput } from "./commands/GetServiceGraphCommand.ts";
import {
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
} from "./commands/GetTimeSeriesServiceStatisticsCommand.ts";
import { GetTraceGraphCommandInput, GetTraceGraphCommandOutput } from "./commands/GetTraceGraphCommand.ts";
import { GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput } from "./commands/GetTraceSummariesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutEncryptionConfigCommandInput,
  PutEncryptionConfigCommandOutput,
} from "./commands/PutEncryptionConfigCommand.ts";
import {
  PutTelemetryRecordsCommandInput,
  PutTelemetryRecordsCommandOutput,
} from "./commands/PutTelemetryRecordsCommand.ts";
import { PutTraceSegmentsCommandInput, PutTraceSegmentsCommandOutput } from "./commands/PutTraceSegmentsCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand.ts";
import { UpdateSamplingRuleCommandInput, UpdateSamplingRuleCommandOutput } from "./commands/UpdateSamplingRuleCommand.ts";
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
  | BatchGetTracesCommandInput
  | CreateGroupCommandInput
  | CreateSamplingRuleCommandInput
  | DeleteGroupCommandInput
  | DeleteSamplingRuleCommandInput
  | GetEncryptionConfigCommandInput
  | GetGroupCommandInput
  | GetGroupsCommandInput
  | GetInsightCommandInput
  | GetInsightEventsCommandInput
  | GetInsightImpactGraphCommandInput
  | GetInsightSummariesCommandInput
  | GetSamplingRulesCommandInput
  | GetSamplingStatisticSummariesCommandInput
  | GetSamplingTargetsCommandInput
  | GetServiceGraphCommandInput
  | GetTimeSeriesServiceStatisticsCommandInput
  | GetTraceGraphCommandInput
  | GetTraceSummariesCommandInput
  | ListTagsForResourceCommandInput
  | PutEncryptionConfigCommandInput
  | PutTelemetryRecordsCommandInput
  | PutTraceSegmentsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateGroupCommandInput
  | UpdateSamplingRuleCommandInput;

export type ServiceOutputTypes =
  | BatchGetTracesCommandOutput
  | CreateGroupCommandOutput
  | CreateSamplingRuleCommandOutput
  | DeleteGroupCommandOutput
  | DeleteSamplingRuleCommandOutput
  | GetEncryptionConfigCommandOutput
  | GetGroupCommandOutput
  | GetGroupsCommandOutput
  | GetInsightCommandOutput
  | GetInsightEventsCommandOutput
  | GetInsightImpactGraphCommandOutput
  | GetInsightSummariesCommandOutput
  | GetSamplingRulesCommandOutput
  | GetSamplingStatisticSummariesCommandOutput
  | GetSamplingTargetsCommandOutput
  | GetServiceGraphCommandOutput
  | GetTimeSeriesServiceStatisticsCommandOutput
  | GetTraceGraphCommandOutput
  | GetTraceSummariesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutEncryptionConfigCommandOutput
  | PutTelemetryRecordsCommandOutput
  | PutTraceSegmentsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateGroupCommandOutput
  | UpdateSamplingRuleCommandOutput;

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

export type XRayClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type XRayClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>AWS X-Ray provides APIs for managing debug traces and retrieving service maps
 *       and other data created by processing those traces.</p>
 */
export class XRayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  XRayClientResolvedConfig
> {
  readonly config: XRayClientResolvedConfig;

  constructor(configuration: XRayClientConfig) {
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
