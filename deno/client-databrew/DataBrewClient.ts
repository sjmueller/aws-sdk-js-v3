import {
  BatchDeleteRecipeVersionCommandInput,
  BatchDeleteRecipeVersionCommandOutput,
} from "./commands/BatchDeleteRecipeVersionCommand.ts";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand.ts";
import { CreateProfileJobCommandInput, CreateProfileJobCommandOutput } from "./commands/CreateProfileJobCommand.ts";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand.ts";
import { CreateRecipeCommandInput, CreateRecipeCommandOutput } from "./commands/CreateRecipeCommand.ts";
import { CreateRecipeJobCommandInput, CreateRecipeJobCommandOutput } from "./commands/CreateRecipeJobCommand.ts";
import { CreateScheduleCommandInput, CreateScheduleCommandOutput } from "./commands/CreateScheduleCommand.ts";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand.ts";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand.ts";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand.ts";
import {
  DeleteRecipeVersionCommandInput,
  DeleteRecipeVersionCommandOutput,
} from "./commands/DeleteRecipeVersionCommand.ts";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "./commands/DeleteScheduleCommand.ts";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand.ts";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand.ts";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "./commands/DescribeJobRunCommand.ts";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand.ts";
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "./commands/DescribeRecipeCommand.ts";
import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "./commands/DescribeScheduleCommand.ts";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand.ts";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand.ts";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand.ts";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand.ts";
import { ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput } from "./commands/ListRecipeVersionsCommand.ts";
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand.ts";
import { ListSchedulesCommandInput, ListSchedulesCommandOutput } from "./commands/ListSchedulesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { PublishRecipeCommandInput, PublishRecipeCommandOutput } from "./commands/PublishRecipeCommand.ts";
import {
  SendProjectSessionActionCommandInput,
  SendProjectSessionActionCommandOutput,
} from "./commands/SendProjectSessionActionCommand.ts";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand.ts";
import {
  StartProjectSessionCommandInput,
  StartProjectSessionCommandOutput,
} from "./commands/StartProjectSessionCommand.ts";
import { StopJobRunCommandInput, StopJobRunCommandOutput } from "./commands/StopJobRunCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand.ts";
import { UpdateProfileJobCommandInput, UpdateProfileJobCommandOutput } from "./commands/UpdateProfileJobCommand.ts";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand.ts";
import { UpdateRecipeCommandInput, UpdateRecipeCommandOutput } from "./commands/UpdateRecipeCommand.ts";
import { UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput } from "./commands/UpdateRecipeJobCommand.ts";
import { UpdateScheduleCommandInput, UpdateScheduleCommandOutput } from "./commands/UpdateScheduleCommand.ts";
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
  | BatchDeleteRecipeVersionCommandInput
  | CreateDatasetCommandInput
  | CreateProfileJobCommandInput
  | CreateProjectCommandInput
  | CreateRecipeCommandInput
  | CreateRecipeJobCommandInput
  | CreateScheduleCommandInput
  | DeleteDatasetCommandInput
  | DeleteJobCommandInput
  | DeleteProjectCommandInput
  | DeleteRecipeVersionCommandInput
  | DeleteScheduleCommandInput
  | DescribeDatasetCommandInput
  | DescribeJobCommandInput
  | DescribeJobRunCommandInput
  | DescribeProjectCommandInput
  | DescribeRecipeCommandInput
  | DescribeScheduleCommandInput
  | ListDatasetsCommandInput
  | ListJobRunsCommandInput
  | ListJobsCommandInput
  | ListProjectsCommandInput
  | ListRecipeVersionsCommandInput
  | ListRecipesCommandInput
  | ListSchedulesCommandInput
  | ListTagsForResourceCommandInput
  | PublishRecipeCommandInput
  | SendProjectSessionActionCommandInput
  | StartJobRunCommandInput
  | StartProjectSessionCommandInput
  | StopJobRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDatasetCommandInput
  | UpdateProfileJobCommandInput
  | UpdateProjectCommandInput
  | UpdateRecipeCommandInput
  | UpdateRecipeJobCommandInput
  | UpdateScheduleCommandInput;

export type ServiceOutputTypes =
  | BatchDeleteRecipeVersionCommandOutput
  | CreateDatasetCommandOutput
  | CreateProfileJobCommandOutput
  | CreateProjectCommandOutput
  | CreateRecipeCommandOutput
  | CreateRecipeJobCommandOutput
  | CreateScheduleCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteJobCommandOutput
  | DeleteProjectCommandOutput
  | DeleteRecipeVersionCommandOutput
  | DeleteScheduleCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeJobCommandOutput
  | DescribeJobRunCommandOutput
  | DescribeProjectCommandOutput
  | DescribeRecipeCommandOutput
  | DescribeScheduleCommandOutput
  | ListDatasetsCommandOutput
  | ListJobRunsCommandOutput
  | ListJobsCommandOutput
  | ListProjectsCommandOutput
  | ListRecipeVersionsCommandOutput
  | ListRecipesCommandOutput
  | ListSchedulesCommandOutput
  | ListTagsForResourceCommandOutput
  | PublishRecipeCommandOutput
  | SendProjectSessionActionCommandOutput
  | StartJobRunCommandOutput
  | StartProjectSessionCommandOutput
  | StopJobRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDatasetCommandOutput
  | UpdateProfileJobCommandOutput
  | UpdateProjectCommandOutput
  | UpdateRecipeCommandOutput
  | UpdateRecipeJobCommandOutput
  | UpdateScheduleCommandOutput;

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
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

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

type DataBrewClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of DataBrewClient class constructor that set the region, credentials and other options.
 */
export interface DataBrewClientConfig extends DataBrewClientConfigType {}

type DataBrewClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of DataBrewClient class. This is resolved and normalized from the {@link DataBrewClientConfig | constructor configuration interface}.
 */
export interface DataBrewClientResolvedConfig extends DataBrewClientResolvedConfigType {}

/**
 * <p>Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew
 *             simplifies data preparation tasks, targeting data issues that are hard to spot and
 *             time-consuming to fix. DataBrew empowers users of all technical levels to visualize the
 *             data and perform one-click data transformations, with no coding required.</p>
 */
export class DataBrewClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataBrewClientResolvedConfig
> {
  /**
   * The resolved configuration of DataBrewClient class. This is resolved and normalized from the {@link DataBrewClientConfig | constructor configuration interface}.
   */
  readonly config: DataBrewClientResolvedConfig;

  constructor(configuration: DataBrewClientConfig) {
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
