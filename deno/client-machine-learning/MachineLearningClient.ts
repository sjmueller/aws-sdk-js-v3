import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand.ts";
import {
  CreateBatchPredictionCommandInput,
  CreateBatchPredictionCommandOutput,
} from "./commands/CreateBatchPredictionCommand.ts";
import {
  CreateDataSourceFromRDSCommandInput,
  CreateDataSourceFromRDSCommandOutput,
} from "./commands/CreateDataSourceFromRDSCommand.ts";
import {
  CreateDataSourceFromRedshiftCommandInput,
  CreateDataSourceFromRedshiftCommandOutput,
} from "./commands/CreateDataSourceFromRedshiftCommand.ts";
import {
  CreateDataSourceFromS3CommandInput,
  CreateDataSourceFromS3CommandOutput,
} from "./commands/CreateDataSourceFromS3Command.ts";
import { CreateEvaluationCommandInput, CreateEvaluationCommandOutput } from "./commands/CreateEvaluationCommand.ts";
import { CreateMLModelCommandInput, CreateMLModelCommandOutput } from "./commands/CreateMLModelCommand.ts";
import {
  CreateRealtimeEndpointCommandInput,
  CreateRealtimeEndpointCommandOutput,
} from "./commands/CreateRealtimeEndpointCommand.ts";
import {
  DeleteBatchPredictionCommandInput,
  DeleteBatchPredictionCommandOutput,
} from "./commands/DeleteBatchPredictionCommand.ts";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand.ts";
import { DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput } from "./commands/DeleteEvaluationCommand.ts";
import { DeleteMLModelCommandInput, DeleteMLModelCommandOutput } from "./commands/DeleteMLModelCommand.ts";
import {
  DeleteRealtimeEndpointCommandInput,
  DeleteRealtimeEndpointCommandOutput,
} from "./commands/DeleteRealtimeEndpointCommand.ts";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand.ts";
import {
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput,
} from "./commands/DescribeBatchPredictionsCommand.ts";
import {
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput,
} from "./commands/DescribeDataSourcesCommand.ts";
import {
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput,
} from "./commands/DescribeEvaluationsCommand.ts";
import { DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput } from "./commands/DescribeMLModelsCommand.ts";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand.ts";
import {
  GetBatchPredictionCommandInput,
  GetBatchPredictionCommandOutput,
} from "./commands/GetBatchPredictionCommand.ts";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand.ts";
import { GetEvaluationCommandInput, GetEvaluationCommandOutput } from "./commands/GetEvaluationCommand.ts";
import { GetMLModelCommandInput, GetMLModelCommandOutput } from "./commands/GetMLModelCommand.ts";
import { PredictCommandInput, PredictCommandOutput } from "./commands/PredictCommand.ts";
import {
  UpdateBatchPredictionCommandInput,
  UpdateBatchPredictionCommandOutput,
} from "./commands/UpdateBatchPredictionCommand.ts";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand.ts";
import { UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput } from "./commands/UpdateEvaluationCommand.ts";
import { UpdateMLModelCommandInput, UpdateMLModelCommandOutput } from "./commands/UpdateMLModelCommand.ts";
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
  | AddTagsCommandInput
  | CreateBatchPredictionCommandInput
  | CreateDataSourceFromRDSCommandInput
  | CreateDataSourceFromRedshiftCommandInput
  | CreateDataSourceFromS3CommandInput
  | CreateEvaluationCommandInput
  | CreateMLModelCommandInput
  | CreateRealtimeEndpointCommandInput
  | DeleteBatchPredictionCommandInput
  | DeleteDataSourceCommandInput
  | DeleteEvaluationCommandInput
  | DeleteMLModelCommandInput
  | DeleteRealtimeEndpointCommandInput
  | DeleteTagsCommandInput
  | DescribeBatchPredictionsCommandInput
  | DescribeDataSourcesCommandInput
  | DescribeEvaluationsCommandInput
  | DescribeMLModelsCommandInput
  | DescribeTagsCommandInput
  | GetBatchPredictionCommandInput
  | GetDataSourceCommandInput
  | GetEvaluationCommandInput
  | GetMLModelCommandInput
  | PredictCommandInput
  | UpdateBatchPredictionCommandInput
  | UpdateDataSourceCommandInput
  | UpdateEvaluationCommandInput
  | UpdateMLModelCommandInput;

export type ServiceOutputTypes =
  | AddTagsCommandOutput
  | CreateBatchPredictionCommandOutput
  | CreateDataSourceFromRDSCommandOutput
  | CreateDataSourceFromRedshiftCommandOutput
  | CreateDataSourceFromS3CommandOutput
  | CreateEvaluationCommandOutput
  | CreateMLModelCommandOutput
  | CreateRealtimeEndpointCommandOutput
  | DeleteBatchPredictionCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteEvaluationCommandOutput
  | DeleteMLModelCommandOutput
  | DeleteRealtimeEndpointCommandOutput
  | DeleteTagsCommandOutput
  | DescribeBatchPredictionsCommandOutput
  | DescribeDataSourcesCommandOutput
  | DescribeEvaluationsCommandOutput
  | DescribeMLModelsCommandOutput
  | DescribeTagsCommandOutput
  | GetBatchPredictionCommandOutput
  | GetDataSourceCommandOutput
  | GetEvaluationCommandOutput
  | GetMLModelCommandOutput
  | PredictCommandOutput
  | UpdateBatchPredictionCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateEvaluationCommandOutput
  | UpdateMLModelCommandOutput;

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

export type MachineLearningClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type MachineLearningClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Definition of the public APIs
 *             exposed by Amazon Machine Learning</p>
 */
export class MachineLearningClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MachineLearningClientResolvedConfig
> {
  readonly config: MachineLearningClientResolvedConfig;

  constructor(configuration: MachineLearningClientConfig) {
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
