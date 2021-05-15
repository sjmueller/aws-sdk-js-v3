import {
  AssociateRepositoryCommandInput,
  AssociateRepositoryCommandOutput,
} from "./commands/AssociateRepositoryCommand.ts";
import { CreateCodeReviewCommandInput, CreateCodeReviewCommandOutput } from "./commands/CreateCodeReviewCommand.ts";
import { DescribeCodeReviewCommandInput, DescribeCodeReviewCommandOutput } from "./commands/DescribeCodeReviewCommand.ts";
import {
  DescribeRecommendationFeedbackCommandInput,
  DescribeRecommendationFeedbackCommandOutput,
} from "./commands/DescribeRecommendationFeedbackCommand.ts";
import {
  DescribeRepositoryAssociationCommandInput,
  DescribeRepositoryAssociationCommandOutput,
} from "./commands/DescribeRepositoryAssociationCommand.ts";
import {
  DisassociateRepositoryCommandInput,
  DisassociateRepositoryCommandOutput,
} from "./commands/DisassociateRepositoryCommand.ts";
import { ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput } from "./commands/ListCodeReviewsCommand.ts";
import {
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
} from "./commands/ListRecommendationFeedbackCommand.ts";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand.ts";
import {
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput,
} from "./commands/ListRepositoryAssociationsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutRecommendationFeedbackCommandInput,
  PutRecommendationFeedbackCommandOutput,
} from "./commands/PutRecommendationFeedbackCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
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
  | AssociateRepositoryCommandInput
  | CreateCodeReviewCommandInput
  | DescribeCodeReviewCommandInput
  | DescribeRecommendationFeedbackCommandInput
  | DescribeRepositoryAssociationCommandInput
  | DisassociateRepositoryCommandInput
  | ListCodeReviewsCommandInput
  | ListRecommendationFeedbackCommandInput
  | ListRecommendationsCommandInput
  | ListRepositoryAssociationsCommandInput
  | ListTagsForResourceCommandInput
  | PutRecommendationFeedbackCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | AssociateRepositoryCommandOutput
  | CreateCodeReviewCommandOutput
  | DescribeCodeReviewCommandOutput
  | DescribeRecommendationFeedbackCommandOutput
  | DescribeRepositoryAssociationCommandOutput
  | DisassociateRepositoryCommandOutput
  | ListCodeReviewsCommandOutput
  | ListRecommendationFeedbackCommandOutput
  | ListRecommendationsCommandOutput
  | ListRepositoryAssociationsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutRecommendationFeedbackCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

type CodeGuruReviewerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CodeGuruReviewerClient class constructor that set the region, credentials and other options.
 */
export interface CodeGuruReviewerClientConfig extends CodeGuruReviewerClientConfigType {}

type CodeGuruReviewerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CodeGuruReviewerClient class. This is resolved and normalized from the {@link CodeGuruReviewerClientConfig | constructor configuration interface}.
 */
export interface CodeGuruReviewerClientResolvedConfig extends CodeGuruReviewerClientResolvedConfigType {}

/**
 * <p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service
 *          that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommendations to
 *          address them in your Java and Python code.</p>
 *
 *          <p>By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer
 *             improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the
 *             <i>
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i>
 *          </p>
 *
 *          <p>
 *          To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by
 *          creating an <i>interface VPC endpoint</i>. For more information, see
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface
 *             VPC endpoints (AWS PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.
 *       </p>
 */
export class CodeGuruReviewerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeGuruReviewerClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeGuruReviewerClient class. This is resolved and normalized from the {@link CodeGuruReviewerClientConfig | constructor configuration interface}.
   */
  readonly config: CodeGuruReviewerClientResolvedConfig;

  constructor(configuration: CodeGuruReviewerClientConfig) {
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
