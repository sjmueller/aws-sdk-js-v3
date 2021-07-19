import { AddInstanceFleetCommandInput, AddInstanceFleetCommandOutput } from "./commands/AddInstanceFleetCommand.ts";
import { AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput } from "./commands/AddInstanceGroupsCommand.ts";
import { AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput } from "./commands/AddJobFlowStepsCommand.ts";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand.ts";
import { CancelStepsCommandInput, CancelStepsCommandOutput } from "./commands/CancelStepsCommand.ts";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand.ts";
import { CreateStudioCommandInput, CreateStudioCommandOutput } from "./commands/CreateStudioCommand.ts";
import {
  CreateStudioSessionMappingCommandInput,
  CreateStudioSessionMappingCommandOutput,
} from "./commands/CreateStudioSessionMappingCommand.ts";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand.ts";
import { DeleteStudioCommandInput, DeleteStudioCommandOutput } from "./commands/DeleteStudioCommand.ts";
import {
  DeleteStudioSessionMappingCommandInput,
  DeleteStudioSessionMappingCommandOutput,
} from "./commands/DeleteStudioSessionMappingCommand.ts";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand.ts";
import { DescribeJobFlowsCommandInput, DescribeJobFlowsCommandOutput } from "./commands/DescribeJobFlowsCommand.ts";
import {
  DescribeNotebookExecutionCommandInput,
  DescribeNotebookExecutionCommandOutput,
} from "./commands/DescribeNotebookExecutionCommand.ts";
import {
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
} from "./commands/DescribeSecurityConfigurationCommand.ts";
import { DescribeStepCommandInput, DescribeStepCommandOutput } from "./commands/DescribeStepCommand.ts";
import { DescribeStudioCommandInput, DescribeStudioCommandOutput } from "./commands/DescribeStudioCommand.ts";
import {
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput,
} from "./commands/GetBlockPublicAccessConfigurationCommand.ts";
import {
  GetManagedScalingPolicyCommandInput,
  GetManagedScalingPolicyCommandOutput,
} from "./commands/GetManagedScalingPolicyCommand.ts";
import {
  GetStudioSessionMappingCommandInput,
  GetStudioSessionMappingCommandOutput,
} from "./commands/GetStudioSessionMappingCommand.ts";
import {
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
} from "./commands/ListBootstrapActionsCommand.ts";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand.ts";
import { ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput } from "./commands/ListInstanceFleetsCommand.ts";
import { ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput } from "./commands/ListInstanceGroupsCommand.ts";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand.ts";
import {
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
} from "./commands/ListNotebookExecutionsCommand.ts";
import {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "./commands/ListSecurityConfigurationsCommand.ts";
import { ListStepsCommandInput, ListStepsCommandOutput } from "./commands/ListStepsCommand.ts";
import {
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "./commands/ListStudioSessionMappingsCommand.ts";
import { ListStudiosCommandInput, ListStudiosCommandOutput } from "./commands/ListStudiosCommand.ts";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "./commands/ModifyClusterCommand.ts";
import {
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput,
} from "./commands/ModifyInstanceFleetCommand.ts";
import {
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput,
} from "./commands/ModifyInstanceGroupsCommand.ts";
import {
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput,
} from "./commands/PutAutoScalingPolicyCommand.ts";
import {
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput,
} from "./commands/PutBlockPublicAccessConfigurationCommand.ts";
import {
  PutManagedScalingPolicyCommandInput,
  PutManagedScalingPolicyCommandOutput,
} from "./commands/PutManagedScalingPolicyCommand.ts";
import {
  RemoveAutoScalingPolicyCommandInput,
  RemoveAutoScalingPolicyCommandOutput,
} from "./commands/RemoveAutoScalingPolicyCommand.ts";
import {
  RemoveManagedScalingPolicyCommandInput,
  RemoveManagedScalingPolicyCommandOutput,
} from "./commands/RemoveManagedScalingPolicyCommand.ts";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand.ts";
import { RunJobFlowCommandInput, RunJobFlowCommandOutput } from "./commands/RunJobFlowCommand.ts";
import {
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput,
} from "./commands/SetTerminationProtectionCommand.ts";
import {
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput,
} from "./commands/SetVisibleToAllUsersCommand.ts";
import {
  StartNotebookExecutionCommandInput,
  StartNotebookExecutionCommandOutput,
} from "./commands/StartNotebookExecutionCommand.ts";
import {
  StopNotebookExecutionCommandInput,
  StopNotebookExecutionCommandOutput,
} from "./commands/StopNotebookExecutionCommand.ts";
import { TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput } from "./commands/TerminateJobFlowsCommand.ts";
import { UpdateStudioCommandInput, UpdateStudioCommandOutput } from "./commands/UpdateStudioCommand.ts";
import {
  UpdateStudioSessionMappingCommandInput,
  UpdateStudioSessionMappingCommandOutput,
} from "./commands/UpdateStudioSessionMappingCommand.ts";
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
  | AddInstanceFleetCommandInput
  | AddInstanceGroupsCommandInput
  | AddJobFlowStepsCommandInput
  | AddTagsCommandInput
  | CancelStepsCommandInput
  | CreateSecurityConfigurationCommandInput
  | CreateStudioCommandInput
  | CreateStudioSessionMappingCommandInput
  | DeleteSecurityConfigurationCommandInput
  | DeleteStudioCommandInput
  | DeleteStudioSessionMappingCommandInput
  | DescribeClusterCommandInput
  | DescribeJobFlowsCommandInput
  | DescribeNotebookExecutionCommandInput
  | DescribeSecurityConfigurationCommandInput
  | DescribeStepCommandInput
  | DescribeStudioCommandInput
  | GetBlockPublicAccessConfigurationCommandInput
  | GetManagedScalingPolicyCommandInput
  | GetStudioSessionMappingCommandInput
  | ListBootstrapActionsCommandInput
  | ListClustersCommandInput
  | ListInstanceFleetsCommandInput
  | ListInstanceGroupsCommandInput
  | ListInstancesCommandInput
  | ListNotebookExecutionsCommandInput
  | ListSecurityConfigurationsCommandInput
  | ListStepsCommandInput
  | ListStudioSessionMappingsCommandInput
  | ListStudiosCommandInput
  | ModifyClusterCommandInput
  | ModifyInstanceFleetCommandInput
  | ModifyInstanceGroupsCommandInput
  | PutAutoScalingPolicyCommandInput
  | PutBlockPublicAccessConfigurationCommandInput
  | PutManagedScalingPolicyCommandInput
  | RemoveAutoScalingPolicyCommandInput
  | RemoveManagedScalingPolicyCommandInput
  | RemoveTagsCommandInput
  | RunJobFlowCommandInput
  | SetTerminationProtectionCommandInput
  | SetVisibleToAllUsersCommandInput
  | StartNotebookExecutionCommandInput
  | StopNotebookExecutionCommandInput
  | TerminateJobFlowsCommandInput
  | UpdateStudioCommandInput
  | UpdateStudioSessionMappingCommandInput;

export type ServiceOutputTypes =
  | AddInstanceFleetCommandOutput
  | AddInstanceGroupsCommandOutput
  | AddJobFlowStepsCommandOutput
  | AddTagsCommandOutput
  | CancelStepsCommandOutput
  | CreateSecurityConfigurationCommandOutput
  | CreateStudioCommandOutput
  | CreateStudioSessionMappingCommandOutput
  | DeleteSecurityConfigurationCommandOutput
  | DeleteStudioCommandOutput
  | DeleteStudioSessionMappingCommandOutput
  | DescribeClusterCommandOutput
  | DescribeJobFlowsCommandOutput
  | DescribeNotebookExecutionCommandOutput
  | DescribeSecurityConfigurationCommandOutput
  | DescribeStepCommandOutput
  | DescribeStudioCommandOutput
  | GetBlockPublicAccessConfigurationCommandOutput
  | GetManagedScalingPolicyCommandOutput
  | GetStudioSessionMappingCommandOutput
  | ListBootstrapActionsCommandOutput
  | ListClustersCommandOutput
  | ListInstanceFleetsCommandOutput
  | ListInstanceGroupsCommandOutput
  | ListInstancesCommandOutput
  | ListNotebookExecutionsCommandOutput
  | ListSecurityConfigurationsCommandOutput
  | ListStepsCommandOutput
  | ListStudioSessionMappingsCommandOutput
  | ListStudiosCommandOutput
  | ModifyClusterCommandOutput
  | ModifyInstanceFleetCommandOutput
  | ModifyInstanceGroupsCommandOutput
  | PutAutoScalingPolicyCommandOutput
  | PutBlockPublicAccessConfigurationCommandOutput
  | PutManagedScalingPolicyCommandOutput
  | RemoveAutoScalingPolicyCommandOutput
  | RemoveManagedScalingPolicyCommandOutput
  | RemoveTagsCommandOutput
  | RunJobFlowCommandOutput
  | SetTerminationProtectionCommandOutput
  | SetVisibleToAllUsersCommandOutput
  | StartNotebookExecutionCommandOutput
  | StopNotebookExecutionCommandOutput
  | TerminateJobFlowsCommandOutput
  | UpdateStudioCommandOutput
  | UpdateStudioSessionMappingCommandOutput;

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

type EMRClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of EMRClient class constructor that set the region, credentials and other options.
 */
export interface EMRClientConfig extends EMRClientConfigType {}

type EMRClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of EMRClient class. This is resolved and normalized from the {@link EMRClientConfig | constructor configuration interface}.
 */
export interface EMRClientResolvedConfig extends EMRClientResolvedConfigType {}

/**
 * <p>Amazon EMR is a web service that makes it easier to process large amounts of data
 *          efficiently. Amazon EMR uses Hadoop processing combined with several AWS services to do
 *          tasks such as web indexing, data mining, log file analysis, machine learning, scientific
 *          simulation, and data warehouse management.</p>
 */
export class EMRClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EMRClientResolvedConfig
> {
  /**
   * The resolved configuration of EMRClient class. This is resolved and normalized from the {@link EMRClientConfig | constructor configuration interface}.
   */
  readonly config: EMRClientResolvedConfig;

  constructor(configuration: EMRClientConfig) {
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
