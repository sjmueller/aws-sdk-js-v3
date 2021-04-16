import {
  AbortEnvironmentUpdateCommandInput,
  AbortEnvironmentUpdateCommandOutput,
} from "./commands/AbortEnvironmentUpdateCommand.ts";
import {
  ApplyEnvironmentManagedActionCommandInput,
  ApplyEnvironmentManagedActionCommandOutput,
} from "./commands/ApplyEnvironmentManagedActionCommand.ts";
import {
  AssociateEnvironmentOperationsRoleCommandInput,
  AssociateEnvironmentOperationsRoleCommandOutput,
} from "./commands/AssociateEnvironmentOperationsRoleCommand.ts";
import {
  CheckDNSAvailabilityCommandInput,
  CheckDNSAvailabilityCommandOutput,
} from "./commands/CheckDNSAvailabilityCommand.ts";
import {
  ComposeEnvironmentsCommandInput,
  ComposeEnvironmentsCommandOutput,
} from "./commands/ComposeEnvironmentsCommand.ts";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand.ts";
import {
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput,
} from "./commands/CreateApplicationVersionCommand.ts";
import {
  CreateConfigurationTemplateCommandInput,
  CreateConfigurationTemplateCommandOutput,
} from "./commands/CreateConfigurationTemplateCommand.ts";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand.ts";
import {
  CreatePlatformVersionCommandInput,
  CreatePlatformVersionCommandOutput,
} from "./commands/CreatePlatformVersionCommand.ts";
import {
  CreateStorageLocationCommandInput,
  CreateStorageLocationCommandOutput,
} from "./commands/CreateStorageLocationCommand.ts";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand.ts";
import {
  DeleteApplicationVersionCommandInput,
  DeleteApplicationVersionCommandOutput,
} from "./commands/DeleteApplicationVersionCommand.ts";
import {
  DeleteConfigurationTemplateCommandInput,
  DeleteConfigurationTemplateCommandOutput,
} from "./commands/DeleteConfigurationTemplateCommand.ts";
import {
  DeleteEnvironmentConfigurationCommandInput,
  DeleteEnvironmentConfigurationCommandOutput,
} from "./commands/DeleteEnvironmentConfigurationCommand.ts";
import {
  DeletePlatformVersionCommandInput,
  DeletePlatformVersionCommandOutput,
} from "./commands/DeletePlatformVersionCommand.ts";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand.ts";
import {
  DescribeApplicationVersionsCommandInput,
  DescribeApplicationVersionsCommandOutput,
} from "./commands/DescribeApplicationVersionsCommand.ts";
import {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand.ts";
import {
  DescribeConfigurationOptionsCommandInput,
  DescribeConfigurationOptionsCommandOutput,
} from "./commands/DescribeConfigurationOptionsCommand.ts";
import {
  DescribeConfigurationSettingsCommandInput,
  DescribeConfigurationSettingsCommandOutput,
} from "./commands/DescribeConfigurationSettingsCommand.ts";
import {
  DescribeEnvironmentHealthCommandInput,
  DescribeEnvironmentHealthCommandOutput,
} from "./commands/DescribeEnvironmentHealthCommand.ts";
import {
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
} from "./commands/DescribeEnvironmentManagedActionHistoryCommand.ts";
import {
  DescribeEnvironmentManagedActionsCommandInput,
  DescribeEnvironmentManagedActionsCommandOutput,
} from "./commands/DescribeEnvironmentManagedActionsCommand.ts";
import {
  DescribeEnvironmentResourcesCommandInput,
  DescribeEnvironmentResourcesCommandOutput,
} from "./commands/DescribeEnvironmentResourcesCommand.ts";
import {
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "./commands/DescribeEnvironmentsCommand.ts";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand.ts";
import {
  DescribeInstancesHealthCommandInput,
  DescribeInstancesHealthCommandOutput,
} from "./commands/DescribeInstancesHealthCommand.ts";
import {
  DescribePlatformVersionCommandInput,
  DescribePlatformVersionCommandOutput,
} from "./commands/DescribePlatformVersionCommand.ts";
import {
  DisassociateEnvironmentOperationsRoleCommandInput,
  DisassociateEnvironmentOperationsRoleCommandOutput,
} from "./commands/DisassociateEnvironmentOperationsRoleCommand.ts";
import {
  ListAvailableSolutionStacksCommandInput,
  ListAvailableSolutionStacksCommandOutput,
} from "./commands/ListAvailableSolutionStacksCommand.ts";
import {
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput,
} from "./commands/ListPlatformBranchesCommand.ts";
import {
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
} from "./commands/ListPlatformVersionsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { RebuildEnvironmentCommandInput, RebuildEnvironmentCommandOutput } from "./commands/RebuildEnvironmentCommand.ts";
import {
  RequestEnvironmentInfoCommandInput,
  RequestEnvironmentInfoCommandOutput,
} from "./commands/RequestEnvironmentInfoCommand.ts";
import { RestartAppServerCommandInput, RestartAppServerCommandOutput } from "./commands/RestartAppServerCommand.ts";
import {
  RetrieveEnvironmentInfoCommandInput,
  RetrieveEnvironmentInfoCommandOutput,
} from "./commands/RetrieveEnvironmentInfoCommand.ts";
import {
  SwapEnvironmentCNAMEsCommandInput,
  SwapEnvironmentCNAMEsCommandOutput,
} from "./commands/SwapEnvironmentCNAMEsCommand.ts";
import {
  TerminateEnvironmentCommandInput,
  TerminateEnvironmentCommandOutput,
} from "./commands/TerminateEnvironmentCommand.ts";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand.ts";
import {
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput,
} from "./commands/UpdateApplicationResourceLifecycleCommand.ts";
import {
  UpdateApplicationVersionCommandInput,
  UpdateApplicationVersionCommandOutput,
} from "./commands/UpdateApplicationVersionCommand.ts";
import {
  UpdateConfigurationTemplateCommandInput,
  UpdateConfigurationTemplateCommandOutput,
} from "./commands/UpdateConfigurationTemplateCommand.ts";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand.ts";
import {
  UpdateTagsForResourceCommandInput,
  UpdateTagsForResourceCommandOutput,
} from "./commands/UpdateTagsForResourceCommand.ts";
import {
  ValidateConfigurationSettingsCommandInput,
  ValidateConfigurationSettingsCommandOutput,
} from "./commands/ValidateConfigurationSettingsCommand.ts";
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
  | AbortEnvironmentUpdateCommandInput
  | ApplyEnvironmentManagedActionCommandInput
  | AssociateEnvironmentOperationsRoleCommandInput
  | CheckDNSAvailabilityCommandInput
  | ComposeEnvironmentsCommandInput
  | CreateApplicationCommandInput
  | CreateApplicationVersionCommandInput
  | CreateConfigurationTemplateCommandInput
  | CreateEnvironmentCommandInput
  | CreatePlatformVersionCommandInput
  | CreateStorageLocationCommandInput
  | DeleteApplicationCommandInput
  | DeleteApplicationVersionCommandInput
  | DeleteConfigurationTemplateCommandInput
  | DeleteEnvironmentConfigurationCommandInput
  | DeletePlatformVersionCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeApplicationVersionsCommandInput
  | DescribeApplicationsCommandInput
  | DescribeConfigurationOptionsCommandInput
  | DescribeConfigurationSettingsCommandInput
  | DescribeEnvironmentHealthCommandInput
  | DescribeEnvironmentManagedActionHistoryCommandInput
  | DescribeEnvironmentManagedActionsCommandInput
  | DescribeEnvironmentResourcesCommandInput
  | DescribeEnvironmentsCommandInput
  | DescribeEventsCommandInput
  | DescribeInstancesHealthCommandInput
  | DescribePlatformVersionCommandInput
  | DisassociateEnvironmentOperationsRoleCommandInput
  | ListAvailableSolutionStacksCommandInput
  | ListPlatformBranchesCommandInput
  | ListPlatformVersionsCommandInput
  | ListTagsForResourceCommandInput
  | RebuildEnvironmentCommandInput
  | RequestEnvironmentInfoCommandInput
  | RestartAppServerCommandInput
  | RetrieveEnvironmentInfoCommandInput
  | SwapEnvironmentCNAMEsCommandInput
  | TerminateEnvironmentCommandInput
  | UpdateApplicationCommandInput
  | UpdateApplicationResourceLifecycleCommandInput
  | UpdateApplicationVersionCommandInput
  | UpdateConfigurationTemplateCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateTagsForResourceCommandInput
  | ValidateConfigurationSettingsCommandInput;

export type ServiceOutputTypes =
  | AbortEnvironmentUpdateCommandOutput
  | ApplyEnvironmentManagedActionCommandOutput
  | AssociateEnvironmentOperationsRoleCommandOutput
  | CheckDNSAvailabilityCommandOutput
  | ComposeEnvironmentsCommandOutput
  | CreateApplicationCommandOutput
  | CreateApplicationVersionCommandOutput
  | CreateConfigurationTemplateCommandOutput
  | CreateEnvironmentCommandOutput
  | CreatePlatformVersionCommandOutput
  | CreateStorageLocationCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteApplicationVersionCommandOutput
  | DeleteConfigurationTemplateCommandOutput
  | DeleteEnvironmentConfigurationCommandOutput
  | DeletePlatformVersionCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeApplicationVersionsCommandOutput
  | DescribeApplicationsCommandOutput
  | DescribeConfigurationOptionsCommandOutput
  | DescribeConfigurationSettingsCommandOutput
  | DescribeEnvironmentHealthCommandOutput
  | DescribeEnvironmentManagedActionHistoryCommandOutput
  | DescribeEnvironmentManagedActionsCommandOutput
  | DescribeEnvironmentResourcesCommandOutput
  | DescribeEnvironmentsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeInstancesHealthCommandOutput
  | DescribePlatformVersionCommandOutput
  | DisassociateEnvironmentOperationsRoleCommandOutput
  | ListAvailableSolutionStacksCommandOutput
  | ListPlatformBranchesCommandOutput
  | ListPlatformVersionsCommandOutput
  | ListTagsForResourceCommandOutput
  | RebuildEnvironmentCommandOutput
  | RequestEnvironmentInfoCommandOutput
  | RestartAppServerCommandOutput
  | RetrieveEnvironmentInfoCommandOutput
  | SwapEnvironmentCNAMEsCommandOutput
  | TerminateEnvironmentCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateApplicationResourceLifecycleCommandOutput
  | UpdateApplicationVersionCommandOutput
  | UpdateConfigurationTemplateCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateTagsForResourceCommandOutput
  | ValidateConfigurationSettingsCommandOutput;

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

export type ElasticBeanstalkClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type ElasticBeanstalkClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>AWS Elastic Beanstalk</fullname>
 *
 *
 *          <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable,
 *       fault-tolerant applications running on the Amazon Web Services cloud.</p>
 *          <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the
 *       latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
 *       To install the Software Development Kits (SDKs), Integrated Development Environment (IDE)
 *       Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services
 *       Glossary</i>.</p>
 */
export class ElasticBeanstalkClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElasticBeanstalkClientResolvedConfig
> {
  readonly config: ElasticBeanstalkClientResolvedConfig;

  constructor(configuration: ElasticBeanstalkClientConfig) {
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
