import { ActivateGatewayCommandInput, ActivateGatewayCommandOutput } from "./commands/ActivateGatewayCommand.ts";
import { AddCacheCommandInput, AddCacheCommandOutput } from "./commands/AddCacheCommand.ts";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand.ts";
import { AddUploadBufferCommandInput, AddUploadBufferCommandOutput } from "./commands/AddUploadBufferCommand.ts";
import { AddWorkingStorageCommandInput, AddWorkingStorageCommandOutput } from "./commands/AddWorkingStorageCommand.ts";
import { AssignTapePoolCommandInput, AssignTapePoolCommandOutput } from "./commands/AssignTapePoolCommand.ts";
import {
  AssociateFileSystemCommandInput,
  AssociateFileSystemCommandOutput,
} from "./commands/AssociateFileSystemCommand.ts";
import { AttachVolumeCommandInput, AttachVolumeCommandOutput } from "./commands/AttachVolumeCommand.ts";
import { CancelArchivalCommandInput, CancelArchivalCommandOutput } from "./commands/CancelArchivalCommand.ts";
import { CancelRetrievalCommandInput, CancelRetrievalCommandOutput } from "./commands/CancelRetrievalCommand.ts";
import {
  CreateCachediSCSIVolumeCommandInput,
  CreateCachediSCSIVolumeCommandOutput,
} from "./commands/CreateCachediSCSIVolumeCommand.ts";
import { CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput } from "./commands/CreateNFSFileShareCommand.ts";
import { CreateSMBFileShareCommandInput, CreateSMBFileShareCommandOutput } from "./commands/CreateSMBFileShareCommand.ts";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand.ts";
import {
  CreateSnapshotFromVolumeRecoveryPointCommandInput,
  CreateSnapshotFromVolumeRecoveryPointCommandOutput,
} from "./commands/CreateSnapshotFromVolumeRecoveryPointCommand.ts";
import {
  CreateStorediSCSIVolumeCommandInput,
  CreateStorediSCSIVolumeCommandOutput,
} from "./commands/CreateStorediSCSIVolumeCommand.ts";
import { CreateTapePoolCommandInput, CreateTapePoolCommandOutput } from "./commands/CreateTapePoolCommand.ts";
import {
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput,
} from "./commands/CreateTapeWithBarcodeCommand.ts";
import { CreateTapesCommandInput, CreateTapesCommandOutput } from "./commands/CreateTapesCommand.ts";
import {
  DeleteAutomaticTapeCreationPolicyCommandInput,
  DeleteAutomaticTapeCreationPolicyCommandOutput,
} from "./commands/DeleteAutomaticTapeCreationPolicyCommand.ts";
import {
  DeleteBandwidthRateLimitCommandInput,
  DeleteBandwidthRateLimitCommandOutput,
} from "./commands/DeleteBandwidthRateLimitCommand.ts";
import {
  DeleteChapCredentialsCommandInput,
  DeleteChapCredentialsCommandOutput,
} from "./commands/DeleteChapCredentialsCommand.ts";
import { DeleteFileShareCommandInput, DeleteFileShareCommandOutput } from "./commands/DeleteFileShareCommand.ts";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand.ts";
import {
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "./commands/DeleteSnapshotScheduleCommand.ts";
import { DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput } from "./commands/DeleteTapeArchiveCommand.ts";
import { DeleteTapeCommandInput, DeleteTapeCommandOutput } from "./commands/DeleteTapeCommand.ts";
import { DeleteTapePoolCommandInput, DeleteTapePoolCommandOutput } from "./commands/DeleteTapePoolCommand.ts";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "./commands/DeleteVolumeCommand.ts";
import {
  DescribeAvailabilityMonitorTestCommandInput,
  DescribeAvailabilityMonitorTestCommandOutput,
} from "./commands/DescribeAvailabilityMonitorTestCommand.ts";
import {
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput,
} from "./commands/DescribeBandwidthRateLimitCommand.ts";
import {
  DescribeBandwidthRateLimitScheduleCommandInput,
  DescribeBandwidthRateLimitScheduleCommandOutput,
} from "./commands/DescribeBandwidthRateLimitScheduleCommand.ts";
import { DescribeCacheCommandInput, DescribeCacheCommandOutput } from "./commands/DescribeCacheCommand.ts";
import {
  DescribeCachediSCSIVolumesCommandInput,
  DescribeCachediSCSIVolumesCommandOutput,
} from "./commands/DescribeCachediSCSIVolumesCommand.ts";
import {
  DescribeChapCredentialsCommandInput,
  DescribeChapCredentialsCommandOutput,
} from "./commands/DescribeChapCredentialsCommand.ts";
import {
  DescribeFileSystemAssociationsCommandInput,
  DescribeFileSystemAssociationsCommandOutput,
} from "./commands/DescribeFileSystemAssociationsCommand.ts";
import {
  DescribeGatewayInformationCommandInput,
  DescribeGatewayInformationCommandOutput,
} from "./commands/DescribeGatewayInformationCommand.ts";
import {
  DescribeMaintenanceStartTimeCommandInput,
  DescribeMaintenanceStartTimeCommandOutput,
} from "./commands/DescribeMaintenanceStartTimeCommand.ts";
import {
  DescribeNFSFileSharesCommandInput,
  DescribeNFSFileSharesCommandOutput,
} from "./commands/DescribeNFSFileSharesCommand.ts";
import {
  DescribeSMBFileSharesCommandInput,
  DescribeSMBFileSharesCommandOutput,
} from "./commands/DescribeSMBFileSharesCommand.ts";
import {
  DescribeSMBSettingsCommandInput,
  DescribeSMBSettingsCommandOutput,
} from "./commands/DescribeSMBSettingsCommand.ts";
import {
  DescribeSnapshotScheduleCommandInput,
  DescribeSnapshotScheduleCommandOutput,
} from "./commands/DescribeSnapshotScheduleCommand.ts";
import {
  DescribeStorediSCSIVolumesCommandInput,
  DescribeStorediSCSIVolumesCommandOutput,
} from "./commands/DescribeStorediSCSIVolumesCommand.ts";
import {
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
} from "./commands/DescribeTapeArchivesCommand.ts";
import {
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
} from "./commands/DescribeTapeRecoveryPointsCommand.ts";
import { DescribeTapesCommandInput, DescribeTapesCommandOutput } from "./commands/DescribeTapesCommand.ts";
import {
  DescribeUploadBufferCommandInput,
  DescribeUploadBufferCommandOutput,
} from "./commands/DescribeUploadBufferCommand.ts";
import { DescribeVTLDevicesCommandInput, DescribeVTLDevicesCommandOutput } from "./commands/DescribeVTLDevicesCommand.ts";
import {
  DescribeWorkingStorageCommandInput,
  DescribeWorkingStorageCommandOutput,
} from "./commands/DescribeWorkingStorageCommand.ts";
import { DetachVolumeCommandInput, DetachVolumeCommandOutput } from "./commands/DetachVolumeCommand.ts";
import { DisableGatewayCommandInput, DisableGatewayCommandOutput } from "./commands/DisableGatewayCommand.ts";
import {
  DisassociateFileSystemCommandInput,
  DisassociateFileSystemCommandOutput,
} from "./commands/DisassociateFileSystemCommand.ts";
import { JoinDomainCommandInput, JoinDomainCommandOutput } from "./commands/JoinDomainCommand.ts";
import {
  ListAutomaticTapeCreationPoliciesCommandInput,
  ListAutomaticTapeCreationPoliciesCommandOutput,
} from "./commands/ListAutomaticTapeCreationPoliciesCommand.ts";
import { ListFileSharesCommandInput, ListFileSharesCommandOutput } from "./commands/ListFileSharesCommand.ts";
import {
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
} from "./commands/ListFileSystemAssociationsCommand.ts";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand.ts";
import { ListLocalDisksCommandInput, ListLocalDisksCommandOutput } from "./commands/ListLocalDisksCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListTapePoolsCommandInput, ListTapePoolsCommandOutput } from "./commands/ListTapePoolsCommand.ts";
import { ListTapesCommandInput, ListTapesCommandOutput } from "./commands/ListTapesCommand.ts";
import {
  ListVolumeInitiatorsCommandInput,
  ListVolumeInitiatorsCommandOutput,
} from "./commands/ListVolumeInitiatorsCommand.ts";
import {
  ListVolumeRecoveryPointsCommandInput,
  ListVolumeRecoveryPointsCommandOutput,
} from "./commands/ListVolumeRecoveryPointsCommand.ts";
import { ListVolumesCommandInput, ListVolumesCommandOutput } from "./commands/ListVolumesCommand.ts";
import { NotifyWhenUploadedCommandInput, NotifyWhenUploadedCommandOutput } from "./commands/NotifyWhenUploadedCommand.ts";
import { RefreshCacheCommandInput, RefreshCacheCommandOutput } from "./commands/RefreshCacheCommand.ts";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand.ts";
import { ResetCacheCommandInput, ResetCacheCommandOutput } from "./commands/ResetCacheCommand.ts";
import {
  RetrieveTapeArchiveCommandInput,
  RetrieveTapeArchiveCommandOutput,
} from "./commands/RetrieveTapeArchiveCommand.ts";
import {
  RetrieveTapeRecoveryPointCommandInput,
  RetrieveTapeRecoveryPointCommandOutput,
} from "./commands/RetrieveTapeRecoveryPointCommand.ts";
import {
  SetLocalConsolePasswordCommandInput,
  SetLocalConsolePasswordCommandOutput,
} from "./commands/SetLocalConsolePasswordCommand.ts";
import {
  SetSMBGuestPasswordCommandInput,
  SetSMBGuestPasswordCommandOutput,
} from "./commands/SetSMBGuestPasswordCommand.ts";
import { ShutdownGatewayCommandInput, ShutdownGatewayCommandOutput } from "./commands/ShutdownGatewayCommand.ts";
import {
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput,
} from "./commands/StartAvailabilityMonitorTestCommand.ts";
import { StartGatewayCommandInput, StartGatewayCommandOutput } from "./commands/StartGatewayCommand.ts";
import {
  UpdateAutomaticTapeCreationPolicyCommandInput,
  UpdateAutomaticTapeCreationPolicyCommandOutput,
} from "./commands/UpdateAutomaticTapeCreationPolicyCommand.ts";
import {
  UpdateBandwidthRateLimitCommandInput,
  UpdateBandwidthRateLimitCommandOutput,
} from "./commands/UpdateBandwidthRateLimitCommand.ts";
import {
  UpdateBandwidthRateLimitScheduleCommandInput,
  UpdateBandwidthRateLimitScheduleCommandOutput,
} from "./commands/UpdateBandwidthRateLimitScheduleCommand.ts";
import {
  UpdateChapCredentialsCommandInput,
  UpdateChapCredentialsCommandOutput,
} from "./commands/UpdateChapCredentialsCommand.ts";
import {
  UpdateFileSystemAssociationCommandInput,
  UpdateFileSystemAssociationCommandOutput,
} from "./commands/UpdateFileSystemAssociationCommand.ts";
import {
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
} from "./commands/UpdateGatewayInformationCommand.ts";
import {
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
} from "./commands/UpdateGatewaySoftwareNowCommand.ts";
import {
  UpdateMaintenanceStartTimeCommandInput,
  UpdateMaintenanceStartTimeCommandOutput,
} from "./commands/UpdateMaintenanceStartTimeCommand.ts";
import { UpdateNFSFileShareCommandInput, UpdateNFSFileShareCommandOutput } from "./commands/UpdateNFSFileShareCommand.ts";
import { UpdateSMBFileShareCommandInput, UpdateSMBFileShareCommandOutput } from "./commands/UpdateSMBFileShareCommand.ts";
import {
  UpdateSMBFileShareVisibilityCommandInput,
  UpdateSMBFileShareVisibilityCommandOutput,
} from "./commands/UpdateSMBFileShareVisibilityCommand.ts";
import {
  UpdateSMBSecurityStrategyCommandInput,
  UpdateSMBSecurityStrategyCommandOutput,
} from "./commands/UpdateSMBSecurityStrategyCommand.ts";
import {
  UpdateSnapshotScheduleCommandInput,
  UpdateSnapshotScheduleCommandOutput,
} from "./commands/UpdateSnapshotScheduleCommand.ts";
import {
  UpdateVTLDeviceTypeCommandInput,
  UpdateVTLDeviceTypeCommandOutput,
} from "./commands/UpdateVTLDeviceTypeCommand.ts";
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
  | ActivateGatewayCommandInput
  | AddCacheCommandInput
  | AddTagsToResourceCommandInput
  | AddUploadBufferCommandInput
  | AddWorkingStorageCommandInput
  | AssignTapePoolCommandInput
  | AssociateFileSystemCommandInput
  | AttachVolumeCommandInput
  | CancelArchivalCommandInput
  | CancelRetrievalCommandInput
  | CreateCachediSCSIVolumeCommandInput
  | CreateNFSFileShareCommandInput
  | CreateSMBFileShareCommandInput
  | CreateSnapshotCommandInput
  | CreateSnapshotFromVolumeRecoveryPointCommandInput
  | CreateStorediSCSIVolumeCommandInput
  | CreateTapePoolCommandInput
  | CreateTapeWithBarcodeCommandInput
  | CreateTapesCommandInput
  | DeleteAutomaticTapeCreationPolicyCommandInput
  | DeleteBandwidthRateLimitCommandInput
  | DeleteChapCredentialsCommandInput
  | DeleteFileShareCommandInput
  | DeleteGatewayCommandInput
  | DeleteSnapshotScheduleCommandInput
  | DeleteTapeArchiveCommandInput
  | DeleteTapeCommandInput
  | DeleteTapePoolCommandInput
  | DeleteVolumeCommandInput
  | DescribeAvailabilityMonitorTestCommandInput
  | DescribeBandwidthRateLimitCommandInput
  | DescribeBandwidthRateLimitScheduleCommandInput
  | DescribeCacheCommandInput
  | DescribeCachediSCSIVolumesCommandInput
  | DescribeChapCredentialsCommandInput
  | DescribeFileSystemAssociationsCommandInput
  | DescribeGatewayInformationCommandInput
  | DescribeMaintenanceStartTimeCommandInput
  | DescribeNFSFileSharesCommandInput
  | DescribeSMBFileSharesCommandInput
  | DescribeSMBSettingsCommandInput
  | DescribeSnapshotScheduleCommandInput
  | DescribeStorediSCSIVolumesCommandInput
  | DescribeTapeArchivesCommandInput
  | DescribeTapeRecoveryPointsCommandInput
  | DescribeTapesCommandInput
  | DescribeUploadBufferCommandInput
  | DescribeVTLDevicesCommandInput
  | DescribeWorkingStorageCommandInput
  | DetachVolumeCommandInput
  | DisableGatewayCommandInput
  | DisassociateFileSystemCommandInput
  | JoinDomainCommandInput
  | ListAutomaticTapeCreationPoliciesCommandInput
  | ListFileSharesCommandInput
  | ListFileSystemAssociationsCommandInput
  | ListGatewaysCommandInput
  | ListLocalDisksCommandInput
  | ListTagsForResourceCommandInput
  | ListTapePoolsCommandInput
  | ListTapesCommandInput
  | ListVolumeInitiatorsCommandInput
  | ListVolumeRecoveryPointsCommandInput
  | ListVolumesCommandInput
  | NotifyWhenUploadedCommandInput
  | RefreshCacheCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetCacheCommandInput
  | RetrieveTapeArchiveCommandInput
  | RetrieveTapeRecoveryPointCommandInput
  | SetLocalConsolePasswordCommandInput
  | SetSMBGuestPasswordCommandInput
  | ShutdownGatewayCommandInput
  | StartAvailabilityMonitorTestCommandInput
  | StartGatewayCommandInput
  | UpdateAutomaticTapeCreationPolicyCommandInput
  | UpdateBandwidthRateLimitCommandInput
  | UpdateBandwidthRateLimitScheduleCommandInput
  | UpdateChapCredentialsCommandInput
  | UpdateFileSystemAssociationCommandInput
  | UpdateGatewayInformationCommandInput
  | UpdateGatewaySoftwareNowCommandInput
  | UpdateMaintenanceStartTimeCommandInput
  | UpdateNFSFileShareCommandInput
  | UpdateSMBFileShareCommandInput
  | UpdateSMBFileShareVisibilityCommandInput
  | UpdateSMBSecurityStrategyCommandInput
  | UpdateSnapshotScheduleCommandInput
  | UpdateVTLDeviceTypeCommandInput;

export type ServiceOutputTypes =
  | ActivateGatewayCommandOutput
  | AddCacheCommandOutput
  | AddTagsToResourceCommandOutput
  | AddUploadBufferCommandOutput
  | AddWorkingStorageCommandOutput
  | AssignTapePoolCommandOutput
  | AssociateFileSystemCommandOutput
  | AttachVolumeCommandOutput
  | CancelArchivalCommandOutput
  | CancelRetrievalCommandOutput
  | CreateCachediSCSIVolumeCommandOutput
  | CreateNFSFileShareCommandOutput
  | CreateSMBFileShareCommandOutput
  | CreateSnapshotCommandOutput
  | CreateSnapshotFromVolumeRecoveryPointCommandOutput
  | CreateStorediSCSIVolumeCommandOutput
  | CreateTapePoolCommandOutput
  | CreateTapeWithBarcodeCommandOutput
  | CreateTapesCommandOutput
  | DeleteAutomaticTapeCreationPolicyCommandOutput
  | DeleteBandwidthRateLimitCommandOutput
  | DeleteChapCredentialsCommandOutput
  | DeleteFileShareCommandOutput
  | DeleteGatewayCommandOutput
  | DeleteSnapshotScheduleCommandOutput
  | DeleteTapeArchiveCommandOutput
  | DeleteTapeCommandOutput
  | DeleteTapePoolCommandOutput
  | DeleteVolumeCommandOutput
  | DescribeAvailabilityMonitorTestCommandOutput
  | DescribeBandwidthRateLimitCommandOutput
  | DescribeBandwidthRateLimitScheduleCommandOutput
  | DescribeCacheCommandOutput
  | DescribeCachediSCSIVolumesCommandOutput
  | DescribeChapCredentialsCommandOutput
  | DescribeFileSystemAssociationsCommandOutput
  | DescribeGatewayInformationCommandOutput
  | DescribeMaintenanceStartTimeCommandOutput
  | DescribeNFSFileSharesCommandOutput
  | DescribeSMBFileSharesCommandOutput
  | DescribeSMBSettingsCommandOutput
  | DescribeSnapshotScheduleCommandOutput
  | DescribeStorediSCSIVolumesCommandOutput
  | DescribeTapeArchivesCommandOutput
  | DescribeTapeRecoveryPointsCommandOutput
  | DescribeTapesCommandOutput
  | DescribeUploadBufferCommandOutput
  | DescribeVTLDevicesCommandOutput
  | DescribeWorkingStorageCommandOutput
  | DetachVolumeCommandOutput
  | DisableGatewayCommandOutput
  | DisassociateFileSystemCommandOutput
  | JoinDomainCommandOutput
  | ListAutomaticTapeCreationPoliciesCommandOutput
  | ListFileSharesCommandOutput
  | ListFileSystemAssociationsCommandOutput
  | ListGatewaysCommandOutput
  | ListLocalDisksCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTapePoolsCommandOutput
  | ListTapesCommandOutput
  | ListVolumeInitiatorsCommandOutput
  | ListVolumeRecoveryPointsCommandOutput
  | ListVolumesCommandOutput
  | NotifyWhenUploadedCommandOutput
  | RefreshCacheCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetCacheCommandOutput
  | RetrieveTapeArchiveCommandOutput
  | RetrieveTapeRecoveryPointCommandOutput
  | SetLocalConsolePasswordCommandOutput
  | SetSMBGuestPasswordCommandOutput
  | ShutdownGatewayCommandOutput
  | StartAvailabilityMonitorTestCommandOutput
  | StartGatewayCommandOutput
  | UpdateAutomaticTapeCreationPolicyCommandOutput
  | UpdateBandwidthRateLimitCommandOutput
  | UpdateBandwidthRateLimitScheduleCommandOutput
  | UpdateChapCredentialsCommandOutput
  | UpdateFileSystemAssociationCommandOutput
  | UpdateGatewayInformationCommandOutput
  | UpdateGatewaySoftwareNowCommandOutput
  | UpdateMaintenanceStartTimeCommandOutput
  | UpdateNFSFileShareCommandOutput
  | UpdateSMBFileShareCommandOutput
  | UpdateSMBFileShareVisibilityCommandOutput
  | UpdateSMBSecurityStrategyCommandOutput
  | UpdateSnapshotScheduleCommandOutput
  | UpdateVTLDeviceTypeCommandOutput;

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

type StorageGatewayClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of StorageGatewayClient class constructor that set the region, credentials and other options.
 */
export interface StorageGatewayClientConfig extends StorageGatewayClientConfigType {}

type StorageGatewayClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of StorageGatewayClient class. This is resolved and normalized from the {@link StorageGatewayClientConfig | constructor configuration interface}.
 */
export interface StorageGatewayClientResolvedConfig extends StorageGatewayClientResolvedConfigType {}

/**
 * <fullname>AWS Storage Gateway Service</fullname>
 *
 *          <p>AWS Storage Gateway is the service that connects an on-premises software appliance with
 *          cloud-based storage to provide seamless and secure integration between an
 *          organization's on-premises IT environment and the AWS storage infrastructure. The
 *          service enables you to securely upload data to the AWS Cloud for cost effective backup and
 *          rapid disaster recovery.</p>
 *
 *          <p>Use the following links to get started using the <i>AWS Storage Gateway Service
 *             API Reference</i>:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">AWS Storage Gateway required request headers</a>: Describes the required
 *                headers that you must send with every POST request to AWS Storage Gateway.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing requests</a>: AWS Storage Gateway requires that you authenticate
 *                every request you send; this topic describes how sign such a request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error responses</a>: Provides reference information about AWS Storage Gateway
 *                errors.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in AWS
 *                   Storage Gateway</a>: Contains detailed descriptions of all AWS Storage Gateway
 *                operations, their request parameters, response elements, possible errors, and
 *                examples of requests and responses.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">AWS Storage Gateway
 *                   endpoints and quotas</a>: Provides a list of each AWS Region and the endpoints
 *                available for use with AWS Storage Gateway.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs
 *             with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your
 *             resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the
 *             ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with
 *             the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the
 *             EC2 API might not behave as expected.</p>
 *          </note>
 *
 *          <important>
 *             <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes
 *             are changing to a longer format. Starting in December 2016, all new volumes and
 *             snapshots will be created with a 17-character string. Starting in April 2016, you will
 *             be able to use these longer IDs so you can test your systems with the new format. For
 *             more information, see <a href="http://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and
 *                EBS resource IDs</a>.</p>
 *
 *             <p>For example, a volume Amazon Resource Name (ARN) with the longer volume ID format
 *             looks like the following:</p>
 *
 *             <p>
 *                <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p>
 *
 *             <p>A snapshot ID with the longer ID format looks like the following:
 *                <code>snap-78e226633445566ee</code>.</p>
 *
 *             <p>For more information, see <a href="http://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement:
 *                Heads-up – Longer AWS Storage Gateway volume and snapshot IDs coming in
 *             2016</a>.</p>
 *          </important>
 */
export class StorageGatewayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig
> {
  /**
   * The resolved configuration of StorageGatewayClient class. This is resolved and normalized from the {@link StorageGatewayClientConfig | constructor configuration interface}.
   */
  readonly config: StorageGatewayClientResolvedConfig;

  constructor(configuration: StorageGatewayClientConfig) {
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
