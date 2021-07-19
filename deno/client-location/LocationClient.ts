import {
  AssociateTrackerConsumerCommandInput,
  AssociateTrackerConsumerCommandOutput,
} from "./commands/AssociateTrackerConsumerCommand.ts";
import {
  BatchDeleteDevicePositionHistoryCommandInput,
  BatchDeleteDevicePositionHistoryCommandOutput,
} from "./commands/BatchDeleteDevicePositionHistoryCommand.ts";
import {
  BatchDeleteGeofenceCommandInput,
  BatchDeleteGeofenceCommandOutput,
} from "./commands/BatchDeleteGeofenceCommand.ts";
import {
  BatchEvaluateGeofencesCommandInput,
  BatchEvaluateGeofencesCommandOutput,
} from "./commands/BatchEvaluateGeofencesCommand.ts";
import {
  BatchGetDevicePositionCommandInput,
  BatchGetDevicePositionCommandOutput,
} from "./commands/BatchGetDevicePositionCommand.ts";
import { BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput } from "./commands/BatchPutGeofenceCommand.ts";
import {
  BatchUpdateDevicePositionCommandInput,
  BatchUpdateDevicePositionCommandOutput,
} from "./commands/BatchUpdateDevicePositionCommand.ts";
import { CalculateRouteCommandInput, CalculateRouteCommandOutput } from "./commands/CalculateRouteCommand.ts";
import {
  CreateGeofenceCollectionCommandInput,
  CreateGeofenceCollectionCommandOutput,
} from "./commands/CreateGeofenceCollectionCommand.ts";
import { CreateMapCommandInput, CreateMapCommandOutput } from "./commands/CreateMapCommand.ts";
import { CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput } from "./commands/CreatePlaceIndexCommand.ts";
import {
  CreateRouteCalculatorCommandInput,
  CreateRouteCalculatorCommandOutput,
} from "./commands/CreateRouteCalculatorCommand.ts";
import { CreateTrackerCommandInput, CreateTrackerCommandOutput } from "./commands/CreateTrackerCommand.ts";
import {
  DeleteGeofenceCollectionCommandInput,
  DeleteGeofenceCollectionCommandOutput,
} from "./commands/DeleteGeofenceCollectionCommand.ts";
import { DeleteMapCommandInput, DeleteMapCommandOutput } from "./commands/DeleteMapCommand.ts";
import { DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput } from "./commands/DeletePlaceIndexCommand.ts";
import {
  DeleteRouteCalculatorCommandInput,
  DeleteRouteCalculatorCommandOutput,
} from "./commands/DeleteRouteCalculatorCommand.ts";
import { DeleteTrackerCommandInput, DeleteTrackerCommandOutput } from "./commands/DeleteTrackerCommand.ts";
import {
  DescribeGeofenceCollectionCommandInput,
  DescribeGeofenceCollectionCommandOutput,
} from "./commands/DescribeGeofenceCollectionCommand.ts";
import { DescribeMapCommandInput, DescribeMapCommandOutput } from "./commands/DescribeMapCommand.ts";
import { DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput } from "./commands/DescribePlaceIndexCommand.ts";
import {
  DescribeRouteCalculatorCommandInput,
  DescribeRouteCalculatorCommandOutput,
} from "./commands/DescribeRouteCalculatorCommand.ts";
import { DescribeTrackerCommandInput, DescribeTrackerCommandOutput } from "./commands/DescribeTrackerCommand.ts";
import {
  DisassociateTrackerConsumerCommandInput,
  DisassociateTrackerConsumerCommandOutput,
} from "./commands/DisassociateTrackerConsumerCommand.ts";
import { GetDevicePositionCommandInput, GetDevicePositionCommandOutput } from "./commands/GetDevicePositionCommand.ts";
import {
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput,
} from "./commands/GetDevicePositionHistoryCommand.ts";
import { GetGeofenceCommandInput, GetGeofenceCommandOutput } from "./commands/GetGeofenceCommand.ts";
import { GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput } from "./commands/GetMapGlyphsCommand.ts";
import { GetMapSpritesCommandInput, GetMapSpritesCommandOutput } from "./commands/GetMapSpritesCommand.ts";
import {
  GetMapStyleDescriptorCommandInput,
  GetMapStyleDescriptorCommandOutput,
} from "./commands/GetMapStyleDescriptorCommand.ts";
import { GetMapTileCommandInput, GetMapTileCommandOutput } from "./commands/GetMapTileCommand.ts";
import {
  ListDevicePositionsCommandInput,
  ListDevicePositionsCommandOutput,
} from "./commands/ListDevicePositionsCommand.ts";
import {
  ListGeofenceCollectionsCommandInput,
  ListGeofenceCollectionsCommandOutput,
} from "./commands/ListGeofenceCollectionsCommand.ts";
import { ListGeofencesCommandInput, ListGeofencesCommandOutput } from "./commands/ListGeofencesCommand.ts";
import { ListMapsCommandInput, ListMapsCommandOutput } from "./commands/ListMapsCommand.ts";
import { ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput } from "./commands/ListPlaceIndexesCommand.ts";
import {
  ListRouteCalculatorsCommandInput,
  ListRouteCalculatorsCommandOutput,
} from "./commands/ListRouteCalculatorsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput,
} from "./commands/ListTrackerConsumersCommand.ts";
import { ListTrackersCommandInput, ListTrackersCommandOutput } from "./commands/ListTrackersCommand.ts";
import { PutGeofenceCommandInput, PutGeofenceCommandOutput } from "./commands/PutGeofenceCommand.ts";
import {
  SearchPlaceIndexForPositionCommandInput,
  SearchPlaceIndexForPositionCommandOutput,
} from "./commands/SearchPlaceIndexForPositionCommand.ts";
import {
  SearchPlaceIndexForTextCommandInput,
  SearchPlaceIndexForTextCommandOutput,
} from "./commands/SearchPlaceIndexForTextCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
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
  | AssociateTrackerConsumerCommandInput
  | BatchDeleteDevicePositionHistoryCommandInput
  | BatchDeleteGeofenceCommandInput
  | BatchEvaluateGeofencesCommandInput
  | BatchGetDevicePositionCommandInput
  | BatchPutGeofenceCommandInput
  | BatchUpdateDevicePositionCommandInput
  | CalculateRouteCommandInput
  | CreateGeofenceCollectionCommandInput
  | CreateMapCommandInput
  | CreatePlaceIndexCommandInput
  | CreateRouteCalculatorCommandInput
  | CreateTrackerCommandInput
  | DeleteGeofenceCollectionCommandInput
  | DeleteMapCommandInput
  | DeletePlaceIndexCommandInput
  | DeleteRouteCalculatorCommandInput
  | DeleteTrackerCommandInput
  | DescribeGeofenceCollectionCommandInput
  | DescribeMapCommandInput
  | DescribePlaceIndexCommandInput
  | DescribeRouteCalculatorCommandInput
  | DescribeTrackerCommandInput
  | DisassociateTrackerConsumerCommandInput
  | GetDevicePositionCommandInput
  | GetDevicePositionHistoryCommandInput
  | GetGeofenceCommandInput
  | GetMapGlyphsCommandInput
  | GetMapSpritesCommandInput
  | GetMapStyleDescriptorCommandInput
  | GetMapTileCommandInput
  | ListDevicePositionsCommandInput
  | ListGeofenceCollectionsCommandInput
  | ListGeofencesCommandInput
  | ListMapsCommandInput
  | ListPlaceIndexesCommandInput
  | ListRouteCalculatorsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrackerConsumersCommandInput
  | ListTrackersCommandInput
  | PutGeofenceCommandInput
  | SearchPlaceIndexForPositionCommandInput
  | SearchPlaceIndexForTextCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | AssociateTrackerConsumerCommandOutput
  | BatchDeleteDevicePositionHistoryCommandOutput
  | BatchDeleteGeofenceCommandOutput
  | BatchEvaluateGeofencesCommandOutput
  | BatchGetDevicePositionCommandOutput
  | BatchPutGeofenceCommandOutput
  | BatchUpdateDevicePositionCommandOutput
  | CalculateRouteCommandOutput
  | CreateGeofenceCollectionCommandOutput
  | CreateMapCommandOutput
  | CreatePlaceIndexCommandOutput
  | CreateRouteCalculatorCommandOutput
  | CreateTrackerCommandOutput
  | DeleteGeofenceCollectionCommandOutput
  | DeleteMapCommandOutput
  | DeletePlaceIndexCommandOutput
  | DeleteRouteCalculatorCommandOutput
  | DeleteTrackerCommandOutput
  | DescribeGeofenceCollectionCommandOutput
  | DescribeMapCommandOutput
  | DescribePlaceIndexCommandOutput
  | DescribeRouteCalculatorCommandOutput
  | DescribeTrackerCommandOutput
  | DisassociateTrackerConsumerCommandOutput
  | GetDevicePositionCommandOutput
  | GetDevicePositionHistoryCommandOutput
  | GetGeofenceCommandOutput
  | GetMapGlyphsCommandOutput
  | GetMapSpritesCommandOutput
  | GetMapStyleDescriptorCommandOutput
  | GetMapTileCommandOutput
  | ListDevicePositionsCommandOutput
  | ListGeofenceCollectionsCommandOutput
  | ListGeofencesCommandOutput
  | ListMapsCommandOutput
  | ListPlaceIndexesCommandOutput
  | ListRouteCalculatorsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrackerConsumersCommandOutput
  | ListTrackersCommandOutput
  | PutGeofenceCommandOutput
  | SearchPlaceIndexForPositionCommandOutput
  | SearchPlaceIndexForTextCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

type LocationClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of LocationClient class constructor that set the region, credentials and other options.
 */
export interface LocationClientConfig extends LocationClientConfigType {}

type LocationClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of LocationClient class. This is resolved and normalized from the {@link LocationClientConfig | constructor configuration interface}.
 */
export interface LocationClientResolvedConfig extends LocationClientResolvedConfigType {}

/**
 * Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing
 */
export class LocationClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LocationClientResolvedConfig
> {
  /**
   * The resolved configuration of LocationClient class. This is resolved and normalized from the {@link LocationClientConfig | constructor configuration interface}.
   */
  readonly config: LocationClientResolvedConfig;

  constructor(configuration: LocationClientConfig) {
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
