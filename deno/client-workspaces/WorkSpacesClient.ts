import { AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput } from "./commands/AssociateIpGroupsCommand.ts";
import { AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput } from "./commands/AuthorizeIpRulesCommand.ts";
import {
  CopyWorkspaceImageCommandInput,
  CopyWorkspaceImageCommandOutput,
} from "./commands/CopyWorkspaceImageCommand.ts";
import { CreateIpGroupCommandInput, CreateIpGroupCommandOutput } from "./commands/CreateIpGroupCommand.ts";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand.ts";
import { CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput } from "./commands/CreateWorkspacesCommand.ts";
import { DeleteIpGroupCommandInput, DeleteIpGroupCommandOutput } from "./commands/DeleteIpGroupCommand.ts";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand.ts";
import {
  DeleteWorkspaceImageCommandInput,
  DeleteWorkspaceImageCommandOutput,
} from "./commands/DeleteWorkspaceImageCommand.ts";
import {
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput,
} from "./commands/DeregisterWorkspaceDirectoryCommand.ts";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "./commands/DescribeAccountCommand.ts";
import {
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput,
} from "./commands/DescribeAccountModificationsCommand.ts";
import {
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput,
} from "./commands/DescribeClientPropertiesCommand.ts";
import { DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput } from "./commands/DescribeIpGroupsCommand.ts";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand.ts";
import {
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
} from "./commands/DescribeWorkspaceBundlesCommand.ts";
import {
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput,
} from "./commands/DescribeWorkspaceDirectoriesCommand.ts";
import {
  DescribeWorkspaceImagePermissionsCommandInput,
  DescribeWorkspaceImagePermissionsCommandOutput,
} from "./commands/DescribeWorkspaceImagePermissionsCommand.ts";
import {
  DescribeWorkspaceImagesCommandInput,
  DescribeWorkspaceImagesCommandOutput,
} from "./commands/DescribeWorkspaceImagesCommand.ts";
import {
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput,
} from "./commands/DescribeWorkspaceSnapshotsCommand.ts";
import {
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput,
} from "./commands/DescribeWorkspacesCommand.ts";
import {
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput,
} from "./commands/DescribeWorkspacesConnectionStatusCommand.ts";
import {
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput,
} from "./commands/DisassociateIpGroupsCommand.ts";
import {
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput,
} from "./commands/ImportWorkspaceImageCommand.ts";
import {
  ListAvailableManagementCidrRangesCommandInput,
  ListAvailableManagementCidrRangesCommandOutput,
} from "./commands/ListAvailableManagementCidrRangesCommand.ts";
import { MigrateWorkspaceCommandInput, MigrateWorkspaceCommandOutput } from "./commands/MigrateWorkspaceCommand.ts";
import { ModifyAccountCommandInput, ModifyAccountCommandOutput } from "./commands/ModifyAccountCommand.ts";
import {
  ModifyClientPropertiesCommandInput,
  ModifyClientPropertiesCommandOutput,
} from "./commands/ModifyClientPropertiesCommand.ts";
import {
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput,
} from "./commands/ModifySelfservicePermissionsCommand.ts";
import {
  ModifyWorkspaceAccessPropertiesCommandInput,
  ModifyWorkspaceAccessPropertiesCommandOutput,
} from "./commands/ModifyWorkspaceAccessPropertiesCommand.ts";
import {
  ModifyWorkspaceCreationPropertiesCommandInput,
  ModifyWorkspaceCreationPropertiesCommandOutput,
} from "./commands/ModifyWorkspaceCreationPropertiesCommand.ts";
import {
  ModifyWorkspacePropertiesCommandInput,
  ModifyWorkspacePropertiesCommandOutput,
} from "./commands/ModifyWorkspacePropertiesCommand.ts";
import {
  ModifyWorkspaceStateCommandInput,
  ModifyWorkspaceStateCommandOutput,
} from "./commands/ModifyWorkspaceStateCommand.ts";
import { RebootWorkspacesCommandInput, RebootWorkspacesCommandOutput } from "./commands/RebootWorkspacesCommand.ts";
import { RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput } from "./commands/RebuildWorkspacesCommand.ts";
import {
  RegisterWorkspaceDirectoryCommandInput,
  RegisterWorkspaceDirectoryCommandOutput,
} from "./commands/RegisterWorkspaceDirectoryCommand.ts";
import { RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput } from "./commands/RestoreWorkspaceCommand.ts";
import { RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput } from "./commands/RevokeIpRulesCommand.ts";
import { StartWorkspacesCommandInput, StartWorkspacesCommandOutput } from "./commands/StartWorkspacesCommand.ts";
import { StopWorkspacesCommandInput, StopWorkspacesCommandOutput } from "./commands/StopWorkspacesCommand.ts";
import {
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput,
} from "./commands/TerminateWorkspacesCommand.ts";
import {
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput,
} from "./commands/UpdateRulesOfIpGroupCommand.ts";
import {
  UpdateWorkspaceImagePermissionCommandInput,
  UpdateWorkspaceImagePermissionCommandOutput,
} from "./commands/UpdateWorkspaceImagePermissionCommand.ts";
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
  | AssociateIpGroupsCommandInput
  | AuthorizeIpRulesCommandInput
  | CopyWorkspaceImageCommandInput
  | CreateIpGroupCommandInput
  | CreateTagsCommandInput
  | CreateWorkspacesCommandInput
  | DeleteIpGroupCommandInput
  | DeleteTagsCommandInput
  | DeleteWorkspaceImageCommandInput
  | DeregisterWorkspaceDirectoryCommandInput
  | DescribeAccountCommandInput
  | DescribeAccountModificationsCommandInput
  | DescribeClientPropertiesCommandInput
  | DescribeIpGroupsCommandInput
  | DescribeTagsCommandInput
  | DescribeWorkspaceBundlesCommandInput
  | DescribeWorkspaceDirectoriesCommandInput
  | DescribeWorkspaceImagePermissionsCommandInput
  | DescribeWorkspaceImagesCommandInput
  | DescribeWorkspaceSnapshotsCommandInput
  | DescribeWorkspacesCommandInput
  | DescribeWorkspacesConnectionStatusCommandInput
  | DisassociateIpGroupsCommandInput
  | ImportWorkspaceImageCommandInput
  | ListAvailableManagementCidrRangesCommandInput
  | MigrateWorkspaceCommandInput
  | ModifyAccountCommandInput
  | ModifyClientPropertiesCommandInput
  | ModifySelfservicePermissionsCommandInput
  | ModifyWorkspaceAccessPropertiesCommandInput
  | ModifyWorkspaceCreationPropertiesCommandInput
  | ModifyWorkspacePropertiesCommandInput
  | ModifyWorkspaceStateCommandInput
  | RebootWorkspacesCommandInput
  | RebuildWorkspacesCommandInput
  | RegisterWorkspaceDirectoryCommandInput
  | RestoreWorkspaceCommandInput
  | RevokeIpRulesCommandInput
  | StartWorkspacesCommandInput
  | StopWorkspacesCommandInput
  | TerminateWorkspacesCommandInput
  | UpdateRulesOfIpGroupCommandInput
  | UpdateWorkspaceImagePermissionCommandInput;

