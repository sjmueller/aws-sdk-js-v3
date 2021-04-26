import {
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput,
} from "./commands/AddAttributesToFindingsCommand.ts";
import {
  CreateAssessmentTargetCommandInput,
  CreateAssessmentTargetCommandOutput,
} from "./commands/CreateAssessmentTargetCommand.ts";
import {
  CreateAssessmentTemplateCommandInput,
  CreateAssessmentTemplateCommandOutput,
} from "./commands/CreateAssessmentTemplateCommand.ts";
import {
  CreateExclusionsPreviewCommandInput,
  CreateExclusionsPreviewCommandOutput,
} from "./commands/CreateExclusionsPreviewCommand.ts";
import {
  CreateResourceGroupCommandInput,
  CreateResourceGroupCommandOutput,
} from "./commands/CreateResourceGroupCommand.ts";
import {
  DeleteAssessmentRunCommandInput,
  DeleteAssessmentRunCommandOutput,
} from "./commands/DeleteAssessmentRunCommand.ts";
import {
  DeleteAssessmentTargetCommandInput,
  DeleteAssessmentTargetCommandOutput,
} from "./commands/DeleteAssessmentTargetCommand.ts";
import {
  DeleteAssessmentTemplateCommandInput,
  DeleteAssessmentTemplateCommandOutput,
} from "./commands/DeleteAssessmentTemplateCommand.ts";
import {
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput,
} from "./commands/DescribeAssessmentRunsCommand.ts";
import {
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput,
} from "./commands/DescribeAssessmentTargetsCommand.ts";
import {
  DescribeAssessmentTemplatesCommandInput,
  DescribeAssessmentTemplatesCommandOutput,
} from "./commands/DescribeAssessmentTemplatesCommand.ts";
import {
  DescribeCrossAccountAccessRoleCommandInput,
  DescribeCrossAccountAccessRoleCommandOutput,
} from "./commands/DescribeCrossAccountAccessRoleCommand.ts";
import { DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput } from "./commands/DescribeExclusionsCommand.ts";
import { DescribeFindingsCommandInput, DescribeFindingsCommandOutput } from "./commands/DescribeFindingsCommand.ts";
import {
  DescribeResourceGroupsCommandInput,
  DescribeResourceGroupsCommandOutput,
} from "./commands/DescribeResourceGroupsCommand.ts";
import {
  DescribeRulesPackagesCommandInput,
  DescribeRulesPackagesCommandOutput,
} from "./commands/DescribeRulesPackagesCommand.ts";
import {
  GetAssessmentReportCommandInput,
  GetAssessmentReportCommandOutput,
} from "./commands/GetAssessmentReportCommand.ts";
import {
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
} from "./commands/GetExclusionsPreviewCommand.ts";
import {
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput,
} from "./commands/GetTelemetryMetadataCommand.ts";
import {
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
} from "./commands/ListAssessmentRunAgentsCommand.ts";
import { ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput } from "./commands/ListAssessmentRunsCommand.ts";
import {
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
} from "./commands/ListAssessmentTargetsCommand.ts";
import {
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "./commands/ListAssessmentTemplatesCommand.ts";
import {
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput,
} from "./commands/ListEventSubscriptionsCommand.ts";
import { ListExclusionsCommandInput, ListExclusionsCommandOutput } from "./commands/ListExclusionsCommand.ts";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand.ts";
import { ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput } from "./commands/ListRulesPackagesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { PreviewAgentsCommandInput, PreviewAgentsCommandOutput } from "./commands/PreviewAgentsCommand.ts";
import {
  RegisterCrossAccountAccessRoleCommandInput,
  RegisterCrossAccountAccessRoleCommandOutput,
} from "./commands/RegisterCrossAccountAccessRoleCommand.ts";
import {
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
} from "./commands/RemoveAttributesFromFindingsCommand.ts";
import { SetTagsForResourceCommandInput, SetTagsForResourceCommandOutput } from "./commands/SetTagsForResourceCommand.ts";
import { StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput } from "./commands/StartAssessmentRunCommand.ts";
import { StopAssessmentRunCommandInput, StopAssessmentRunCommandOutput } from "./commands/StopAssessmentRunCommand.ts";
import { SubscribeToEventCommandInput, SubscribeToEventCommandOutput } from "./commands/SubscribeToEventCommand.ts";
import {
  UnsubscribeFromEventCommandInput,
  UnsubscribeFromEventCommandOutput,
} from "./commands/UnsubscribeFromEventCommand.ts";
import {
  UpdateAssessmentTargetCommandInput,
  UpdateAssessmentTargetCommandOutput,
} from "./commands/UpdateAssessmentTargetCommand.ts";
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
  | AddAttributesToFindingsCommandInput
  | CreateAssessmentTargetCommandInput
  | CreateAssessmentTemplateCommandInput
  | CreateExclusionsPreviewCommandInput
  | CreateResourceGroupCommandInput
  | DeleteAssessmentRunCommandInput
  | DeleteAssessmentTargetCommandInput
  | DeleteAssessmentTemplateCommandInput
  | DescribeAssessmentRunsCommandInput
  | DescribeAssessmentTargetsCommandInput
  | DescribeAssessmentTemplatesCommandInput
  | DescribeCrossAccountAccessRoleCommandInput
  | DescribeExclusionsCommandInput
  | DescribeFindingsCommandInput
  | DescribeResourceGroupsCommandInput
  | DescribeRulesPackagesCommandInput
  | GetAssessmentReportCommandInput
  | GetExclusionsPreviewCommandInput
  | GetTelemetryMetadataCommandInput
  | ListAssessmentRunAgentsCommandInput
  | ListAssessmentRunsCommandInput
  | ListAssessmentTargetsCommandInput
  | ListAssessmentTemplatesCommandInput
  | ListEventSubscriptionsCommandInput
  | ListExclusionsCommandInput
  | ListFindingsCommandInput
  | ListRulesPackagesCommandInput
  | ListTagsForResourceCommandInput
  | PreviewAgentsCommandInput
  | RegisterCrossAccountAccessRoleCommandInput
  | RemoveAttributesFromFindingsCommandInput
  | SetTagsForResourceCommandInput
  | StartAssessmentRunCommandInput
  | StopAssessmentRunCommandInput
  | SubscribeToEventCommandInput
  | UnsubscribeFromEventCommandInput
  | UpdateAssessmentTargetCommandInput;

export type ServiceOutputTypes =
  | AddAttributesToFindingsCommandOutput
  | CreateAssessmentTargetCommandOutput
  | CreateAssessmentTemplateCommandOutput
  | CreateExclusionsPreviewCommandOutput
  | CreateResourceGroupCommandOutput
  | DeleteAssessmentRunCommandOutput
  | DeleteAssessmentTargetCommandOutput
  | DeleteAssessmentTemplateCommandOutput
  | DescribeAssessmentRunsCommandOutput
  | DescribeAssessmentTargetsCommandOutput
  | DescribeAssessmentTemplatesCommandOutput
  | DescribeCrossAccountAccessRoleCommandOutput
  | DescribeExclusionsCommandOutput
  | DescribeFindingsCommandOutput
  | DescribeResourceGroupsCommandOutput
  | DescribeRulesPackagesCommandOutput
  | GetAssessmentReportCommandOutput
  | GetExclusionsPreviewCommandOutput
  | GetTelemetryMetadataCommandOutput
  | ListAssessmentRunAgentsCommandOutput
  | ListAssessmentRunsCommandOutput
  | ListAssessmentTargetsCommandOutput
  | ListAssessmentTemplatesCommandOutput
  | ListEventSubscriptionsCommandOutput
  | ListExclusionsCommandOutput
  | ListFindingsCommandOutput
  | ListRulesPackagesCommandOutput
  | ListTagsForResourceCommandOutput
  | PreviewAgentsCommandOutput
  | RegisterCrossAccountAccessRoleCommandOutput
  | RemoveAttributesFromFindingsCommandOutput
  | SetTagsForResourceCommandOutput
  | StartAssessmentRunCommandOutput
  | StopAssessmentRunCommandOutput
  | SubscribeToEventCommandOutput
  | UnsubscribeFromEventCommandOutput
  | UpdateAssessmentTargetCommandOutput;

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

type InspectorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of InspectorClient class constructor that set the region, credentials and other options.
 */
export interface InspectorClientConfig extends InspectorClientConfigType {}

type InspectorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of InspectorClient class. This is resolved and normalized from the {@link InspectorClientConfig | constructor configuration interface}.
 */
export interface InspectorClientResolvedConfig extends InspectorClientResolvedConfigType {}

/**
 * <fullname>Amazon Inspector</fullname>
 *          <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to
 *          identify potential security issues. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User
 *             Guide</a>.</p>
 */
export class InspectorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  InspectorClientResolvedConfig
> {
  /**
   * The resolved configuration of InspectorClient class. This is resolved and normalized from the {@link InspectorClientConfig | constructor configuration interface}.
   */
  readonly config: InspectorClientResolvedConfig;

  constructor(configuration: InspectorClientConfig) {
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
