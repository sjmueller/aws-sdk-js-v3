import {
  CancelJobCommandInput,
  CancelJobCommandOutput
} from "./commands/CancelJobCommand.ts";
import {
  CreateDataSetCommandInput,
  CreateDataSetCommandOutput
} from "./commands/CreateDataSetCommand.ts";
import {
  CreateJobCommandInput,
  CreateJobCommandOutput
} from "./commands/CreateJobCommand.ts";
import {
  CreateRevisionCommandInput,
  CreateRevisionCommandOutput
} from "./commands/CreateRevisionCommand.ts";
import {
  DeleteAssetCommandInput,
  DeleteAssetCommandOutput
} from "./commands/DeleteAssetCommand.ts";
import {
  DeleteDataSetCommandInput,
  DeleteDataSetCommandOutput
} from "./commands/DeleteDataSetCommand.ts";
import {
  DeleteRevisionCommandInput,
  DeleteRevisionCommandOutput
} from "./commands/DeleteRevisionCommand.ts";
import {
  GetAssetCommandInput,
  GetAssetCommandOutput
} from "./commands/GetAssetCommand.ts";
import {
  GetDataSetCommandInput,
  GetDataSetCommandOutput
} from "./commands/GetDataSetCommand.ts";
import {
  GetJobCommandInput,
  GetJobCommandOutput
} from "./commands/GetJobCommand.ts";
import {
  GetRevisionCommandInput,
  GetRevisionCommandOutput
} from "./commands/GetRevisionCommand.ts";
import {
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput
} from "./commands/ListDataSetRevisionsCommand.ts";
import {
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput
} from "./commands/ListDataSetsCommand.ts";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "./commands/ListJobsCommand.ts";
import {
  ListRevisionAssetsCommandInput,
  ListRevisionAssetsCommandOutput
} from "./commands/ListRevisionAssetsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand.ts";
import {
  StartJobCommandInput,
  StartJobCommandOutput
} from "./commands/StartJobCommand.ts";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand.ts";
import {
  UpdateAssetCommandInput,
  UpdateAssetCommandOutput
} from "./commands/UpdateAssetCommand.ts";
import {
  UpdateDataSetCommandInput,
  UpdateDataSetCommandOutput
} from "./commands/UpdateDataSetCommand.ts";
import {
  UpdateRevisionCommandInput,
  UpdateRevisionCommandOutput
} from "./commands/UpdateRevisionCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "../middleware-host-header/mod.ts";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "../smithy-client/mod.ts";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CancelJobCommandInput
  | CreateDataSetCommandInput
  | CreateJobCommandInput
  | CreateRevisionCommandInput
  | DeleteAssetCommandInput
  | DeleteDataSetCommandInput
  | DeleteRevisionCommandInput
  | GetAssetCommandInput
  | GetDataSetCommandInput
  | GetJobCommandInput
  | GetRevisionCommandInput
  | ListDataSetRevisionsCommandInput
  | ListDataSetsCommandInput
  | ListJobsCommandInput
  | ListRevisionAssetsCommandInput
  | ListTagsForResourceCommandInput
  | StartJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAssetCommandInput
  | UpdateDataSetCommandInput
  | UpdateRevisionCommandInput;

export type ServiceOutputTypes =
  | CancelJobCommandOutput
  | CreateDataSetCommandOutput
  | CreateJobCommandOutput
  | CreateRevisionCommandOutput
  | DeleteAssetCommandOutput
  | DeleteDataSetCommandOutput
  | DeleteRevisionCommandOutput
  | GetAssetCommandOutput
  | GetDataSetCommandOutput
  | GetJobCommandOutput
  | GetRevisionCommandOutput
  | ListDataSetRevisionsCommandOutput
  | ListDataSetsCommandOutput
  | ListJobsCommandOutput
  | ListRevisionAssetsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAssetCommandOutput
  | UpdateDataSetCommandOutput
  | UpdateRevisionCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type DataExchangeClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DataExchangeClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access file-based data set in the AWS Cloud.</p><p>As a subscriber, you can view and access the data sets that you have an entitlement to through a subscription. You can use the APIS to download or copy your entitled data sets to Amazon S3 for use across a variety of AWS analytics and machine learning services.</p><p>As a provider, you can create and manage your data sets that you would like to publish to a product. Being able to package and provide your data sets into products requires a few steps to determine eligibility. For more information, visit the AWS Data Exchange User Guide.</p><p>A data set is a collection of data that can be changed or updated over time. Data sets can be updated using revisions, which represent a new version or incremental change to a data set.  A revision contains one or more assets. An asset in AWS Data Exchange is a piece of data that can be stored as an Amazon S3 object. The asset can be a structured data file, an image file, or some other data file. Jobs are asynchronous import or export operations used to create or copy assets.</p>
 */
export class DataExchangeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataExchangeClientResolvedConfig
> {
  readonly config: DataExchangeClientResolvedConfig;

  constructor(configuration: DataExchangeClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
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
  }

  destroy(): void {
    super.destroy();
  }
}
