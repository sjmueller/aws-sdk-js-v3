import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand.ts";
import { ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput } from "./commands/ArchiveFindingsCommand.ts";
import { CreateDetectorCommandInput, CreateDetectorCommandOutput } from "./commands/CreateDetectorCommand.ts";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand.ts";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand.ts";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "./commands/CreateMembersCommand.ts";
import {
  CreatePublishingDestinationCommandInput,
  CreatePublishingDestinationCommandOutput,
} from "./commands/CreatePublishingDestinationCommand.ts";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "./commands/CreateSampleFindingsCommand.ts";
import {
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput,
} from "./commands/CreateThreatIntelSetCommand.ts";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand.ts";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "./commands/DeleteDetectorCommand.ts";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand.ts";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand.ts";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "./commands/DeleteInvitationsCommand.ts";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "./commands/DeleteMembersCommand.ts";
import {
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput,
} from "./commands/DeletePublishingDestinationCommand.ts";
import {
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput,
} from "./commands/DeleteThreatIntelSetCommand.ts";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand.ts";
import {
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput,
} from "./commands/DescribePublishingDestinationCommand.ts";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand.ts";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "./commands/DisassociateFromMasterAccountCommand.ts";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "./commands/DisassociateMembersCommand.ts";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand.ts";
import { GetDetectorCommandInput, GetDetectorCommandOutput } from "./commands/GetDetectorCommand.ts";
import { GetFilterCommandInput, GetFilterCommandOutput } from "./commands/GetFilterCommand.ts";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand.ts";
import {
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput,
} from "./commands/GetFindingsStatisticsCommand.ts";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand.ts";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand.ts";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand.ts";
import { GetMemberDetectorsCommandInput, GetMemberDetectorsCommandOutput } from "./commands/GetMemberDetectorsCommand.ts";
import { GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand.ts";
import { GetThreatIntelSetCommandInput, GetThreatIntelSetCommandOutput } from "./commands/GetThreatIntelSetCommand.ts";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "./commands/GetUsageStatisticsCommand.ts";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "./commands/InviteMembersCommand.ts";
import { ListDetectorsCommandInput, ListDetectorsCommandOutput } from "./commands/ListDetectorsCommand.ts";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand.ts";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand.ts";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand.ts";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand.ts";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand.ts";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand.ts";
import {
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "./commands/ListPublishingDestinationsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "./commands/ListThreatIntelSetsCommand.ts";
import {
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput,
} from "./commands/StartMonitoringMembersCommand.ts";
import {
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput,
} from "./commands/StopMonitoringMembersCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput } from "./commands/UnarchiveFindingsCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateDetectorCommandInput, UpdateDetectorCommandOutput } from "./commands/UpdateDetectorCommand.ts";
import { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "./commands/UpdateFilterCommand.ts";
import {
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
} from "./commands/UpdateFindingsFeedbackCommand.ts";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand.ts";
import {
  UpdateMemberDetectorsCommandInput,
  UpdateMemberDetectorsCommandOutput,
} from "./commands/UpdateMemberDetectorsCommand.ts";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand.ts";
import {
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput,
} from "./commands/UpdatePublishingDestinationCommand.ts";
import {
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput,
} from "./commands/UpdateThreatIntelSetCommand.ts";
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
  | AcceptInvitationCommandInput
  | ArchiveFindingsCommandInput
  | CreateDetectorCommandInput
  | CreateFilterCommandInput
  | CreateIPSetCommandInput
  | CreateMembersCommandInput
  | CreatePublishingDestinationCommandInput
  | CreateSampleFindingsCommandInput
  | CreateThreatIntelSetCommandInput
  | DeclineInvitationsCommandInput
  | DeleteDetectorCommandInput
  | DeleteFilterCommandInput
  | DeleteIPSetCommandInput
  | DeleteInvitationsCommandInput
  | DeleteMembersCommandInput
  | DeletePublishingDestinationCommandInput
  | DeleteThreatIntelSetCommandInput
  | DescribeOrganizationConfigurationCommandInput
  | DescribePublishingDestinationCommandInput
  | DisableOrganizationAdminAccountCommandInput
  | DisassociateFromMasterAccountCommandInput
  | DisassociateMembersCommandInput
  | EnableOrganizationAdminAccountCommandInput
  | GetDetectorCommandInput
  | GetFilterCommandInput
  | GetFindingsCommandInput
  | GetFindingsStatisticsCommandInput
  | GetIPSetCommandInput
  | GetInvitationsCountCommandInput
  | GetMasterAccountCommandInput
  | GetMemberDetectorsCommandInput
  | GetMembersCommandInput
  | GetThreatIntelSetCommandInput
  | GetUsageStatisticsCommandInput
  | InviteMembersCommandInput
  | ListDetectorsCommandInput
  | ListFiltersCommandInput
  | ListFindingsCommandInput
  | ListIPSetsCommandInput
  | ListInvitationsCommandInput
  | ListMembersCommandInput
  | ListOrganizationAdminAccountsCommandInput
  | ListPublishingDestinationsCommandInput
  | ListTagsForResourceCommandInput
  | ListThreatIntelSetsCommandInput
  | StartMonitoringMembersCommandInput
  | StopMonitoringMembersCommandInput
  | TagResourceCommandInput
  | UnarchiveFindingsCommandInput
  | UntagResourceCommandInput
  | UpdateDetectorCommandInput
  | UpdateFilterCommandInput
  | UpdateFindingsFeedbackCommandInput
  | UpdateIPSetCommandInput
  | UpdateMemberDetectorsCommandInput
  | UpdateOrganizationConfigurationCommandInput
  | UpdatePublishingDestinationCommandInput
  | UpdateThreatIntelSetCommandInput;

export type ServiceOutputTypes =
  | AcceptInvitationCommandOutput
  | ArchiveFindingsCommandOutput
  | CreateDetectorCommandOutput
  | CreateFilterCommandOutput
  | CreateIPSetCommandOutput
  | CreateMembersCommandOutput
  | CreatePublishingDestinationCommandOutput
  | CreateSampleFindingsCommandOutput
  | CreateThreatIntelSetCommandOutput
  | DeclineInvitationsCommandOutput
  | DeleteDetectorCommandOutput
  | DeleteFilterCommandOutput
  | DeleteIPSetCommandOutput
  | DeleteInvitationsCommandOutput
  | DeleteMembersCommandOutput
  | DeletePublishingDestinationCommandOutput
  | DeleteThreatIntelSetCommandOutput
  | DescribeOrganizationConfigurationCommandOutput
  | DescribePublishingDestinationCommandOutput
  | DisableOrganizationAdminAccountCommandOutput
  | DisassociateFromMasterAccountCommandOutput
  | DisassociateMembersCommandOutput
  | EnableOrganizationAdminAccountCommandOutput
  | GetDetectorCommandOutput
  | GetFilterCommandOutput
  | GetFindingsCommandOutput
  | GetFindingsStatisticsCommandOutput
  | GetIPSetCommandOutput
  | GetInvitationsCountCommandOutput
  | GetMasterAccountCommandOutput
  | GetMemberDetectorsCommandOutput
  | GetMembersCommandOutput
  | GetThreatIntelSetCommandOutput
  | GetUsageStatisticsCommandOutput
  | InviteMembersCommandOutput
  | ListDetectorsCommandOutput
  | ListFiltersCommandOutput
  | ListFindingsCommandOutput
  | ListIPSetsCommandOutput
  | ListInvitationsCommandOutput
  | ListMembersCommandOutput
  | ListOrganizationAdminAccountsCommandOutput
  | ListPublishingDestinationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListThreatIntelSetsCommandOutput
  | StartMonitoringMembersCommandOutput
  | StopMonitoringMembersCommandOutput
  | TagResourceCommandOutput
  | UnarchiveFindingsCommandOutput
  | UntagResourceCommandOutput
  | UpdateDetectorCommandOutput
  | UpdateFilterCommandOutput
  | UpdateFindingsFeedbackCommandOutput
  | UpdateIPSetCommandOutput
  | UpdateMemberDetectorsCommandOutput
  | UpdateOrganizationConfigurationCommandOutput
  | UpdatePublishingDestinationCommandOutput
  | UpdateThreatIntelSetCommandOutput;

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

export type GuardDutyClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type GuardDutyClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
 *       the following data sources: VPC Flow Logs, AWS CloudTrail event logs, and DNS logs. It uses
 *       threat intelligence feeds (such as lists of malicious IPs and domains) and machine learning to
 *       identify unexpected, potentially unauthorized, and malicious activity within your AWS
 *       environment. This can include issues like escalations of privileges, uses of exposed
 *       credentials, or communication with malicious IPs, URLs, or domains. For example, GuardDuty can
 *       detect compromised EC2 instances that serve malware or mine bitcoin. </p>
 *          <p>GuardDuty also monitors AWS account access behavior for signs of compromise. Some examples
 *       of this are unauthorized infrastructure deployments such as EC2 instances deployed in a Region
 *       that has never been used, or unusual API calls like a password policy change to reduce
 *       password strength. </p>
 *          <p>GuardDuty informs you of the status of your AWS environment by producing security findings
 *       that you can view in the GuardDuty console or through Amazon CloudWatch events. For more
 *       information, see the <i>
 *                <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon
 *           GuardDuty User Guide</a>
 *             </i>. </p>
 */
export class GuardDutyClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GuardDutyClientResolvedConfig
> {
  readonly config: GuardDutyClientResolvedConfig;

  constructor(configuration: GuardDutyClientConfig) {
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
