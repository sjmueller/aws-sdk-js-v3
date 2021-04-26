import {
  CancelJournalKinesisStreamCommandInput,
  CancelJournalKinesisStreamCommandOutput,
} from "./commands/CancelJournalKinesisStreamCommand.ts";
import { CreateLedgerCommandInput, CreateLedgerCommandOutput } from "./commands/CreateLedgerCommand.ts";
import { DeleteLedgerCommandInput, DeleteLedgerCommandOutput } from "./commands/DeleteLedgerCommand.ts";
import {
  DescribeJournalKinesisStreamCommandInput,
  DescribeJournalKinesisStreamCommandOutput,
} from "./commands/DescribeJournalKinesisStreamCommand.ts";
import {
  DescribeJournalS3ExportCommandInput,
  DescribeJournalS3ExportCommandOutput,
} from "./commands/DescribeJournalS3ExportCommand.ts";
import { DescribeLedgerCommandInput, DescribeLedgerCommandOutput } from "./commands/DescribeLedgerCommand.ts";
import { ExportJournalToS3CommandInput, ExportJournalToS3CommandOutput } from "./commands/ExportJournalToS3Command.ts";
import { GetBlockCommandInput, GetBlockCommandOutput } from "./commands/GetBlockCommand.ts";
import { GetDigestCommandInput, GetDigestCommandOutput } from "./commands/GetDigestCommand.ts";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "./commands/GetRevisionCommand.ts";
import {
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput,
} from "./commands/ListJournalKinesisStreamsForLedgerCommand.ts";
import {
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput,
} from "./commands/ListJournalS3ExportsCommand.ts";
import {
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
} from "./commands/ListJournalS3ExportsForLedgerCommand.ts";
import { ListLedgersCommandInput, ListLedgersCommandOutput } from "./commands/ListLedgersCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  StreamJournalToKinesisCommandInput,
  StreamJournalToKinesisCommandOutput,
} from "./commands/StreamJournalToKinesisCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateLedgerCommandInput, UpdateLedgerCommandOutput } from "./commands/UpdateLedgerCommand.ts";
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
  | CancelJournalKinesisStreamCommandInput
  | CreateLedgerCommandInput
  | DeleteLedgerCommandInput
  | DescribeJournalKinesisStreamCommandInput
  | DescribeJournalS3ExportCommandInput
  | DescribeLedgerCommandInput
  | ExportJournalToS3CommandInput
  | GetBlockCommandInput
  | GetDigestCommandInput
  | GetRevisionCommandInput
  | ListJournalKinesisStreamsForLedgerCommandInput
  | ListJournalS3ExportsCommandInput
  | ListJournalS3ExportsForLedgerCommandInput
  | ListLedgersCommandInput
  | ListTagsForResourceCommandInput
  | StreamJournalToKinesisCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateLedgerCommandInput;

export type ServiceOutputTypes =
  | CancelJournalKinesisStreamCommandOutput
  | CreateLedgerCommandOutput
  | DeleteLedgerCommandOutput
  | DescribeJournalKinesisStreamCommandOutput
  | DescribeJournalS3ExportCommandOutput
  | DescribeLedgerCommandOutput
  | ExportJournalToS3CommandOutput
  | GetBlockCommandOutput
  | GetDigestCommandOutput
  | GetRevisionCommandOutput
  | ListJournalKinesisStreamsForLedgerCommandOutput
  | ListJournalS3ExportsCommandOutput
  | ListJournalS3ExportsForLedgerCommandOutput
  | ListLedgersCommandOutput
  | ListTagsForResourceCommandOutput
  | StreamJournalToKinesisCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateLedgerCommandOutput;

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

type QLDBClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of QLDBClient class constructor that set the region, credentials and other options.
 */
export interface QLDBClientConfig extends QLDBClientConfigType {}

type QLDBClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of QLDBClient class. This is resolved and normalized from the {@link QLDBClientConfig | constructor configuration interface}.
 */
export interface QLDBClientResolvedConfig extends QLDBClientResolvedConfigType {}

/**
 * <p>The control plane for Amazon QLDB</p>
 */
export class QLDBClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  QLDBClientResolvedConfig
> {
  /**
   * The resolved configuration of QLDBClient class. This is resolved and normalized from the {@link QLDBClientConfig | constructor configuration interface}.
   */
  readonly config: QLDBClientResolvedConfig;

  constructor(configuration: QLDBClientConfig) {
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
