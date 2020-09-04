import {
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
} from "./commands/AssociateVPCWithHostedZoneCommand.ts";
import {
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
} from "./commands/ChangeResourceRecordSetsCommand.ts";
import {
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
} from "./commands/ChangeTagsForResourceCommand.ts";
import { CreateHealthCheckCommandInput, CreateHealthCheckCommandOutput } from "./commands/CreateHealthCheckCommand.ts";
import { CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput } from "./commands/CreateHostedZoneCommand.ts";
import {
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
} from "./commands/CreateQueryLoggingConfigCommand.ts";
import {
  CreateReusableDelegationSetCommandInput,
  CreateReusableDelegationSetCommandOutput,
} from "./commands/CreateReusableDelegationSetCommand.ts";
import {
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "./commands/CreateTrafficPolicyCommand.ts";
import {
  CreateTrafficPolicyInstanceCommandInput,
  CreateTrafficPolicyInstanceCommandOutput,
} from "./commands/CreateTrafficPolicyInstanceCommand.ts";
import {
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
} from "./commands/CreateTrafficPolicyVersionCommand.ts";
import {
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
} from "./commands/CreateVPCAssociationAuthorizationCommand.ts";
import { DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput } from "./commands/DeleteHealthCheckCommand.ts";
import { DeleteHostedZoneCommandInput, DeleteHostedZoneCommandOutput } from "./commands/DeleteHostedZoneCommand.ts";
import {
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
} from "./commands/DeleteQueryLoggingConfigCommand.ts";
import {
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
} from "./commands/DeleteReusableDelegationSetCommand.ts";
import {
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "./commands/DeleteTrafficPolicyCommand.ts";
import {
  DeleteTrafficPolicyInstanceCommandInput,
  DeleteTrafficPolicyInstanceCommandOutput,
} from "./commands/DeleteTrafficPolicyInstanceCommand.ts";
import {
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
} from "./commands/DeleteVPCAssociationAuthorizationCommand.ts";
import {
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
} from "./commands/DisassociateVPCFromHostedZoneCommand.ts";
import { GetAccountLimitCommandInput, GetAccountLimitCommandOutput } from "./commands/GetAccountLimitCommand.ts";
import { GetChangeCommandInput, GetChangeCommandOutput } from "./commands/GetChangeCommand.ts";
import {
  GetCheckerIpRangesCommandInput,
  GetCheckerIpRangesCommandOutput,
} from "./commands/GetCheckerIpRangesCommand.ts";
import { GetGeoLocationCommandInput, GetGeoLocationCommandOutput } from "./commands/GetGeoLocationCommand.ts";
import { GetHealthCheckCommandInput, GetHealthCheckCommandOutput } from "./commands/GetHealthCheckCommand.ts";
import {
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
} from "./commands/GetHealthCheckCountCommand.ts";
import {
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
} from "./commands/GetHealthCheckLastFailureReasonCommand.ts";
import {
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
} from "./commands/GetHealthCheckStatusCommand.ts";
import { GetHostedZoneCommandInput, GetHostedZoneCommandOutput } from "./commands/GetHostedZoneCommand.ts";
import {
  GetHostedZoneCountCommandInput,
  GetHostedZoneCountCommandOutput,
} from "./commands/GetHostedZoneCountCommand.ts";
import {
  GetHostedZoneLimitCommandInput,
  GetHostedZoneLimitCommandOutput,
} from "./commands/GetHostedZoneLimitCommand.ts";
import {
  GetQueryLoggingConfigCommandInput,
  GetQueryLoggingConfigCommandOutput,
} from "./commands/GetQueryLoggingConfigCommand.ts";
import {
  GetReusableDelegationSetCommandInput,
  GetReusableDelegationSetCommandOutput,
} from "./commands/GetReusableDelegationSetCommand.ts";
import {
  GetReusableDelegationSetLimitCommandInput,
  GetReusableDelegationSetLimitCommandOutput,
} from "./commands/GetReusableDelegationSetLimitCommand.ts";
import { GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput } from "./commands/GetTrafficPolicyCommand.ts";
import {
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCommand.ts";
import {
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCountCommand.ts";
import { ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput } from "./commands/ListGeoLocationsCommand.ts";
import { ListHealthChecksCommandInput, ListHealthChecksCommandOutput } from "./commands/ListHealthChecksCommand.ts";
import {
  ListHostedZonesByNameCommandInput,
  ListHostedZonesByNameCommandOutput,
} from "./commands/ListHostedZonesByNameCommand.ts";
import {
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
} from "./commands/ListHostedZonesByVPCCommand.ts";
import { ListHostedZonesCommandInput, ListHostedZonesCommandOutput } from "./commands/ListHostedZonesCommand.ts";
import {
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "./commands/ListQueryLoggingConfigsCommand.ts";
import {
  ListResourceRecordSetsCommandInput,
  ListResourceRecordSetsCommandOutput,
} from "./commands/ListResourceRecordSetsCommand.ts";
import {
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
} from "./commands/ListReusableDelegationSetsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "./commands/ListTagsForResourcesCommand.ts";
import {
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "./commands/ListTrafficPoliciesCommand.ts";
import {
  ListTrafficPolicyInstancesByHostedZoneCommandInput,
  ListTrafficPolicyInstancesByHostedZoneCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand.ts";
import {
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByPolicyCommand.ts";
import {
  ListTrafficPolicyInstancesCommandInput,
  ListTrafficPolicyInstancesCommandOutput,
} from "./commands/ListTrafficPolicyInstancesCommand.ts";
import {
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
} from "./commands/ListTrafficPolicyVersionsCommand.ts";
import {
  ListVPCAssociationAuthorizationsCommandInput,
  ListVPCAssociationAuthorizationsCommandOutput,
} from "./commands/ListVPCAssociationAuthorizationsCommand.ts";
import { TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput } from "./commands/TestDNSAnswerCommand.ts";
import { UpdateHealthCheckCommandInput, UpdateHealthCheckCommandOutput } from "./commands/UpdateHealthCheckCommand.ts";
import {
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
} from "./commands/UpdateHostedZoneCommentCommand.ts";
import {
  UpdateTrafficPolicyCommentCommandInput,
  UpdateTrafficPolicyCommentCommandOutput,
} from "./commands/UpdateTrafficPolicyCommentCommand.ts";
import {
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
} from "./commands/UpdateTrafficPolicyInstanceCommand.ts";
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
  | AssociateVPCWithHostedZoneCommandInput
  | ChangeResourceRecordSetsCommandInput
  | ChangeTagsForResourceCommandInput
  | CreateHealthCheckCommandInput
  | CreateHostedZoneCommandInput
  | CreateQueryLoggingConfigCommandInput
  | CreateReusableDelegationSetCommandInput
  | CreateTrafficPolicyCommandInput
  | CreateTrafficPolicyInstanceCommandInput
  | CreateTrafficPolicyVersionCommandInput
  | CreateVPCAssociationAuthorizationCommandInput
  | DeleteHealthCheckCommandInput
  | DeleteHostedZoneCommandInput
  | DeleteQueryLoggingConfigCommandInput
  | DeleteReusableDelegationSetCommandInput
  | DeleteTrafficPolicyCommandInput
  | DeleteTrafficPolicyInstanceCommandInput
  | DeleteVPCAssociationAuthorizationCommandInput
  | DisassociateVPCFromHostedZoneCommandInput
  | GetAccountLimitCommandInput
  | GetChangeCommandInput
  | GetCheckerIpRangesCommandInput
  | GetGeoLocationCommandInput
  | GetHealthCheckCommandInput
  | GetHealthCheckCountCommandInput
  | GetHealthCheckLastFailureReasonCommandInput
  | GetHealthCheckStatusCommandInput
  | GetHostedZoneCommandInput
  | GetHostedZoneCountCommandInput
  | GetHostedZoneLimitCommandInput
  | GetQueryLoggingConfigCommandInput
  | GetReusableDelegationSetCommandInput
  | GetReusableDelegationSetLimitCommandInput
  | GetTrafficPolicyCommandInput
  | GetTrafficPolicyInstanceCommandInput
  | GetTrafficPolicyInstanceCountCommandInput
  | ListGeoLocationsCommandInput
  | ListHealthChecksCommandInput
  | ListHostedZonesByNameCommandInput
  | ListHostedZonesByVPCCommandInput
  | ListHostedZonesCommandInput
  | ListQueryLoggingConfigsCommandInput
  | ListResourceRecordSetsCommandInput
  | ListReusableDelegationSetsCommandInput
  | ListTagsForResourceCommandInput
  | ListTagsForResourcesCommandInput
  | ListTrafficPoliciesCommandInput
  | ListTrafficPolicyInstancesByHostedZoneCommandInput
  | ListTrafficPolicyInstancesByPolicyCommandInput
  | ListTrafficPolicyInstancesCommandInput
  | ListTrafficPolicyVersionsCommandInput
  | ListVPCAssociationAuthorizationsCommandInput
  | TestDNSAnswerCommandInput
  | UpdateHealthCheckCommandInput
  | UpdateHostedZoneCommentCommandInput
  | UpdateTrafficPolicyCommentCommandInput
  | UpdateTrafficPolicyInstanceCommandInput;

export type ServiceOutputTypes =
  | AssociateVPCWithHostedZoneCommandOutput
  | ChangeResourceRecordSetsCommandOutput
  | ChangeTagsForResourceCommandOutput
  | CreateHealthCheckCommandOutput
  | CreateHostedZoneCommandOutput
  | CreateQueryLoggingConfigCommandOutput
  | CreateReusableDelegationSetCommandOutput
  | CreateTrafficPolicyCommandOutput
  | CreateTrafficPolicyInstanceCommandOutput
  | CreateTrafficPolicyVersionCommandOutput
  | CreateVPCAssociationAuthorizationCommandOutput
  | DeleteHealthCheckCommandOutput
  | DeleteHostedZoneCommandOutput
  | DeleteQueryLoggingConfigCommandOutput
  | DeleteReusableDelegationSetCommandOutput
  | DeleteTrafficPolicyCommandOutput
  | DeleteTrafficPolicyInstanceCommandOutput
  | DeleteVPCAssociationAuthorizationCommandOutput
  | DisassociateVPCFromHostedZoneCommandOutput
  | GetAccountLimitCommandOutput
  | GetChangeCommandOutput
  | GetCheckerIpRangesCommandOutput
  | GetGeoLocationCommandOutput
  | GetHealthCheckCommandOutput
  | GetHealthCheckCountCommandOutput
  | GetHealthCheckLastFailureReasonCommandOutput
  | GetHealthCheckStatusCommandOutput
  | GetHostedZoneCommandOutput
  | GetHostedZoneCountCommandOutput
  | GetHostedZoneLimitCommandOutput
  | GetQueryLoggingConfigCommandOutput
  | GetReusableDelegationSetCommandOutput
  | GetReusableDelegationSetLimitCommandOutput
  | GetTrafficPolicyCommandOutput
  | GetTrafficPolicyInstanceCommandOutput
  | GetTrafficPolicyInstanceCountCommandOutput
  | ListGeoLocationsCommandOutput
  | ListHealthChecksCommandOutput
  | ListHostedZonesByNameCommandOutput
  | ListHostedZonesByVPCCommandOutput
  | ListHostedZonesCommandOutput
  | ListQueryLoggingConfigsCommandOutput
  | ListResourceRecordSetsCommandOutput
  | ListReusableDelegationSetsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTagsForResourcesCommandOutput
  | ListTrafficPoliciesCommandOutput
  | ListTrafficPolicyInstancesByHostedZoneCommandOutput
  | ListTrafficPolicyInstancesByPolicyCommandOutput
  | ListTrafficPolicyInstancesCommandOutput
  | ListTrafficPolicyVersionsCommandOutput
  | ListVPCAssociationAuthorizationsCommandOutput
  | TestDNSAnswerCommandOutput
  | UpdateHealthCheckCommandOutput
  | UpdateHostedZoneCommentCommandOutput
  | UpdateTrafficPolicyCommentCommandOutput
  | UpdateTrafficPolicyInstanceCommandOutput;

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

export type Route53ClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type Route53ClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.</p>
 */
export class Route53Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53ClientResolvedConfig
> {
  readonly config: Route53ClientResolvedConfig;

  constructor(configuration: Route53ClientConfig) {
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
