
import {
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
} from "./commands/AcceptSharedDirectoryCommand.ts";
import { AddIpRoutesCommandInput, AddIpRoutesCommandOutput } from "./commands/AddIpRoutesCommand.ts";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand.ts";
import {
  CancelSchemaExtensionCommandInput,
  CancelSchemaExtensionCommandOutput,
} from "./commands/CancelSchemaExtensionCommand.ts";
import { ConnectDirectoryCommandInput, ConnectDirectoryCommandOutput } from "./commands/ConnectDirectoryCommand.ts";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand.ts";
import { CreateComputerCommandInput, CreateComputerCommandOutput } from "./commands/CreateComputerCommand.ts";
import {
  CreateConditionalForwarderCommandInput,
  CreateConditionalForwarderCommandOutput,
} from "./commands/CreateConditionalForwarderCommand.ts";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand.ts";
import {
  CreateLogSubscriptionCommandInput,
  CreateLogSubscriptionCommandOutput,
} from "./commands/CreateLogSubscriptionCommand.ts";
import { CreateMicrosoftADCommandInput, CreateMicrosoftADCommandOutput } from "./commands/CreateMicrosoftADCommand.ts";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand.ts";
import { CreateTrustCommandInput, CreateTrustCommandOutput } from "./commands/CreateTrustCommand.ts";
import {
  DeleteConditionalForwarderCommandInput,
  DeleteConditionalForwarderCommandOutput,
} from "./commands/DeleteConditionalForwarderCommand.ts";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand.ts";
import {
  DeleteLogSubscriptionCommandInput,
  DeleteLogSubscriptionCommandOutput,
} from "./commands/DeleteLogSubscriptionCommand.ts";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand.ts";
import { DeleteTrustCommandInput, DeleteTrustCommandOutput } from "./commands/DeleteTrustCommand.ts";
import {
  DeregisterCertificateCommandInput,
  DeregisterCertificateCommandOutput,
} from "./commands/DeregisterCertificateCommand.ts";
import {
  DeregisterEventTopicCommandInput,
  DeregisterEventTopicCommandOutput,
} from "./commands/DeregisterEventTopicCommand.ts";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand.ts";
import {
  DescribeConditionalForwardersCommandInput,
  DescribeConditionalForwardersCommandOutput,
} from "./commands/DescribeConditionalForwardersCommand.ts";
import {
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
} from "./commands/DescribeDirectoriesCommand.ts";
import {
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "./commands/DescribeDomainControllersCommand.ts";
import {
  DescribeEventTopicsCommandInput,
  DescribeEventTopicsCommandOutput,
} from "./commands/DescribeEventTopicsCommand.ts";
import {
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
} from "./commands/DescribeLDAPSSettingsCommand.ts";
import {
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "./commands/DescribeSharedDirectoriesCommand.ts";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand.ts";
import { DescribeTrustsCommandInput, DescribeTrustsCommandOutput } from "./commands/DescribeTrustsCommand.ts";
import { DisableLDAPSCommandInput, DisableLDAPSCommandOutput } from "./commands/DisableLDAPSCommand.ts";
import { DisableRadiusCommandInput, DisableRadiusCommandOutput } from "./commands/DisableRadiusCommand.ts";
import { DisableSsoCommandInput, DisableSsoCommandOutput } from "./commands/DisableSsoCommand.ts";
import { EnableLDAPSCommandInput, EnableLDAPSCommandOutput } from "./commands/EnableLDAPSCommand.ts";
import { EnableRadiusCommandInput, EnableRadiusCommandOutput } from "./commands/EnableRadiusCommand.ts";
import { EnableSsoCommandInput, EnableSsoCommandOutput } from "./commands/EnableSsoCommand.ts";
import { GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput } from "./commands/GetDirectoryLimitsCommand.ts";
import { GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput } from "./commands/GetSnapshotLimitsCommand.ts";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand.ts";
import { ListIpRoutesCommandInput, ListIpRoutesCommandOutput } from "./commands/ListIpRoutesCommand.ts";
import {
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput,
} from "./commands/ListLogSubscriptionsCommand.ts";
import {
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
} from "./commands/ListSchemaExtensionsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "./commands/RegisterCertificateCommand.ts";
import { RegisterEventTopicCommandInput, RegisterEventTopicCommandOutput } from "./commands/RegisterEventTopicCommand.ts";
import {
  RejectSharedDirectoryCommandInput,
  RejectSharedDirectoryCommandOutput,
} from "./commands/RejectSharedDirectoryCommand.ts";
import { RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput } from "./commands/RemoveIpRoutesCommand.ts";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand.ts";
import { ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput } from "./commands/ResetUserPasswordCommand.ts";
import {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand.ts";
import { ShareDirectoryCommandInput, ShareDirectoryCommandOutput } from "./commands/ShareDirectoryCommand.ts";
import {
  StartSchemaExtensionCommandInput,
  StartSchemaExtensionCommandOutput,
} from "./commands/StartSchemaExtensionCommand.ts";
import { UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput } from "./commands/UnshareDirectoryCommand.ts";
import {
  UpdateConditionalForwarderCommandInput,
  UpdateConditionalForwarderCommandOutput,
} from "./commands/UpdateConditionalForwarderCommand.ts";
import {
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
} from "./commands/UpdateNumberOfDomainControllersCommand.ts";
import { UpdateRadiusCommandInput, UpdateRadiusCommandOutput } from "./commands/UpdateRadiusCommand.ts";
import { UpdateTrustCommandInput, UpdateTrustCommandOutput } from "./commands/UpdateTrustCommand.ts";
import { VerifyTrustCommandInput, VerifyTrustCommandOutput } from "./commands/VerifyTrustCommand.ts";
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
  | AcceptSharedDirectoryCommandInput
  | AddIpRoutesCommandInput
  | AddTagsToResourceCommandInput
  | CancelSchemaExtensionCommandInput
  | ConnectDirectoryCommandInput
  | CreateAliasCommandInput
  | CreateComputerCommandInput
  | CreateConditionalForwarderCommandInput
  | CreateDirectoryCommandInput
  | CreateLogSubscriptionCommandInput
  | CreateMicrosoftADCommandInput
  | CreateSnapshotCommandInput
  | CreateTrustCommandInput
  | DeleteConditionalForwarderCommandInput
  | DeleteDirectoryCommandInput
  | DeleteLogSubscriptionCommandInput
  | DeleteSnapshotCommandInput
  | DeleteTrustCommandInput
  | DeregisterCertificateCommandInput
  | DeregisterEventTopicCommandInput
  | DescribeCertificateCommandInput
  | DescribeConditionalForwardersCommandInput
  | DescribeDirectoriesCommandInput
  | DescribeDomainControllersCommandInput
  | DescribeEventTopicsCommandInput
  | DescribeLDAPSSettingsCommandInput
  | DescribeSharedDirectoriesCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeTrustsCommandInput
  | DisableLDAPSCommandInput
  | DisableRadiusCommandInput
  | DisableSsoCommandInput
  | EnableLDAPSCommandInput
  | EnableRadiusCommandInput
  | EnableSsoCommandInput
  | GetDirectoryLimitsCommandInput
  | GetSnapshotLimitsCommandInput
  | ListCertificatesCommandInput
  | ListIpRoutesCommandInput
  | ListLogSubscriptionsCommandInput
  | ListSchemaExtensionsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterCertificateCommandInput
  | RegisterEventTopicCommandInput
  | RejectSharedDirectoryCommandInput
  | RemoveIpRoutesCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetUserPasswordCommandInput
  | RestoreFromSnapshotCommandInput
  | ShareDirectoryCommandInput
  | StartSchemaExtensionCommandInput
  | UnshareDirectoryCommandInput
  | UpdateConditionalForwarderCommandInput
  | UpdateNumberOfDomainControllersCommandInput
  | UpdateRadiusCommandInput
  | UpdateTrustCommandInput
  | VerifyTrustCommandInput;

export type ServiceOutputTypes =
  | AcceptSharedDirectoryCommandOutput
  | AddIpRoutesCommandOutput
  | AddTagsToResourceCommandOutput
  | CancelSchemaExtensionCommandOutput
  | ConnectDirectoryCommandOutput
  | CreateAliasCommandOutput
  | CreateComputerCommandOutput
  | CreateConditionalForwarderCommandOutput
  | CreateDirectoryCommandOutput
  | CreateLogSubscriptionCommandOutput
  | CreateMicrosoftADCommandOutput
  | CreateSnapshotCommandOutput
  | CreateTrustCommandOutput
  | DeleteConditionalForwarderCommandOutput
  | DeleteDirectoryCommandOutput
  | DeleteLogSubscriptionCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteTrustCommandOutput
  | DeregisterCertificateCommandOutput
  | DeregisterEventTopicCommandOutput
  | DescribeCertificateCommandOutput
  | DescribeConditionalForwardersCommandOutput
  | DescribeDirectoriesCommandOutput
  | DescribeDomainControllersCommandOutput
  | DescribeEventTopicsCommandOutput
  | DescribeLDAPSSettingsCommandOutput
  | DescribeSharedDirectoriesCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeTrustsCommandOutput
  | DisableLDAPSCommandOutput
  | DisableRadiusCommandOutput
  | DisableSsoCommandOutput
  | EnableLDAPSCommandOutput
  | EnableRadiusCommandOutput
  | EnableSsoCommandOutput
  | GetDirectoryLimitsCommandOutput
  | GetSnapshotLimitsCommandOutput
  | ListCertificatesCommandOutput
  | ListIpRoutesCommandOutput
  | ListLogSubscriptionsCommandOutput
  | ListSchemaExtensionsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterCertificateCommandOutput
  | RegisterEventTopicCommandOutput
  | RejectSharedDirectoryCommandOutput
  | RemoveIpRoutesCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetUserPasswordCommandOutput
  | RestoreFromSnapshotCommandOutput
  | ShareDirectoryCommandOutput
  | StartSchemaExtensionCommandOutput
  | UnshareDirectoryCommandOutput
  | UpdateConditionalForwarderCommandOutput
  | UpdateNumberOfDomainControllersCommandOutput
  | UpdateRadiusCommandOutput
  | UpdateTrustCommandOutput
  | VerifyTrustCommandOutput;

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

export type DirectoryServiceClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DirectoryServiceClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Directory Service</fullname>
 *          <p>AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *          Services</a>.</p>
 *          </note>
 */
export class DirectoryServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DirectoryServiceClientResolvedConfig
> {
  readonly config: DirectoryServiceClientResolvedConfig;

  constructor(configuration: DirectoryServiceClientConfig) {
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
