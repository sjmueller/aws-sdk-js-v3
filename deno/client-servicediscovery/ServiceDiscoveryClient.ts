import {
  CreateHttpNamespaceCommandInput,
  CreateHttpNamespaceCommandOutput,
} from "./commands/CreateHttpNamespaceCommand.ts";
import {
  CreatePrivateDnsNamespaceCommandInput,
  CreatePrivateDnsNamespaceCommandOutput,
} from "./commands/CreatePrivateDnsNamespaceCommand.ts";
import {
  CreatePublicDnsNamespaceCommandInput,
  CreatePublicDnsNamespaceCommandOutput,
} from "./commands/CreatePublicDnsNamespaceCommand.ts";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand.ts";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand.ts";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand.ts";
import { DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput } from "./commands/DeregisterInstanceCommand.ts";
import { DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput } from "./commands/DiscoverInstancesCommand.ts";
import { GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand.ts";
import {
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput,
} from "./commands/GetInstancesHealthStatusCommand.ts";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "./commands/GetNamespaceCommand.ts";
import { GetOperationCommandInput, GetOperationCommandOutput } from "./commands/GetOperationCommand.ts";
import { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand.ts";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand.ts";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand.ts";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "./commands/ListOperationsCommand.ts";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { RegisterInstanceCommandInput, RegisterInstanceCommandOutput } from "./commands/RegisterInstanceCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateHttpNamespaceCommandInput,
  UpdateHttpNamespaceCommandOutput,
} from "./commands/UpdateHttpNamespaceCommand.ts";
import {
  UpdateInstanceCustomHealthStatusCommandInput,
  UpdateInstanceCustomHealthStatusCommandOutput,
} from "./commands/UpdateInstanceCustomHealthStatusCommand.ts";
import {
  UpdatePrivateDnsNamespaceCommandInput,
  UpdatePrivateDnsNamespaceCommandOutput,
} from "./commands/UpdatePrivateDnsNamespaceCommand.ts";
import {
  UpdatePublicDnsNamespaceCommandInput,
  UpdatePublicDnsNamespaceCommandOutput,
} from "./commands/UpdatePublicDnsNamespaceCommand.ts";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand.ts";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig.ts";
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
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateHttpNamespaceCommandInput
  | CreatePrivateDnsNamespaceCommandInput
  | CreatePublicDnsNamespaceCommandInput
  | CreateServiceCommandInput
  | DeleteNamespaceCommandInput
  | DeleteServiceCommandInput
  | DeregisterInstanceCommandInput
  | DiscoverInstancesCommandInput
  | GetInstanceCommandInput
  | GetInstancesHealthStatusCommandInput
  | GetNamespaceCommandInput
  | GetOperationCommandInput
  | GetServiceCommandInput
  | ListInstancesCommandInput
  | ListNamespacesCommandInput
  | ListOperationsCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | RegisterInstanceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateHttpNamespaceCommandInput
  | UpdateInstanceCustomHealthStatusCommandInput
  | UpdatePrivateDnsNamespaceCommandInput
  | UpdatePublicDnsNamespaceCommandInput
  | UpdateServiceCommandInput;

export type ServiceOutputTypes =
  | CreateHttpNamespaceCommandOutput
  | CreatePrivateDnsNamespaceCommandOutput
  | CreatePublicDnsNamespaceCommandOutput
  | CreateServiceCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteServiceCommandOutput
  | DeregisterInstanceCommandOutput
  | DiscoverInstancesCommandOutput
  | GetInstanceCommandOutput
  | GetInstancesHealthStatusCommandOutput
  | GetNamespaceCommandOutput
  | GetOperationCommandOutput
  | GetServiceCommandOutput
  | ListInstancesCommandOutput
  | ListNamespacesCommandOutput
  | ListOperationsCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterInstanceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateHttpNamespaceCommandOutput
  | UpdateInstanceCustomHealthStatusCommandOutput
  | UpdatePrivateDnsNamespaceCommandOutput
  | UpdatePublicDnsNamespaceCommandOutput
  | UpdateServiceCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
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

type ServiceDiscoveryClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ServiceDiscoveryClient class constructor that set the region, credentials and other options.
 */
export interface ServiceDiscoveryClientConfig extends ServiceDiscoveryClientConfigType {}

type ServiceDiscoveryClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ServiceDiscoveryClient class. This is resolved and normalized from the {@link ServiceDiscoveryClientConfig | constructor configuration interface}.
 */
export interface ServiceDiscoveryClientResolvedConfig extends ServiceDiscoveryClientResolvedConfigType {}

/**
 * <fullname>Cloud Map</fullname>
 *          <p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your microservice
 *    applications run in. When an instance becomes available, you can call the Cloud Map API to register the instance
 *    with Cloud Map. For public or private DNS namespaces, Cloud Map automatically creates DNS records and an optional
 *    health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer
 *    that contains up to eight healthy records. </p>
 */
export class ServiceDiscoveryClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ServiceDiscoveryClientResolvedConfig
> {
  /**
   * The resolved configuration of ServiceDiscoveryClient class. This is resolved and normalized from the {@link ServiceDiscoveryClientConfig | constructor configuration interface}.
   */
  readonly config: ServiceDiscoveryClientResolvedConfig;

  constructor(configuration: ServiceDiscoveryClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
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
