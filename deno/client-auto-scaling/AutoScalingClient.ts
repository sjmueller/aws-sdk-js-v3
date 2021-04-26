import { AttachInstancesCommandInput, AttachInstancesCommandOutput } from "./commands/AttachInstancesCommand.ts";
import {
  AttachLoadBalancerTargetGroupsCommandInput,
  AttachLoadBalancerTargetGroupsCommandOutput,
} from "./commands/AttachLoadBalancerTargetGroupsCommand.ts";
import {
  AttachLoadBalancersCommandInput,
  AttachLoadBalancersCommandOutput,
} from "./commands/AttachLoadBalancersCommand.ts";
import {
  BatchDeleteScheduledActionCommandInput,
  BatchDeleteScheduledActionCommandOutput,
} from "./commands/BatchDeleteScheduledActionCommand.ts";
import {
  BatchPutScheduledUpdateGroupActionCommandInput,
  BatchPutScheduledUpdateGroupActionCommandOutput,
} from "./commands/BatchPutScheduledUpdateGroupActionCommand.ts";
import {
  CancelInstanceRefreshCommandInput,
  CancelInstanceRefreshCommandOutput,
} from "./commands/CancelInstanceRefreshCommand.ts";
import {
  CompleteLifecycleActionCommandInput,
  CompleteLifecycleActionCommandOutput,
} from "./commands/CompleteLifecycleActionCommand.ts";
import {
  CreateAutoScalingGroupCommandInput,
  CreateAutoScalingGroupCommandOutput,
} from "./commands/CreateAutoScalingGroupCommand.ts";
import {
  CreateLaunchConfigurationCommandInput,
  CreateLaunchConfigurationCommandOutput,
} from "./commands/CreateLaunchConfigurationCommand.ts";
import { CreateOrUpdateTagsCommandInput, CreateOrUpdateTagsCommandOutput } from "./commands/CreateOrUpdateTagsCommand.ts";
import {
  DeleteAutoScalingGroupCommandInput,
  DeleteAutoScalingGroupCommandOutput,
} from "./commands/DeleteAutoScalingGroupCommand.ts";
import {
  DeleteLaunchConfigurationCommandInput,
  DeleteLaunchConfigurationCommandOutput,
} from "./commands/DeleteLaunchConfigurationCommand.ts";
import {
  DeleteLifecycleHookCommandInput,
  DeleteLifecycleHookCommandOutput,
} from "./commands/DeleteLifecycleHookCommand.ts";
import {
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "./commands/DeleteNotificationConfigurationCommand.ts";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand.ts";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand.ts";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand.ts";
import { DeleteWarmPoolCommandInput, DeleteWarmPoolCommandOutput } from "./commands/DeleteWarmPoolCommand.ts";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand.ts";
import {
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput,
} from "./commands/DescribeAdjustmentTypesCommand.ts";
import {
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput,
} from "./commands/DescribeAutoScalingGroupsCommand.ts";
import {
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput,
} from "./commands/DescribeAutoScalingInstancesCommand.ts";
import {
  DescribeAutoScalingNotificationTypesCommandInput,
  DescribeAutoScalingNotificationTypesCommandOutput,
} from "./commands/DescribeAutoScalingNotificationTypesCommand.ts";
import {
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput,
} from "./commands/DescribeInstanceRefreshesCommand.ts";
import {
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput,
} from "./commands/DescribeLaunchConfigurationsCommand.ts";
import {
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput,
} from "./commands/DescribeLifecycleHookTypesCommand.ts";
import {
  DescribeLifecycleHooksCommandInput,
  DescribeLifecycleHooksCommandOutput,
} from "./commands/DescribeLifecycleHooksCommand.ts";
import {
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput,
} from "./commands/DescribeLoadBalancerTargetGroupsCommand.ts";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "./commands/DescribeLoadBalancersCommand.ts";
import {
  DescribeMetricCollectionTypesCommandInput,
  DescribeMetricCollectionTypesCommandOutput,
} from "./commands/DescribeMetricCollectionTypesCommand.ts";
import {
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
} from "./commands/DescribeNotificationConfigurationsCommand.ts";
import { DescribePoliciesCommandInput, DescribePoliciesCommandOutput } from "./commands/DescribePoliciesCommand.ts";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "./commands/DescribeScalingActivitiesCommand.ts";
import {
  DescribeScalingProcessTypesCommandInput,
  DescribeScalingProcessTypesCommandOutput,
} from "./commands/DescribeScalingProcessTypesCommand.ts";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand.ts";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand.ts";
import {
  DescribeTerminationPolicyTypesCommandInput,
  DescribeTerminationPolicyTypesCommandOutput,
} from "./commands/DescribeTerminationPolicyTypesCommand.ts";
import { DescribeWarmPoolCommandInput, DescribeWarmPoolCommandOutput } from "./commands/DescribeWarmPoolCommand.ts";
import { DetachInstancesCommandInput, DetachInstancesCommandOutput } from "./commands/DetachInstancesCommand.ts";
import {
  DetachLoadBalancerTargetGroupsCommandInput,
  DetachLoadBalancerTargetGroupsCommandOutput,
} from "./commands/DetachLoadBalancerTargetGroupsCommand.ts";
import {
  DetachLoadBalancersCommandInput,
  DetachLoadBalancersCommandOutput,
} from "./commands/DetachLoadBalancersCommand.ts";
import {
  DisableMetricsCollectionCommandInput,
  DisableMetricsCollectionCommandOutput,
} from "./commands/DisableMetricsCollectionCommand.ts";
import {
  EnableMetricsCollectionCommandInput,
  EnableMetricsCollectionCommandOutput,
} from "./commands/EnableMetricsCollectionCommand.ts";
import { EnterStandbyCommandInput, EnterStandbyCommandOutput } from "./commands/EnterStandbyCommand.ts";
import { ExecutePolicyCommandInput, ExecutePolicyCommandOutput } from "./commands/ExecutePolicyCommand.ts";
import { ExitStandbyCommandInput, ExitStandbyCommandOutput } from "./commands/ExitStandbyCommand.ts";
import { PutLifecycleHookCommandInput, PutLifecycleHookCommandOutput } from "./commands/PutLifecycleHookCommand.ts";
import {
  PutNotificationConfigurationCommandInput,
  PutNotificationConfigurationCommandOutput,
} from "./commands/PutNotificationConfigurationCommand.ts";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "./commands/PutScalingPolicyCommand.ts";
import {
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
} from "./commands/PutScheduledUpdateGroupActionCommand.ts";
import { PutWarmPoolCommandInput, PutWarmPoolCommandOutput } from "./commands/PutWarmPoolCommand.ts";
import {
  RecordLifecycleActionHeartbeatCommandInput,
  RecordLifecycleActionHeartbeatCommandOutput,
} from "./commands/RecordLifecycleActionHeartbeatCommand.ts";
import { ResumeProcessesCommandInput, ResumeProcessesCommandOutput } from "./commands/ResumeProcessesCommand.ts";
import { SetDesiredCapacityCommandInput, SetDesiredCapacityCommandOutput } from "./commands/SetDesiredCapacityCommand.ts";
import { SetInstanceHealthCommandInput, SetInstanceHealthCommandOutput } from "./commands/SetInstanceHealthCommand.ts";
import {
  SetInstanceProtectionCommandInput,
  SetInstanceProtectionCommandOutput,
} from "./commands/SetInstanceProtectionCommand.ts";
import {
  StartInstanceRefreshCommandInput,
  StartInstanceRefreshCommandOutput,
} from "./commands/StartInstanceRefreshCommand.ts";
import { SuspendProcessesCommandInput, SuspendProcessesCommandOutput } from "./commands/SuspendProcessesCommand.ts";
import {
  TerminateInstanceInAutoScalingGroupCommandInput,
  TerminateInstanceInAutoScalingGroupCommandOutput,
} from "./commands/TerminateInstanceInAutoScalingGroupCommand.ts";
import {
  UpdateAutoScalingGroupCommandInput,
  UpdateAutoScalingGroupCommandOutput,
} from "./commands/UpdateAutoScalingGroupCommand.ts";
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
  | AttachInstancesCommandInput
  | AttachLoadBalancerTargetGroupsCommandInput
  | AttachLoadBalancersCommandInput
  | BatchDeleteScheduledActionCommandInput
  | BatchPutScheduledUpdateGroupActionCommandInput
  | CancelInstanceRefreshCommandInput
  | CompleteLifecycleActionCommandInput
  | CreateAutoScalingGroupCommandInput
  | CreateLaunchConfigurationCommandInput
  | CreateOrUpdateTagsCommandInput
  | DeleteAutoScalingGroupCommandInput
  | DeleteLaunchConfigurationCommandInput
  | DeleteLifecycleHookCommandInput
  | DeleteNotificationConfigurationCommandInput
  | DeletePolicyCommandInput
  | DeleteScheduledActionCommandInput
  | DeleteTagsCommandInput
  | DeleteWarmPoolCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeAdjustmentTypesCommandInput
  | DescribeAutoScalingGroupsCommandInput
  | DescribeAutoScalingInstancesCommandInput
  | DescribeAutoScalingNotificationTypesCommandInput
  | DescribeInstanceRefreshesCommandInput
  | DescribeLaunchConfigurationsCommandInput
  | DescribeLifecycleHookTypesCommandInput
  | DescribeLifecycleHooksCommandInput
  | DescribeLoadBalancerTargetGroupsCommandInput
  | DescribeLoadBalancersCommandInput
  | DescribeMetricCollectionTypesCommandInput
  | DescribeNotificationConfigurationsCommandInput
  | DescribePoliciesCommandInput
  | DescribeScalingActivitiesCommandInput
  | DescribeScalingProcessTypesCommandInput
  | DescribeScheduledActionsCommandInput
  | DescribeTagsCommandInput
  | DescribeTerminationPolicyTypesCommandInput
  | DescribeWarmPoolCommandInput
  | DetachInstancesCommandInput
  | DetachLoadBalancerTargetGroupsCommandInput
  | DetachLoadBalancersCommandInput
  | DisableMetricsCollectionCommandInput
  | EnableMetricsCollectionCommandInput
  | EnterStandbyCommandInput
  | ExecutePolicyCommandInput
  | ExitStandbyCommandInput
  | PutLifecycleHookCommandInput
  | PutNotificationConfigurationCommandInput
  | PutScalingPolicyCommandInput
  | PutScheduledUpdateGroupActionCommandInput
  | PutWarmPoolCommandInput
  | RecordLifecycleActionHeartbeatCommandInput
  | ResumeProcessesCommandInput
  | SetDesiredCapacityCommandInput
  | SetInstanceHealthCommandInput
  | SetInstanceProtectionCommandInput
  | StartInstanceRefreshCommandInput
  | SuspendProcessesCommandInput
  | TerminateInstanceInAutoScalingGroupCommandInput
  | UpdateAutoScalingGroupCommandInput;

export type ServiceOutputTypes =
  | AttachInstancesCommandOutput
  | AttachLoadBalancerTargetGroupsCommandOutput
  | AttachLoadBalancersCommandOutput
  | BatchDeleteScheduledActionCommandOutput
  | BatchPutScheduledUpdateGroupActionCommandOutput
  | CancelInstanceRefreshCommandOutput
  | CompleteLifecycleActionCommandOutput
  | CreateAutoScalingGroupCommandOutput
  | CreateLaunchConfigurationCommandOutput
  | CreateOrUpdateTagsCommandOutput
  | DeleteAutoScalingGroupCommandOutput
  | DeleteLaunchConfigurationCommandOutput
  | DeleteLifecycleHookCommandOutput
  | DeleteNotificationConfigurationCommandOutput
  | DeletePolicyCommandOutput
  | DeleteScheduledActionCommandOutput
  | DeleteTagsCommandOutput
  | DeleteWarmPoolCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeAdjustmentTypesCommandOutput
  | DescribeAutoScalingGroupsCommandOutput
  | DescribeAutoScalingInstancesCommandOutput
  | DescribeAutoScalingNotificationTypesCommandOutput
  | DescribeInstanceRefreshesCommandOutput
  | DescribeLaunchConfigurationsCommandOutput
  | DescribeLifecycleHookTypesCommandOutput
  | DescribeLifecycleHooksCommandOutput
  | DescribeLoadBalancerTargetGroupsCommandOutput
  | DescribeLoadBalancersCommandOutput
  | DescribeMetricCollectionTypesCommandOutput
  | DescribeNotificationConfigurationsCommandOutput
  | DescribePoliciesCommandOutput
  | DescribeScalingActivitiesCommandOutput
  | DescribeScalingProcessTypesCommandOutput
  | DescribeScheduledActionsCommandOutput
  | DescribeTagsCommandOutput
  | DescribeTerminationPolicyTypesCommandOutput
  | DescribeWarmPoolCommandOutput
  | DetachInstancesCommandOutput
  | DetachLoadBalancerTargetGroupsCommandOutput
  | DetachLoadBalancersCommandOutput
  | DisableMetricsCollectionCommandOutput
  | EnableMetricsCollectionCommandOutput
  | EnterStandbyCommandOutput
  | ExecutePolicyCommandOutput
  | ExitStandbyCommandOutput
  | PutLifecycleHookCommandOutput
  | PutNotificationConfigurationCommandOutput
  | PutScalingPolicyCommandOutput
  | PutScheduledUpdateGroupActionCommandOutput
  | PutWarmPoolCommandOutput
  | RecordLifecycleActionHeartbeatCommandOutput
  | ResumeProcessesCommandOutput
  | SetDesiredCapacityCommandOutput
  | SetInstanceHealthCommandOutput
  | SetInstanceProtectionCommandOutput
  | StartInstanceRefreshCommandOutput
  | SuspendProcessesCommandOutput
  | TerminateInstanceInAutoScalingGroupCommandOutput
  | UpdateAutoScalingGroupCommandOutput;

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

type AutoScalingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of AutoScalingClient class constructor that set the region, credentials and other options.
 */
export interface AutoScalingClientConfig extends AutoScalingClientConfigType {}

type AutoScalingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of AutoScalingClient class. This is resolved and normalized from the {@link AutoScalingClientConfig | constructor configuration interface}.
 */
export interface AutoScalingClientResolvedConfig extends AutoScalingClientResolvedConfigType {}

/**
 * <fullname>Amazon EC2 Auto Scaling</fullname>
 *
 *         <p>Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances based on
 *             user-defined scaling policies, scheduled actions, and health checks. Use this service
 *             with AWS Auto Scaling, Amazon CloudWatch, and Elastic Load Balancing.</p>
 *         <p>For more information, including information about granting IAM users required
 *             permissions for Amazon EC2 Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a>.</p>
 */
export class AutoScalingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AutoScalingClientResolvedConfig
> {
  /**
   * The resolved configuration of AutoScalingClient class. This is resolved and normalized from the {@link AutoScalingClientConfig | constructor configuration interface}.
   */
  readonly config: AutoScalingClientResolvedConfig;

  constructor(configuration: AutoScalingClientConfig) {
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
