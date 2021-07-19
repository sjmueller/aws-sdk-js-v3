import {
  AcceptInboundCrossClusterSearchConnectionCommandInput,
  AcceptInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/AcceptInboundCrossClusterSearchConnectionCommand.ts";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand.ts";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "./commands/AssociatePackageCommand.ts";
import {
  CancelElasticsearchServiceSoftwareUpdateCommandInput,
  CancelElasticsearchServiceSoftwareUpdateCommandOutput,
} from "./commands/CancelElasticsearchServiceSoftwareUpdateCommand.ts";
import {
  CreateElasticsearchDomainCommandInput,
  CreateElasticsearchDomainCommandOutput,
} from "./commands/CreateElasticsearchDomainCommand.ts";
import {
  CreateOutboundCrossClusterSearchConnectionCommandInput,
  CreateOutboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/CreateOutboundCrossClusterSearchConnectionCommand.ts";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "./commands/CreatePackageCommand.ts";
import {
  DeleteElasticsearchDomainCommandInput,
  DeleteElasticsearchDomainCommandOutput,
} from "./commands/DeleteElasticsearchDomainCommand.ts";
import {
  DeleteElasticsearchServiceRoleCommandInput,
  DeleteElasticsearchServiceRoleCommandOutput,
} from "./commands/DeleteElasticsearchServiceRoleCommand.ts";
import {
  DeleteInboundCrossClusterSearchConnectionCommandInput,
  DeleteInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/DeleteInboundCrossClusterSearchConnectionCommand.ts";
import {
  DeleteOutboundCrossClusterSearchConnectionCommandInput,
  DeleteOutboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/DeleteOutboundCrossClusterSearchConnectionCommand.ts";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "./commands/DeletePackageCommand.ts";
import {
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "./commands/DescribeDomainAutoTunesCommand.ts";
import {
  DescribeElasticsearchDomainCommandInput,
  DescribeElasticsearchDomainCommandOutput,
} from "./commands/DescribeElasticsearchDomainCommand.ts";
import {
  DescribeElasticsearchDomainConfigCommandInput,
  DescribeElasticsearchDomainConfigCommandOutput,
} from "./commands/DescribeElasticsearchDomainConfigCommand.ts";
import {
  DescribeElasticsearchDomainsCommandInput,
  DescribeElasticsearchDomainsCommandOutput,
} from "./commands/DescribeElasticsearchDomainsCommand.ts";
import {
  DescribeElasticsearchInstanceTypeLimitsCommandInput,
  DescribeElasticsearchInstanceTypeLimitsCommandOutput,
} from "./commands/DescribeElasticsearchInstanceTypeLimitsCommand.ts";
import {
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput,
} from "./commands/DescribeInboundCrossClusterSearchConnectionsCommand.ts";
import {
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
} from "./commands/DescribeOutboundCrossClusterSearchConnectionsCommand.ts";
import { DescribePackagesCommandInput, DescribePackagesCommandOutput } from "./commands/DescribePackagesCommand.ts";
import {
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
} from "./commands/DescribeReservedElasticsearchInstanceOfferingsCommand.ts";
import {
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput,
} from "./commands/DescribeReservedElasticsearchInstancesCommand.ts";
import { DissociatePackageCommandInput, DissociatePackageCommandOutput } from "./commands/DissociatePackageCommand.ts";
import {
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput,
} from "./commands/GetCompatibleElasticsearchVersionsCommand.ts";
import {
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "./commands/GetPackageVersionHistoryCommand.ts";
import { GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput } from "./commands/GetUpgradeHistoryCommand.ts";
import { GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput } from "./commands/GetUpgradeStatusCommand.ts";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand.ts";
import {
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "./commands/ListDomainsForPackageCommand.ts";
import {
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
} from "./commands/ListElasticsearchInstanceTypesCommand.ts";
import {
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
} from "./commands/ListElasticsearchVersionsCommand.ts";
import {
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "./commands/ListPackagesForDomainCommand.ts";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand.ts";
import {
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
} from "./commands/PurchaseReservedElasticsearchInstanceOfferingCommand.ts";
import {
  RejectInboundCrossClusterSearchConnectionCommandInput,
  RejectInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/RejectInboundCrossClusterSearchConnectionCommand.ts";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand.ts";
import {
  StartElasticsearchServiceSoftwareUpdateCommandInput,
  StartElasticsearchServiceSoftwareUpdateCommandOutput,
} from "./commands/StartElasticsearchServiceSoftwareUpdateCommand.ts";
import {
  UpdateElasticsearchDomainConfigCommandInput,
  UpdateElasticsearchDomainConfigCommandOutput,
} from "./commands/UpdateElasticsearchDomainConfigCommand.ts";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "./commands/UpdatePackageCommand.ts";
import {
  UpgradeElasticsearchDomainCommandInput,
  UpgradeElasticsearchDomainCommandOutput,
} from "./commands/UpgradeElasticsearchDomainCommand.ts";
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
  | AcceptInboundCrossClusterSearchConnectionCommandInput
  | AddTagsCommandInput
  | AssociatePackageCommandInput
  | CancelElasticsearchServiceSoftwareUpdateCommandInput
  | CreateElasticsearchDomainCommandInput
  | CreateOutboundCrossClusterSearchConnectionCommandInput
  | CreatePackageCommandInput
  | DeleteElasticsearchDomainCommandInput
  | DeleteElasticsearchServiceRoleCommandInput
  | DeleteInboundCrossClusterSearchConnectionCommandInput
  | DeleteOutboundCrossClusterSearchConnectionCommandInput
  | DeletePackageCommandInput
  | DescribeDomainAutoTunesCommandInput
  | DescribeElasticsearchDomainCommandInput
  | DescribeElasticsearchDomainConfigCommandInput
  | DescribeElasticsearchDomainsCommandInput
  | DescribeElasticsearchInstanceTypeLimitsCommandInput
  | DescribeInboundCrossClusterSearchConnectionsCommandInput
  | DescribeOutboundCrossClusterSearchConnectionsCommandInput
  | DescribePackagesCommandInput
  | DescribeReservedElasticsearchInstanceOfferingsCommandInput
  | DescribeReservedElasticsearchInstancesCommandInput
  | DissociatePackageCommandInput
  | GetCompatibleElasticsearchVersionsCommandInput
  | GetPackageVersionHistoryCommandInput
  | GetUpgradeHistoryCommandInput
  | GetUpgradeStatusCommandInput
  | ListDomainNamesCommandInput
  | ListDomainsForPackageCommandInput
  | ListElasticsearchInstanceTypesCommandInput
  | ListElasticsearchVersionsCommandInput
  | ListPackagesForDomainCommandInput
  | ListTagsCommandInput
  | PurchaseReservedElasticsearchInstanceOfferingCommandInput
  | RejectInboundCrossClusterSearchConnectionCommandInput
  | RemoveTagsCommandInput
  | StartElasticsearchServiceSoftwareUpdateCommandInput
  | UpdateElasticsearchDomainConfigCommandInput
  | UpdatePackageCommandInput
  | UpgradeElasticsearchDomainCommandInput;

export type ServiceOutputTypes =
  | AcceptInboundCrossClusterSearchConnectionCommandOutput
  | AddTagsCommandOutput
  | AssociatePackageCommandOutput
  | CancelElasticsearchServiceSoftwareUpdateCommandOutput
  | CreateElasticsearchDomainCommandOutput
  | CreateOutboundCrossClusterSearchConnectionCommandOutput
  | CreatePackageCommandOutput
  | DeleteElasticsearchDomainCommandOutput
  | DeleteElasticsearchServiceRoleCommandOutput
  | DeleteInboundCrossClusterSearchConnectionCommandOutput
  | DeleteOutboundCrossClusterSearchConnectionCommandOutput
  | DeletePackageCommandOutput
  | DescribeDomainAutoTunesCommandOutput
  | DescribeElasticsearchDomainCommandOutput
  | DescribeElasticsearchDomainConfigCommandOutput
  | DescribeElasticsearchDomainsCommandOutput
  | DescribeElasticsearchInstanceTypeLimitsCommandOutput
  | DescribeInboundCrossClusterSearchConnectionsCommandOutput
  | DescribeOutboundCrossClusterSearchConnectionsCommandOutput
  | DescribePackagesCommandOutput
  | DescribeReservedElasticsearchInstanceOfferingsCommandOutput
  | DescribeReservedElasticsearchInstancesCommandOutput
  | DissociatePackageCommandOutput
  | GetCompatibleElasticsearchVersionsCommandOutput
  | GetPackageVersionHistoryCommandOutput
  | GetUpgradeHistoryCommandOutput
  | GetUpgradeStatusCommandOutput
  | ListDomainNamesCommandOutput
  | ListDomainsForPackageCommandOutput
  | ListElasticsearchInstanceTypesCommandOutput
  | ListElasticsearchVersionsCommandOutput
  | ListPackagesForDomainCommandOutput
  | ListTagsCommandOutput
  | PurchaseReservedElasticsearchInstanceOfferingCommandOutput
  | RejectInboundCrossClusterSearchConnectionCommandOutput
  | RemoveTagsCommandOutput
  | StartElasticsearchServiceSoftwareUpdateCommandOutput
  | UpdateElasticsearchDomainConfigCommandOutput
  | UpdatePackageCommandOutput
  | UpgradeElasticsearchDomainCommandOutput;

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

type ElasticsearchServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ElasticsearchServiceClient class constructor that set the region, credentials and other options.
 */
export interface ElasticsearchServiceClientConfig extends ElasticsearchServiceClientConfigType {}

type ElasticsearchServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ElasticsearchServiceClient class. This is resolved and normalized from the {@link ElasticsearchServiceClientConfig | constructor configuration interface}.
 */
export interface ElasticsearchServiceClientResolvedConfig extends ElasticsearchServiceClientResolvedConfigType {}

/**
 * <fullname>Amazon Elasticsearch Configuration Service</fullname>
 *       <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
 *       <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
 *       <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *          For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *          see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>
 */
export class ElasticsearchServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElasticsearchServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of ElasticsearchServiceClient class. This is resolved and normalized from the {@link ElasticsearchServiceClientConfig | constructor configuration interface}.
   */
  readonly config: ElasticsearchServiceClientResolvedConfig;

  constructor(configuration: ElasticsearchServiceClientConfig) {
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
