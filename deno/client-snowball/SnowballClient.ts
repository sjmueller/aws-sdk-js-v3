import { CancelClusterCommandInput, CancelClusterCommandOutput } from "./commands/CancelClusterCommand.ts";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand.ts";
import { CreateAddressCommandInput, CreateAddressCommandOutput } from "./commands/CreateAddressCommand.ts";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand.ts";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand.ts";
import {
  CreateReturnShippingLabelCommandInput,
  CreateReturnShippingLabelCommandOutput,
} from "./commands/CreateReturnShippingLabelCommand.ts";
import { DescribeAddressCommandInput, DescribeAddressCommandOutput } from "./commands/DescribeAddressCommand.ts";
import { DescribeAddressesCommandInput, DescribeAddressesCommandOutput } from "./commands/DescribeAddressesCommand.ts";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand.ts";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand.ts";
import {
  DescribeReturnShippingLabelCommandInput,
  DescribeReturnShippingLabelCommandOutput,
} from "./commands/DescribeReturnShippingLabelCommand.ts";
import { GetJobManifestCommandInput, GetJobManifestCommandOutput } from "./commands/GetJobManifestCommand.ts";
import { GetJobUnlockCodeCommandInput, GetJobUnlockCodeCommandOutput } from "./commands/GetJobUnlockCodeCommand.ts";
import { GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput } from "./commands/GetSnowballUsageCommand.ts";
import { GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput } from "./commands/GetSoftwareUpdatesCommand.ts";
import { ListClusterJobsCommandInput, ListClusterJobsCommandOutput } from "./commands/ListClusterJobsCommand.ts";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand.ts";
import {
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput,
} from "./commands/ListCompatibleImagesCommand.ts";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand.ts";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand.ts";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand.ts";
import {
  UpdateJobShipmentStateCommandInput,
  UpdateJobShipmentStateCommandOutput,
} from "./commands/UpdateJobShipmentStateCommand.ts";
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
  | CancelClusterCommandInput
  | CancelJobCommandInput
  | CreateAddressCommandInput
  | CreateClusterCommandInput
  | CreateJobCommandInput
  | CreateReturnShippingLabelCommandInput
  | DescribeAddressCommandInput
  | DescribeAddressesCommandInput
  | DescribeClusterCommandInput
  | DescribeJobCommandInput
  | DescribeReturnShippingLabelCommandInput
  | GetJobManifestCommandInput
  | GetJobUnlockCodeCommandInput
  | GetSnowballUsageCommandInput
  | GetSoftwareUpdatesCommandInput
  | ListClusterJobsCommandInput
  | ListClustersCommandInput
  | ListCompatibleImagesCommandInput
  | ListJobsCommandInput
  | UpdateClusterCommandInput
  | UpdateJobCommandInput
  | UpdateJobShipmentStateCommandInput;

export type ServiceOutputTypes =
  | CancelClusterCommandOutput
  | CancelJobCommandOutput
  | CreateAddressCommandOutput
  | CreateClusterCommandOutput
  | CreateJobCommandOutput
  | CreateReturnShippingLabelCommandOutput
  | DescribeAddressCommandOutput
  | DescribeAddressesCommandOutput
  | DescribeClusterCommandOutput
  | DescribeJobCommandOutput
  | DescribeReturnShippingLabelCommandOutput
  | GetJobManifestCommandOutput
  | GetJobUnlockCodeCommandOutput
  | GetSnowballUsageCommandOutput
  | GetSoftwareUpdatesCommandOutput
  | ListClusterJobsCommandOutput
  | ListClustersCommandOutput
  | ListCompatibleImagesCommandOutput
  | ListJobsCommandOutput
  | UpdateClusterCommandOutput
  | UpdateJobCommandOutput
  | UpdateJobShipmentStateCommandOutput;

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

export type SnowballClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type SnowballClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>AWS Snow Family is a petabyte-scale data transport solution that uses secure devices to
 *       transfer large amounts of data between your on-premises data centers and Amazon Simple Storage
 *       Service (Amazon S3). The Snow commands described here provide access to the same
 *       functionality that is available in the AWS Snow Family Management Console, which enables you to
 *       create and manage jobs for a Snow device. To transfer data locally with a Snow device, you'll
 *       need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or AWS OpsHub for Snow Family. For more
 *       information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.</p>
 */
export class SnowballClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowballClientResolvedConfig
> {
  readonly config: SnowballClientResolvedConfig;

  constructor(configuration: SnowballClientConfig) {
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
