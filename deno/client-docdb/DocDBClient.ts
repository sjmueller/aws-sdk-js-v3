
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand.ts";
import {
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand.ts";
import {
  CopyDBClusterParameterGroupCommandInput,
  CopyDBClusterParameterGroupCommandOutput,
} from "./commands/CopyDBClusterParameterGroupCommand.ts";
import {
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput,
} from "./commands/CopyDBClusterSnapshotCommand.ts";
import { CreateDBClusterCommandInput, CreateDBClusterCommandOutput } from "./commands/CreateDBClusterCommand.ts";
import {
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput,
} from "./commands/CreateDBClusterParameterGroupCommand.ts";
import {
  CreateDBClusterSnapshotCommandInput,
  CreateDBClusterSnapshotCommandOutput,
} from "./commands/CreateDBClusterSnapshotCommand.ts";
import { CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput } from "./commands/CreateDBInstanceCommand.ts";
import {
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput,
} from "./commands/CreateDBSubnetGroupCommand.ts";
import { DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput } from "./commands/DeleteDBClusterCommand.ts";
import {
  DeleteDBClusterParameterGroupCommandInput,
  DeleteDBClusterParameterGroupCommandOutput,
} from "./commands/DeleteDBClusterParameterGroupCommand.ts";
import {
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
} from "./commands/DeleteDBClusterSnapshotCommand.ts";
import { DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput } from "./commands/DeleteDBInstanceCommand.ts";
import {
  DeleteDBSubnetGroupCommandInput,
  DeleteDBSubnetGroupCommandOutput,
} from "./commands/DeleteDBSubnetGroupCommand.ts";
import {
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "./commands/DescribeCertificatesCommand.ts";
import {
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "./commands/DescribeDBClusterParameterGroupsCommand.ts";
import {
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "./commands/DescribeDBClusterParametersCommand.ts";
import {
  DescribeDBClusterSnapshotAttributesCommandInput,
  DescribeDBClusterSnapshotAttributesCommandOutput,
} from "./commands/DescribeDBClusterSnapshotAttributesCommand.ts";
import {
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "./commands/DescribeDBClusterSnapshotsCommand.ts";
import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "./commands/DescribeDBClustersCommand.ts";
import {
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "./commands/DescribeDBEngineVersionsCommand.ts";
import {
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "./commands/DescribeDBInstancesCommand.ts";
import {
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "./commands/DescribeDBSubnetGroupsCommand.ts";
import {
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput,
} from "./commands/DescribeEngineDefaultClusterParametersCommand.ts";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand.ts";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand.ts";
import {
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "./commands/DescribeOrderableDBInstanceOptionsCommand.ts";
import {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "./commands/DescribePendingMaintenanceActionsCommand.ts";
import { FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput } from "./commands/FailoverDBClusterCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput } from "./commands/ModifyDBClusterCommand.ts";
import {
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
} from "./commands/ModifyDBClusterParameterGroupCommand.ts";
import {
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
} from "./commands/ModifyDBClusterSnapshotAttributeCommand.ts";
import { ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput } from "./commands/ModifyDBInstanceCommand.ts";
import {
  ModifyDBSubnetGroupCommandInput,
  ModifyDBSubnetGroupCommandOutput,
} from "./commands/ModifyDBSubnetGroupCommand.ts";
import { RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput } from "./commands/RebootDBInstanceCommand.ts";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand.ts";
import {
  ResetDBClusterParameterGroupCommandInput,
  ResetDBClusterParameterGroupCommandOutput,
} from "./commands/ResetDBClusterParameterGroupCommand.ts";
import {
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
} from "./commands/RestoreDBClusterFromSnapshotCommand.ts";
import {
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
} from "./commands/RestoreDBClusterToPointInTimeCommand.ts";
import { StartDBClusterCommandInput, StartDBClusterCommandOutput } from "./commands/StartDBClusterCommand.ts";
import { StopDBClusterCommandInput, StopDBClusterCommandOutput } from "./commands/StopDBClusterCommand.ts";
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
  | AddTagsToResourceCommandInput
  | ApplyPendingMaintenanceActionCommandInput
  | CopyDBClusterParameterGroupCommandInput
  | CopyDBClusterSnapshotCommandInput
  | CreateDBClusterCommandInput
  | CreateDBClusterParameterGroupCommandInput
  | CreateDBClusterSnapshotCommandInput
  | CreateDBInstanceCommandInput
  | CreateDBSubnetGroupCommandInput
  | DeleteDBClusterCommandInput
  | DeleteDBClusterParameterGroupCommandInput
  | DeleteDBClusterSnapshotCommandInput
  | DeleteDBInstanceCommandInput
  | DeleteDBSubnetGroupCommandInput
  | DescribeCertificatesCommandInput
  | DescribeDBClusterParameterGroupsCommandInput
  | DescribeDBClusterParametersCommandInput
  | DescribeDBClusterSnapshotAttributesCommandInput
  | DescribeDBClusterSnapshotsCommandInput
  | DescribeDBClustersCommandInput
  | DescribeDBEngineVersionsCommandInput
  | DescribeDBInstancesCommandInput
  | DescribeDBSubnetGroupsCommandInput
  | DescribeEngineDefaultClusterParametersCommandInput
  | DescribeEventCategoriesCommandInput
  | DescribeEventsCommandInput
  | DescribeOrderableDBInstanceOptionsCommandInput
  | DescribePendingMaintenanceActionsCommandInput
  | FailoverDBClusterCommandInput
  | ListTagsForResourceCommandInput
  | ModifyDBClusterCommandInput
  | ModifyDBClusterParameterGroupCommandInput
  | ModifyDBClusterSnapshotAttributeCommandInput
  | ModifyDBInstanceCommandInput
  | ModifyDBSubnetGroupCommandInput
  | RebootDBInstanceCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetDBClusterParameterGroupCommandInput
  | RestoreDBClusterFromSnapshotCommandInput
  | RestoreDBClusterToPointInTimeCommandInput
  | StartDBClusterCommandInput
  | StopDBClusterCommandInput;

export type ServiceOutputTypes =
  | AddTagsToResourceCommandOutput
  | ApplyPendingMaintenanceActionCommandOutput
  | CopyDBClusterParameterGroupCommandOutput
  | CopyDBClusterSnapshotCommandOutput
  | CreateDBClusterCommandOutput
  | CreateDBClusterParameterGroupCommandOutput
  | CreateDBClusterSnapshotCommandOutput
  | CreateDBInstanceCommandOutput
  | CreateDBSubnetGroupCommandOutput
  | DeleteDBClusterCommandOutput
  | DeleteDBClusterParameterGroupCommandOutput
  | DeleteDBClusterSnapshotCommandOutput
  | DeleteDBInstanceCommandOutput
  | DeleteDBSubnetGroupCommandOutput
  | DescribeCertificatesCommandOutput
  | DescribeDBClusterParameterGroupsCommandOutput
  | DescribeDBClusterParametersCommandOutput
  | DescribeDBClusterSnapshotAttributesCommandOutput
  | DescribeDBClusterSnapshotsCommandOutput
  | DescribeDBClustersCommandOutput
  | DescribeDBEngineVersionsCommandOutput
  | DescribeDBInstancesCommandOutput
  | DescribeDBSubnetGroupsCommandOutput
  | DescribeEngineDefaultClusterParametersCommandOutput
  | DescribeEventCategoriesCommandOutput
  | DescribeEventsCommandOutput
  | DescribeOrderableDBInstanceOptionsCommandOutput
  | DescribePendingMaintenanceActionsCommandOutput
  | FailoverDBClusterCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyDBClusterCommandOutput
  | ModifyDBClusterParameterGroupCommandOutput
  | ModifyDBClusterSnapshotAttributeCommandOutput
  | ModifyDBInstanceCommandOutput
  | ModifyDBSubnetGroupCommandOutput
  | RebootDBInstanceCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetDBClusterParameterGroupCommandOutput
  | RestoreDBClusterFromSnapshotCommandOutput
  | RestoreDBClusterToPointInTimeCommandOutput
  | StartDBClusterCommandOutput
  | StopDBClusterCommandOutput;

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

export type DocDBClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DocDBClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Amazon DocumentDB API documentation</p>
 */
export class DocDBClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DocDBClientResolvedConfig
> {
  readonly config: DocDBClientResolvedConfig;

  constructor(configuration: DocDBClientConfig) {
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
