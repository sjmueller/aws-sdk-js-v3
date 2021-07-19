import { AcceptEulasCommandInput, AcceptEulasCommandOutput } from "./commands/AcceptEulasCommand.ts";
import {
  CreateLaunchProfileCommandInput,
  CreateLaunchProfileCommandOutput,
} from "./commands/CreateLaunchProfileCommand.ts";
import {
  CreateStreamingImageCommandInput,
  CreateStreamingImageCommandOutput,
} from "./commands/CreateStreamingImageCommand.ts";
import {
  CreateStreamingSessionCommandInput,
  CreateStreamingSessionCommandOutput,
} from "./commands/CreateStreamingSessionCommand.ts";
import {
  CreateStreamingSessionStreamCommandInput,
  CreateStreamingSessionStreamCommandOutput,
} from "./commands/CreateStreamingSessionStreamCommand.ts";
import { CreateStudioCommandInput, CreateStudioCommandOutput } from "./commands/CreateStudioCommand.ts";
import {
  CreateStudioComponentCommandInput,
  CreateStudioComponentCommandOutput,
} from "./commands/CreateStudioComponentCommand.ts";
import {
  DeleteLaunchProfileCommandInput,
  DeleteLaunchProfileCommandOutput,
} from "./commands/DeleteLaunchProfileCommand.ts";
import {
  DeleteLaunchProfileMemberCommandInput,
  DeleteLaunchProfileMemberCommandOutput,
} from "./commands/DeleteLaunchProfileMemberCommand.ts";
import {
  DeleteStreamingImageCommandInput,
  DeleteStreamingImageCommandOutput,
} from "./commands/DeleteStreamingImageCommand.ts";
import {
  DeleteStreamingSessionCommandInput,
  DeleteStreamingSessionCommandOutput,
} from "./commands/DeleteStreamingSessionCommand.ts";
import { DeleteStudioCommandInput, DeleteStudioCommandOutput } from "./commands/DeleteStudioCommand.ts";
import {
  DeleteStudioComponentCommandInput,
  DeleteStudioComponentCommandOutput,
} from "./commands/DeleteStudioComponentCommand.ts";
import { DeleteStudioMemberCommandInput, DeleteStudioMemberCommandOutput } from "./commands/DeleteStudioMemberCommand.ts";
import { GetEulaCommandInput, GetEulaCommandOutput } from "./commands/GetEulaCommand.ts";
import { GetLaunchProfileCommandInput, GetLaunchProfileCommandOutput } from "./commands/GetLaunchProfileCommand.ts";
import {
  GetLaunchProfileDetailsCommandInput,
  GetLaunchProfileDetailsCommandOutput,
} from "./commands/GetLaunchProfileDetailsCommand.ts";
import {
  GetLaunchProfileInitializationCommandInput,
  GetLaunchProfileInitializationCommandOutput,
} from "./commands/GetLaunchProfileInitializationCommand.ts";
import {
  GetLaunchProfileMemberCommandInput,
  GetLaunchProfileMemberCommandOutput,
} from "./commands/GetLaunchProfileMemberCommand.ts";
import { GetStreamingImageCommandInput, GetStreamingImageCommandOutput } from "./commands/GetStreamingImageCommand.ts";
import {
  GetStreamingSessionCommandInput,
  GetStreamingSessionCommandOutput,
} from "./commands/GetStreamingSessionCommand.ts";
import {
  GetStreamingSessionStreamCommandInput,
  GetStreamingSessionStreamCommandOutput,
} from "./commands/GetStreamingSessionStreamCommand.ts";
import { GetStudioCommandInput, GetStudioCommandOutput } from "./commands/GetStudioCommand.ts";
import { GetStudioComponentCommandInput, GetStudioComponentCommandOutput } from "./commands/GetStudioComponentCommand.ts";
import { GetStudioMemberCommandInput, GetStudioMemberCommandOutput } from "./commands/GetStudioMemberCommand.ts";
import {
  ListEulaAcceptancesCommandInput,
  ListEulaAcceptancesCommandOutput,
} from "./commands/ListEulaAcceptancesCommand.ts";
import { ListEulasCommandInput, ListEulasCommandOutput } from "./commands/ListEulasCommand.ts";
import {
  ListLaunchProfileMembersCommandInput,
  ListLaunchProfileMembersCommandOutput,
} from "./commands/ListLaunchProfileMembersCommand.ts";
import { ListLaunchProfilesCommandInput, ListLaunchProfilesCommandOutput } from "./commands/ListLaunchProfilesCommand.ts";
import {
  ListStreamingImagesCommandInput,
  ListStreamingImagesCommandOutput,
} from "./commands/ListStreamingImagesCommand.ts";
import {
  ListStreamingSessionsCommandInput,
  ListStreamingSessionsCommandOutput,
} from "./commands/ListStreamingSessionsCommand.ts";
import {
  ListStudioComponentsCommandInput,
  ListStudioComponentsCommandOutput,
} from "./commands/ListStudioComponentsCommand.ts";
import { ListStudioMembersCommandInput, ListStudioMembersCommandOutput } from "./commands/ListStudioMembersCommand.ts";
import { ListStudiosCommandInput, ListStudiosCommandOutput } from "./commands/ListStudiosCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutLaunchProfileMembersCommandInput,
  PutLaunchProfileMembersCommandOutput,
} from "./commands/PutLaunchProfileMembersCommand.ts";
import { PutStudioMembersCommandInput, PutStudioMembersCommandOutput } from "./commands/PutStudioMembersCommand.ts";
import {
  StartStudioSSOConfigurationRepairCommandInput,
  StartStudioSSOConfigurationRepairCommandOutput,
} from "./commands/StartStudioSSOConfigurationRepairCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateLaunchProfileCommandInput,
  UpdateLaunchProfileCommandOutput,
} from "./commands/UpdateLaunchProfileCommand.ts";
import {
  UpdateLaunchProfileMemberCommandInput,
  UpdateLaunchProfileMemberCommandOutput,
} from "./commands/UpdateLaunchProfileMemberCommand.ts";
import {
  UpdateStreamingImageCommandInput,
  UpdateStreamingImageCommandOutput,
} from "./commands/UpdateStreamingImageCommand.ts";
import { UpdateStudioCommandInput, UpdateStudioCommandOutput } from "./commands/UpdateStudioCommand.ts";
import {
  UpdateStudioComponentCommandInput,
  UpdateStudioComponentCommandOutput,
} from "./commands/UpdateStudioComponentCommand.ts";
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
  | AcceptEulasCommandInput
  | CreateLaunchProfileCommandInput
  | CreateStreamingImageCommandInput
  | CreateStreamingSessionCommandInput
  | CreateStreamingSessionStreamCommandInput
  | CreateStudioCommandInput
  | CreateStudioComponentCommandInput
  | DeleteLaunchProfileCommandInput
  | DeleteLaunchProfileMemberCommandInput
  | DeleteStreamingImageCommandInput
  | DeleteStreamingSessionCommandInput
  | DeleteStudioCommandInput
  | DeleteStudioComponentCommandInput
  | DeleteStudioMemberCommandInput
  | GetEulaCommandInput
  | GetLaunchProfileCommandInput
  | GetLaunchProfileDetailsCommandInput
  | GetLaunchProfileInitializationCommandInput
  | GetLaunchProfileMemberCommandInput
  | GetStreamingImageCommandInput
  | GetStreamingSessionCommandInput
  | GetStreamingSessionStreamCommandInput
  | GetStudioCommandInput
  | GetStudioComponentCommandInput
  | GetStudioMemberCommandInput
  | ListEulaAcceptancesCommandInput
  | ListEulasCommandInput
  | ListLaunchProfileMembersCommandInput
  | ListLaunchProfilesCommandInput
  | ListStreamingImagesCommandInput
  | ListStreamingSessionsCommandInput
  | ListStudioComponentsCommandInput
  | ListStudioMembersCommandInput
  | ListStudiosCommandInput
  | ListTagsForResourceCommandInput
  | PutLaunchProfileMembersCommandInput
  | PutStudioMembersCommandInput
  | StartStudioSSOConfigurationRepairCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateLaunchProfileCommandInput
  | UpdateLaunchProfileMemberCommandInput
  | UpdateStreamingImageCommandInput
  | UpdateStudioCommandInput
  | UpdateStudioComponentCommandInput;

