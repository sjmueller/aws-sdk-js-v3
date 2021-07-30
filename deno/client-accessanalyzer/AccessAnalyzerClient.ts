import { ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput } from "./commands/ApplyArchiveRuleCommand.ts";
import {
  CancelPolicyGenerationCommandInput,
  CancelPolicyGenerationCommandOutput,
} from "./commands/CancelPolicyGenerationCommand.ts";
import {
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
} from "./commands/CreateAccessPreviewCommand.ts";
import { CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput } from "./commands/CreateAnalyzerCommand.ts";
import { CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput } from "./commands/CreateArchiveRuleCommand.ts";
import { DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput } from "./commands/DeleteAnalyzerCommand.ts";
import { DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput } from "./commands/DeleteArchiveRuleCommand.ts";
import { GetAccessPreviewCommandInput, GetAccessPreviewCommandOutput } from "./commands/GetAccessPreviewCommand.ts";
import {
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput,
} from "./commands/GetAnalyzedResourceCommand.ts";
import { GetAnalyzerCommandInput, GetAnalyzerCommandOutput } from "./commands/GetAnalyzerCommand.ts";
import { GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput } from "./commands/GetArchiveRuleCommand.ts";
import { GetFindingCommandInput, GetFindingCommandOutput } from "./commands/GetFindingCommand.ts";
import { GetGeneratedPolicyCommandInput, GetGeneratedPolicyCommandOutput } from "./commands/GetGeneratedPolicyCommand.ts";
import {
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "./commands/ListAccessPreviewFindingsCommand.ts";
import { ListAccessPreviewsCommandInput, ListAccessPreviewsCommandOutput } from "./commands/ListAccessPreviewsCommand.ts";
import {
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "./commands/ListAnalyzedResourcesCommand.ts";
import { ListAnalyzersCommandInput, ListAnalyzersCommandOutput } from "./commands/ListAnalyzersCommand.ts";
import { ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput } from "./commands/ListArchiveRulesCommand.ts";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand.ts";
import {
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "./commands/ListPolicyGenerationsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "./commands/StartPolicyGenerationCommand.ts";
import { StartResourceScanCommandInput, StartResourceScanCommandOutput } from "./commands/StartResourceScanCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput } from "./commands/UpdateArchiveRuleCommand.ts";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "./commands/UpdateFindingsCommand.ts";
import { ValidatePolicyCommandInput, ValidatePolicyCommandOutput } from "./commands/ValidatePolicyCommand.ts";
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
  | ApplyArchiveRuleCommandInput
  | CancelPolicyGenerationCommandInput
  | CreateAccessPreviewCommandInput
  | CreateAnalyzerCommandInput
  | CreateArchiveRuleCommandInput
  | DeleteAnalyzerCommandInput
  | DeleteArchiveRuleCommandInput
  | GetAccessPreviewCommandInput
  | GetAnalyzedResourceCommandInput
  | GetAnalyzerCommandInput
  | GetArchiveRuleCommandInput
  | GetFindingCommandInput
  | GetGeneratedPolicyCommandInput
  | ListAccessPreviewFindingsCommandInput
  | ListAccessPreviewsCommandInput
  | ListAnalyzedResourcesCommandInput
  | ListAnalyzersCommandInput
  | ListArchiveRulesCommandInput
  | ListFindingsCommandInput
  | ListPolicyGenerationsCommandInput
  | ListTagsForResourceCommandInput
  | StartPolicyGenerationCommandInput
  | StartResourceScanCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateArchiveRuleCommandInput
  | UpdateFindingsCommandInput
  | ValidatePolicyCommandInput;

export type ServiceOutputTypes =
  | ApplyArchiveRuleCommandOutput
  | CancelPolicyGenerationCommandOutput
  | CreateAccessPreviewCommandOutput
  | CreateAnalyzerCommandOutput
  | CreateArchiveRuleCommandOutput
  | DeleteAnalyzerCommandOutput
  | DeleteArchiveRuleCommandOutput
  | GetAccessPreviewCommandOutput
  | GetAnalyzedResourceCommandOutput
  | GetAnalyzerCommandOutput
  | GetArchiveRuleCommandOutput
  | GetFindingCommandOutput
  | GetGeneratedPolicyCommandOutput
  | ListAccessPreviewFindingsCommandOutput
  | ListAccessPreviewsCommandOutput
  | ListAnalyzedResourcesCommandOutput
  | ListAnalyzersCommandOutput
  | ListArchiveRulesCommandOutput
  | ListFindingsCommandOutput
  | ListPolicyGenerationsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartPolicyGenerationCommandOutput
  | StartResourceScanCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateArchiveRuleCommandOutput
  | UpdateFindingsCommandOutput
  | ValidatePolicyCommandOutput;

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

type AccessAnalyzerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of AccessAnalyzerClient class constructor that set the region, credentials and other options.
 */
export interface AccessAnalyzerClientConfig extends AccessAnalyzerClientConfigType {}

type AccessAnalyzerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of AccessAnalyzerClient class. This is resolved and normalized from the {@link AccessAnalyzerClientConfig | constructor configuration interface}.
 */
export interface AccessAnalyzerClientResolvedConfig extends AccessAnalyzerClientResolvedConfigType {}

/**
 * <p>AWS IAM Access Analyzer helps identify potential resource-access risks by enabling you to identify
 *          any policies that grant access to an external principal. It does this by using logic-based
 *          reasoning to analyze resource-based policies in your AWS environment. An external
 *          principal can be another AWS account, a root user, an IAM user or role, a federated
 *          user, an AWS service, or an anonymous user. You can also use Access Analyzer to preview and
 *          validate public and cross-account access to your resources before deploying permissions
 *          changes. This guide describes the AWS IAM Access Analyzer operations that you can call
 *          programmatically. For general information about Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">AWS IAM Access Analyzer</a> in the <b>IAM User Guide</b>.</p>
 *          <p>To start using Access Analyzer, you first need to create an analyzer.</p>
 */
export class AccessAnalyzerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AccessAnalyzerClientResolvedConfig
> {
  /**
   * The resolved configuration of AccessAnalyzerClient class. This is resolved and normalized from the {@link AccessAnalyzerClientConfig | constructor configuration interface}.
   */
  readonly config: AccessAnalyzerClientResolvedConfig;

  constructor(configuration: AccessAnalyzerClientConfig) {
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
