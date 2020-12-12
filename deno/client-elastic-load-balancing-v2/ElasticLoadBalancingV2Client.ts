import {
  AddListenerCertificatesCommandInput,
  AddListenerCertificatesCommandOutput,
} from "./commands/AddListenerCertificatesCommand.ts";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand.ts";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "./commands/CreateListenerCommand.ts";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "./commands/CreateLoadBalancerCommand.ts";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand.ts";
import { CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput } from "./commands/CreateTargetGroupCommand.ts";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "./commands/DeleteListenerCommand.ts";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "./commands/DeleteLoadBalancerCommand.ts";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand.ts";
import { DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput } from "./commands/DeleteTargetGroupCommand.ts";
import { DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput } from "./commands/DeregisterTargetsCommand.ts";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand.ts";
import {
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput,
} from "./commands/DescribeListenerCertificatesCommand.ts";
import { DescribeListenersCommandInput, DescribeListenersCommandOutput } from "./commands/DescribeListenersCommand.ts";
import {
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
} from "./commands/DescribeLoadBalancerAttributesCommand.ts";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "./commands/DescribeLoadBalancersCommand.ts";
import { DescribeRulesCommandInput, DescribeRulesCommandOutput } from "./commands/DescribeRulesCommand.ts";
import {
  DescribeSSLPoliciesCommandInput,
  DescribeSSLPoliciesCommandOutput,
} from "./commands/DescribeSSLPoliciesCommand.ts";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand.ts";
import {
  DescribeTargetGroupAttributesCommandInput,
  DescribeTargetGroupAttributesCommandOutput,
} from "./commands/DescribeTargetGroupAttributesCommand.ts";
import {
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput,
} from "./commands/DescribeTargetGroupsCommand.ts";
import {
  DescribeTargetHealthCommandInput,
  DescribeTargetHealthCommandOutput,
} from "./commands/DescribeTargetHealthCommand.ts";
import { ModifyListenerCommandInput, ModifyListenerCommandOutput } from "./commands/ModifyListenerCommand.ts";
import {
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
} from "./commands/ModifyLoadBalancerAttributesCommand.ts";
import { ModifyRuleCommandInput, ModifyRuleCommandOutput } from "./commands/ModifyRuleCommand.ts";
import {
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput,
} from "./commands/ModifyTargetGroupAttributesCommand.ts";
import { ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput } from "./commands/ModifyTargetGroupCommand.ts";
import { RegisterTargetsCommandInput, RegisterTargetsCommandOutput } from "./commands/RegisterTargetsCommand.ts";
import {
  RemoveListenerCertificatesCommandInput,
  RemoveListenerCertificatesCommandOutput,
} from "./commands/RemoveListenerCertificatesCommand.ts";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand.ts";
import { SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput } from "./commands/SetIpAddressTypeCommand.ts";
import { SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput } from "./commands/SetRulePrioritiesCommand.ts";
import { SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput } from "./commands/SetSecurityGroupsCommand.ts";
import { SetSubnetsCommandInput, SetSubnetsCommandOutput } from "./commands/SetSubnetsCommand.ts";
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
  | AddListenerCertificatesCommandInput
  | AddTagsCommandInput
  | CreateListenerCommandInput
  | CreateLoadBalancerCommandInput
  | CreateRuleCommandInput
  | CreateTargetGroupCommandInput
  | DeleteListenerCommandInput
  | DeleteLoadBalancerCommandInput
  | DeleteRuleCommandInput
  | DeleteTargetGroupCommandInput
  | DeregisterTargetsCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeListenerCertificatesCommandInput
  | DescribeListenersCommandInput
  | DescribeLoadBalancerAttributesCommandInput
  | DescribeLoadBalancersCommandInput
  | DescribeRulesCommandInput
  | DescribeSSLPoliciesCommandInput
  | DescribeTagsCommandInput
  | DescribeTargetGroupAttributesCommandInput
  | DescribeTargetGroupsCommandInput
  | DescribeTargetHealthCommandInput
  | ModifyListenerCommandInput
  | ModifyLoadBalancerAttributesCommandInput
  | ModifyRuleCommandInput
  | ModifyTargetGroupAttributesCommandInput
  | ModifyTargetGroupCommandInput
  | RegisterTargetsCommandInput
  | RemoveListenerCertificatesCommandInput
  | RemoveTagsCommandInput
  | SetIpAddressTypeCommandInput
  | SetRulePrioritiesCommandInput
  | SetSecurityGroupsCommandInput
  | SetSubnetsCommandInput;

export type ServiceOutputTypes =
  | AddListenerCertificatesCommandOutput
  | AddTagsCommandOutput
  | CreateListenerCommandOutput
  | CreateLoadBalancerCommandOutput
  | CreateRuleCommandOutput
  | CreateTargetGroupCommandOutput
  | DeleteListenerCommandOutput
  | DeleteLoadBalancerCommandOutput
  | DeleteRuleCommandOutput
  | DeleteTargetGroupCommandOutput
  | DeregisterTargetsCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeListenerCertificatesCommandOutput
  | DescribeListenersCommandOutput
  | DescribeLoadBalancerAttributesCommandOutput
  | DescribeLoadBalancersCommandOutput
  | DescribeRulesCommandOutput
  | DescribeSSLPoliciesCommandOutput
  | DescribeTagsCommandOutput
  | DescribeTargetGroupAttributesCommandOutput
  | DescribeTargetGroupsCommandOutput
  | DescribeTargetHealthCommandOutput
  | ModifyListenerCommandOutput
  | ModifyLoadBalancerAttributesCommandOutput
  | ModifyRuleCommandOutput
  | ModifyTargetGroupAttributesCommandOutput
  | ModifyTargetGroupCommandOutput
  | RegisterTargetsCommandOutput
  | RemoveListenerCertificatesCommandOutput
  | RemoveTagsCommandOutput
  | SetIpAddressTypeCommandOutput
  | SetRulePrioritiesCommandOutput
  | SetSecurityGroupsCommandOutput
  | SetSubnetsCommandOutput;

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
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

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

export type ElasticLoadBalancingV2ClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ElasticLoadBalancingV2ClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *          <p>A load balancer distributes incoming traffic across targets, such as your EC2
 *       instances. This enables you to increase the availability of your application. The load
 *       balancer also monitors the health of its registered targets and ensures that it routes traffic
 *       only to healthy targets. You configure your load balancer to accept incoming traffic by
 *       specifying one or more listeners, which are configured with a protocol and port number for
 *       connections from clients to the load balancer. You configure a target group with a protocol
 *       and port number for connections from the load balancer to the targets, and with health check
 *       settings to be used when checking the health status of the targets.</p>
 *
 *          <p>Elastic Load Balancing supports the following types of load balancers: Application Load
 *       Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers.
 *       This reference covers the following load balancer types:</p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.</p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>All Elastic Load Balancing operations are idempotent, which means that they complete at
 *       most one time. If you repeat an operation, it succeeds.</p>
 */
export class ElasticLoadBalancingV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  readonly config: ElasticLoadBalancingV2ClientResolvedConfig;

  constructor(configuration: ElasticLoadBalancingV2ClientConfig) {
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
