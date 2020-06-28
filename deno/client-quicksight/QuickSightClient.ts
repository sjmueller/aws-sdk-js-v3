import {
  CancelIngestionCommandInput,
  CancelIngestionCommandOutput
} from "./commands/CancelIngestionCommand.ts";
import {
  CreateDashboardCommandInput,
  CreateDashboardCommandOutput
} from "./commands/CreateDashboardCommand.ts";
import {
  CreateDataSetCommandInput,
  CreateDataSetCommandOutput
} from "./commands/CreateDataSetCommand.ts";
import {
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput
} from "./commands/CreateDataSourceCommand.ts";
import {
  CreateGroupCommandInput,
  CreateGroupCommandOutput
} from "./commands/CreateGroupCommand.ts";
import {
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput
} from "./commands/CreateGroupMembershipCommand.ts";
import {
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput
} from "./commands/CreateIAMPolicyAssignmentCommand.ts";
import {
  CreateIngestionCommandInput,
  CreateIngestionCommandOutput
} from "./commands/CreateIngestionCommand.ts";
import {
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput
} from "./commands/CreateTemplateAliasCommand.ts";
import {
  CreateTemplateCommandInput,
  CreateTemplateCommandOutput
} from "./commands/CreateTemplateCommand.ts";
import {
  DeleteDashboardCommandInput,
  DeleteDashboardCommandOutput
} from "./commands/DeleteDashboardCommand.ts";
import {
  DeleteDataSetCommandInput,
  DeleteDataSetCommandOutput
} from "./commands/DeleteDataSetCommand.ts";
import {
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput
} from "./commands/DeleteDataSourceCommand.ts";
import {
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput
} from "./commands/DeleteGroupCommand.ts";
import {
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput
} from "./commands/DeleteGroupMembershipCommand.ts";
import {
  DeleteIAMPolicyAssignmentCommandInput,
  DeleteIAMPolicyAssignmentCommandOutput
} from "./commands/DeleteIAMPolicyAssignmentCommand.ts";
import {
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput
} from "./commands/DeleteTemplateAliasCommand.ts";
import {
  DeleteTemplateCommandInput,
  DeleteTemplateCommandOutput
} from "./commands/DeleteTemplateCommand.ts";
import {
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput
} from "./commands/DeleteUserByPrincipalIdCommand.ts";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "./commands/DeleteUserCommand.ts";
import {
  DescribeDashboardCommandInput,
  DescribeDashboardCommandOutput
} from "./commands/DescribeDashboardCommand.ts";
import {
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput
} from "./commands/DescribeDashboardPermissionsCommand.ts";
import {
  DescribeDataSetCommandInput,
  DescribeDataSetCommandOutput
} from "./commands/DescribeDataSetCommand.ts";
import {
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput
} from "./commands/DescribeDataSetPermissionsCommand.ts";
import {
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput
} from "./commands/DescribeDataSourceCommand.ts";
import {
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput
} from "./commands/DescribeDataSourcePermissionsCommand.ts";
import {
  DescribeGroupCommandInput,
  DescribeGroupCommandOutput
} from "./commands/DescribeGroupCommand.ts";
import {
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput
} from "./commands/DescribeIAMPolicyAssignmentCommand.ts";
import {
  DescribeIngestionCommandInput,
  DescribeIngestionCommandOutput
} from "./commands/DescribeIngestionCommand.ts";
import {
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput
} from "./commands/DescribeTemplateAliasCommand.ts";
import {
  DescribeTemplateCommandInput,
  DescribeTemplateCommandOutput
} from "./commands/DescribeTemplateCommand.ts";
import {
  DescribeTemplatePermissionsCommandInput,
  DescribeTemplatePermissionsCommandOutput
} from "./commands/DescribeTemplatePermissionsCommand.ts";
import {
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "./commands/DescribeUserCommand.ts";
import {
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput
} from "./commands/GetDashboardEmbedUrlCommand.ts";
import {
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput
} from "./commands/ListDashboardVersionsCommand.ts";
import {
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput
} from "./commands/ListDashboardsCommand.ts";
import {
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput
} from "./commands/ListDataSetsCommand.ts";
import {
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
} from "./commands/ListDataSourcesCommand.ts";
import {
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput
} from "./commands/ListGroupMembershipsCommand.ts";
import {
  ListGroupsCommandInput,
  ListGroupsCommandOutput
} from "./commands/ListGroupsCommand.ts";
import {
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput
} from "./commands/ListIAMPolicyAssignmentsCommand.ts";
import {
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput
} from "./commands/ListIAMPolicyAssignmentsForUserCommand.ts";
import {
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput
} from "./commands/ListIngestionsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput
} from "./commands/ListTemplateAliasesCommand.ts";
import {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput
} from "./commands/ListTemplateVersionsCommand.ts";
import {
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput
} from "./commands/ListTemplatesCommand.ts";
import {
  ListUserGroupsCommandInput,
  ListUserGroupsCommandOutput
} from "./commands/ListUserGroupsCommand.ts";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "./commands/ListUsersCommand.ts";
import {
  RegisterUserCommandInput,
  RegisterUserCommandOutput
} from "./commands/RegisterUserCommand.ts";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand.ts";
import {
  UpdateDashboardCommandInput,
  UpdateDashboardCommandOutput
} from "./commands/UpdateDashboardCommand.ts";
import {
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput
} from "./commands/UpdateDashboardPermissionsCommand.ts";
import {
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput
} from "./commands/UpdateDashboardPublishedVersionCommand.ts";
import {
  UpdateDataSetCommandInput,
  UpdateDataSetCommandOutput
} from "./commands/UpdateDataSetCommand.ts";
import {
  UpdateDataSetPermissionsCommandInput,
  UpdateDataSetPermissionsCommandOutput
} from "./commands/UpdateDataSetPermissionsCommand.ts";
import {
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput
} from "./commands/UpdateDataSourceCommand.ts";
import {
  UpdateDataSourcePermissionsCommandInput,
  UpdateDataSourcePermissionsCommandOutput
} from "./commands/UpdateDataSourcePermissionsCommand.ts";
import {
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput
} from "./commands/UpdateGroupCommand.ts";
import {
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput
} from "./commands/UpdateIAMPolicyAssignmentCommand.ts";
import {
  UpdateTemplateAliasCommandInput,
  UpdateTemplateAliasCommandOutput
} from "./commands/UpdateTemplateAliasCommand.ts";
import {
  UpdateTemplateCommandInput,
  UpdateTemplateCommandOutput
} from "./commands/UpdateTemplateCommand.ts";
import {
  UpdateTemplatePermissionsCommandInput,
  UpdateTemplatePermissionsCommandOutput
} from "./commands/UpdateTemplatePermissionsCommand.ts";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput
} from "./commands/UpdateUserCommand.ts";
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
  | CancelIngestionCommandInput
  | CreateDashboardCommandInput
  | CreateDataSetCommandInput
  | CreateDataSourceCommandInput
  | CreateGroupCommandInput
  | CreateGroupMembershipCommandInput
  | CreateIAMPolicyAssignmentCommandInput
  | CreateIngestionCommandInput
  | CreateTemplateAliasCommandInput
  | CreateTemplateCommandInput
  | DeleteDashboardCommandInput
  | DeleteDataSetCommandInput
  | DeleteDataSourceCommandInput
  | DeleteGroupCommandInput
  | DeleteGroupMembershipCommandInput
  | DeleteIAMPolicyAssignmentCommandInput
  | DeleteTemplateAliasCommandInput
  | DeleteTemplateCommandInput
  | DeleteUserByPrincipalIdCommandInput
  | DeleteUserCommandInput
  | DescribeDashboardCommandInput
  | DescribeDashboardPermissionsCommandInput
  | DescribeDataSetCommandInput
  | DescribeDataSetPermissionsCommandInput
  | DescribeDataSourceCommandInput
  | DescribeDataSourcePermissionsCommandInput
  | DescribeGroupCommandInput
  | DescribeIAMPolicyAssignmentCommandInput
  | DescribeIngestionCommandInput
  | DescribeTemplateAliasCommandInput
  | DescribeTemplateCommandInput
  | DescribeTemplatePermissionsCommandInput
  | DescribeUserCommandInput
  | GetDashboardEmbedUrlCommandInput
  | ListDashboardVersionsCommandInput
  | ListDashboardsCommandInput
  | ListDataSetsCommandInput
  | ListDataSourcesCommandInput
  | ListGroupMembershipsCommandInput
  | ListGroupsCommandInput
  | ListIAMPolicyAssignmentsCommandInput
  | ListIAMPolicyAssignmentsForUserCommandInput
  | ListIngestionsCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateAliasesCommandInput
  | ListTemplateVersionsCommandInput
  | ListTemplatesCommandInput
  | ListUserGroupsCommandInput
  | ListUsersCommandInput
  | RegisterUserCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDashboardCommandInput
  | UpdateDashboardPermissionsCommandInput
  | UpdateDashboardPublishedVersionCommandInput
  | UpdateDataSetCommandInput
  | UpdateDataSetPermissionsCommandInput
  | UpdateDataSourceCommandInput
  | UpdateDataSourcePermissionsCommandInput
  | UpdateGroupCommandInput
  | UpdateIAMPolicyAssignmentCommandInput
  | UpdateTemplateAliasCommandInput
  | UpdateTemplateCommandInput
  | UpdateTemplatePermissionsCommandInput
  | UpdateUserCommandInput;

