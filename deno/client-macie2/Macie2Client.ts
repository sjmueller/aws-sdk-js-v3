import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand.ts";
import {
  BatchGetCustomDataIdentifiersCommandInput,
  BatchGetCustomDataIdentifiersCommandOutput,
} from "./commands/BatchGetCustomDataIdentifiersCommand.ts";
import {
  CreateClassificationJobCommandInput,
  CreateClassificationJobCommandOutput,
} from "./commands/CreateClassificationJobCommand.ts";
import {
  CreateCustomDataIdentifierCommandInput,
  CreateCustomDataIdentifierCommandOutput,
} from "./commands/CreateCustomDataIdentifierCommand.ts";
import {
  CreateFindingsFilterCommandInput,
  CreateFindingsFilterCommandOutput,
} from "./commands/CreateFindingsFilterCommand.ts";
import { CreateInvitationsCommandInput, CreateInvitationsCommandOutput } from "./commands/CreateInvitationsCommand.ts";
import { CreateMemberCommandInput, CreateMemberCommandOutput } from "./commands/CreateMemberCommand.ts";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "./commands/CreateSampleFindingsCommand.ts";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand.ts";
import {
  DeleteCustomDataIdentifierCommandInput,
  DeleteCustomDataIdentifierCommandOutput,
} from "./commands/DeleteCustomDataIdentifierCommand.ts";
import {
  DeleteFindingsFilterCommandInput,
  DeleteFindingsFilterCommandOutput,
} from "./commands/DeleteFindingsFilterCommand.ts";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "./commands/DeleteInvitationsCommand.ts";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "./commands/DeleteMemberCommand.ts";
import { DescribeBucketsCommandInput, DescribeBucketsCommandOutput } from "./commands/DescribeBucketsCommand.ts";
import {
  DescribeClassificationJobCommandInput,
  DescribeClassificationJobCommandOutput,
} from "./commands/DescribeClassificationJobCommand.ts";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand.ts";
import { DisableMacieCommandInput, DisableMacieCommandOutput } from "./commands/DisableMacieCommand.ts";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand.ts";
import {
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "./commands/DisassociateFromAdministratorAccountCommand.ts";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "./commands/DisassociateFromMasterAccountCommand.ts";
import { DisassociateMemberCommandInput, DisassociateMemberCommandOutput } from "./commands/DisassociateMemberCommand.ts";
import { EnableMacieCommandInput, EnableMacieCommandOutput } from "./commands/EnableMacieCommand.ts";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand.ts";
import {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand.ts";
import {
  GetBucketStatisticsCommandInput,
  GetBucketStatisticsCommandOutput,
} from "./commands/GetBucketStatisticsCommand.ts";
import {
  GetClassificationExportConfigurationCommandInput,
  GetClassificationExportConfigurationCommandOutput,
} from "./commands/GetClassificationExportConfigurationCommand.ts";
import {
  GetCustomDataIdentifierCommandInput,
  GetCustomDataIdentifierCommandOutput,
} from "./commands/GetCustomDataIdentifierCommand.ts";
import {
  GetFindingStatisticsCommandInput,
  GetFindingStatisticsCommandOutput,
} from "./commands/GetFindingStatisticsCommand.ts";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand.ts";
import { GetFindingsFilterCommandInput, GetFindingsFilterCommandOutput } from "./commands/GetFindingsFilterCommand.ts";
import {
  GetFindingsPublicationConfigurationCommandInput,
  GetFindingsPublicationConfigurationCommandOutput,
} from "./commands/GetFindingsPublicationConfigurationCommand.ts";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand.ts";
import { GetMacieSessionCommandInput, GetMacieSessionCommandOutput } from "./commands/GetMacieSessionCommand.ts";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand.ts";
import { GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand.ts";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "./commands/GetUsageStatisticsCommand.ts";
import { GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput } from "./commands/GetUsageTotalsCommand.ts";
import {
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "./commands/ListClassificationJobsCommand.ts";
import {
  ListCustomDataIdentifiersCommandInput,
  ListCustomDataIdentifiersCommandOutput,
} from "./commands/ListCustomDataIdentifiersCommand.ts";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand.ts";
import {
  ListFindingsFiltersCommandInput,
  ListFindingsFiltersCommandOutput,
} from "./commands/ListFindingsFiltersCommand.ts";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand.ts";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand.ts";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutClassificationExportConfigurationCommandInput,
  PutClassificationExportConfigurationCommandOutput,
} from "./commands/PutClassificationExportConfigurationCommand.ts";
import {
  PutFindingsPublicationConfigurationCommandInput,
  PutFindingsPublicationConfigurationCommandOutput,
} from "./commands/PutFindingsPublicationConfigurationCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import {
  TestCustomDataIdentifierCommandInput,
  TestCustomDataIdentifierCommandOutput,
} from "./commands/TestCustomDataIdentifierCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateClassificationJobCommandInput,
  UpdateClassificationJobCommandOutput,
} from "./commands/UpdateClassificationJobCommand.ts";
import {
  UpdateFindingsFilterCommandInput,
  UpdateFindingsFilterCommandOutput,
} from "./commands/UpdateFindingsFilterCommand.ts";
import { UpdateMacieSessionCommandInput, UpdateMacieSessionCommandOutput } from "./commands/UpdateMacieSessionCommand.ts";
import {
  UpdateMemberSessionCommandInput,
  UpdateMemberSessionCommandOutput,
} from "./commands/UpdateMemberSessionCommand.ts";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand.ts";
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
  | AcceptInvitationCommandInput
  | BatchGetCustomDataIdentifiersCommandInput
  | CreateClassificationJobCommandInput
  | CreateCustomDataIdentifierCommandInput
  | CreateFindingsFilterCommandInput
  | CreateInvitationsCommandInput
  | CreateMemberCommandInput
  | CreateSampleFindingsCommandInput
  | DeclineInvitationsCommandInput
  | DeleteCustomDataIdentifierCommandInput
  | DeleteFindingsFilterCommandInput
  | DeleteInvitationsCommandInput
  | DeleteMemberCommandInput
  | DescribeBucketsCommandInput
  | DescribeClassificationJobCommandInput
  | DescribeOrganizationConfigurationCommandInput
  | DisableMacieCommandInput
  | DisableOrganizationAdminAccountCommandInput
  | DisassociateFromAdministratorAccountCommandInput
  | DisassociateFromMasterAccountCommandInput
  | DisassociateMemberCommandInput
  | EnableMacieCommandInput
  | EnableOrganizationAdminAccountCommandInput
  | GetAdministratorAccountCommandInput
  | GetBucketStatisticsCommandInput
  | GetClassificationExportConfigurationCommandInput
  | GetCustomDataIdentifierCommandInput
  | GetFindingStatisticsCommandInput
  | GetFindingsCommandInput
  | GetFindingsFilterCommandInput
  | GetFindingsPublicationConfigurationCommandInput
  | GetInvitationsCountCommandInput
  | GetMacieSessionCommandInput
  | GetMasterAccountCommandInput
  | GetMemberCommandInput
  | GetUsageStatisticsCommandInput
  | GetUsageTotalsCommandInput
  | ListClassificationJobsCommandInput
  | ListCustomDataIdentifiersCommandInput
  | ListFindingsCommandInput
  | ListFindingsFiltersCommandInput
  | ListInvitationsCommandInput
  | ListMembersCommandInput
  | ListOrganizationAdminAccountsCommandInput
  | ListTagsForResourceCommandInput
  | PutClassificationExportConfigurationCommandInput
  | PutFindingsPublicationConfigurationCommandInput
  | TagResourceCommandInput
  | TestCustomDataIdentifierCommandInput
  | UntagResourceCommandInput
  | UpdateClassificationJobCommandInput
  | UpdateFindingsFilterCommandInput
  | UpdateMacieSessionCommandInput
  | UpdateMemberSessionCommandInput
  | UpdateOrganizationConfigurationCommandInput;

export type ServiceOutputTypes =
  | AcceptInvitationCommandOutput
  | BatchGetCustomDataIdentifiersCommandOutput
  | CreateClassificationJobCommandOutput
  | CreateCustomDataIdentifierCommandOutput
  | CreateFindingsFilterCommandOutput
  | CreateInvitationsCommandOutput
  | CreateMemberCommandOutput
  | CreateSampleFindingsCommandOutput
  | DeclineInvitationsCommandOutput
  | DeleteCustomDataIdentifierCommandOutput
  | DeleteFindingsFilterCommandOutput
  | DeleteInvitationsCommandOutput
  | DeleteMemberCommandOutput
  | DescribeBucketsCommandOutput
  | DescribeClassificationJobCommandOutput
  | DescribeOrganizationConfigurationCommandOutput
  | DisableMacieCommandOutput
  | DisableOrganizationAdminAccountCommandOutput
  | DisassociateFromAdministratorAccountCommandOutput
  | DisassociateFromMasterAccountCommandOutput
  | DisassociateMemberCommandOutput
  | EnableMacieCommandOutput
  | EnableOrganizationAdminAccountCommandOutput
  | GetAdministratorAccountCommandOutput
  | GetBucketStatisticsCommandOutput
  | GetClassificationExportConfigurationCommandOutput
  | GetCustomDataIdentifierCommandOutput
  | GetFindingStatisticsCommandOutput
  | GetFindingsCommandOutput
  | GetFindingsFilterCommandOutput
  | GetFindingsPublicationConfigurationCommandOutput
  | GetInvitationsCountCommandOutput
  | GetMacieSessionCommandOutput
  | GetMasterAccountCommandOutput
  | GetMemberCommandOutput
  | GetUsageStatisticsCommandOutput
  | GetUsageTotalsCommandOutput
  | ListClassificationJobsCommandOutput
  | ListCustomDataIdentifiersCommandOutput
  | ListFindingsCommandOutput
  | ListFindingsFiltersCommandOutput
  | ListInvitationsCommandOutput
  | ListMembersCommandOutput
  | ListOrganizationAdminAccountsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutClassificationExportConfigurationCommandOutput
  | PutFindingsPublicationConfigurationCommandOutput
  | TagResourceCommandOutput
  | TestCustomDataIdentifierCommandOutput
  | UntagResourceCommandOutput
  | UpdateClassificationJobCommandOutput
  | UpdateFindingsFilterCommandOutput
  | UpdateMacieSessionCommandOutput
  | UpdateMemberSessionCommandOutput
  | UpdateOrganizationConfigurationCommandOutput;

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

export type Macie2ClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type Macie2ClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <p>Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automates the discovery of sensitive data, such as PII and intellectual property, to provide you with insight into the data that your organization stores in AWS. Macie also provides an inventory of your Amazon S3 buckets, which it continually monitors for you. If Macie detects sensitive data or potential data access issues, it generates detailed findings for you to review and act upon as necessary.</p>
 */
export class Macie2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Macie2ClientResolvedConfig
> {
  readonly config: Macie2ClientResolvedConfig;

  constructor(configuration: Macie2ClientConfig) {
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