export type ServiceOutputTypes =
  | AssociateIpGroupsCommandOutput
  | AuthorizeIpRulesCommandOutput
  | CopyWorkspaceImageCommandOutput
  | CreateIpGroupCommandOutput
  | CreateTagsCommandOutput
  | CreateWorkspacesCommandOutput
  | DeleteIpGroupCommandOutput
  | DeleteTagsCommandOutput
  | DeleteWorkspaceImageCommandOutput
  | DeregisterWorkspaceDirectoryCommandOutput
  | DescribeAccountCommandOutput
  | DescribeAccountModificationsCommandOutput
  | DescribeClientPropertiesCommandOutput
  | DescribeIpGroupsCommandOutput
  | DescribeTagsCommandOutput
  | DescribeWorkspaceBundlesCommandOutput
  | DescribeWorkspaceDirectoriesCommandOutput
  | DescribeWorkspaceImagePermissionsCommandOutput
  | DescribeWorkspaceImagesCommandOutput
  | DescribeWorkspaceSnapshotsCommandOutput
  | DescribeWorkspacesCommandOutput
  | DescribeWorkspacesConnectionStatusCommandOutput
  | DisassociateIpGroupsCommandOutput
  | ImportWorkspaceImageCommandOutput
  | ListAvailableManagementCidrRangesCommandOutput
  | MigrateWorkspaceCommandOutput
  | ModifyAccountCommandOutput
  | ModifyClientPropertiesCommandOutput
  | ModifySelfservicePermissionsCommandOutput
  | ModifyWorkspaceAccessPropertiesCommandOutput
  | ModifyWorkspaceCreationPropertiesCommandOutput
  | ModifyWorkspacePropertiesCommandOutput
  | ModifyWorkspaceStateCommandOutput
  | RebootWorkspacesCommandOutput
  | RebuildWorkspacesCommandOutput
  | RegisterWorkspaceDirectoryCommandOutput
  | RestoreWorkspaceCommandOutput
  | RevokeIpRulesCommandOutput
  | StartWorkspacesCommandOutput
  | StopWorkspacesCommandOutput
  | TerminateWorkspacesCommandOutput
  | UpdateRulesOfIpGroupCommandOutput
  | UpdateWorkspaceImagePermissionCommandOutput;

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

export type WorkSpacesClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type WorkSpacesClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Amazon WorkSpaces Service</fullname>
 *          <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows and
 *          Amazon Linux desktops for your users.</p>
 */
export class WorkSpacesClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesClientResolvedConfig
> {
  readonly config: WorkSpacesClientResolvedConfig;

  constructor(configuration: WorkSpacesClientConfig) {
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
