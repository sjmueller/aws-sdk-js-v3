import {
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput,
} from "./commands/BatchDescribeSimulationJobCommand.ts";
import {
  CancelDeploymentJobCommandInput,
  CancelDeploymentJobCommandOutput,
} from "./commands/CancelDeploymentJobCommand.ts";
import {
  CancelSimulationJobBatchCommandInput,
  CancelSimulationJobBatchCommandOutput,
} from "./commands/CancelSimulationJobBatchCommand.ts";
import {
  CancelSimulationJobCommandInput,
  CancelSimulationJobCommandOutput,
} from "./commands/CancelSimulationJobCommand.ts";
import {
  CreateDeploymentJobCommandInput,
  CreateDeploymentJobCommandOutput,
} from "./commands/CreateDeploymentJobCommand.ts";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand.ts";
import {
  CreateRobotApplicationCommandInput,
  CreateRobotApplicationCommandOutput,
} from "./commands/CreateRobotApplicationCommand.ts";
import {
  CreateRobotApplicationVersionCommandInput,
  CreateRobotApplicationVersionCommandOutput,
} from "./commands/CreateRobotApplicationVersionCommand.ts";
import { CreateRobotCommandInput, CreateRobotCommandOutput } from "./commands/CreateRobotCommand.ts";
import {
  CreateSimulationApplicationCommandInput,
  CreateSimulationApplicationCommandOutput,
} from "./commands/CreateSimulationApplicationCommand.ts";
import {
  CreateSimulationApplicationVersionCommandInput,
  CreateSimulationApplicationVersionCommandOutput,
} from "./commands/CreateSimulationApplicationVersionCommand.ts";
import {
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput,
} from "./commands/CreateSimulationJobCommand.ts";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand.ts";
import {
  DeleteRobotApplicationCommandInput,
  DeleteRobotApplicationCommandOutput,
} from "./commands/DeleteRobotApplicationCommand.ts";
import { DeleteRobotCommandInput, DeleteRobotCommandOutput } from "./commands/DeleteRobotCommand.ts";
import {
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput,
} from "./commands/DeleteSimulationApplicationCommand.ts";
import { DeregisterRobotCommandInput, DeregisterRobotCommandOutput } from "./commands/DeregisterRobotCommand.ts";
import {
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput,
} from "./commands/DescribeDeploymentJobCommand.ts";
import { DescribeFleetCommandInput, DescribeFleetCommandOutput } from "./commands/DescribeFleetCommand.ts";
import {
  DescribeRobotApplicationCommandInput,
  DescribeRobotApplicationCommandOutput,
} from "./commands/DescribeRobotApplicationCommand.ts";
import { DescribeRobotCommandInput, DescribeRobotCommandOutput } from "./commands/DescribeRobotCommand.ts";
import {
  DescribeSimulationApplicationCommandInput,
  DescribeSimulationApplicationCommandOutput,
} from "./commands/DescribeSimulationApplicationCommand.ts";
import {
  DescribeSimulationJobBatchCommandInput,
  DescribeSimulationJobBatchCommandOutput,
} from "./commands/DescribeSimulationJobBatchCommand.ts";
import {
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput,
} from "./commands/DescribeSimulationJobCommand.ts";
import {
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput,
} from "./commands/ListDeploymentJobsCommand.ts";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand.ts";
import {
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
} from "./commands/ListRobotApplicationsCommand.ts";
import { ListRobotsCommandInput, ListRobotsCommandOutput } from "./commands/ListRobotsCommand.ts";
import {
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "./commands/ListSimulationApplicationsCommand.ts";
import {
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
} from "./commands/ListSimulationJobBatchesCommand.ts";
import {
  ListSimulationJobsCommandInput,
  ListSimulationJobsCommandOutput,
} from "./commands/ListSimulationJobsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { RegisterRobotCommandInput, RegisterRobotCommandOutput } from "./commands/RegisterRobotCommand.ts";
import {
  RestartSimulationJobCommandInput,
  RestartSimulationJobCommandOutput,
} from "./commands/RestartSimulationJobCommand.ts";
import {
  StartSimulationJobBatchCommandInput,
  StartSimulationJobBatchCommandOutput,
} from "./commands/StartSimulationJobBatchCommand.ts";
import { SyncDeploymentJobCommandInput, SyncDeploymentJobCommandOutput } from "./commands/SyncDeploymentJobCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateRobotApplicationCommandInput,
  UpdateRobotApplicationCommandOutput,
} from "./commands/UpdateRobotApplicationCommand.ts";
import {
  UpdateSimulationApplicationCommandInput,
  UpdateSimulationApplicationCommandOutput,
} from "./commands/UpdateSimulationApplicationCommand.ts";
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
  | BatchDescribeSimulationJobCommandInput
  | CancelDeploymentJobCommandInput
  | CancelSimulationJobBatchCommandInput
  | CancelSimulationJobCommandInput
  | CreateDeploymentJobCommandInput
  | CreateFleetCommandInput
  | CreateRobotApplicationCommandInput
  | CreateRobotApplicationVersionCommandInput
  | CreateRobotCommandInput
  | CreateSimulationApplicationCommandInput
  | CreateSimulationApplicationVersionCommandInput
  | CreateSimulationJobCommandInput
  | DeleteFleetCommandInput
  | DeleteRobotApplicationCommandInput
  | DeleteRobotCommandInput
  | DeleteSimulationApplicationCommandInput
  | DeregisterRobotCommandInput
  | DescribeDeploymentJobCommandInput
  | DescribeFleetCommandInput
  | DescribeRobotApplicationCommandInput
  | DescribeRobotCommandInput
  | DescribeSimulationApplicationCommandInput
  | DescribeSimulationJobBatchCommandInput
  | DescribeSimulationJobCommandInput
  | ListDeploymentJobsCommandInput
  | ListFleetsCommandInput
  | ListRobotApplicationsCommandInput
  | ListRobotsCommandInput
  | ListSimulationApplicationsCommandInput
  | ListSimulationJobBatchesCommandInput
  | ListSimulationJobsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterRobotCommandInput
  | RestartSimulationJobCommandInput
  | StartSimulationJobBatchCommandInput
  | SyncDeploymentJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateRobotApplicationCommandInput
  | UpdateSimulationApplicationCommandInput;

