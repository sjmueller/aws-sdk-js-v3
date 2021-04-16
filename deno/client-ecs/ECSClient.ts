import {
  CreateCapacityProviderCommandInput,
  CreateCapacityProviderCommandOutput,
} from "./commands/CreateCapacityProviderCommand.ts";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand.ts";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand.ts";
import { CreateTaskSetCommandInput, CreateTaskSetCommandOutput } from "./commands/CreateTaskSetCommand.ts";
import {
  DeleteAccountSettingCommandInput,
  DeleteAccountSettingCommandOutput,
} from "./commands/DeleteAccountSettingCommand.ts";
import { DeleteAttributesCommandInput, DeleteAttributesCommandOutput } from "./commands/DeleteAttributesCommand.ts";
import {
  DeleteCapacityProviderCommandInput,
  DeleteCapacityProviderCommandOutput,
} from "./commands/DeleteCapacityProviderCommand.ts";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand.ts";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand.ts";
import { DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput } from "./commands/DeleteTaskSetCommand.ts";
import {
  DeregisterContainerInstanceCommandInput,
  DeregisterContainerInstanceCommandOutput,
} from "./commands/DeregisterContainerInstanceCommand.ts";
import {
  DeregisterTaskDefinitionCommandInput,
  DeregisterTaskDefinitionCommandOutput,
} from "./commands/DeregisterTaskDefinitionCommand.ts";
import {
  DescribeCapacityProvidersCommandInput,
  DescribeCapacityProvidersCommandOutput,
} from "./commands/DescribeCapacityProvidersCommand.ts";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand.ts";
import {
  DescribeContainerInstancesCommandInput,
  DescribeContainerInstancesCommandOutput,
} from "./commands/DescribeContainerInstancesCommand.ts";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "./commands/DescribeServicesCommand.ts";
import {
  DescribeTaskDefinitionCommandInput,
  DescribeTaskDefinitionCommandOutput,
} from "./commands/DescribeTaskDefinitionCommand.ts";
import { DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput } from "./commands/DescribeTaskSetsCommand.ts";
import { DescribeTasksCommandInput, DescribeTasksCommandOutput } from "./commands/DescribeTasksCommand.ts";
import {
  DiscoverPollEndpointCommandInput,
  DiscoverPollEndpointCommandOutput,
} from "./commands/DiscoverPollEndpointCommand.ts";
import { ExecuteCommandCommandInput, ExecuteCommandCommandOutput } from "./commands/ExecuteCommandCommand.ts";
import {
  ListAccountSettingsCommandInput,
  ListAccountSettingsCommandOutput,
} from "./commands/ListAccountSettingsCommand.ts";
import { ListAttributesCommandInput, ListAttributesCommandOutput } from "./commands/ListAttributesCommand.ts";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand.ts";
import {
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput,
} from "./commands/ListContainerInstancesCommand.ts";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput,
} from "./commands/ListTaskDefinitionFamiliesCommand.ts";
import {
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput,
} from "./commands/ListTaskDefinitionsCommand.ts";
import { ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand.ts";
import { PutAccountSettingCommandInput, PutAccountSettingCommandOutput } from "./commands/PutAccountSettingCommand.ts";
import {
  PutAccountSettingDefaultCommandInput,
  PutAccountSettingDefaultCommandOutput,
} from "./commands/PutAccountSettingDefaultCommand.ts";
import { PutAttributesCommandInput, PutAttributesCommandOutput } from "./commands/PutAttributesCommand.ts";
import {
  PutClusterCapacityProvidersCommandInput,
  PutClusterCapacityProvidersCommandOutput,
} from "./commands/PutClusterCapacityProvidersCommand.ts";
import {
  RegisterContainerInstanceCommandInput,
  RegisterContainerInstanceCommandOutput,
} from "./commands/RegisterContainerInstanceCommand.ts";
import {
  RegisterTaskDefinitionCommandInput,
  RegisterTaskDefinitionCommandOutput,
} from "./commands/RegisterTaskDefinitionCommand.ts";
import { RunTaskCommandInput, RunTaskCommandOutput } from "./commands/RunTaskCommand.ts";
import { StartTaskCommandInput, StartTaskCommandOutput } from "./commands/StartTaskCommand.ts";
import { StopTaskCommandInput, StopTaskCommandOutput } from "./commands/StopTaskCommand.ts";
import {
  SubmitAttachmentStateChangesCommandInput,
  SubmitAttachmentStateChangesCommandOutput,
} from "./commands/SubmitAttachmentStateChangesCommand.ts";
import {
  SubmitContainerStateChangeCommandInput,
  SubmitContainerStateChangeCommandOutput,
} from "./commands/SubmitContainerStateChangeCommand.ts";
import {
  SubmitTaskStateChangeCommandInput,
  SubmitTaskStateChangeCommandOutput,
} from "./commands/SubmitTaskStateChangeCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateCapacityProviderCommandInput,
  UpdateCapacityProviderCommandOutput,
} from "./commands/UpdateCapacityProviderCommand.ts";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand.ts";
import {
  UpdateClusterSettingsCommandInput,
  UpdateClusterSettingsCommandOutput,
} from "./commands/UpdateClusterSettingsCommand.ts";
import {
  UpdateContainerAgentCommandInput,
  UpdateContainerAgentCommandOutput,
} from "./commands/UpdateContainerAgentCommand.ts";
import {
  UpdateContainerInstancesStateCommandInput,
  UpdateContainerInstancesStateCommandOutput,
} from "./commands/UpdateContainerInstancesStateCommand.ts";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand.ts";
import {
  UpdateServicePrimaryTaskSetCommandInput,
  UpdateServicePrimaryTaskSetCommandOutput,
} from "./commands/UpdateServicePrimaryTaskSetCommand.ts";
import { UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput } from "./commands/UpdateTaskSetCommand.ts";
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
  | CreateCapacityProviderCommandInput
  | CreateClusterCommandInput
  | CreateServiceCommandInput
  | CreateTaskSetCommandInput
  | DeleteAccountSettingCommandInput
  | DeleteAttributesCommandInput
  | DeleteCapacityProviderCommandInput
  | DeleteClusterCommandInput
  | DeleteServiceCommandInput
  | DeleteTaskSetCommandInput
  | DeregisterContainerInstanceCommandInput
  | DeregisterTaskDefinitionCommandInput
  | DescribeCapacityProvidersCommandInput
  | DescribeClustersCommandInput
  | DescribeContainerInstancesCommandInput
  | DescribeServicesCommandInput
  | DescribeTaskDefinitionCommandInput
  | DescribeTaskSetsCommandInput
  | DescribeTasksCommandInput
  | DiscoverPollEndpointCommandInput
  | ExecuteCommandCommandInput
  | ListAccountSettingsCommandInput
  | ListAttributesCommandInput
  | ListClustersCommandInput
  | ListContainerInstancesCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | ListTaskDefinitionFamiliesCommandInput
  | ListTaskDefinitionsCommandInput
  | ListTasksCommandInput
  | PutAccountSettingCommandInput
  | PutAccountSettingDefaultCommandInput
  | PutAttributesCommandInput
  | PutClusterCapacityProvidersCommandInput
  | RegisterContainerInstanceCommandInput
  | RegisterTaskDefinitionCommandInput
  | RunTaskCommandInput
  | StartTaskCommandInput
  | StopTaskCommandInput
  | SubmitAttachmentStateChangesCommandInput
  | SubmitContainerStateChangeCommandInput
  | SubmitTaskStateChangeCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCapacityProviderCommandInput
  | UpdateClusterCommandInput
  | UpdateClusterSettingsCommandInput
  | UpdateContainerAgentCommandInput
  | UpdateContainerInstancesStateCommandInput
  | UpdateServiceCommandInput
  | UpdateServicePrimaryTaskSetCommandInput
  | UpdateTaskSetCommandInput;

