import { CompareFacesCommandInput, CompareFacesCommandOutput } from "./commands/CompareFacesCommand.ts";
import { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "./commands/CreateCollectionCommand.ts";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand.ts";
import {
  CreateProjectVersionCommandInput,
  CreateProjectVersionCommandOutput,
} from "./commands/CreateProjectVersionCommand.ts";
import {
  CreateStreamProcessorCommandInput,
  CreateStreamProcessorCommandOutput,
} from "./commands/CreateStreamProcessorCommand.ts";
import { DeleteCollectionCommandInput, DeleteCollectionCommandOutput } from "./commands/DeleteCollectionCommand.ts";
import { DeleteFacesCommandInput, DeleteFacesCommandOutput } from "./commands/DeleteFacesCommand.ts";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand.ts";
import {
  DeleteProjectVersionCommandInput,
  DeleteProjectVersionCommandOutput,
} from "./commands/DeleteProjectVersionCommand.ts";
import {
  DeleteStreamProcessorCommandInput,
  DeleteStreamProcessorCommandOutput,
} from "./commands/DeleteStreamProcessorCommand.ts";
import { DescribeCollectionCommandInput, DescribeCollectionCommandOutput } from "./commands/DescribeCollectionCommand.ts";
import {
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
} from "./commands/DescribeProjectVersionsCommand.ts";
import { DescribeProjectsCommandInput, DescribeProjectsCommandOutput } from "./commands/DescribeProjectsCommand.ts";
import {
  DescribeStreamProcessorCommandInput,
  DescribeStreamProcessorCommandOutput,
} from "./commands/DescribeStreamProcessorCommand.ts";
import { DetectCustomLabelsCommandInput, DetectCustomLabelsCommandOutput } from "./commands/DetectCustomLabelsCommand.ts";
import { DetectFacesCommandInput, DetectFacesCommandOutput } from "./commands/DetectFacesCommand.ts";
import { DetectLabelsCommandInput, DetectLabelsCommandOutput } from "./commands/DetectLabelsCommand.ts";
import {
  DetectModerationLabelsCommandInput,
  DetectModerationLabelsCommandOutput,
} from "./commands/DetectModerationLabelsCommand.ts";
import {
  DetectProtectiveEquipmentCommandInput,
  DetectProtectiveEquipmentCommandOutput,
} from "./commands/DetectProtectiveEquipmentCommand.ts";
import { DetectTextCommandInput, DetectTextCommandOutput } from "./commands/DetectTextCommand.ts";
import { GetCelebrityInfoCommandInput, GetCelebrityInfoCommandOutput } from "./commands/GetCelebrityInfoCommand.ts";
import {
  GetCelebrityRecognitionCommandInput,
  GetCelebrityRecognitionCommandOutput,
} from "./commands/GetCelebrityRecognitionCommand.ts";
import {
  GetContentModerationCommandInput,
  GetContentModerationCommandOutput,
} from "./commands/GetContentModerationCommand.ts";
import { GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput } from "./commands/GetFaceDetectionCommand.ts";
import { GetFaceSearchCommandInput, GetFaceSearchCommandOutput } from "./commands/GetFaceSearchCommand.ts";
import { GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput } from "./commands/GetLabelDetectionCommand.ts";
import { GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput } from "./commands/GetPersonTrackingCommand.ts";
import {
  GetSegmentDetectionCommandInput,
  GetSegmentDetectionCommandOutput,
} from "./commands/GetSegmentDetectionCommand.ts";
import { GetTextDetectionCommandInput, GetTextDetectionCommandOutput } from "./commands/GetTextDetectionCommand.ts";
import { IndexFacesCommandInput, IndexFacesCommandOutput } from "./commands/IndexFacesCommand.ts";
import { ListCollectionsCommandInput, ListCollectionsCommandOutput } from "./commands/ListCollectionsCommand.ts";
import { ListFacesCommandInput, ListFacesCommandOutput } from "./commands/ListFacesCommand.ts";
import {
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
} from "./commands/ListStreamProcessorsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput,
} from "./commands/RecognizeCelebritiesCommand.ts";
import { SearchFacesByImageCommandInput, SearchFacesByImageCommandOutput } from "./commands/SearchFacesByImageCommand.ts";
import { SearchFacesCommandInput, SearchFacesCommandOutput } from "./commands/SearchFacesCommand.ts";
import {
  StartCelebrityRecognitionCommandInput,
  StartCelebrityRecognitionCommandOutput,
} from "./commands/StartCelebrityRecognitionCommand.ts";
import {
  StartContentModerationCommandInput,
  StartContentModerationCommandOutput,
} from "./commands/StartContentModerationCommand.ts";
import { StartFaceDetectionCommandInput, StartFaceDetectionCommandOutput } from "./commands/StartFaceDetectionCommand.ts";
import { StartFaceSearchCommandInput, StartFaceSearchCommandOutput } from "./commands/StartFaceSearchCommand.ts";
import {
  StartLabelDetectionCommandInput,
  StartLabelDetectionCommandOutput,
} from "./commands/StartLabelDetectionCommand.ts";
import {
  StartPersonTrackingCommandInput,
  StartPersonTrackingCommandOutput,
} from "./commands/StartPersonTrackingCommand.ts";
import {
  StartProjectVersionCommandInput,
  StartProjectVersionCommandOutput,
} from "./commands/StartProjectVersionCommand.ts";
import {
  StartSegmentDetectionCommandInput,
  StartSegmentDetectionCommandOutput,
} from "./commands/StartSegmentDetectionCommand.ts";
import {
  StartStreamProcessorCommandInput,
  StartStreamProcessorCommandOutput,
} from "./commands/StartStreamProcessorCommand.ts";
import { StartTextDetectionCommandInput, StartTextDetectionCommandOutput } from "./commands/StartTextDetectionCommand.ts";
import { StopProjectVersionCommandInput, StopProjectVersionCommandOutput } from "./commands/StopProjectVersionCommand.ts";
import {
  StopStreamProcessorCommandInput,
  StopStreamProcessorCommandOutput,
} from "./commands/StopStreamProcessorCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
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
  | CompareFacesCommandInput
  | CreateCollectionCommandInput
  | CreateProjectCommandInput
  | CreateProjectVersionCommandInput
  | CreateStreamProcessorCommandInput
  | DeleteCollectionCommandInput
  | DeleteFacesCommandInput
  | DeleteProjectCommandInput
  | DeleteProjectVersionCommandInput
  | DeleteStreamProcessorCommandInput
  | DescribeCollectionCommandInput
  | DescribeProjectVersionsCommandInput
  | DescribeProjectsCommandInput
  | DescribeStreamProcessorCommandInput
  | DetectCustomLabelsCommandInput
  | DetectFacesCommandInput
  | DetectLabelsCommandInput
  | DetectModerationLabelsCommandInput
  | DetectProtectiveEquipmentCommandInput
  | DetectTextCommandInput
  | GetCelebrityInfoCommandInput
  | GetCelebrityRecognitionCommandInput
  | GetContentModerationCommandInput
  | GetFaceDetectionCommandInput
  | GetFaceSearchCommandInput
  | GetLabelDetectionCommandInput
  | GetPersonTrackingCommandInput
  | GetSegmentDetectionCommandInput
  | GetTextDetectionCommandInput
  | IndexFacesCommandInput
  | ListCollectionsCommandInput
  | ListFacesCommandInput
  | ListStreamProcessorsCommandInput
  | ListTagsForResourceCommandInput
  | RecognizeCelebritiesCommandInput
  | SearchFacesByImageCommandInput
  | SearchFacesCommandInput
  | StartCelebrityRecognitionCommandInput
  | StartContentModerationCommandInput
  | StartFaceDetectionCommandInput
  | StartFaceSearchCommandInput
  | StartLabelDetectionCommandInput
  | StartPersonTrackingCommandInput
  | StartProjectVersionCommandInput
  | StartSegmentDetectionCommandInput
  | StartStreamProcessorCommandInput
  | StartTextDetectionCommandInput
  | StopProjectVersionCommandInput
  | StopStreamProcessorCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | CompareFacesCommandOutput
  | CreateCollectionCommandOutput
  | CreateProjectCommandOutput
  | CreateProjectVersionCommandOutput
  | CreateStreamProcessorCommandOutput
  | DeleteCollectionCommandOutput
  | DeleteFacesCommandOutput
  | DeleteProjectCommandOutput
  | DeleteProjectVersionCommandOutput
  | DeleteStreamProcessorCommandOutput
  | DescribeCollectionCommandOutput
  | DescribeProjectVersionsCommandOutput
  | DescribeProjectsCommandOutput
  | DescribeStreamProcessorCommandOutput
  | DetectCustomLabelsCommandOutput
  | DetectFacesCommandOutput
  | DetectLabelsCommandOutput
  | DetectModerationLabelsCommandOutput
  | DetectProtectiveEquipmentCommandOutput
  | DetectTextCommandOutput
  | GetCelebrityInfoCommandOutput
  | GetCelebrityRecognitionCommandOutput
  | GetContentModerationCommandOutput
  | GetFaceDetectionCommandOutput
  | GetFaceSearchCommandOutput
  | GetLabelDetectionCommandOutput
  | GetPersonTrackingCommandOutput
  | GetSegmentDetectionCommandOutput
  | GetTextDetectionCommandOutput
  | IndexFacesCommandOutput
  | ListCollectionsCommandOutput
  | ListFacesCommandOutput
  | ListStreamProcessorsCommandOutput
  | ListTagsForResourceCommandOutput
  | RecognizeCelebritiesCommandOutput
  | SearchFacesByImageCommandOutput
  | SearchFacesCommandOutput
  | StartCelebrityRecognitionCommandOutput
  | StartContentModerationCommandOutput
  | StartFaceDetectionCommandOutput
  | StartFaceSearchCommandOutput
  | StartLabelDetectionCommandOutput
  | StartPersonTrackingCommandOutput
  | StartProjectVersionCommandOutput
  | StartSegmentDetectionCommandOutput
  | StartStreamProcessorCommandOutput
  | StartTextDetectionCommandOutput
  | StopProjectVersionCommandOutput
  | StopStreamProcessorCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

type RekognitionClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of RekognitionClient class constructor that set the region, credentials and other options.
 */
export interface RekognitionClientConfig extends RekognitionClientConfigType {}

type RekognitionClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of RekognitionClient class. This is resolved and normalized from the {@link RekognitionClientConfig | constructor configuration interface}.
 */
export interface RekognitionClientResolvedConfig extends RekognitionClientResolvedConfigType {}

/**
 * <p>This is the Amazon Rekognition API reference.</p>
 */
export class RekognitionClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RekognitionClientResolvedConfig
> {
  /**
   * The resolved configuration of RekognitionClient class. This is resolved and normalized from the {@link RekognitionClientConfig | constructor configuration interface}.
   */
  readonly config: RekognitionClientResolvedConfig;

  constructor(configuration: RekognitionClientConfig) {
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
