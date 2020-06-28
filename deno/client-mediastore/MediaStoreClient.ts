import {
  CreateContainerCommandInput,
  CreateContainerCommandOutput
} from "./commands/CreateContainerCommand.ts";
import {
  DeleteContainerCommandInput,
  DeleteContainerCommandOutput
} from "./commands/DeleteContainerCommand.ts";
import {
  DeleteContainerPolicyCommandInput,
  DeleteContainerPolicyCommandOutput
} from "./commands/DeleteContainerPolicyCommand.ts";
import {
  DeleteCorsPolicyCommandInput,
  DeleteCorsPolicyCommandOutput
} from "./commands/DeleteCorsPolicyCommand.ts";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput
} from "./commands/DeleteLifecyclePolicyCommand.ts";
import {
  DescribeContainerCommandInput,
  DescribeContainerCommandOutput
} from "./commands/DescribeContainerCommand.ts";
import {
  GetContainerPolicyCommandInput,
  GetContainerPolicyCommandOutput
} from "./commands/GetContainerPolicyCommand.ts";
import {
  GetCorsPolicyCommandInput,
  GetCorsPolicyCommandOutput
} from "./commands/GetCorsPolicyCommand.ts";
import {
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput
} from "./commands/GetLifecyclePolicyCommand.ts";
import {
  ListContainersCommandInput,
  ListContainersCommandOutput
} from "./commands/ListContainersCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutContainerPolicyCommandInput,
  PutContainerPolicyCommandOutput
} from "./commands/PutContainerPolicyCommand.ts";
import {
  PutCorsPolicyCommandInput,
  PutCorsPolicyCommandOutput
} from "./commands/PutCorsPolicyCommand.ts";
import {
  PutLifecyclePolicyCommandInput,
  PutLifecyclePolicyCommandOutput
} from "./commands/PutLifecyclePolicyCommand.ts";
import {
  StartAccessLoggingCommandInput,
  StartAccessLoggingCommandOutput
} from "./commands/StartAccessLoggingCommand.ts";
import {
  StopAccessLoggingCommandInput,
  StopAccessLoggingCommandOutput
} from "./commands/StopAccessLoggingCommand.ts";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand.ts";
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
  | CreateContainerCommandInput
  | DeleteContainerCommandInput
  | DeleteContainerPolicyCommandInput
  | DeleteCorsPolicyCommandInput
  | DeleteLifecyclePolicyCommandInput
  | DescribeContainerCommandInput
  | GetContainerPolicyCommandInput
  | GetCorsPolicyCommandInput
  | GetLifecyclePolicyCommandInput
  | ListContainersCommandInput
  | ListTagsForResourceCommandInput
  | PutContainerPolicyCommandInput
  | PutCorsPolicyCommandInput
  | PutLifecyclePolicyCommandInput
  | StartAccessLoggingCommandInput
  | StopAccessLoggingCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | CreateContainerCommandOutput
  | DeleteContainerCommandOutput
  | DeleteContainerPolicyCommandOutput
  | DeleteCorsPolicyCommandOutput
  | DeleteLifecyclePolicyCommandOutput
  | DescribeContainerCommandOutput
  | GetContainerPolicyCommandOutput
  | GetCorsPolicyCommandOutput
  | GetLifecyclePolicyCommandOutput
  | ListContainersCommandOutput
  | ListTagsForResourceCommandOutput
  | PutContainerPolicyCommandOutput
  | PutCorsPolicyCommandOutput
  | PutLifecyclePolicyCommandOutput
  | StartAccessLoggingCommandOutput
  | StopAccessLoggingCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

export type MediaStoreClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type MediaStoreClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>An AWS Elemental MediaStore container is a namespace that holds folders and objects.
 *          You use a container endpoint to create, read, and delete objects. </p>
 */
export class MediaStoreClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MediaStoreClientResolvedConfig
> {
  readonly config: MediaStoreClientResolvedConfig;

  constructor(configuration: MediaStoreClientConfig) {
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
