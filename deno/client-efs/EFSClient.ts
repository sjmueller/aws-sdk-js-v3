import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand.ts";
import { CreateFileSystemCommandInput, CreateFileSystemCommandOutput } from "./commands/CreateFileSystemCommand.ts";
import { CreateMountTargetCommandInput, CreateMountTargetCommandOutput } from "./commands/CreateMountTargetCommand.ts";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand.ts";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand.ts";
import { DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput } from "./commands/DeleteFileSystemCommand.ts";
import {
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
} from "./commands/DeleteFileSystemPolicyCommand.ts";
import { DeleteMountTargetCommandInput, DeleteMountTargetCommandOutput } from "./commands/DeleteMountTargetCommand.ts";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand.ts";
import {
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
} from "./commands/DescribeAccessPointsCommand.ts";
import {
  DescribeBackupPolicyCommandInput,
  DescribeBackupPolicyCommandOutput,
} from "./commands/DescribeBackupPolicyCommand.ts";
import {
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
} from "./commands/DescribeFileSystemPolicyCommand.ts";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "./commands/DescribeFileSystemsCommand.ts";
import {
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput,
} from "./commands/DescribeLifecycleConfigurationCommand.ts";
import {
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
} from "./commands/DescribeMountTargetSecurityGroupsCommand.ts";
import {
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
} from "./commands/DescribeMountTargetsCommand.ts";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput,
} from "./commands/ModifyMountTargetSecurityGroupsCommand.ts";
import { PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput } from "./commands/PutBackupPolicyCommand.ts";
import {
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput,
} from "./commands/PutFileSystemPolicyCommand.ts";
import {
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput,
} from "./commands/PutLifecycleConfigurationCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput } from "./commands/UpdateFileSystemCommand.ts";
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
  Provider,
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
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateAccessPointCommandInput
  | CreateFileSystemCommandInput
  | CreateMountTargetCommandInput
  | CreateTagsCommandInput
  | DeleteAccessPointCommandInput
  | DeleteFileSystemCommandInput
  | DeleteFileSystemPolicyCommandInput
  | DeleteMountTargetCommandInput
  | DeleteTagsCommandInput
  | DescribeAccessPointsCommandInput
  | DescribeBackupPolicyCommandInput
  | DescribeFileSystemPolicyCommandInput
  | DescribeFileSystemsCommandInput
  | DescribeLifecycleConfigurationCommandInput
  | DescribeMountTargetSecurityGroupsCommandInput
  | DescribeMountTargetsCommandInput
  | DescribeTagsCommandInput
  | ListTagsForResourceCommandInput
  | ModifyMountTargetSecurityGroupsCommandInput
  | PutBackupPolicyCommandInput
  | PutFileSystemPolicyCommandInput
  | PutLifecycleConfigurationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFileSystemCommandInput;

export type ServiceOutputTypes =
  | CreateAccessPointCommandOutput
  | CreateFileSystemCommandOutput
  | CreateMountTargetCommandOutput
  | CreateTagsCommandOutput
  | DeleteAccessPointCommandOutput
  | DeleteFileSystemCommandOutput
  | DeleteFileSystemPolicyCommandOutput
  | DeleteMountTargetCommandOutput
  | DeleteTagsCommandOutput
  | DescribeAccessPointsCommandOutput
  | DescribeBackupPolicyCommandOutput
  | DescribeFileSystemPolicyCommandOutput
  | DescribeFileSystemsCommandOutput
  | DescribeLifecycleConfigurationCommandOutput
  | DescribeMountTargetSecurityGroupsCommandOutput
  | DescribeMountTargetsCommandOutput
  | DescribeTagsCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyMountTargetSecurityGroupsCommandOutput
  | PutBackupPolicyCommandOutput
  | PutFileSystemPolicyCommandOutput
  | PutLifecycleConfigurationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFileSystemCommandOutput;

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
   * Default credentials provider; Not available in browser runtime.
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

export type EFSClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type EFSClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>Amazon Elastic File System</fullname>
 *          <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use
 *       with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic,
 *       growing and shrinking automatically as you add and remove files, so your applications have the
 *       storage they need, when they need it. For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">User Guide</a>.</p>
 */
export class EFSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EFSClientResolvedConfig
> {
  readonly config: EFSClientResolvedConfig;

  constructor(configuration: EFSClientConfig) {
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