export type ServiceOutputTypes =
  | BatchDescribeSimulationJobCommandOutput
  | CancelDeploymentJobCommandOutput
  | CancelSimulationJobBatchCommandOutput
  | CancelSimulationJobCommandOutput
  | CreateDeploymentJobCommandOutput
  | CreateFleetCommandOutput
  | CreateRobotApplicationCommandOutput
  | CreateRobotApplicationVersionCommandOutput
  | CreateRobotCommandOutput
  | CreateSimulationApplicationCommandOutput
  | CreateSimulationApplicationVersionCommandOutput
  | CreateSimulationJobCommandOutput
  | DeleteFleetCommandOutput
  | DeleteRobotApplicationCommandOutput
  | DeleteRobotCommandOutput
  | DeleteSimulationApplicationCommandOutput
  | DeregisterRobotCommandOutput
  | DescribeDeploymentJobCommandOutput
  | DescribeFleetCommandOutput
  | DescribeRobotApplicationCommandOutput
  | DescribeRobotCommandOutput
  | DescribeSimulationApplicationCommandOutput
  | DescribeSimulationJobBatchCommandOutput
  | DescribeSimulationJobCommandOutput
  | ListDeploymentJobsCommandOutput
  | ListFleetsCommandOutput
  | ListRobotApplicationsCommandOutput
  | ListRobotsCommandOutput
  | ListSimulationApplicationsCommandOutput
  | ListSimulationJobBatchesCommandOutput
  | ListSimulationJobsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterRobotCommandOutput
  | RestartSimulationJobCommandOutput
  | StartSimulationJobBatchCommandOutput
  | SyncDeploymentJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateRobotApplicationCommandOutput
  | UpdateSimulationApplicationCommandOutput;

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
   * The service name with which to sign requests.
   */
  signingName?: string;

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

export type RoboMakerClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type RoboMakerClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 */
export class RoboMakerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RoboMakerClientResolvedConfig
> {
  readonly config: RoboMakerClientResolvedConfig;

  constructor(configuration: RoboMakerClientConfig) {
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
