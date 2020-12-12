import {
  DescribeEntitiesDetectionV2JobCommandInput,
  DescribeEntitiesDetectionV2JobCommandOutput,
} from "./commands/DescribeEntitiesDetectionV2JobCommand.ts";
import {
  DescribeICD10CMInferenceJobCommandInput,
  DescribeICD10CMInferenceJobCommandOutput,
} from "./commands/DescribeICD10CMInferenceJobCommand.ts";
import {
  DescribePHIDetectionJobCommandInput,
  DescribePHIDetectionJobCommandOutput,
} from "./commands/DescribePHIDetectionJobCommand.ts";
import {
  DescribeRxNormInferenceJobCommandInput,
  DescribeRxNormInferenceJobCommandOutput,
} from "./commands/DescribeRxNormInferenceJobCommand.ts";
import { DetectEntitiesCommandInput, DetectEntitiesCommandOutput } from "./commands/DetectEntitiesCommand.ts";
import { DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput } from "./commands/DetectEntitiesV2Command.ts";
import { DetectPHICommandInput, DetectPHICommandOutput } from "./commands/DetectPHICommand.ts";
import { InferICD10CMCommandInput, InferICD10CMCommandOutput } from "./commands/InferICD10CMCommand.ts";
import { InferRxNormCommandInput, InferRxNormCommandOutput } from "./commands/InferRxNormCommand.ts";
import {
  ListEntitiesDetectionV2JobsCommandInput,
  ListEntitiesDetectionV2JobsCommandOutput,
} from "./commands/ListEntitiesDetectionV2JobsCommand.ts";
import {
  ListICD10CMInferenceJobsCommandInput,
  ListICD10CMInferenceJobsCommandOutput,
} from "./commands/ListICD10CMInferenceJobsCommand.ts";
import {
  ListPHIDetectionJobsCommandInput,
  ListPHIDetectionJobsCommandOutput,
} from "./commands/ListPHIDetectionJobsCommand.ts";
import {
  ListRxNormInferenceJobsCommandInput,
  ListRxNormInferenceJobsCommandOutput,
} from "./commands/ListRxNormInferenceJobsCommand.ts";
import {
  StartEntitiesDetectionV2JobCommandInput,
  StartEntitiesDetectionV2JobCommandOutput,
} from "./commands/StartEntitiesDetectionV2JobCommand.ts";
import {
  StartICD10CMInferenceJobCommandInput,
  StartICD10CMInferenceJobCommandOutput,
} from "./commands/StartICD10CMInferenceJobCommand.ts";
import {
  StartPHIDetectionJobCommandInput,
  StartPHIDetectionJobCommandOutput,
} from "./commands/StartPHIDetectionJobCommand.ts";
import {
  StartRxNormInferenceJobCommandInput,
  StartRxNormInferenceJobCommandOutput,
} from "./commands/StartRxNormInferenceJobCommand.ts";
import {
  StopEntitiesDetectionV2JobCommandInput,
  StopEntitiesDetectionV2JobCommandOutput,
} from "./commands/StopEntitiesDetectionV2JobCommand.ts";
import {
  StopICD10CMInferenceJobCommandInput,
  StopICD10CMInferenceJobCommandOutput,
} from "./commands/StopICD10CMInferenceJobCommand.ts";
import {
  StopPHIDetectionJobCommandInput,
  StopPHIDetectionJobCommandOutput,
} from "./commands/StopPHIDetectionJobCommand.ts";
import {
  StopRxNormInferenceJobCommandInput,
  StopRxNormInferenceJobCommandOutput,
} from "./commands/StopRxNormInferenceJobCommand.ts";
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
  | DescribeEntitiesDetectionV2JobCommandInput
  | DescribeICD10CMInferenceJobCommandInput
  | DescribePHIDetectionJobCommandInput
  | DescribeRxNormInferenceJobCommandInput
  | DetectEntitiesCommandInput
  | DetectEntitiesV2CommandInput
  | DetectPHICommandInput
  | InferICD10CMCommandInput
  | InferRxNormCommandInput
  | ListEntitiesDetectionV2JobsCommandInput
  | ListICD10CMInferenceJobsCommandInput
  | ListPHIDetectionJobsCommandInput
  | ListRxNormInferenceJobsCommandInput
  | StartEntitiesDetectionV2JobCommandInput
  | StartICD10CMInferenceJobCommandInput
  | StartPHIDetectionJobCommandInput
  | StartRxNormInferenceJobCommandInput
  | StopEntitiesDetectionV2JobCommandInput
  | StopICD10CMInferenceJobCommandInput
  | StopPHIDetectionJobCommandInput
  | StopRxNormInferenceJobCommandInput;

export type ServiceOutputTypes =
  | DescribeEntitiesDetectionV2JobCommandOutput
  | DescribeICD10CMInferenceJobCommandOutput
  | DescribePHIDetectionJobCommandOutput
  | DescribeRxNormInferenceJobCommandOutput
  | DetectEntitiesCommandOutput
  | DetectEntitiesV2CommandOutput
  | DetectPHICommandOutput
  | InferICD10CMCommandOutput
  | InferRxNormCommandOutput
  | ListEntitiesDetectionV2JobsCommandOutput
  | ListICD10CMInferenceJobsCommandOutput
  | ListPHIDetectionJobsCommandOutput
  | ListRxNormInferenceJobsCommandOutput
  | StartEntitiesDetectionV2JobCommandOutput
  | StartICD10CMInferenceJobCommandOutput
  | StartPHIDetectionJobCommandOutput
  | StartRxNormInferenceJobCommandOutput
  | StopEntitiesDetectionV2JobCommandOutput
  | StopICD10CMInferenceJobCommandOutput
  | StopPHIDetectionJobCommandOutput
  | StopRxNormInferenceJobCommandOutput;

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

export type ComprehendMedicalClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ComprehendMedicalClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p> Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions
 *       to gain insight in your documents. </p>
 */
export class ComprehendMedicalClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ComprehendMedicalClientResolvedConfig
> {
  readonly config: ComprehendMedicalClientResolvedConfig;

  constructor(configuration: ComprehendMedicalClientConfig) {
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