export type ServiceOutputTypes =
  | AcceptEulasCommandOutput
  | CreateLaunchProfileCommandOutput
  | CreateStreamingImageCommandOutput
  | CreateStreamingSessionCommandOutput
  | CreateStreamingSessionStreamCommandOutput
  | CreateStudioCommandOutput
  | CreateStudioComponentCommandOutput
  | DeleteLaunchProfileCommandOutput
  | DeleteLaunchProfileMemberCommandOutput
  | DeleteStreamingImageCommandOutput
  | DeleteStreamingSessionCommandOutput
  | DeleteStudioCommandOutput
  | DeleteStudioComponentCommandOutput
  | DeleteStudioMemberCommandOutput
  | GetEulaCommandOutput
  | GetLaunchProfileCommandOutput
  | GetLaunchProfileDetailsCommandOutput
  | GetLaunchProfileInitializationCommandOutput
  | GetLaunchProfileMemberCommandOutput
  | GetStreamingImageCommandOutput
  | GetStreamingSessionCommandOutput
  | GetStreamingSessionStreamCommandOutput
  | GetStudioCommandOutput
  | GetStudioComponentCommandOutput
  | GetStudioMemberCommandOutput
  | ListEulaAcceptancesCommandOutput
  | ListEulasCommandOutput
  | ListLaunchProfileMembersCommandOutput
  | ListLaunchProfilesCommandOutput
  | ListStreamingImagesCommandOutput
  | ListStreamingSessionsCommandOutput
  | ListStudioComponentsCommandOutput
  | ListStudioMembersCommandOutput
  | ListStudiosCommandOutput
  | ListTagsForResourceCommandOutput
  | PutLaunchProfileMembersCommandOutput
  | PutStudioMembersCommandOutput
  | StartStudioSSOConfigurationRepairCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateLaunchProfileCommandOutput
  | UpdateLaunchProfileMemberCommandOutput
  | UpdateStreamingImageCommandOutput
  | UpdateStudioCommandOutput
  | UpdateStudioComponentCommandOutput;

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

type NimbleClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of NimbleClient class constructor that set the region, credentials and other options.
 */
export interface NimbleClientConfig extends NimbleClientConfigType {}

type NimbleClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of NimbleClient class. This is resolved and normalized from the {@link NimbleClientConfig | constructor configuration interface}.
 */
export interface NimbleClientResolvedConfig extends NimbleClientResolvedConfigType {}

export class NimbleClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  NimbleClientResolvedConfig
> {
  /**
   * The resolved configuration of NimbleClient class. This is resolved and normalized from the {@link NimbleClientConfig | constructor configuration interface}.
   */
  readonly config: NimbleClientResolvedConfig;

  constructor(configuration: NimbleClientConfig) {
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
