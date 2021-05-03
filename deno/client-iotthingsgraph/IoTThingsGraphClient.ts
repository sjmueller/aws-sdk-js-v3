import {
  AssociateEntityToThingCommandInput,
  AssociateEntityToThingCommandOutput,
} from "./commands/AssociateEntityToThingCommand.ts";
import { CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput } from "./commands/CreateFlowTemplateCommand.ts";
import {
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput,
} from "./commands/CreateSystemInstanceCommand.ts";
import {
  CreateSystemTemplateCommandInput,
  CreateSystemTemplateCommandOutput,
} from "./commands/CreateSystemTemplateCommand.ts";
import { DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput } from "./commands/DeleteFlowTemplateCommand.ts";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand.ts";
import {
  DeleteSystemInstanceCommandInput,
  DeleteSystemInstanceCommandOutput,
} from "./commands/DeleteSystemInstanceCommand.ts";
import {
  DeleteSystemTemplateCommandInput,
  DeleteSystemTemplateCommandOutput,
} from "./commands/DeleteSystemTemplateCommand.ts";
import {
  DeploySystemInstanceCommandInput,
  DeploySystemInstanceCommandOutput,
} from "./commands/DeploySystemInstanceCommand.ts";
import {
  DeprecateFlowTemplateCommandInput,
  DeprecateFlowTemplateCommandOutput,
} from "./commands/DeprecateFlowTemplateCommand.ts";
import {
  DeprecateSystemTemplateCommandInput,
  DeprecateSystemTemplateCommandOutput,
} from "./commands/DeprecateSystemTemplateCommand.ts";
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "./commands/DescribeNamespaceCommand.ts";
import {
  DissociateEntityFromThingCommandInput,
  DissociateEntityFromThingCommandOutput,
} from "./commands/DissociateEntityFromThingCommand.ts";
import { GetEntitiesCommandInput, GetEntitiesCommandOutput } from "./commands/GetEntitiesCommand.ts";
import { GetFlowTemplateCommandInput, GetFlowTemplateCommandOutput } from "./commands/GetFlowTemplateCommand.ts";
import {
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput,
} from "./commands/GetFlowTemplateRevisionsCommand.ts";
import {
  GetNamespaceDeletionStatusCommandInput,
  GetNamespaceDeletionStatusCommandOutput,
} from "./commands/GetNamespaceDeletionStatusCommand.ts";
import { GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput } from "./commands/GetSystemInstanceCommand.ts";
import { GetSystemTemplateCommandInput, GetSystemTemplateCommandOutput } from "./commands/GetSystemTemplateCommand.ts";
import {
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
} from "./commands/GetSystemTemplateRevisionsCommand.ts";
import { GetUploadStatusCommandInput, GetUploadStatusCommandOutput } from "./commands/GetUploadStatusCommand.ts";
import {
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
} from "./commands/ListFlowExecutionMessagesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { SearchEntitiesCommandInput, SearchEntitiesCommandOutput } from "./commands/SearchEntitiesCommand.ts";
import {
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput,
} from "./commands/SearchFlowExecutionsCommand.ts";
import {
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput,
} from "./commands/SearchFlowTemplatesCommand.ts";
import {
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput,
} from "./commands/SearchSystemInstancesCommand.ts";
import {
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput,
} from "./commands/SearchSystemTemplatesCommand.ts";
import { SearchThingsCommandInput, SearchThingsCommandOutput } from "./commands/SearchThingsCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import {
  UndeploySystemInstanceCommandInput,
  UndeploySystemInstanceCommandOutput,
} from "./commands/UndeploySystemInstanceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateFlowTemplateCommandInput, UpdateFlowTemplateCommandOutput } from "./commands/UpdateFlowTemplateCommand.ts";
import {
  UpdateSystemTemplateCommandInput,
  UpdateSystemTemplateCommandOutput,
} from "./commands/UpdateSystemTemplateCommand.ts";
import {
  UploadEntityDefinitionsCommandInput,
  UploadEntityDefinitionsCommandOutput,
} from "./commands/UploadEntityDefinitionsCommand.ts";
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
  | AssociateEntityToThingCommandInput
  | CreateFlowTemplateCommandInput
  | CreateSystemInstanceCommandInput
  | CreateSystemTemplateCommandInput
  | DeleteFlowTemplateCommandInput
  | DeleteNamespaceCommandInput
  | DeleteSystemInstanceCommandInput
  | DeleteSystemTemplateCommandInput
  | DeploySystemInstanceCommandInput
  | DeprecateFlowTemplateCommandInput
  | DeprecateSystemTemplateCommandInput
  | DescribeNamespaceCommandInput
  | DissociateEntityFromThingCommandInput
  | GetEntitiesCommandInput
  | GetFlowTemplateCommandInput
  | GetFlowTemplateRevisionsCommandInput
  | GetNamespaceDeletionStatusCommandInput
  | GetSystemInstanceCommandInput
  | GetSystemTemplateCommandInput
  | GetSystemTemplateRevisionsCommandInput
  | GetUploadStatusCommandInput
  | ListFlowExecutionMessagesCommandInput
  | ListTagsForResourceCommandInput
  | SearchEntitiesCommandInput
  | SearchFlowExecutionsCommandInput
  | SearchFlowTemplatesCommandInput
  | SearchSystemInstancesCommandInput
  | SearchSystemTemplatesCommandInput
  | SearchThingsCommandInput
  | TagResourceCommandInput
  | UndeploySystemInstanceCommandInput
  | UntagResourceCommandInput
  | UpdateFlowTemplateCommandInput
  | UpdateSystemTemplateCommandInput
  | UploadEntityDefinitionsCommandInput;

