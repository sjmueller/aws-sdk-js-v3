import { BuildSuggestersCommandInput, BuildSuggestersCommandOutput } from "./commands/BuildSuggestersCommand.ts";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand.ts";
import {
  DefineAnalysisSchemeCommandInput,
  DefineAnalysisSchemeCommandOutput,
} from "./commands/DefineAnalysisSchemeCommand.ts";
import { DefineExpressionCommandInput, DefineExpressionCommandOutput } from "./commands/DefineExpressionCommand.ts";
import { DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput } from "./commands/DefineIndexFieldCommand.ts";
import { DefineSuggesterCommandInput, DefineSuggesterCommandOutput } from "./commands/DefineSuggesterCommand.ts";
import {
  DeleteAnalysisSchemeCommandInput,
  DeleteAnalysisSchemeCommandOutput,
} from "./commands/DeleteAnalysisSchemeCommand.ts";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand.ts";
import { DeleteExpressionCommandInput, DeleteExpressionCommandOutput } from "./commands/DeleteExpressionCommand.ts";
import { DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput } from "./commands/DeleteIndexFieldCommand.ts";
import { DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput } from "./commands/DeleteSuggesterCommand.ts";
import {
  DescribeAnalysisSchemesCommandInput,
  DescribeAnalysisSchemesCommandOutput,
} from "./commands/DescribeAnalysisSchemesCommand.ts";
import {
  DescribeAvailabilityOptionsCommandInput,
  DescribeAvailabilityOptionsCommandOutput,
} from "./commands/DescribeAvailabilityOptionsCommand.ts";
import {
  DescribeDomainEndpointOptionsCommandInput,
  DescribeDomainEndpointOptionsCommandOutput,
} from "./commands/DescribeDomainEndpointOptionsCommand.ts";
import { DescribeDomainsCommandInput, DescribeDomainsCommandOutput } from "./commands/DescribeDomainsCommand.ts";
import {
  DescribeExpressionsCommandInput,
  DescribeExpressionsCommandOutput,
} from "./commands/DescribeExpressionsCommand.ts";
import {
  DescribeIndexFieldsCommandInput,
  DescribeIndexFieldsCommandOutput,
} from "./commands/DescribeIndexFieldsCommand.ts";
import {
  DescribeScalingParametersCommandInput,
  DescribeScalingParametersCommandOutput,
} from "./commands/DescribeScalingParametersCommand.ts";
import {
  DescribeServiceAccessPoliciesCommandInput,
  DescribeServiceAccessPoliciesCommandOutput,
} from "./commands/DescribeServiceAccessPoliciesCommand.ts";
import { DescribeSuggestersCommandInput, DescribeSuggestersCommandOutput } from "./commands/DescribeSuggestersCommand.ts";
import { IndexDocumentsCommandInput, IndexDocumentsCommandOutput } from "./commands/IndexDocumentsCommand.ts";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand.ts";
import {
  UpdateAvailabilityOptionsCommandInput,
  UpdateAvailabilityOptionsCommandOutput,
} from "./commands/UpdateAvailabilityOptionsCommand.ts";
import {
  UpdateDomainEndpointOptionsCommandInput,
  UpdateDomainEndpointOptionsCommandOutput,
} from "./commands/UpdateDomainEndpointOptionsCommand.ts";
import {
  UpdateScalingParametersCommandInput,
  UpdateScalingParametersCommandOutput,
} from "./commands/UpdateScalingParametersCommand.ts";
import {
  UpdateServiceAccessPoliciesCommandInput,
  UpdateServiceAccessPoliciesCommandOutput,
} from "./commands/UpdateServiceAccessPoliciesCommand.ts";
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
} from "../types/mod.ts";

export type ServiceInputTypes =
  | BuildSuggestersCommandInput
  | CreateDomainCommandInput
  | DefineAnalysisSchemeCommandInput
  | DefineExpressionCommandInput
  | DefineIndexFieldCommandInput
  | DefineSuggesterCommandInput
  | DeleteAnalysisSchemeCommandInput
  | DeleteDomainCommandInput
  | DeleteExpressionCommandInput
  | DeleteIndexFieldCommandInput
  | DeleteSuggesterCommandInput
  | DescribeAnalysisSchemesCommandInput
  | DescribeAvailabilityOptionsCommandInput
  | DescribeDomainEndpointOptionsCommandInput
  | DescribeDomainsCommandInput
  | DescribeExpressionsCommandInput
  | DescribeIndexFieldsCommandInput
  | DescribeScalingParametersCommandInput
  | DescribeServiceAccessPoliciesCommandInput
  | DescribeSuggestersCommandInput
  | IndexDocumentsCommandInput
  | ListDomainNamesCommandInput
  | UpdateAvailabilityOptionsCommandInput
  | UpdateDomainEndpointOptionsCommandInput
  | UpdateScalingParametersCommandInput
  | UpdateServiceAccessPoliciesCommandInput;

export type ServiceOutputTypes =
  | BuildSuggestersCommandOutput
  | CreateDomainCommandOutput
  | DefineAnalysisSchemeCommandOutput
  | DefineExpressionCommandOutput
  | DefineIndexFieldCommandOutput
  | DefineSuggesterCommandOutput
  | DeleteAnalysisSchemeCommandOutput
  | DeleteDomainCommandOutput
  | DeleteExpressionCommandOutput
  | DeleteIndexFieldCommandOutput
  | DeleteSuggesterCommandOutput
  | DescribeAnalysisSchemesCommandOutput
  | DescribeAvailabilityOptionsCommandOutput
  | DescribeDomainEndpointOptionsCommandOutput
  | DescribeDomainsCommandOutput
  | DescribeExpressionsCommandOutput
  | DescribeIndexFieldsCommandOutput
  | DescribeScalingParametersCommandOutput
  | DescribeServiceAccessPoliciesCommandOutput
  | DescribeSuggestersCommandOutput
  | IndexDocumentsCommandOutput
  | ListDomainNamesCommandOutput
  | UpdateAvailabilityOptionsCommandOutput
  | UpdateDomainEndpointOptionsCommandOutput
  | UpdateScalingParametersCommandOutput
  | UpdateServiceAccessPoliciesCommandOutput;

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
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

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
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type CloudSearchClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CloudSearchClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Amazon CloudSearch Configuration Service</fullname>
 *     <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains.
 *       Configuration service  requests are submitted using the AWS Query protocol. AWS Query requests
 *       are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p>
 *     <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com.
 *       For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *       see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>
 */
export class CloudSearchClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudSearchClientResolvedConfig
> {
  readonly config: CloudSearchClientResolvedConfig;

  constructor(configuration: CloudSearchClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
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
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
