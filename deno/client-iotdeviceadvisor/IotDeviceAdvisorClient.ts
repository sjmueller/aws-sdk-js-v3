import {
  CreateSuiteDefinitionCommandInput,
  CreateSuiteDefinitionCommandOutput,
} from "./commands/CreateSuiteDefinitionCommand.ts";
import {
  DeleteSuiteDefinitionCommandInput,
  DeleteSuiteDefinitionCommandOutput,
} from "./commands/DeleteSuiteDefinitionCommand.ts";
import { GetSuiteDefinitionCommandInput, GetSuiteDefinitionCommandOutput } from "./commands/GetSuiteDefinitionCommand.ts";
import { GetSuiteRunCommandInput, GetSuiteRunCommandOutput } from "./commands/GetSuiteRunCommand.ts";
import { GetSuiteRunReportCommandInput, GetSuiteRunReportCommandOutput } from "./commands/GetSuiteRunReportCommand.ts";
import {
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput,
} from "./commands/ListSuiteDefinitionsCommand.ts";
import { ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput } from "./commands/ListSuiteRunsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { StartSuiteRunCommandInput, StartSuiteRunCommandOutput } from "./commands/StartSuiteRunCommand.ts";
import { StopSuiteRunCommandInput, StopSuiteRunCommandOutput } from "./commands/StopSuiteRunCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateSuiteDefinitionCommandInput,
  UpdateSuiteDefinitionCommandOutput,
} from "./commands/UpdateSuiteDefinitionCommand.ts";
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
  | CreateSuiteDefinitionCommandInput
  | DeleteSuiteDefinitionCommandInput
  | GetSuiteDefinitionCommandInput
  | GetSuiteRunCommandInput
  | GetSuiteRunReportCommandInput
  | ListSuiteDefinitionsCommandInput
  | ListSuiteRunsCommandInput
  | ListTagsForResourceCommandInput
  | StartSuiteRunCommandInput
  | StopSuiteRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateSuiteDefinitionCommandInput;

export type ServiceOutputTypes =
  | CreateSuiteDefinitionCommandOutput
  | DeleteSuiteDefinitionCommandOutput
  | GetSuiteDefinitionCommandOutput
  | GetSuiteRunCommandOutput
  | GetSuiteRunReportCommandOutput
  | ListSuiteDefinitionsCommandOutput
  | ListSuiteRunsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartSuiteRunCommandOutput
  | StopSuiteRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateSuiteDefinitionCommandOutput;

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

type IotDeviceAdvisorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of IotDeviceAdvisorClient class constructor that set the region, credentials and other options.
 */
export interface IotDeviceAdvisorClientConfig extends IotDeviceAdvisorClientConfigType {}

type IotDeviceAdvisorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of IotDeviceAdvisorClient class. This is resolved and normalized from the {@link IotDeviceAdvisorClientConfig | constructor configuration interface}.
 */
export interface IotDeviceAdvisorClientResolvedConfig extends IotDeviceAdvisorClientResolvedConfigType {}

/**
 * <p>AWS IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with AWS IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to AWS IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the AWS Partner Network to get your device qualified for the AWS Partner Device Catalog without the need to send your device in and wait for it to be tested.</p>
 */
export class IotDeviceAdvisorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IotDeviceAdvisorClientResolvedConfig
> {
  /**
   * The resolved configuration of IotDeviceAdvisorClient class. This is resolved and normalized from the {@link IotDeviceAdvisorClientConfig | constructor configuration interface}.
   */
  readonly config: IotDeviceAdvisorClientResolvedConfig;

  constructor(configuration: IotDeviceAdvisorClientConfig) {
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
