
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand.ts";
import {
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
} from "./commands/CreateComputeEnvironmentCommand.ts";
import { CreateJobQueueCommandInput, CreateJobQueueCommandOutput } from "./commands/CreateJobQueueCommand.ts";
import {
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput,
} from "./commands/DeleteComputeEnvironmentCommand.ts";
import { DeleteJobQueueCommandInput, DeleteJobQueueCommandOutput } from "./commands/DeleteJobQueueCommand.ts";
import {
  DeregisterJobDefinitionCommandInput,
  DeregisterJobDefinitionCommandOutput,
} from "./commands/DeregisterJobDefinitionCommand.ts";
import {
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
} from "./commands/DescribeComputeEnvironmentsCommand.ts";
import {
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "./commands/DescribeJobDefinitionsCommand.ts";
import { DescribeJobQueuesCommandInput, DescribeJobQueuesCommandOutput } from "./commands/DescribeJobQueuesCommand.ts";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "./commands/DescribeJobsCommand.ts";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand.ts";
import {
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
} from "./commands/RegisterJobDefinitionCommand.ts";
import { SubmitJobCommandInput, SubmitJobCommandOutput } from "./commands/SubmitJobCommand.ts";
import { TerminateJobCommandInput, TerminateJobCommandOutput } from "./commands/TerminateJobCommand.ts";
import {
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput,
} from "./commands/UpdateComputeEnvironmentCommand.ts";
import { UpdateJobQueueCommandInput, UpdateJobQueueCommandOutput } from "./commands/UpdateJobQueueCommand.ts";
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
  | CancelJobCommandInput
  | CreateComputeEnvironmentCommandInput
  | CreateJobQueueCommandInput
  | DeleteComputeEnvironmentCommandInput
  | DeleteJobQueueCommandInput
  | DeregisterJobDefinitionCommandInput
  | DescribeComputeEnvironmentsCommandInput
  | DescribeJobDefinitionsCommandInput
  | DescribeJobQueuesCommandInput
  | DescribeJobsCommandInput
  | ListJobsCommandInput
  | RegisterJobDefinitionCommandInput
  | SubmitJobCommandInput
  | TerminateJobCommandInput
  | UpdateComputeEnvironmentCommandInput
  | UpdateJobQueueCommandInput;

export type ServiceOutputTypes =
  | CancelJobCommandOutput
  | CreateComputeEnvironmentCommandOutput
  | CreateJobQueueCommandOutput
  | DeleteComputeEnvironmentCommandOutput
  | DeleteJobQueueCommandOutput
  | DeregisterJobDefinitionCommandOutput
  | DescribeComputeEnvironmentsCommandOutput
  | DescribeJobDefinitionsCommandOutput
  | DescribeJobQueuesCommandOutput
  | DescribeJobsCommandOutput
  | ListJobsCommandOutput
  | RegisterJobDefinitionCommandOutput
  | SubmitJobCommandOutput
  | TerminateJobCommandOutput
  | UpdateComputeEnvironmentCommandOutput
  | UpdateJobQueueCommandOutput;

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

export type BatchClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type BatchClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>AWS Batch enables you to run batch computing workloads on the AWS Cloud. Batch computing is a common way for
 *    developers, scientists, and engineers to access large amounts of compute resources, and AWS Batch removes the
 *    undifferentiated heavy lifting of configuring and managing the required infrastructure. AWS Batch will be familiar to
 *    users of traditional batch computing software. This service can efficiently provision resources in response to jobs
 *    submitted in order to eliminate capacity constraints, reduce compute costs, and deliver results quickly.</p>
 *          <p>As a fully managed service, AWS Batch enables developers, scientists, and engineers to run batch computing
 *    workloads of any scale. AWS Batch automatically provisions compute resources and optimizes the workload distribution
 *    based on the quantity and scale of the workloads. With AWS Batch, there is no need to install or manage batch computing
 *    software, which allows you to focus on analyzing results and solving problems. AWS Batch reduces operational
 *    complexities, saves time, and reduces costs, which makes it easy for developers, scientists, and engineers to run
 *    their batch jobs in the AWS Cloud.</p>
 */
export class BatchClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BatchClientResolvedConfig
> {
  readonly config: BatchClientResolvedConfig;

  constructor(configuration: BatchClientConfig) {
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
