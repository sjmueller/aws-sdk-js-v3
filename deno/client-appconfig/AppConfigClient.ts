import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand.ts";
import {
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
} from "./commands/CreateConfigurationProfileCommand.ts";
import {
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
} from "./commands/CreateDeploymentStrategyCommand.ts";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand.ts";
import {
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
} from "./commands/CreateHostedConfigurationVersionCommand.ts";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand.ts";
import {
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
} from "./commands/DeleteConfigurationProfileCommand.ts";
import {
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "./commands/DeleteDeploymentStrategyCommand.ts";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand.ts";
import {
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
} from "./commands/DeleteHostedConfigurationVersionCommand.ts";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand.ts";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "./commands/GetConfigurationCommand.ts";
import {
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
} from "./commands/GetConfigurationProfileCommand.ts";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand.ts";
import {
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "./commands/GetDeploymentStrategyCommand.ts";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand.ts";
import {
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "./commands/GetHostedConfigurationVersionCommand.ts";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand.ts";
import {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "./commands/ListConfigurationProfilesCommand.ts";
import {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "./commands/ListDeploymentStrategiesCommand.ts";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand.ts";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand.ts";
import {
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "./commands/ListHostedConfigurationVersionsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "./commands/StartDeploymentCommand.ts";
import { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "./commands/StopDeploymentCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand.ts";
import {
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
} from "./commands/UpdateConfigurationProfileCommand.ts";
import {
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
} from "./commands/UpdateDeploymentStrategyCommand.ts";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand.ts";
import {
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "./commands/ValidateConfigurationCommand.ts";
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
  | CreateApplicationCommandInput
  | CreateConfigurationProfileCommandInput
  | CreateDeploymentStrategyCommandInput
  | CreateEnvironmentCommandInput
  | CreateHostedConfigurationVersionCommandInput
  | DeleteApplicationCommandInput
  | DeleteConfigurationProfileCommandInput
  | DeleteDeploymentStrategyCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteHostedConfigurationVersionCommandInput
  | GetApplicationCommandInput
  | GetConfigurationCommandInput
  | GetConfigurationProfileCommandInput
  | GetDeploymentCommandInput
  | GetDeploymentStrategyCommandInput
  | GetEnvironmentCommandInput
  | GetHostedConfigurationVersionCommandInput
  | ListApplicationsCommandInput
  | ListConfigurationProfilesCommandInput
  | ListDeploymentStrategiesCommandInput
  | ListDeploymentsCommandInput
  | ListEnvironmentsCommandInput
  | ListHostedConfigurationVersionsCommandInput
  | ListTagsForResourceCommandInput
  | StartDeploymentCommandInput
  | StopDeploymentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateConfigurationProfileCommandInput
  | UpdateDeploymentStrategyCommandInput
  | UpdateEnvironmentCommandInput
  | ValidateConfigurationCommandInput;

export type ServiceOutputTypes =
  | CreateApplicationCommandOutput
  | CreateConfigurationProfileCommandOutput
  | CreateDeploymentStrategyCommandOutput
  | CreateEnvironmentCommandOutput
  | CreateHostedConfigurationVersionCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteConfigurationProfileCommandOutput
  | DeleteDeploymentStrategyCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteHostedConfigurationVersionCommandOutput
  | GetApplicationCommandOutput
  | GetConfigurationCommandOutput
  | GetConfigurationProfileCommandOutput
  | GetDeploymentCommandOutput
  | GetDeploymentStrategyCommandOutput
  | GetEnvironmentCommandOutput
  | GetHostedConfigurationVersionCommandOutput
  | ListApplicationsCommandOutput
  | ListConfigurationProfilesCommandOutput
  | ListDeploymentStrategiesCommandOutput
  | ListDeploymentsCommandOutput
  | ListEnvironmentsCommandOutput
  | ListHostedConfigurationVersionsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartDeploymentCommandOutput
  | StopDeploymentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateConfigurationProfileCommandOutput
  | UpdateDeploymentStrategyCommandOutput
  | UpdateEnvironmentCommandOutput
  | ValidateConfigurationCommandOutput;

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

type AppConfigClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of AppConfigClient class constructor that set the region, credentials and other options.
 */
export interface AppConfigClientConfig extends AppConfigClientConfigType {}

type AppConfigClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of AppConfigClient class. This is resolved and normalized from the {@link AppConfigClientConfig | constructor configuration interface}.
 */
export interface AppConfigClientResolvedConfig extends AppConfigClientResolvedConfigType {}

/**
 * <fullname>AWS AppConfig</fullname>
 *          <p>Use AWS AppConfig, a capability of AWS Systems Manager, to create, manage, and quickly deploy
 *          application configurations. AppConfig supports controlled deployments to applications of any
 *          size and includes built-in validation checks and monitoring. You can use AppConfig with
 *          applications hosted on Amazon EC2 instances, AWS Lambda, containers, mobile applications, or IoT
 *          devices.</p>
 *
 *          <p>To prevent errors when deploying application configurations, especially for production
 *          systems where a simple typo could cause an unexpected outage, AppConfig includes validators.
 *          A validator provides a syntactic or semantic check to ensure that the configuration you
 *          want to deploy works as intended. To validate your application configuration data, you
 *          provide a schema or a Lambda function that runs against the configuration. The
 *          configuration deployment or update can only proceed when the configuration data is
 *          valid.</p>
 *
 *          <p>During a configuration deployment, AppConfig monitors the application to ensure that the
 *          deployment is successful. If the system encounters an error, AppConfig rolls back the change
 *          to minimize impact for your application users. You can configure a deployment strategy for
 *          each application or environment that includes deployment criteria, including velocity, bake
 *          time, and alarms to monitor. Similar to error monitoring, if a deployment triggers an
 *          alarm, AppConfig automatically rolls back to the previous version. </p>
 *
 *          <p>AppConfig supports multiple use cases. Here are some examples.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b>: Use AppConfig to carefully
 *                introduce changes to your application that can only be tested with production
 *                traffic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Feature toggle</b>: Use AppConfig to turn on new
 *                features that require a timely deployment, such as a product launch or announcement.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list</b>: Use AppConfig to allow premium
 *                subscribers to access paid content. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Operational issues</b>: Use AppConfig to reduce stress
 *                on your application when a dependency or other external factor impacts the
 *                system.</p>
 *             </li>
 *          </ul>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig.html">AWS AppConfig User Guide</a>.</p>
 */
export class AppConfigClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppConfigClientResolvedConfig
> {
  /**
   * The resolved configuration of AppConfigClient class. This is resolved and normalized from the {@link AppConfigClientConfig | constructor configuration interface}.
   */
  readonly config: AppConfigClientResolvedConfig;

  constructor(configuration: AppConfigClientConfig) {
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