export type ServiceOutputTypes =
  | CancelIngestionCommandOutput
  | CreateDashboardCommandOutput
  | CreateDataSetCommandOutput
  | CreateDataSourceCommandOutput
  | CreateGroupCommandOutput
  | CreateGroupMembershipCommandOutput
  | CreateIAMPolicyAssignmentCommandOutput
  | CreateIngestionCommandOutput
  | CreateTemplateAliasCommandOutput
  | CreateTemplateCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteDataSetCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteGroupCommandOutput
  | DeleteGroupMembershipCommandOutput
  | DeleteIAMPolicyAssignmentCommandOutput
  | DeleteTemplateAliasCommandOutput
  | DeleteTemplateCommandOutput
  | DeleteUserByPrincipalIdCommandOutput
  | DeleteUserCommandOutput
  | DescribeDashboardCommandOutput
  | DescribeDashboardPermissionsCommandOutput
  | DescribeDataSetCommandOutput
  | DescribeDataSetPermissionsCommandOutput
  | DescribeDataSourceCommandOutput
  | DescribeDataSourcePermissionsCommandOutput
  | DescribeGroupCommandOutput
  | DescribeIAMPolicyAssignmentCommandOutput
  | DescribeIngestionCommandOutput
  | DescribeTemplateAliasCommandOutput
  | DescribeTemplateCommandOutput
  | DescribeTemplatePermissionsCommandOutput
  | DescribeUserCommandOutput
  | GetDashboardEmbedUrlCommandOutput
  | ListDashboardVersionsCommandOutput
  | ListDashboardsCommandOutput
  | ListDataSetsCommandOutput
  | ListDataSourcesCommandOutput
  | ListGroupMembershipsCommandOutput
  | ListGroupsCommandOutput
  | ListIAMPolicyAssignmentsCommandOutput
  | ListIAMPolicyAssignmentsForUserCommandOutput
  | ListIngestionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateAliasesCommandOutput
  | ListTemplateVersionsCommandOutput
  | ListTemplatesCommandOutput
  | ListUserGroupsCommandOutput
  | ListUsersCommandOutput
  | RegisterUserCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDashboardCommandOutput
  | UpdateDashboardPermissionsCommandOutput
  | UpdateDashboardPublishedVersionCommandOutput
  | UpdateDataSetCommandOutput
  | UpdateDataSetPermissionsCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateDataSourcePermissionsCommandOutput
  | UpdateGroupCommandOutput
  | UpdateIAMPolicyAssignmentCommandOutput
  | UpdateTemplateAliasCommandOutput
  | UpdateTemplateCommandOutput
  | UpdateTemplatePermissionsCommandOutput
  | UpdateUserCommandOutput;

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

export type QuickSightClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type QuickSightClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <fullname>Amazon QuickSight API Reference</fullname>
 * 		       <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the AWS
 * 			Cloud that makes it easy to extend data and insights to every user in your organization.
 * 			This API reference contains documentation for a programming interface that you can use
 * 			to manage Amazon QuickSight. </p>
 */
export class QuickSightClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  QuickSightClientResolvedConfig
> {
  readonly config: QuickSightClientResolvedConfig;

  constructor(configuration: QuickSightClientConfig) {
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