export type ServiceOutputTypes =
  | CreateCapacityProviderCommandOutput
  | CreateClusterCommandOutput
  | CreateServiceCommandOutput
  | CreateTaskSetCommandOutput
  | DeleteAccountSettingCommandOutput
  | DeleteAttributesCommandOutput
  | DeleteCapacityProviderCommandOutput
  | DeleteClusterCommandOutput
  | DeleteServiceCommandOutput
  | DeleteTaskSetCommandOutput
  | DeregisterContainerInstanceCommandOutput
  | DeregisterTaskDefinitionCommandOutput
  | DescribeCapacityProvidersCommandOutput
  | DescribeClustersCommandOutput
  | DescribeContainerInstancesCommandOutput
  | DescribeServicesCommandOutput
  | DescribeTaskDefinitionCommandOutput
  | DescribeTaskSetsCommandOutput
  | DescribeTasksCommandOutput
  | DiscoverPollEndpointCommandOutput
  | ExecuteCommandCommandOutput
  | ListAccountSettingsCommandOutput
  | ListAttributesCommandOutput
  | ListClustersCommandOutput
  | ListContainerInstancesCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTaskDefinitionFamiliesCommandOutput
  | ListTaskDefinitionsCommandOutput
  | ListTasksCommandOutput
  | PutAccountSettingCommandOutput
  | PutAccountSettingDefaultCommandOutput
  | PutAttributesCommandOutput
  | PutClusterCapacityProvidersCommandOutput
  | RegisterContainerInstanceCommandOutput
  | RegisterTaskDefinitionCommandOutput
  | RunTaskCommandOutput
  | StartTaskCommandOutput
  | StopTaskCommandOutput
  | SubmitAttachmentStateChangesCommandOutput
  | SubmitContainerStateChangeCommandOutput
  | SubmitTaskStateChangeCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCapacityProviderCommandOutput
  | UpdateClusterCommandOutput
  | UpdateClusterSettingsCommandOutput
  | UpdateContainerAgentCommandOutput
  | UpdateContainerInstancesStateCommandOutput
  | UpdateServiceCommandOutput
  | UpdateServicePrimaryTaskSetCommandOutput
  | UpdateTaskSetCommandOutput;

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

export type ECSClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type ECSClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>Amazon Elastic Container Service</fullname>
 * 		       <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes
 * 			it easy to run, stop, and manage Docker containers on a cluster. You can host your
 * 			cluster on a serverless infrastructure that is managed by Amazon ECS by launching your
 * 			services or tasks on AWS Fargate. For more control, you can host your tasks on a cluster
 * 			of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage.</p>
 * 		       <p>Amazon ECS makes it easy to launch and stop container-based applications with simple API
 * 			calls, allows you to get the state of your cluster from a centralized service, and gives
 * 			you access to many familiar Amazon EC2 features.</p>
 * 		       <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on
 * 			your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates
 * 			the need for you to operate your own cluster management and configuration management
 * 			systems or worry about scaling your management infrastructure.</p>
 */
export class ECSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ECSClientResolvedConfig
> {
  readonly config: ECSClientResolvedConfig;

  constructor(configuration: ECSClientConfig) {
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
