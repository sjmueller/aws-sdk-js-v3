import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand.ts";
import { CreateProgramCommandInput, CreateProgramCommandOutput } from "./commands/CreateProgramCommand.ts";
import {
  CreateSourceLocationCommandInput,
  CreateSourceLocationCommandOutput,
} from "./commands/CreateSourceLocationCommand.ts";
import { CreateVodSourceCommandInput, CreateVodSourceCommandOutput } from "./commands/CreateVodSourceCommand.ts";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand.ts";
import {
  DeleteChannelPolicyCommandInput,
  DeleteChannelPolicyCommandOutput,
} from "./commands/DeleteChannelPolicyCommand.ts";
import {
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
} from "./commands/DeletePlaybackConfigurationCommand.ts";
import { DeleteProgramCommandInput, DeleteProgramCommandOutput } from "./commands/DeleteProgramCommand.ts";
import {
  DeleteSourceLocationCommandInput,
  DeleteSourceLocationCommandOutput,
} from "./commands/DeleteSourceLocationCommand.ts";
import { DeleteVodSourceCommandInput, DeleteVodSourceCommandOutput } from "./commands/DeleteVodSourceCommand.ts";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand.ts";
import { DescribeProgramCommandInput, DescribeProgramCommandOutput } from "./commands/DescribeProgramCommand.ts";
import {
  DescribeSourceLocationCommandInput,
  DescribeSourceLocationCommandOutput,
} from "./commands/DescribeSourceLocationCommand.ts";
import { DescribeVodSourceCommandInput, DescribeVodSourceCommandOutput } from "./commands/DescribeVodSourceCommand.ts";
import { GetChannelPolicyCommandInput, GetChannelPolicyCommandOutput } from "./commands/GetChannelPolicyCommand.ts";
import { GetChannelScheduleCommandInput, GetChannelScheduleCommandOutput } from "./commands/GetChannelScheduleCommand.ts";
import {
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput,
} from "./commands/GetPlaybackConfigurationCommand.ts";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand.ts";
import {
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "./commands/ListPlaybackConfigurationsCommand.ts";
import {
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput,
} from "./commands/ListSourceLocationsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListVodSourcesCommandInput, ListVodSourcesCommandOutput } from "./commands/ListVodSourcesCommand.ts";
import { PutChannelPolicyCommandInput, PutChannelPolicyCommandOutput } from "./commands/PutChannelPolicyCommand.ts";
import {
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
} from "./commands/PutPlaybackConfigurationCommand.ts";
import { StartChannelCommandInput, StartChannelCommandOutput } from "./commands/StartChannelCommand.ts";
import { StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand.ts";
import {
  UpdateSourceLocationCommandInput,
  UpdateSourceLocationCommandOutput,
} from "./commands/UpdateSourceLocationCommand.ts";
import { UpdateVodSourceCommandInput, UpdateVodSourceCommandOutput } from "./commands/UpdateVodSourceCommand.ts";
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
  | CreateChannelCommandInput
  | CreateProgramCommandInput
  | CreateSourceLocationCommandInput
  | CreateVodSourceCommandInput
  | DeleteChannelCommandInput
  | DeleteChannelPolicyCommandInput
  | DeletePlaybackConfigurationCommandInput
  | DeleteProgramCommandInput
  | DeleteSourceLocationCommandInput
  | DeleteVodSourceCommandInput
  | DescribeChannelCommandInput
  | DescribeProgramCommandInput
  | DescribeSourceLocationCommandInput
  | DescribeVodSourceCommandInput
  | GetChannelPolicyCommandInput
  | GetChannelScheduleCommandInput
  | GetPlaybackConfigurationCommandInput
  | ListChannelsCommandInput
  | ListPlaybackConfigurationsCommandInput
  | ListSourceLocationsCommandInput
  | ListTagsForResourceCommandInput
  | ListVodSourcesCommandInput
  | PutChannelPolicyCommandInput
  | PutPlaybackConfigurationCommandInput
  | StartChannelCommandInput
  | StopChannelCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput
  | UpdateSourceLocationCommandInput
  | UpdateVodSourceCommandInput;

export type ServiceOutputTypes =
  | CreateChannelCommandOutput
  | CreateProgramCommandOutput
  | CreateSourceLocationCommandOutput
  | CreateVodSourceCommandOutput
  | DeleteChannelCommandOutput
  | DeleteChannelPolicyCommandOutput
  | DeletePlaybackConfigurationCommandOutput
  | DeleteProgramCommandOutput
  | DeleteSourceLocationCommandOutput
  | DeleteVodSourceCommandOutput
  | DescribeChannelCommandOutput
  | DescribeProgramCommandOutput
  | DescribeSourceLocationCommandOutput
  | DescribeVodSourceCommandOutput
  | GetChannelPolicyCommandOutput
  | GetChannelScheduleCommandOutput
  | GetPlaybackConfigurationCommandOutput
  | ListChannelsCommandOutput
  | ListPlaybackConfigurationsCommandOutput
  | ListSourceLocationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVodSourcesCommandOutput
  | PutChannelPolicyCommandOutput
  | PutPlaybackConfigurationCommandOutput
  | StartChannelCommandOutput
  | StopChannelCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput
  | UpdateSourceLocationCommandOutput
  | UpdateVodSourceCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
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
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

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

type MediaTailorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of MediaTailorClient class constructor that set the region, credentials and other options.
 */
export interface MediaTailorClientConfig extends MediaTailorClientConfigType {}

type MediaTailorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of MediaTailorClient class. This is resolved and normalized from the {@link MediaTailorClientConfig | constructor configuration interface}.
 */
export interface MediaTailorClientResolvedConfig extends MediaTailorClientResolvedConfigType {}

/**
 * <p>Use the AWS Elemental MediaTailor SDKs and CLI to configure scalable ad insertion and linear channels. With MediaTailor, you can assemble existing content into a linear stream and serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/">AWS Elemental MediaTailor User Guide</a>.</p> <p>Through the SDKs and the CLI you manage AWS Elemental MediaTailor configurations and channels the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>
 */
export class MediaTailorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MediaTailorClientResolvedConfig
> {
  /**
   * The resolved configuration of MediaTailorClient class. This is resolved and normalized from the {@link MediaTailorClientConfig | constructor configuration interface}.
   */
  readonly config: MediaTailorClientResolvedConfig;

  constructor(configuration: MediaTailorClientConfig) {
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
