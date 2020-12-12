import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand.ts";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand.ts";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand.ts";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand.ts";
import {
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput,
} from "./commands/DeleteAccessPointPolicyCommand.ts";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand.ts";
import {
  DeleteBucketLifecycleConfigurationCommandInput,
  DeleteBucketLifecycleConfigurationCommandOutput,
} from "./commands/DeleteBucketLifecycleConfigurationCommand.ts";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "./commands/DeleteBucketPolicyCommand.ts";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand.ts";
import { DeleteJobTaggingCommandInput, DeleteJobTaggingCommandOutput } from "./commands/DeleteJobTaggingCommand.ts";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand.ts";
import {
  DeleteStorageLensConfigurationCommandInput,
  DeleteStorageLensConfigurationCommandOutput,
} from "./commands/DeleteStorageLensConfigurationCommand.ts";
import {
  DeleteStorageLensConfigurationTaggingCommandInput,
  DeleteStorageLensConfigurationTaggingCommandOutput,
} from "./commands/DeleteStorageLensConfigurationTaggingCommand.ts";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand.ts";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "./commands/GetAccessPointCommand.ts";
import {
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
} from "./commands/GetAccessPointPolicyCommand.ts";
import {
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
} from "./commands/GetAccessPointPolicyStatusCommand.ts";
import { GetBucketCommandInput, GetBucketCommandOutput } from "./commands/GetBucketCommand.ts";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand.ts";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand.ts";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand.ts";
import { GetJobTaggingCommandInput, GetJobTaggingCommandOutput } from "./commands/GetJobTaggingCommand.ts";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand.ts";
import {
  GetStorageLensConfigurationCommandInput,
  GetStorageLensConfigurationCommandOutput,
} from "./commands/GetStorageLensConfigurationCommand.ts";
import {
  GetStorageLensConfigurationTaggingCommandInput,
  GetStorageLensConfigurationTaggingCommandOutput,
} from "./commands/GetStorageLensConfigurationTaggingCommand.ts";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "./commands/ListAccessPointsCommand.ts";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand.ts";
import {
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "./commands/ListRegionalBucketsCommand.ts";
import {
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
} from "./commands/ListStorageLensConfigurationsCommand.ts";
import {
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
} from "./commands/PutAccessPointPolicyCommand.ts";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand.ts";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand.ts";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand.ts";
import { PutJobTaggingCommandInput, PutJobTaggingCommandOutput } from "./commands/PutJobTaggingCommand.ts";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand.ts";
import {
  PutStorageLensConfigurationCommandInput,
  PutStorageLensConfigurationCommandOutput,
} from "./commands/PutStorageLensConfigurationCommand.ts";
import {
  PutStorageLensConfigurationTaggingCommandInput,
  PutStorageLensConfigurationTaggingCommandOutput,
} from "./commands/PutStorageLensConfigurationTaggingCommand.ts";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "./commands/UpdateJobPriorityCommand.ts";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "./commands/UpdateJobStatusCommand.ts";
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
  S3ControlInputConfig,
  S3ControlResolvedConfig,
  resolveS3ControlConfig,
} from "../middleware-sdk-s3-control/mod.ts";
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
  | CreateAccessPointCommandInput
  | CreateBucketCommandInput
  | CreateJobCommandInput
  | DeleteAccessPointCommandInput
  | DeleteAccessPointPolicyCommandInput
  | DeleteBucketCommandInput
  | DeleteBucketLifecycleConfigurationCommandInput
  | DeleteBucketPolicyCommandInput
  | DeleteBucketTaggingCommandInput
  | DeleteJobTaggingCommandInput
  | DeletePublicAccessBlockCommandInput
  | DeleteStorageLensConfigurationCommandInput
  | DeleteStorageLensConfigurationTaggingCommandInput
  | DescribeJobCommandInput
  | GetAccessPointCommandInput
  | GetAccessPointPolicyCommandInput
  | GetAccessPointPolicyStatusCommandInput
  | GetBucketCommandInput
  | GetBucketLifecycleConfigurationCommandInput
  | GetBucketPolicyCommandInput
  | GetBucketTaggingCommandInput
  | GetJobTaggingCommandInput
  | GetPublicAccessBlockCommandInput
  | GetStorageLensConfigurationCommandInput
  | GetStorageLensConfigurationTaggingCommandInput
  | ListAccessPointsCommandInput
  | ListJobsCommandInput
  | ListRegionalBucketsCommandInput
  | ListStorageLensConfigurationsCommandInput
  | PutAccessPointPolicyCommandInput
  | PutBucketLifecycleConfigurationCommandInput
  | PutBucketPolicyCommandInput
  | PutBucketTaggingCommandInput
  | PutJobTaggingCommandInput
  | PutPublicAccessBlockCommandInput
  | PutStorageLensConfigurationCommandInput
  | PutStorageLensConfigurationTaggingCommandInput
  | UpdateJobPriorityCommandInput
  | UpdateJobStatusCommandInput;

export type ServiceOutputTypes =
  | CreateAccessPointCommandOutput
  | CreateBucketCommandOutput
  | CreateJobCommandOutput
  | DeleteAccessPointCommandOutput
  | DeleteAccessPointPolicyCommandOutput
  | DeleteBucketCommandOutput
  | DeleteBucketLifecycleConfigurationCommandOutput
  | DeleteBucketPolicyCommandOutput
  | DeleteBucketTaggingCommandOutput
  | DeleteJobTaggingCommandOutput
  | DeletePublicAccessBlockCommandOutput
  | DeleteStorageLensConfigurationCommandOutput
  | DeleteStorageLensConfigurationTaggingCommandOutput
  | DescribeJobCommandOutput
  | GetAccessPointCommandOutput
  | GetAccessPointPolicyCommandOutput
  | GetAccessPointPolicyStatusCommandOutput
  | GetBucketCommandOutput
  | GetBucketLifecycleConfigurationCommandOutput
  | GetBucketPolicyCommandOutput
  | GetBucketTaggingCommandOutput
  | GetJobTaggingCommandOutput
  | GetPublicAccessBlockCommandOutput
  | GetStorageLensConfigurationCommandOutput
  | GetStorageLensConfigurationTaggingCommandOutput
  | ListAccessPointsCommandOutput
  | ListJobsCommandOutput
  | ListRegionalBucketsCommandOutput
  | ListStorageLensConfigurationsCommandOutput
  | PutAccessPointPolicyCommandOutput
  | PutBucketLifecycleConfigurationCommandOutput
  | PutBucketPolicyCommandOutput
  | PutBucketTaggingCommandOutput
  | PutJobTaggingCommandOutput
  | PutPublicAccessBlockCommandOutput
  | PutStorageLensConfigurationCommandOutput
  | PutStorageLensConfigurationTaggingCommandOutput
  | UpdateJobPriorityCommandOutput
  | UpdateJobStatusCommandOutput;

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

export type S3ControlClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig &
  S3ControlInputConfig;

export type S3ControlClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig &
  S3ControlResolvedConfig;

/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane operations.
 *
 *       </p>
 */
export class S3ControlClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3ControlClientResolvedConfig
> {
  readonly config: S3ControlClientResolvedConfig;

  constructor(configuration: S3ControlClientConfig) {
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
    let _config_7 = resolveS3ControlConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
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
