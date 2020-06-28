import {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput
} from "./commands/CreateApplicationCommand.ts";
import {
  CreateComponentCommandInput,
  CreateComponentCommandOutput
} from "./commands/CreateComponentCommand.ts";
import {
  CreateLogPatternCommandInput,
  CreateLogPatternCommandOutput
} from "./commands/CreateLogPatternCommand.ts";
import {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput
} from "./commands/DeleteApplicationCommand.ts";
import {
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput
} from "./commands/DeleteComponentCommand.ts";
import {
  DeleteLogPatternCommandInput,
  DeleteLogPatternCommandOutput
} from "./commands/DeleteLogPatternCommand.ts";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput
} from "./commands/DescribeApplicationCommand.ts";
import {
  DescribeComponentCommandInput,
  DescribeComponentCommandOutput
} from "./commands/DescribeComponentCommand.ts";
import {
  DescribeComponentConfigurationCommandInput,
  DescribeComponentConfigurationCommandOutput
} from "./commands/DescribeComponentConfigurationCommand.ts";
import {
  DescribeComponentConfigurationRecommendationCommandInput,
  DescribeComponentConfigurationRecommendationCommandOutput
} from "./commands/DescribeComponentConfigurationRecommendationCommand.ts";
import {
  DescribeLogPatternCommandInput,
  DescribeLogPatternCommandOutput
} from "./commands/DescribeLogPatternCommand.ts";
import {
  DescribeObservationCommandInput,
  DescribeObservationCommandOutput
} from "./commands/DescribeObservationCommand.ts";
import {
  DescribeProblemCommandInput,
  DescribeProblemCommandOutput
} from "./commands/DescribeProblemCommand.ts";
import {
  DescribeProblemObservationsCommandInput,
  DescribeProblemObservationsCommandOutput
} from "./commands/DescribeProblemObservationsCommand.ts";
import {
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
} from "./commands/ListApplicationsCommand.ts";
import {
  ListComponentsCommandInput,
  ListComponentsCommandOutput
} from "./commands/ListComponentsCommand.ts";
import {
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput
} from "./commands/ListConfigurationHistoryCommand.ts";
import {
  ListLogPatternSetsCommandInput,
  ListLogPatternSetsCommandOutput
} from "./commands/ListLogPatternSetsCommand.ts";
import {
  ListLogPatternsCommandInput,
  ListLogPatternsCommandOutput
} from "./commands/ListLogPatternsCommand.ts";
import {
  ListProblemsCommandInput,
  ListProblemsCommandOutput
} from "./commands/ListProblemsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand.ts";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand.ts";
import {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput
} from "./commands/UpdateApplicationCommand.ts";
import {
  UpdateComponentCommandInput,
  UpdateComponentCommandOutput
} from "./commands/UpdateComponentCommand.ts";
import {
  UpdateComponentConfigurationCommandInput,
  UpdateComponentConfigurationCommandOutput
} from "./commands/UpdateComponentConfigurationCommand.ts";
import {
  UpdateLogPatternCommandInput,
  UpdateLogPatternCommandOutput
} from "./commands/UpdateLogPatternCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "../middleware-host-header/mod.ts";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "../smithy-client/mod.ts";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateApplicationCommandInput
  | CreateComponentCommandInput
  | CreateLogPatternCommandInput
  | DeleteApplicationCommandInput
  | DeleteComponentCommandInput
  | DeleteLogPatternCommandInput
  | DescribeApplicationCommandInput
  | DescribeComponentCommandInput
  | DescribeComponentConfigurationCommandInput
  | DescribeComponentConfigurationRecommendationCommandInput
  | DescribeLogPatternCommandInput
  | DescribeObservationCommandInput
  | DescribeProblemCommandInput
  | DescribeProblemObservationsCommandInput
  | ListApplicationsCommandInput
  | ListComponentsCommandInput
  | ListConfigurationHistoryCommandInput
  | ListLogPatternSetsCommandInput
  | ListLogPatternsCommandInput
  | ListProblemsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateComponentCommandInput
  | UpdateComponentConfigurationCommandInput
  | UpdateLogPatternCommandInput;

export type ServiceOutputTypes =
  | CreateApplicationCommandOutput
  | CreateComponentCommandOutput
  | CreateLogPatternCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteComponentCommandOutput
  | DeleteLogPatternCommandOutput
  | DescribeApplicationCommandOutput
  | DescribeComponentCommandOutput
  | DescribeComponentConfigurationCommandOutput
  | DescribeComponentConfigurationRecommendationCommandOutput
  | DescribeLogPatternCommandOutput
  | DescribeObservationCommandOutput
  | DescribeProblemCommandOutput
  | DescribeProblemObservationsCommandOutput
  | ListApplicationsCommandOutput
  | ListComponentsCommandOutput
  | ListConfigurationHistoryCommandOutput
  | ListLogPatternSetsCommandOutput
  | ListLogPatternsCommandOutput
  | ListProblemsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateComponentCommandOutput
  | UpdateComponentConfigurationCommandOutput
  | UpdateLogPatternCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ApplicationInsightsClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ApplicationInsightsClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Amazon CloudWatch Application Insights for .NET and SQL Server</fullname>
 *          <p> Amazon CloudWatch Application Insights for .NET and SQL Server is a service that
 *          helps you detect common problems with your .NET and SQL Server-based applications. It
 *          enables you to pinpoint the source of issues in your applications (built with technologies
 *          such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into
 *          detected problems.</p>
 *          <p>After you onboard your application, CloudWatch Application Insights for .NET and SQL
 *          Server identifies, recommends, and sets up metrics and logs. It continuously analyzes and
 *          correlates your metrics and logs for unusual behavior to surface actionable problems with
 *          your application. For example, if your application is slow and unresponsive and leading to
 *          HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you
 *          that a memory pressure problem with your SQL Server database is occurring. It bases this
 *          analysis on impactful metrics and log errors. </p>
 */
export class ApplicationInsightsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ApplicationInsightsClientResolvedConfig
> {
  readonly config: ApplicationInsightsClientResolvedConfig;

  constructor(configuration: ApplicationInsightsClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
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
  }

  destroy(): void {
    super.destroy();
  }
}
