import { AssignInstanceCommandInput, AssignInstanceCommandOutput } from "./commands/AssignInstanceCommand.ts";
import { AssignVolumeCommandInput, AssignVolumeCommandOutput } from "./commands/AssignVolumeCommand.ts";
import { AssociateElasticIpCommandInput, AssociateElasticIpCommandOutput } from "./commands/AssociateElasticIpCommand.ts";
import {
  AttachElasticLoadBalancerCommandInput,
  AttachElasticLoadBalancerCommandOutput,
} from "./commands/AttachElasticLoadBalancerCommand.ts";
import { CloneStackCommandInput, CloneStackCommandOutput } from "./commands/CloneStackCommand.ts";
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand.ts";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand.ts";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "./commands/CreateInstanceCommand.ts";
import { CreateLayerCommandInput, CreateLayerCommandOutput } from "./commands/CreateLayerCommand.ts";
import { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand.ts";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand.ts";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand.ts";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand.ts";
import { DeleteLayerCommandInput, DeleteLayerCommandOutput } from "./commands/DeleteLayerCommand.ts";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand.ts";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand.ts";
import {
  DeregisterEcsClusterCommandInput,
  DeregisterEcsClusterCommandOutput,
} from "./commands/DeregisterEcsClusterCommand.ts";
import {
  DeregisterElasticIpCommandInput,
  DeregisterElasticIpCommandOutput,
} from "./commands/DeregisterElasticIpCommand.ts";
import { DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput } from "./commands/DeregisterInstanceCommand.ts";
import {
  DeregisterRdsDbInstanceCommandInput,
  DeregisterRdsDbInstanceCommandOutput,
} from "./commands/DeregisterRdsDbInstanceCommand.ts";
import { DeregisterVolumeCommandInput, DeregisterVolumeCommandOutput } from "./commands/DeregisterVolumeCommand.ts";
import {
  DescribeAgentVersionsCommandInput,
  DescribeAgentVersionsCommandOutput,
} from "./commands/DescribeAgentVersionsCommand.ts";
import { DescribeAppsCommandInput, DescribeAppsCommandOutput } from "./commands/DescribeAppsCommand.ts";
import { DescribeCommandsCommandInput, DescribeCommandsCommandOutput } from "./commands/DescribeCommandsCommand.ts";
import {
  DescribeDeploymentsCommandInput,
  DescribeDeploymentsCommandOutput,
} from "./commands/DescribeDeploymentsCommand.ts";
import {
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
} from "./commands/DescribeEcsClustersCommand.ts";
import { DescribeElasticIpsCommandInput, DescribeElasticIpsCommandOutput } from "./commands/DescribeElasticIpsCommand.ts";
import {
  DescribeElasticLoadBalancersCommandInput,
  DescribeElasticLoadBalancersCommandOutput,
} from "./commands/DescribeElasticLoadBalancersCommand.ts";
import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "./commands/DescribeInstancesCommand.ts";
import { DescribeLayersCommandInput, DescribeLayersCommandOutput } from "./commands/DescribeLayersCommand.ts";
import {
  DescribeLoadBasedAutoScalingCommandInput,
  DescribeLoadBasedAutoScalingCommandOutput,
} from "./commands/DescribeLoadBasedAutoScalingCommand.ts";
import {
  DescribeMyUserProfileCommandInput,
  DescribeMyUserProfileCommandOutput,
} from "./commands/DescribeMyUserProfileCommand.ts";
import {
  DescribeOperatingSystemsCommandInput,
  DescribeOperatingSystemsCommandOutput,
} from "./commands/DescribeOperatingSystemsCommand.ts";
import {
  DescribePermissionsCommandInput,
  DescribePermissionsCommandOutput,
} from "./commands/DescribePermissionsCommand.ts";
import { DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput } from "./commands/DescribeRaidArraysCommand.ts";
import {
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
} from "./commands/DescribeRdsDbInstancesCommand.ts";
import {
  DescribeServiceErrorsCommandInput,
  DescribeServiceErrorsCommandOutput,
} from "./commands/DescribeServiceErrorsCommand.ts";
import {
  DescribeStackProvisioningParametersCommandInput,
  DescribeStackProvisioningParametersCommandOutput,
} from "./commands/DescribeStackProvisioningParametersCommand.ts";
import {
  DescribeStackSummaryCommandInput,
  DescribeStackSummaryCommandOutput,
} from "./commands/DescribeStackSummaryCommand.ts";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "./commands/DescribeStacksCommand.ts";
import {
  DescribeTimeBasedAutoScalingCommandInput,
  DescribeTimeBasedAutoScalingCommandOutput,
} from "./commands/DescribeTimeBasedAutoScalingCommand.ts";
import {
  DescribeUserProfilesCommandInput,
  DescribeUserProfilesCommandOutput,
} from "./commands/DescribeUserProfilesCommand.ts";
import { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "./commands/DescribeVolumesCommand.ts";
import {
  DetachElasticLoadBalancerCommandInput,
  DetachElasticLoadBalancerCommandOutput,
} from "./commands/DetachElasticLoadBalancerCommand.ts";
import {
  DisassociateElasticIpCommandInput,
  DisassociateElasticIpCommandOutput,
} from "./commands/DisassociateElasticIpCommand.ts";
import {
  GetHostnameSuggestionCommandInput,
  GetHostnameSuggestionCommandOutput,
} from "./commands/GetHostnameSuggestionCommand.ts";
import { GrantAccessCommandInput, GrantAccessCommandOutput } from "./commands/GrantAccessCommand.ts";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand.ts";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "./commands/RebootInstanceCommand.ts";
import { RegisterEcsClusterCommandInput, RegisterEcsClusterCommandOutput } from "./commands/RegisterEcsClusterCommand.ts";
import { RegisterElasticIpCommandInput, RegisterElasticIpCommandOutput } from "./commands/RegisterElasticIpCommand.ts";
import { RegisterInstanceCommandInput, RegisterInstanceCommandOutput } from "./commands/RegisterInstanceCommand.ts";
import {
  RegisterRdsDbInstanceCommandInput,
  RegisterRdsDbInstanceCommandOutput,
} from "./commands/RegisterRdsDbInstanceCommand.ts";
import { RegisterVolumeCommandInput, RegisterVolumeCommandOutput } from "./commands/RegisterVolumeCommand.ts";
import {
  SetLoadBasedAutoScalingCommandInput,
  SetLoadBasedAutoScalingCommandOutput,
} from "./commands/SetLoadBasedAutoScalingCommand.ts";
import { SetPermissionCommandInput, SetPermissionCommandOutput } from "./commands/SetPermissionCommand.ts";
import {
  SetTimeBasedAutoScalingCommandInput,
  SetTimeBasedAutoScalingCommandOutput,
} from "./commands/SetTimeBasedAutoScalingCommand.ts";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "./commands/StartInstanceCommand.ts";
import { StartStackCommandInput, StartStackCommandOutput } from "./commands/StartStackCommand.ts";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "./commands/StopInstanceCommand.ts";
import { StopStackCommandInput, StopStackCommandOutput } from "./commands/StopStackCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UnassignInstanceCommandInput, UnassignInstanceCommandOutput } from "./commands/UnassignInstanceCommand.ts";
import { UnassignVolumeCommandInput, UnassignVolumeCommandOutput } from "./commands/UnassignVolumeCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand.ts";
import { UpdateElasticIpCommandInput, UpdateElasticIpCommandOutput } from "./commands/UpdateElasticIpCommand.ts";
import { UpdateInstanceCommandInput, UpdateInstanceCommandOutput } from "./commands/UpdateInstanceCommand.ts";
import { UpdateLayerCommandInput, UpdateLayerCommandOutput } from "./commands/UpdateLayerCommand.ts";
import {
  UpdateMyUserProfileCommandInput,
  UpdateMyUserProfileCommandOutput,
} from "./commands/UpdateMyUserProfileCommand.ts";
import {
  UpdateRdsDbInstanceCommandInput,
  UpdateRdsDbInstanceCommandOutput,
} from "./commands/UpdateRdsDbInstanceCommand.ts";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand.ts";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand.ts";
import { UpdateVolumeCommandInput, UpdateVolumeCommandOutput } from "./commands/UpdateVolumeCommand.ts";
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
  | AssignInstanceCommandInput
  | AssignVolumeCommandInput
  | AssociateElasticIpCommandInput
  | AttachElasticLoadBalancerCommandInput
  | CloneStackCommandInput
  | CreateAppCommandInput
  | CreateDeploymentCommandInput
  | CreateInstanceCommandInput
  | CreateLayerCommandInput
  | CreateStackCommandInput
  | CreateUserProfileCommandInput
  | DeleteAppCommandInput
  | DeleteInstanceCommandInput
  | DeleteLayerCommandInput
  | DeleteStackCommandInput
  | DeleteUserProfileCommandInput
  | DeregisterEcsClusterCommandInput
  | DeregisterElasticIpCommandInput
  | DeregisterInstanceCommandInput
  | DeregisterRdsDbInstanceCommandInput
  | DeregisterVolumeCommandInput
  | DescribeAgentVersionsCommandInput
  | DescribeAppsCommandInput
  | DescribeCommandsCommandInput
  | DescribeDeploymentsCommandInput
  | DescribeEcsClustersCommandInput
  | DescribeElasticIpsCommandInput
  | DescribeElasticLoadBalancersCommandInput
  | DescribeInstancesCommandInput
  | DescribeLayersCommandInput
  | DescribeLoadBasedAutoScalingCommandInput
  | DescribeMyUserProfileCommandInput
  | DescribeOperatingSystemsCommandInput
  | DescribePermissionsCommandInput
  | DescribeRaidArraysCommandInput
  | DescribeRdsDbInstancesCommandInput
  | DescribeServiceErrorsCommandInput
  | DescribeStackProvisioningParametersCommandInput
  | DescribeStackSummaryCommandInput
  | DescribeStacksCommandInput
  | DescribeTimeBasedAutoScalingCommandInput
  | DescribeUserProfilesCommandInput
  | DescribeVolumesCommandInput
  | DetachElasticLoadBalancerCommandInput
  | DisassociateElasticIpCommandInput
  | GetHostnameSuggestionCommandInput
  | GrantAccessCommandInput
  | ListTagsCommandInput
  | RebootInstanceCommandInput
  | RegisterEcsClusterCommandInput
  | RegisterElasticIpCommandInput
  | RegisterInstanceCommandInput
  | RegisterRdsDbInstanceCommandInput
  | RegisterVolumeCommandInput
  | SetLoadBasedAutoScalingCommandInput
  | SetPermissionCommandInput
  | SetTimeBasedAutoScalingCommandInput
  | StartInstanceCommandInput
  | StartStackCommandInput
  | StopInstanceCommandInput
  | StopStackCommandInput
  | TagResourceCommandInput
  | UnassignInstanceCommandInput
  | UnassignVolumeCommandInput
  | UntagResourceCommandInput
  | UpdateAppCommandInput
  | UpdateElasticIpCommandInput
  | UpdateInstanceCommandInput
  | UpdateLayerCommandInput
  | UpdateMyUserProfileCommandInput
  | UpdateRdsDbInstanceCommandInput
  | UpdateStackCommandInput
  | UpdateUserProfileCommandInput
  | UpdateVolumeCommandInput;

export type ServiceOutputTypes =
  | AssignInstanceCommandOutput
  | AssignVolumeCommandOutput
  | AssociateElasticIpCommandOutput
  | AttachElasticLoadBalancerCommandOutput
  | CloneStackCommandOutput
  | CreateAppCommandOutput
  | CreateDeploymentCommandOutput
  | CreateInstanceCommandOutput
  | CreateLayerCommandOutput
  | CreateStackCommandOutput
  | CreateUserProfileCommandOutput
  | DeleteAppCommandOutput
  | DeleteInstanceCommandOutput
  | DeleteLayerCommandOutput
  | DeleteStackCommandOutput
  | DeleteUserProfileCommandOutput
  | DeregisterEcsClusterCommandOutput
  | DeregisterElasticIpCommandOutput
  | DeregisterInstanceCommandOutput
  | DeregisterRdsDbInstanceCommandOutput
  | DeregisterVolumeCommandOutput
  | DescribeAgentVersionsCommandOutput
  | DescribeAppsCommandOutput
  | DescribeCommandsCommandOutput
  | DescribeDeploymentsCommandOutput
  | DescribeEcsClustersCommandOutput
  | DescribeElasticIpsCommandOutput
  | DescribeElasticLoadBalancersCommandOutput
  | DescribeInstancesCommandOutput
  | DescribeLayersCommandOutput
  | DescribeLoadBasedAutoScalingCommandOutput
  | DescribeMyUserProfileCommandOutput
  | DescribeOperatingSystemsCommandOutput
  | DescribePermissionsCommandOutput
  | DescribeRaidArraysCommandOutput
  | DescribeRdsDbInstancesCommandOutput
  | DescribeServiceErrorsCommandOutput
  | DescribeStackProvisioningParametersCommandOutput
  | DescribeStackSummaryCommandOutput
  | DescribeStacksCommandOutput
  | DescribeTimeBasedAutoScalingCommandOutput
  | DescribeUserProfilesCommandOutput
  | DescribeVolumesCommandOutput
  | DetachElasticLoadBalancerCommandOutput
  | DisassociateElasticIpCommandOutput
  | GetHostnameSuggestionCommandOutput
  | GrantAccessCommandOutput
  | ListTagsCommandOutput
  | RebootInstanceCommandOutput
  | RegisterEcsClusterCommandOutput
  | RegisterElasticIpCommandOutput
  | RegisterInstanceCommandOutput
  | RegisterRdsDbInstanceCommandOutput
  | RegisterVolumeCommandOutput
  | SetLoadBasedAutoScalingCommandOutput
  | SetPermissionCommandOutput
  | SetTimeBasedAutoScalingCommandOutput
  | StartInstanceCommandOutput
  | StartStackCommandOutput
  | StopInstanceCommandOutput
  | StopStackCommandOutput
  | TagResourceCommandOutput
  | UnassignInstanceCommandOutput
  | UnassignVolumeCommandOutput
  | UntagResourceCommandOutput
  | UpdateAppCommandOutput
  | UpdateElasticIpCommandOutput
  | UpdateInstanceCommandOutput
  | UpdateLayerCommandOutput
  | UpdateMyUserProfileCommandOutput
  | UpdateRdsDbInstanceCommandOutput
  | UpdateStackCommandOutput
  | UpdateUserProfileCommandOutput
  | UpdateVolumeCommandOutput;

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

type OpsWorksClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of OpsWorksClient class constructor that set the region, credentials and other options.
 */
export interface OpsWorksClientConfig extends OpsWorksClientConfigType {}

type OpsWorksClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of OpsWorksClient class. This is resolved and normalized from the {@link OpsWorksClientConfig | constructor configuration interface}.
 */
export interface OpsWorksClientResolvedConfig extends OpsWorksClientResolvedConfigType {}

/**
 * <fullname>AWS OpsWorks</fullname>
 *          <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and
 *       usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error
 *       codes. </p>
 *          <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for
 *       overseeing the complete application lifecycle. For information about this product, go to the
 *         <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p>
 *
 *          <p>
 *             <b>SDKs and CLI</b>
 *          </p>
 *          <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for
 *           .NET</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS
 *           SDK for PHP 2</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for
 *           Python(Boto)</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks
 *           can only be accessed or managed within the endpoint in which they are created.</p>
 *          <ul>
 *             <li>
 *                <p>opsworks.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-east-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-3.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-central-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-south-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.sa-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Chef Versions</b>
 *          </p>
 *          <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you
 *       use the <code>ConfigurationManager</code> parameter to specify the Chef version.
 *       The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information,
 *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p>
 *          <note>
 *             <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p>
 *          </note>
 */
export class OpsWorksClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OpsWorksClientResolvedConfig
> {
  /**
   * The resolved configuration of OpsWorksClient class. This is resolved and normalized from the {@link OpsWorksClientConfig | constructor configuration interface}.
   */
  readonly config: OpsWorksClientResolvedConfig;

  constructor(configuration: OpsWorksClientConfig) {
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
