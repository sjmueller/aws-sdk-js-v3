import {
  ClaimDevicesByClaimCodeCommandInput,
  ClaimDevicesByClaimCodeCommandOutput,
} from "./commands/ClaimDevicesByClaimCodeCommand.ts";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "./commands/DescribeDeviceCommand.ts";
import {
  FinalizeDeviceClaimCommandInput,
  FinalizeDeviceClaimCommandOutput,
} from "./commands/FinalizeDeviceClaimCommand.ts";
import { GetDeviceMethodsCommandInput, GetDeviceMethodsCommandOutput } from "./commands/GetDeviceMethodsCommand.ts";
import {
  InitiateDeviceClaimCommandInput,
  InitiateDeviceClaimCommandOutput,
} from "./commands/InitiateDeviceClaimCommand.ts";
import { InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput } from "./commands/InvokeDeviceMethodCommand.ts";
import { ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput } from "./commands/ListDeviceEventsCommand.ts";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UnclaimDeviceCommandInput, UnclaimDeviceCommandOutput } from "./commands/UnclaimDeviceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateDeviceStateCommandInput, UpdateDeviceStateCommandOutput } from "./commands/UpdateDeviceStateCommand.ts";
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
  | ClaimDevicesByClaimCodeCommandInput
  | DescribeDeviceCommandInput
  | FinalizeDeviceClaimCommandInput
  | GetDeviceMethodsCommandInput
  | InitiateDeviceClaimCommandInput
  | InvokeDeviceMethodCommandInput
  | ListDeviceEventsCommandInput
  | ListDevicesCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UnclaimDeviceCommandInput
  | UntagResourceCommandInput
  | UpdateDeviceStateCommandInput;

export type ServiceOutputTypes =
  | ClaimDevicesByClaimCodeCommandOutput
  | DescribeDeviceCommandOutput
  | FinalizeDeviceClaimCommandOutput
  | GetDeviceMethodsCommandOutput
  | InitiateDeviceClaimCommandOutput
  | InvokeDeviceMethodCommandOutput
  | ListDeviceEventsCommandOutput
  | ListDevicesCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UnclaimDeviceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDeviceStateCommandOutput;

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

export type IoT1ClickDevicesServiceClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type IoT1ClickDevicesServiceClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Describes all of the AWS IoT 1-Click device-related API operations for the service.
 *  Also provides sample requests, responses, and errors for the supported web services
 *  protocols.</p>
 */
export class IoT1ClickDevicesServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  readonly config: IoT1ClickDevicesServiceClientResolvedConfig;

  constructor(configuration: IoT1ClickDevicesServiceClientConfig) {
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
