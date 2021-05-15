import {
  AddLFTagsToResourceCommandInput,
  AddLFTagsToResourceCommandOutput,
} from "./commands/AddLFTagsToResourceCommand.ts";
import {
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
} from "./commands/BatchGrantPermissionsCommand.ts";
import {
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
} from "./commands/BatchRevokePermissionsCommand.ts";
import { CreateLFTagCommandInput, CreateLFTagCommandOutput } from "./commands/CreateLFTagCommand.ts";
import { DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "./commands/DeleteLFTagCommand.ts";
import { DeregisterResourceCommandInput, DeregisterResourceCommandOutput } from "./commands/DeregisterResourceCommand.ts";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand.ts";
import {
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
} from "./commands/GetDataLakeSettingsCommand.ts";
import {
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "./commands/GetEffectivePermissionsForPathCommand.ts";
import { GetLFTagCommandInput, GetLFTagCommandOutput } from "./commands/GetLFTagCommand.ts";
import { GetResourceLFTagsCommandInput, GetResourceLFTagsCommandOutput } from "./commands/GetResourceLFTagsCommand.ts";
import { GrantPermissionsCommandInput, GrantPermissionsCommandOutput } from "./commands/GrantPermissionsCommand.ts";
import { ListLFTagsCommandInput, ListLFTagsCommandOutput } from "./commands/ListLFTagsCommand.ts";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand.ts";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand.ts";
import {
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
} from "./commands/PutDataLakeSettingsCommand.ts";
import { RegisterResourceCommandInput, RegisterResourceCommandOutput } from "./commands/RegisterResourceCommand.ts";
import {
  RemoveLFTagsFromResourceCommandInput,
  RemoveLFTagsFromResourceCommandOutput,
} from "./commands/RemoveLFTagsFromResourceCommand.ts";
import { RevokePermissionsCommandInput, RevokePermissionsCommandOutput } from "./commands/RevokePermissionsCommand.ts";
import {
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput,
} from "./commands/SearchDatabasesByLFTagsCommand.ts";
import {
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
} from "./commands/SearchTablesByLFTagsCommand.ts";
import { UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "./commands/UpdateLFTagCommand.ts";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand.ts";
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
  | AddLFTagsToResourceCommandInput
  | BatchGrantPermissionsCommandInput
  | BatchRevokePermissionsCommandInput
  | CreateLFTagCommandInput
  | DeleteLFTagCommandInput
  | DeregisterResourceCommandInput
  | DescribeResourceCommandInput
  | GetDataLakeSettingsCommandInput
  | GetEffectivePermissionsForPathCommandInput
  | GetLFTagCommandInput
  | GetResourceLFTagsCommandInput
  | GrantPermissionsCommandInput
  | ListLFTagsCommandInput
  | ListPermissionsCommandInput
  | ListResourcesCommandInput
  | PutDataLakeSettingsCommandInput
  | RegisterResourceCommandInput
  | RemoveLFTagsFromResourceCommandInput
  | RevokePermissionsCommandInput
  | SearchDatabasesByLFTagsCommandInput
  | SearchTablesByLFTagsCommandInput
  | UpdateLFTagCommandInput
  | UpdateResourceCommandInput;

export type ServiceOutputTypes =
  | AddLFTagsToResourceCommandOutput
  | BatchGrantPermissionsCommandOutput
  | BatchRevokePermissionsCommandOutput
  | CreateLFTagCommandOutput
  | DeleteLFTagCommandOutput
  | DeregisterResourceCommandOutput
  | DescribeResourceCommandOutput
  | GetDataLakeSettingsCommandOutput
  | GetEffectivePermissionsForPathCommandOutput
  | GetLFTagCommandOutput
  | GetResourceLFTagsCommandOutput
  | GrantPermissionsCommandOutput
  | ListLFTagsCommandOutput
  | ListPermissionsCommandOutput
  | ListResourcesCommandOutput
  | PutDataLakeSettingsCommandOutput
  | RegisterResourceCommandOutput
  | RemoveLFTagsFromResourceCommandOutput
  | RevokePermissionsCommandOutput
  | SearchDatabasesByLFTagsCommandOutput
  | SearchTablesByLFTagsCommandOutput
  | UpdateLFTagCommandOutput
  | UpdateResourceCommandOutput;

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
   * The AWS region to which this client will send requests or use as signingRegion
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

type LakeFormationClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of LakeFormationClient class constructor that set the region, credentials and other options.
 */
export interface LakeFormationClientConfig extends LakeFormationClientConfigType {}

type LakeFormationClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of LakeFormationClient class. This is resolved and normalized from the {@link LakeFormationClientConfig | constructor configuration interface}.
 */
export interface LakeFormationClientResolvedConfig extends LakeFormationClientResolvedConfigType {}

/**
 * <fullname>AWS Lake Formation</fullname>
 *          <p>Defines the public endpoint for the AWS Lake Formation service.</p>
 */
export class LakeFormationClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LakeFormationClientResolvedConfig
> {
  /**
   * The resolved configuration of LakeFormationClient class. This is resolved and normalized from the {@link LakeFormationClientConfig | constructor configuration interface}.
   */
  readonly config: LakeFormationClientResolvedConfig;

  constructor(configuration: LakeFormationClientConfig) {
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
