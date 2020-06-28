import {
  AddInstanceFleetCommandInput,
  AddInstanceFleetCommandOutput
} from "./commands/AddInstanceFleetCommand.ts";
import {
  AddInstanceGroupsCommandInput,
  AddInstanceGroupsCommandOutput
} from "./commands/AddInstanceGroupsCommand.ts";
import {
  AddJobFlowStepsCommandInput,
  AddJobFlowStepsCommandOutput
} from "./commands/AddJobFlowStepsCommand.ts";
import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "./commands/AddTagsCommand.ts";
import {
  CancelStepsCommandInput,
  CancelStepsCommandOutput
} from "./commands/CancelStepsCommand.ts";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput
} from "./commands/CreateSecurityConfigurationCommand.ts";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput
} from "./commands/DeleteSecurityConfigurationCommand.ts";
import {
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "./commands/DescribeClusterCommand.ts";
import {
  DescribeJobFlowsCommandInput,
  DescribeJobFlowsCommandOutput
} from "./commands/DescribeJobFlowsCommand.ts";
import {
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput
} from "./commands/DescribeSecurityConfigurationCommand.ts";
import {
  DescribeStepCommandInput,
  DescribeStepCommandOutput
} from "./commands/DescribeStepCommand.ts";
import {
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput
} from "./commands/GetBlockPublicAccessConfigurationCommand.ts";
import {
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput
} from "./commands/ListBootstrapActionsCommand.ts";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "./commands/ListClustersCommand.ts";
import {
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput
} from "./commands/ListInstanceFleetsCommand.ts";
import {
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput
} from "./commands/ListInstanceGroupsCommand.ts";
import {
  ListInstancesCommandInput,
  ListInstancesCommandOutput
} from "./commands/ListInstancesCommand.ts";
import {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput
} from "./commands/ListSecurityConfigurationsCommand.ts";
import {
  ListStepsCommandInput,
  ListStepsCommandOutput
} from "./commands/ListStepsCommand.ts";
import {
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput
} from "./commands/ModifyClusterCommand.ts";
import {
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput
} from "./commands/ModifyInstanceFleetCommand.ts";
import {
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput
} from "./commands/ModifyInstanceGroupsCommand.ts";
import {
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput
} from "./commands/PutAutoScalingPolicyCommand.ts";
import {
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput
} from "./commands/PutBlockPublicAccessConfigurationCommand.ts";
import {
  RemoveAutoScalingPolicyCommandInput,
  RemoveAutoScalingPolicyCommandOutput
} from "./commands/RemoveAutoScalingPolicyCommand.ts";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "./commands/RemoveTagsCommand.ts";
import {
  RunJobFlowCommandInput,
  RunJobFlowCommandOutput
} from "./commands/RunJobFlowCommand.ts";
import {
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput
} from "./commands/SetTerminationProtectionCommand.ts";
import {
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput
} from "./commands/SetVisibleToAllUsersCommand.ts";
import {
  TerminateJobFlowsCommandInput,
  TerminateJobFlowsCommandOutput
} from "./commands/TerminateJobFlowsCommand.ts";
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
  | AddInstanceFleetCommandInput
  | AddInstanceGroupsCommandInput
  | AddJobFlowStepsCommandInput
  | AddTagsCommandInput
  | CancelStepsCommandInput
  | CreateSecurityConfigurationCommandInput
  | DeleteSecurityConfigurationCommandInput
  | DescribeClusterCommandInput
  | DescribeJobFlowsCommandInput
  | DescribeSecurityConfigurationCommandInput
  | DescribeStepCommandInput
  | GetBlockPublicAccessConfigurationCommandInput
  | ListBootstrapActionsCommandInput
  | ListClustersCommandInput
  | ListInstanceFleetsCommandInput
  | ListInstanceGroupsCommandInput
  | ListInstancesCommandInput
  | ListSecurityConfigurationsCommandInput
  | ListStepsCommandInput
  | ModifyClusterCommandInput
  | ModifyInstanceFleetCommandInput
  | ModifyInstanceGroupsCommandInput
  | PutAutoScalingPolicyCommandInput
  | PutBlockPublicAccessConfigurationCommandInput
  | RemoveAutoScalingPolicyCommandInput
  | RemoveTagsCommandInput
  | RunJobFlowCommandInput
  | SetTerminationProtectionCommandInput
  | SetVisibleToAllUsersCommandInput
  | TerminateJobFlowsCommandInput;

export type ServiceOutputTypes =
  | AddInstanceFleetCommandOutput
  | AddInstanceGroupsCommandOutput
  | AddJobFlowStepsCommandOutput
  | AddTagsCommandOutput
  | CancelStepsCommandOutput
  | CreateSecurityConfigurationCommandOutput
  | DeleteSecurityConfigurationCommandOutput
  | DescribeClusterCommandOutput
  | DescribeJobFlowsCommandOutput
  | DescribeSecurityConfigurationCommandOutput
  | DescribeStepCommandOutput
  | GetBlockPublicAccessConfigurationCommandOutput
  | ListBootstrapActionsCommandOutput
  | ListClustersCommandOutput
  | ListInstanceFleetsCommandOutput
  | ListInstanceGroupsCommandOutput
  | ListInstancesCommandOutput
  | ListSecurityConfigurationsCommandOutput
  | ListStepsCommandOutput
  | ModifyClusterCommandOutput
  | ModifyInstanceFleetCommandOutput
  | ModifyInstanceGroupsCommandOutput
  | PutAutoScalingPolicyCommandOutput
  | PutBlockPublicAccessConfigurationCommandOutput
  | RemoveAutoScalingPolicyCommandOutput
  | RemoveTagsCommandOutput
  | RunJobFlowCommandOutput
  | SetTerminationProtectionCommandOutput
  | SetVisibleToAllUsersCommandOutput
  | TerminateJobFlowsCommandOutput;

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

export type EMRClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type EMRClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Amazon EMR is a web service that makes it easy to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several AWS products to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehousing.</p>
 */
export class EMRClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EMRClientResolvedConfig
> {
  readonly config: EMRClientResolvedConfig;

  constructor(configuration: EMRClientConfig) {
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