export type ServiceOutputTypes =
  | AssociateEntityToThingCommandOutput
  | CreateFlowTemplateCommandOutput
  | CreateSystemInstanceCommandOutput
  | CreateSystemTemplateCommandOutput
  | DeleteFlowTemplateCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteSystemInstanceCommandOutput
  | DeleteSystemTemplateCommandOutput
  | DeploySystemInstanceCommandOutput
  | DeprecateFlowTemplateCommandOutput
  | DeprecateSystemTemplateCommandOutput
  | DescribeNamespaceCommandOutput
  | DissociateEntityFromThingCommandOutput
  | GetEntitiesCommandOutput
  | GetFlowTemplateCommandOutput
  | GetFlowTemplateRevisionsCommandOutput
  | GetNamespaceDeletionStatusCommandOutput
  | GetSystemInstanceCommandOutput
  | GetSystemTemplateCommandOutput
  | GetSystemTemplateRevisionsCommandOutput
  | GetUploadStatusCommandOutput
  | ListFlowExecutionMessagesCommandOutput
  | ListTagsForResourceCommandOutput
  | SearchEntitiesCommandOutput
  | SearchFlowExecutionsCommandOutput
  | SearchFlowTemplatesCommandOutput
  | SearchSystemInstancesCommandOutput
  | SearchSystemTemplatesCommandOutput
  | SearchThingsCommandOutput
  | TagResourceCommandOutput
  | UndeploySystemInstanceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFlowTemplateCommandOutput
  | UpdateSystemTemplateCommandOutput
  | UploadEntityDefinitionsCommandOutput;

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

type IoTThingsGraphClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of IoTThingsGraphClient class constructor that set the region, credentials and other options.
 */
export interface IoTThingsGraphClientConfig extends IoTThingsGraphClientConfigType {}

type IoTThingsGraphClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of IoTThingsGraphClient class. This is resolved and normalized from the {@link IoTThingsGraphClientConfig | constructor configuration interface}.
 */
export interface IoTThingsGraphClientResolvedConfig extends IoTThingsGraphClientResolvedConfigType {}

/**
 * <fullname>AWS IoT Things Graph</fullname>
 *          <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards,
 *        such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services
 *        and defining how they interact at an abstract level.</p>
 *          <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p>
 */
export class IoTThingsGraphClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTThingsGraphClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTThingsGraphClient class. This is resolved and normalized from the {@link IoTThingsGraphClientConfig | constructor configuration interface}.
   */
  readonly config: IoTThingsGraphClientResolvedConfig;

  constructor(configuration: IoTThingsGraphClientConfig) {
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
