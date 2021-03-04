import {
  BatchGetAggregateResourceConfigCommandInput,
  BatchGetAggregateResourceConfigCommandOutput,
} from "./commands/BatchGetAggregateResourceConfigCommand.ts";
import {
  BatchGetResourceConfigCommandInput,
  BatchGetResourceConfigCommandOutput,
} from "./commands/BatchGetResourceConfigCommand.ts";
import {
  DeleteAggregationAuthorizationCommandInput,
  DeleteAggregationAuthorizationCommandOutput,
} from "./commands/DeleteAggregationAuthorizationCommand.ts";
import { DeleteConfigRuleCommandInput, DeleteConfigRuleCommandOutput } from "./commands/DeleteConfigRuleCommand.ts";
import {
  DeleteConfigurationAggregatorCommandInput,
  DeleteConfigurationAggregatorCommandOutput,
} from "./commands/DeleteConfigurationAggregatorCommand.ts";
import {
  DeleteConfigurationRecorderCommandInput,
  DeleteConfigurationRecorderCommandOutput,
} from "./commands/DeleteConfigurationRecorderCommand.ts";
import {
  DeleteConformancePackCommandInput,
  DeleteConformancePackCommandOutput,
} from "./commands/DeleteConformancePackCommand.ts";
import {
  DeleteDeliveryChannelCommandInput,
  DeleteDeliveryChannelCommandOutput,
} from "./commands/DeleteDeliveryChannelCommand.ts";
import {
  DeleteEvaluationResultsCommandInput,
  DeleteEvaluationResultsCommandOutput,
} from "./commands/DeleteEvaluationResultsCommand.ts";
import {
  DeleteOrganizationConfigRuleCommandInput,
  DeleteOrganizationConfigRuleCommandOutput,
} from "./commands/DeleteOrganizationConfigRuleCommand.ts";
import {
  DeleteOrganizationConformancePackCommandInput,
  DeleteOrganizationConformancePackCommandOutput,
} from "./commands/DeleteOrganizationConformancePackCommand.ts";
import {
  DeletePendingAggregationRequestCommandInput,
  DeletePendingAggregationRequestCommandOutput,
} from "./commands/DeletePendingAggregationRequestCommand.ts";
import {
  DeleteRemediationConfigurationCommandInput,
  DeleteRemediationConfigurationCommandOutput,
} from "./commands/DeleteRemediationConfigurationCommand.ts";
import {
  DeleteRemediationExceptionsCommandInput,
  DeleteRemediationExceptionsCommandOutput,
} from "./commands/DeleteRemediationExceptionsCommand.ts";
import {
  DeleteResourceConfigCommandInput,
  DeleteResourceConfigCommandOutput,
} from "./commands/DeleteResourceConfigCommand.ts";
import {
  DeleteRetentionConfigurationCommandInput,
  DeleteRetentionConfigurationCommandOutput,
} from "./commands/DeleteRetentionConfigurationCommand.ts";
import {
  DeliverConfigSnapshotCommandInput,
  DeliverConfigSnapshotCommandOutput,
} from "./commands/DeliverConfigSnapshotCommand.ts";
import {
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
} from "./commands/DescribeAggregateComplianceByConfigRulesCommand.ts";
import {
  DescribeAggregationAuthorizationsCommandInput,
  DescribeAggregationAuthorizationsCommandOutput,
} from "./commands/DescribeAggregationAuthorizationsCommand.ts";
import {
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput,
} from "./commands/DescribeComplianceByConfigRuleCommand.ts";
import {
  DescribeComplianceByResourceCommandInput,
  DescribeComplianceByResourceCommandOutput,
} from "./commands/DescribeComplianceByResourceCommand.ts";
import {
  DescribeConfigRuleEvaluationStatusCommandInput,
  DescribeConfigRuleEvaluationStatusCommandOutput,
} from "./commands/DescribeConfigRuleEvaluationStatusCommand.ts";
import {
  DescribeConfigRulesCommandInput,
  DescribeConfigRulesCommandOutput,
} from "./commands/DescribeConfigRulesCommand.ts";
import {
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
} from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand.ts";
import {
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
} from "./commands/DescribeConfigurationAggregatorsCommand.ts";
import {
  DescribeConfigurationRecorderStatusCommandInput,
  DescribeConfigurationRecorderStatusCommandOutput,
} from "./commands/DescribeConfigurationRecorderStatusCommand.ts";
import {
  DescribeConfigurationRecordersCommandInput,
  DescribeConfigurationRecordersCommandOutput,
} from "./commands/DescribeConfigurationRecordersCommand.ts";
import {
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "./commands/DescribeConformancePackComplianceCommand.ts";
import {
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
} from "./commands/DescribeConformancePackStatusCommand.ts";
import {
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput,
} from "./commands/DescribeConformancePacksCommand.ts";
import {
  DescribeDeliveryChannelStatusCommandInput,
  DescribeDeliveryChannelStatusCommandOutput,
} from "./commands/DescribeDeliveryChannelStatusCommand.ts";
import {
  DescribeDeliveryChannelsCommandInput,
  DescribeDeliveryChannelsCommandOutput,
} from "./commands/DescribeDeliveryChannelsCommand.ts";
import {
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
} from "./commands/DescribeOrganizationConfigRuleStatusesCommand.ts";
import {
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput,
} from "./commands/DescribeOrganizationConfigRulesCommand.ts";
import {
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "./commands/DescribeOrganizationConformancePackStatusesCommand.ts";
import {
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
} from "./commands/DescribeOrganizationConformancePacksCommand.ts";
import {
  DescribePendingAggregationRequestsCommandInput,
  DescribePendingAggregationRequestsCommandOutput,
} from "./commands/DescribePendingAggregationRequestsCommand.ts";
import {
  DescribeRemediationConfigurationsCommandInput,
  DescribeRemediationConfigurationsCommandOutput,
} from "./commands/DescribeRemediationConfigurationsCommand.ts";
import {
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput,
} from "./commands/DescribeRemediationExceptionsCommand.ts";
import {
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput,
} from "./commands/DescribeRemediationExecutionStatusCommand.ts";
import {
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput,
} from "./commands/DescribeRetentionConfigurationsCommand.ts";
import {
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
} from "./commands/GetAggregateComplianceDetailsByConfigRuleCommand.ts";
import {
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput,
} from "./commands/GetAggregateConfigRuleComplianceSummaryCommand.ts";
import {
  GetAggregateDiscoveredResourceCountsCommandInput,
  GetAggregateDiscoveredResourceCountsCommandOutput,
} from "./commands/GetAggregateDiscoveredResourceCountsCommand.ts";
import {
  GetAggregateResourceConfigCommandInput,
  GetAggregateResourceConfigCommandOutput,
} from "./commands/GetAggregateResourceConfigCommand.ts";
import {
  GetComplianceDetailsByConfigRuleCommandInput,
  GetComplianceDetailsByConfigRuleCommandOutput,
} from "./commands/GetComplianceDetailsByConfigRuleCommand.ts";
import {
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput,
} from "./commands/GetComplianceDetailsByResourceCommand.ts";
import {
  GetComplianceSummaryByConfigRuleCommandInput,
  GetComplianceSummaryByConfigRuleCommandOutput,
} from "./commands/GetComplianceSummaryByConfigRuleCommand.ts";
import {
  GetComplianceSummaryByResourceTypeCommandInput,
  GetComplianceSummaryByResourceTypeCommandOutput,
} from "./commands/GetComplianceSummaryByResourceTypeCommand.ts";
import {
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
} from "./commands/GetConformancePackComplianceDetailsCommand.ts";
import {
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
} from "./commands/GetConformancePackComplianceSummaryCommand.ts";
import {
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput,
} from "./commands/GetDiscoveredResourceCountsCommand.ts";
import {
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput,
} from "./commands/GetOrganizationConfigRuleDetailedStatusCommand.ts";
import {
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput,
} from "./commands/GetOrganizationConformancePackDetailedStatusCommand.ts";
import {
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "./commands/GetResourceConfigHistoryCommand.ts";
import {
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
} from "./commands/ListAggregateDiscoveredResourcesCommand.ts";
import {
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutAggregationAuthorizationCommandInput,
  PutAggregationAuthorizationCommandOutput,
} from "./commands/PutAggregationAuthorizationCommand.ts";
import { PutConfigRuleCommandInput, PutConfigRuleCommandOutput } from "./commands/PutConfigRuleCommand.ts";
import {
  PutConfigurationAggregatorCommandInput,
  PutConfigurationAggregatorCommandOutput,
} from "./commands/PutConfigurationAggregatorCommand.ts";
import {
  PutConfigurationRecorderCommandInput,
  PutConfigurationRecorderCommandOutput,
} from "./commands/PutConfigurationRecorderCommand.ts";
import { PutConformancePackCommandInput, PutConformancePackCommandOutput } from "./commands/PutConformancePackCommand.ts";
import { PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput } from "./commands/PutDeliveryChannelCommand.ts";
import { PutEvaluationsCommandInput, PutEvaluationsCommandOutput } from "./commands/PutEvaluationsCommand.ts";
import {
  PutOrganizationConfigRuleCommandInput,
  PutOrganizationConfigRuleCommandOutput,
} from "./commands/PutOrganizationConfigRuleCommand.ts";
import {
  PutOrganizationConformancePackCommandInput,
  PutOrganizationConformancePackCommandOutput,
} from "./commands/PutOrganizationConformancePackCommand.ts";
import {
  PutRemediationConfigurationsCommandInput,
  PutRemediationConfigurationsCommandOutput,
} from "./commands/PutRemediationConfigurationsCommand.ts";
import {
  PutRemediationExceptionsCommandInput,
  PutRemediationExceptionsCommandOutput,
} from "./commands/PutRemediationExceptionsCommand.ts";
import { PutResourceConfigCommandInput, PutResourceConfigCommandOutput } from "./commands/PutResourceConfigCommand.ts";
import {
  PutRetentionConfigurationCommandInput,
  PutRetentionConfigurationCommandOutput,
} from "./commands/PutRetentionConfigurationCommand.ts";
import {
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
} from "./commands/SelectAggregateResourceConfigCommand.ts";
import {
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput,
} from "./commands/SelectResourceConfigCommand.ts";
import {
  StartConfigRulesEvaluationCommandInput,
  StartConfigRulesEvaluationCommandOutput,
} from "./commands/StartConfigRulesEvaluationCommand.ts";
import {
  StartConfigurationRecorderCommandInput,
  StartConfigurationRecorderCommandOutput,
} from "./commands/StartConfigurationRecorderCommand.ts";
import {
  StartRemediationExecutionCommandInput,
  StartRemediationExecutionCommandOutput,
} from "./commands/StartRemediationExecutionCommand.ts";
import {
  StopConfigurationRecorderCommandInput,
  StopConfigurationRecorderCommandOutput,
} from "./commands/StopConfigurationRecorderCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
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
  | BatchGetAggregateResourceConfigCommandInput
  | BatchGetResourceConfigCommandInput
  | DeleteAggregationAuthorizationCommandInput
  | DeleteConfigRuleCommandInput
  | DeleteConfigurationAggregatorCommandInput
  | DeleteConfigurationRecorderCommandInput
  | DeleteConformancePackCommandInput
  | DeleteDeliveryChannelCommandInput
  | DeleteEvaluationResultsCommandInput
  | DeleteOrganizationConfigRuleCommandInput
  | DeleteOrganizationConformancePackCommandInput
  | DeletePendingAggregationRequestCommandInput
  | DeleteRemediationConfigurationCommandInput
  | DeleteRemediationExceptionsCommandInput
  | DeleteResourceConfigCommandInput
  | DeleteRetentionConfigurationCommandInput
  | DeliverConfigSnapshotCommandInput
  | DescribeAggregateComplianceByConfigRulesCommandInput
  | DescribeAggregationAuthorizationsCommandInput
  | DescribeComplianceByConfigRuleCommandInput
  | DescribeComplianceByResourceCommandInput
  | DescribeConfigRuleEvaluationStatusCommandInput
  | DescribeConfigRulesCommandInput
  | DescribeConfigurationAggregatorSourcesStatusCommandInput
  | DescribeConfigurationAggregatorsCommandInput
  | DescribeConfigurationRecorderStatusCommandInput
  | DescribeConfigurationRecordersCommandInput
  | DescribeConformancePackComplianceCommandInput
  | DescribeConformancePackStatusCommandInput
  | DescribeConformancePacksCommandInput
  | DescribeDeliveryChannelStatusCommandInput
  | DescribeDeliveryChannelsCommandInput
  | DescribeOrganizationConfigRuleStatusesCommandInput
  | DescribeOrganizationConfigRulesCommandInput
  | DescribeOrganizationConformancePackStatusesCommandInput
  | DescribeOrganizationConformancePacksCommandInput
  | DescribePendingAggregationRequestsCommandInput
  | DescribeRemediationConfigurationsCommandInput
  | DescribeRemediationExceptionsCommandInput
  | DescribeRemediationExecutionStatusCommandInput
  | DescribeRetentionConfigurationsCommandInput
  | GetAggregateComplianceDetailsByConfigRuleCommandInput
  | GetAggregateConfigRuleComplianceSummaryCommandInput
  | GetAggregateDiscoveredResourceCountsCommandInput
  | GetAggregateResourceConfigCommandInput
  | GetComplianceDetailsByConfigRuleCommandInput
  | GetComplianceDetailsByResourceCommandInput
  | GetComplianceSummaryByConfigRuleCommandInput
  | GetComplianceSummaryByResourceTypeCommandInput
  | GetConformancePackComplianceDetailsCommandInput
  | GetConformancePackComplianceSummaryCommandInput
  | GetDiscoveredResourceCountsCommandInput
  | GetOrganizationConfigRuleDetailedStatusCommandInput
  | GetOrganizationConformancePackDetailedStatusCommandInput
  | GetResourceConfigHistoryCommandInput
  | ListAggregateDiscoveredResourcesCommandInput
  | ListDiscoveredResourcesCommandInput
  | ListTagsForResourceCommandInput
  | PutAggregationAuthorizationCommandInput
  | PutConfigRuleCommandInput
  | PutConfigurationAggregatorCommandInput
  | PutConfigurationRecorderCommandInput
  | PutConformancePackCommandInput
  | PutDeliveryChannelCommandInput
  | PutEvaluationsCommandInput
  | PutOrganizationConfigRuleCommandInput
  | PutOrganizationConformancePackCommandInput
  | PutRemediationConfigurationsCommandInput
  | PutRemediationExceptionsCommandInput
  | PutResourceConfigCommandInput
  | PutRetentionConfigurationCommandInput
  | SelectAggregateResourceConfigCommandInput
  | SelectResourceConfigCommandInput
  | StartConfigRulesEvaluationCommandInput
  | StartConfigurationRecorderCommandInput
  | StartRemediationExecutionCommandInput
  | StopConfigurationRecorderCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | BatchGetAggregateResourceConfigCommandOutput
  | BatchGetResourceConfigCommandOutput
  | DeleteAggregationAuthorizationCommandOutput
  | DeleteConfigRuleCommandOutput
  | DeleteConfigurationAggregatorCommandOutput
  | DeleteConfigurationRecorderCommandOutput
  | DeleteConformancePackCommandOutput
  | DeleteDeliveryChannelCommandOutput
  | DeleteEvaluationResultsCommandOutput
  | DeleteOrganizationConfigRuleCommandOutput
  | DeleteOrganizationConformancePackCommandOutput
  | DeletePendingAggregationRequestCommandOutput
  | DeleteRemediationConfigurationCommandOutput
  | DeleteRemediationExceptionsCommandOutput
  | DeleteResourceConfigCommandOutput
  | DeleteRetentionConfigurationCommandOutput
  | DeliverConfigSnapshotCommandOutput
  | DescribeAggregateComplianceByConfigRulesCommandOutput
  | DescribeAggregationAuthorizationsCommandOutput
  | DescribeComplianceByConfigRuleCommandOutput
  | DescribeComplianceByResourceCommandOutput
  | DescribeConfigRuleEvaluationStatusCommandOutput
  | DescribeConfigRulesCommandOutput
  | DescribeConfigurationAggregatorSourcesStatusCommandOutput
  | DescribeConfigurationAggregatorsCommandOutput
  | DescribeConfigurationRecorderStatusCommandOutput
  | DescribeConfigurationRecordersCommandOutput
  | DescribeConformancePackComplianceCommandOutput
  | DescribeConformancePackStatusCommandOutput
  | DescribeConformancePacksCommandOutput
  | DescribeDeliveryChannelStatusCommandOutput
  | DescribeDeliveryChannelsCommandOutput
  | DescribeOrganizationConfigRuleStatusesCommandOutput
  | DescribeOrganizationConfigRulesCommandOutput
  | DescribeOrganizationConformancePackStatusesCommandOutput
  | DescribeOrganizationConformancePacksCommandOutput
  | DescribePendingAggregationRequestsCommandOutput
  | DescribeRemediationConfigurationsCommandOutput
  | DescribeRemediationExceptionsCommandOutput
  | DescribeRemediationExecutionStatusCommandOutput
  | DescribeRetentionConfigurationsCommandOutput
  | GetAggregateComplianceDetailsByConfigRuleCommandOutput
  | GetAggregateConfigRuleComplianceSummaryCommandOutput
  | GetAggregateDiscoveredResourceCountsCommandOutput
  | GetAggregateResourceConfigCommandOutput
  | GetComplianceDetailsByConfigRuleCommandOutput
  | GetComplianceDetailsByResourceCommandOutput
  | GetComplianceSummaryByConfigRuleCommandOutput
  | GetComplianceSummaryByResourceTypeCommandOutput
  | GetConformancePackComplianceDetailsCommandOutput
  | GetConformancePackComplianceSummaryCommandOutput
  | GetDiscoveredResourceCountsCommandOutput
  | GetOrganizationConfigRuleDetailedStatusCommandOutput
  | GetOrganizationConformancePackDetailedStatusCommandOutput
  | GetResourceConfigHistoryCommandOutput
  | ListAggregateDiscoveredResourcesCommandOutput
  | ListDiscoveredResourcesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAggregationAuthorizationCommandOutput
  | PutConfigRuleCommandOutput
  | PutConfigurationAggregatorCommandOutput
  | PutConfigurationRecorderCommandOutput
  | PutConformancePackCommandOutput
  | PutDeliveryChannelCommandOutput
  | PutEvaluationsCommandOutput
  | PutOrganizationConfigRuleCommandOutput
  | PutOrganizationConformancePackCommandOutput
  | PutRemediationConfigurationsCommandOutput
  | PutRemediationExceptionsCommandOutput
  | PutResourceConfigCommandOutput
  | PutRetentionConfigurationCommandOutput
  | SelectAggregateResourceConfigCommandOutput
  | SelectResourceConfigCommandOutput
  | StartConfigRulesEvaluationCommandOutput
  | StartConfigurationRecorderCommandOutput
  | StartRemediationExecutionCommandOutput
  | StopConfigurationRecorderCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

export type ConfigServiceClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type ConfigServiceClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>AWS Config</fullname>
 *
 * 		       <p>AWS Config provides a way to keep track of the configurations
 * 			of all the AWS resources associated with your AWS account. You can
 * 			use AWS Config to get the current and historical configurations of
 * 			each AWS resource and also to get information about the relationship
 * 			between the resources. An AWS resource can be an Amazon Compute
 * 			Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
 * 			elastic network Interface (ENI), or a security group. For a complete
 * 			list of resources currently supported by AWS Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resources</a>.</p>
 *
 * 		       <p>You can access and manage AWS Config through the AWS Management
 * 			Console, the AWS Command Line Interface (AWS CLI), the AWS Config
 * 			API, or the AWS SDKs for AWS Config. This reference guide contains
 * 			documentation for the AWS Config API and the AWS CLI commands that
 * 			you can use to manage AWS Config. The AWS Config API uses the
 * 			Signature Version 4 protocol for signing requests. For more
 * 			information about how to sign a request with this protocol, see
 * 				<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
 * 				Version 4 Signing Process</a>. For detailed information
 * 			about AWS Config features and their associated actions or commands,
 * 			as well as how to work with AWS Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is AWS
 * 				Config</a> in the <i>AWS Config Developer
 * 				Guide</i>.</p>
 */
export class ConfigServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ConfigServiceClientResolvedConfig
> {
  readonly config: ConfigServiceClientResolvedConfig;

  constructor(configuration: ConfigServiceClientConfig) {
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

  destroy(): void {
    super.destroy();
  }
}
