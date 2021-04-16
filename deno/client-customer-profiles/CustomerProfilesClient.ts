import { AddProfileKeyCommandInput, AddProfileKeyCommandOutput } from "./commands/AddProfileKeyCommand.ts";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand.ts";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand.ts";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand.ts";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand.ts";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand.ts";
import { DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput } from "./commands/DeleteProfileKeyCommand.ts";
import {
  DeleteProfileObjectCommandInput,
  DeleteProfileObjectCommandOutput,
} from "./commands/DeleteProfileObjectCommand.ts";
import {
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
} from "./commands/DeleteProfileObjectTypeCommand.ts";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand.ts";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand.ts";
import {
  GetProfileObjectTypeCommandInput,
  GetProfileObjectTypeCommandOutput,
} from "./commands/GetProfileObjectTypeCommand.ts";
import {
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
} from "./commands/GetProfileObjectTypeTemplateCommand.ts";
import {
  ListAccountIntegrationsCommandInput,
  ListAccountIntegrationsCommandOutput,
} from "./commands/ListAccountIntegrationsCommand.ts";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand.ts";
import { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "./commands/ListIntegrationsCommand.ts";
import {
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
} from "./commands/ListProfileObjectTypeTemplatesCommand.ts";
import {
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
} from "./commands/ListProfileObjectTypesCommand.ts";
import { ListProfileObjectsCommandInput, ListProfileObjectsCommandOutput } from "./commands/ListProfileObjectsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand.ts";
import { PutProfileObjectCommandInput, PutProfileObjectCommandOutput } from "./commands/PutProfileObjectCommand.ts";
import {
  PutProfileObjectTypeCommandInput,
  PutProfileObjectTypeCommandOutput,
} from "./commands/PutProfileObjectTypeCommand.ts";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "./commands/SearchProfilesCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand.ts";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand.ts";
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
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getOmitRetryHeadersPlugin,
  getRetryPlugin,
  resolveRetryConfig,
} from "../middleware-retry/mod.ts";
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
  | AddProfileKeyCommandInput
  | CreateDomainCommandInput
  | CreateProfileCommandInput
  | DeleteDomainCommandInput
  | DeleteIntegrationCommandInput
  | DeleteProfileCommandInput
  | DeleteProfileKeyCommandInput
  | DeleteProfileObjectCommandInput
  | DeleteProfileObjectTypeCommandInput
  | GetDomainCommandInput
  | GetIntegrationCommandInput
  | GetProfileObjectTypeCommandInput
  | GetProfileObjectTypeTemplateCommandInput
  | ListAccountIntegrationsCommandInput
  | ListDomainsCommandInput
  | ListIntegrationsCommandInput
  | ListProfileObjectTypeTemplatesCommandInput
  | ListProfileObjectTypesCommandInput
  | ListProfileObjectsCommandInput
  | ListTagsForResourceCommandInput
  | PutIntegrationCommandInput
  | PutProfileObjectCommandInput
  | PutProfileObjectTypeCommandInput
  | SearchProfilesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDomainCommandInput
  | UpdateProfileCommandInput;

export type ServiceOutputTypes =
  | AddProfileKeyCommandOutput
  | CreateDomainCommandOutput
  | CreateProfileCommandOutput
  | DeleteDomainCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteProfileCommandOutput
  | DeleteProfileKeyCommandOutput
  | DeleteProfileObjectCommandOutput
  | DeleteProfileObjectTypeCommandOutput
  | GetDomainCommandOutput
  | GetIntegrationCommandOutput
  | GetProfileObjectTypeCommandOutput
  | GetProfileObjectTypeTemplateCommandOutput
  | ListAccountIntegrationsCommandOutput
  | ListDomainsCommandOutput
  | ListIntegrationsCommandOutput
  | ListProfileObjectTypeTemplatesCommandOutput
  | ListProfileObjectTypesCommandOutput
  | ListProfileObjectsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutIntegrationCommandOutput
  | PutProfileObjectCommandOutput
  | PutProfileObjectTypeCommandOutput
  | SearchProfilesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDomainCommandOutput
  | UpdateProfileCommandOutput;

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

export type CustomerProfilesClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type CustomerProfilesClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>Amazon Connect Customer Profiles</fullname>
 *          <p>Welcome to the Amazon Connect Customer Profiles API Reference. This guide provides information
 *          about the Amazon Connect Customer Profiles API, including supported operations, data types,
 *          parameters, and schemas.</p>
 *          <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has
 *          pre-built connectors powered by AppFlow that make it easy to combine customer information
 *          from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your
 *          enterprise resource planning (ERP), with contact history from your Amazon Connect contact
 *          center.</p>
 *          <p>If you're new to Amazon Connect , you might find it helpful to also review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html">Amazon Connect Administrator Guide</a>.</p>
 */
export class CustomerProfilesClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CustomerProfilesClientResolvedConfig
> {
  readonly config: CustomerProfilesClientResolvedConfig;

  constructor(configuration: CustomerProfilesClientConfig) {
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
    this.middlewareStack.use(getOmitRetryHeadersPlugin(this.config));
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
