import { AssociateAssetsCommandInput, AssociateAssetsCommandOutput } from "./commands/AssociateAssetsCommand.ts";
import {
  BatchAssociateProjectAssetsCommandInput,
  BatchAssociateProjectAssetsCommandOutput,
} from "./commands/BatchAssociateProjectAssetsCommand.ts";
import {
  BatchDisassociateProjectAssetsCommandInput,
  BatchDisassociateProjectAssetsCommandOutput,
} from "./commands/BatchDisassociateProjectAssetsCommand.ts";
import {
  BatchPutAssetPropertyValueCommandInput,
  BatchPutAssetPropertyValueCommandOutput,
} from "./commands/BatchPutAssetPropertyValueCommand.ts";
import {
  CreateAccessPolicyCommandInput,
  CreateAccessPolicyCommandOutput,
} from "./commands/CreateAccessPolicyCommand.ts";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand.ts";
import { CreateAssetModelCommandInput, CreateAssetModelCommandOutput } from "./commands/CreateAssetModelCommand.ts";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand.ts";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand.ts";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "./commands/CreatePortalCommand.ts";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand.ts";
import {
  DeleteAccessPolicyCommandInput,
  DeleteAccessPolicyCommandOutput,
} from "./commands/DeleteAccessPolicyCommand.ts";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand.ts";
import { DeleteAssetModelCommandInput, DeleteAssetModelCommandOutput } from "./commands/DeleteAssetModelCommand.ts";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand.ts";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand.ts";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "./commands/DeletePortalCommand.ts";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand.ts";
import {
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
} from "./commands/DescribeAccessPolicyCommand.ts";
import { DescribeAssetCommandInput, DescribeAssetCommandOutput } from "./commands/DescribeAssetCommand.ts";
import {
  DescribeAssetModelCommandInput,
  DescribeAssetModelCommandOutput,
} from "./commands/DescribeAssetModelCommand.ts";
import {
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
} from "./commands/DescribeAssetPropertyCommand.ts";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "./commands/DescribeDashboardCommand.ts";
import {
  DescribeGatewayCapabilityConfigurationCommandInput,
  DescribeGatewayCapabilityConfigurationCommandOutput,
} from "./commands/DescribeGatewayCapabilityConfigurationCommand.ts";
import { DescribeGatewayCommandInput, DescribeGatewayCommandOutput } from "./commands/DescribeGatewayCommand.ts";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand.ts";
import { DescribePortalCommandInput, DescribePortalCommandOutput } from "./commands/DescribePortalCommand.ts";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand.ts";
import {
  DisassociateAssetsCommandInput,
  DisassociateAssetsCommandOutput,
} from "./commands/DisassociateAssetsCommand.ts";
import {
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
} from "./commands/GetAssetPropertyAggregatesCommand.ts";
import {
  GetAssetPropertyValueCommandInput,
  GetAssetPropertyValueCommandOutput,
} from "./commands/GetAssetPropertyValueCommand.ts";
import {
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "./commands/GetAssetPropertyValueHistoryCommand.ts";
import {
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "./commands/ListAccessPoliciesCommand.ts";
import { ListAssetModelsCommandInput, ListAssetModelsCommandOutput } from "./commands/ListAssetModelsCommand.ts";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand.ts";
import {
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "./commands/ListAssociatedAssetsCommand.ts";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand.ts";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand.ts";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand.ts";
import { ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput } from "./commands/ListProjectAssetsCommand.ts";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "./commands/PutLoggingOptionsCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateAccessPolicyCommandInput,
  UpdateAccessPolicyCommandOutput,
} from "./commands/UpdateAccessPolicyCommand.ts";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand.ts";
import { UpdateAssetModelCommandInput, UpdateAssetModelCommandOutput } from "./commands/UpdateAssetModelCommand.ts";
import {
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
} from "./commands/UpdateAssetPropertyCommand.ts";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand.ts";
import {
  UpdateGatewayCapabilityConfigurationCommandInput,
  UpdateGatewayCapabilityConfigurationCommandOutput,
} from "./commands/UpdateGatewayCapabilityConfigurationCommand.ts";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "./commands/UpdateGatewayCommand.ts";
import { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "./commands/UpdatePortalCommand.ts";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand.ts";
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
  | AssociateAssetsCommandInput
  | BatchAssociateProjectAssetsCommandInput
  | BatchDisassociateProjectAssetsCommandInput
  | BatchPutAssetPropertyValueCommandInput
  | CreateAccessPolicyCommandInput
  | CreateAssetCommandInput
  | CreateAssetModelCommandInput
  | CreateDashboardCommandInput
  | CreateGatewayCommandInput
  | CreatePortalCommandInput
  | CreateProjectCommandInput
  | DeleteAccessPolicyCommandInput
  | DeleteAssetCommandInput
  | DeleteAssetModelCommandInput
  | DeleteDashboardCommandInput
  | DeleteGatewayCommandInput
  | DeletePortalCommandInput
  | DeleteProjectCommandInput
  | DescribeAccessPolicyCommandInput
  | DescribeAssetCommandInput
  | DescribeAssetModelCommandInput
  | DescribeAssetPropertyCommandInput
  | DescribeDashboardCommandInput
  | DescribeGatewayCapabilityConfigurationCommandInput
  | DescribeGatewayCommandInput
  | DescribeLoggingOptionsCommandInput
  | DescribePortalCommandInput
  | DescribeProjectCommandInput
  | DisassociateAssetsCommandInput
  | GetAssetPropertyAggregatesCommandInput
  | GetAssetPropertyValueCommandInput
  | GetAssetPropertyValueHistoryCommandInput
  | ListAccessPoliciesCommandInput
  | ListAssetModelsCommandInput
  | ListAssetsCommandInput
  | ListAssociatedAssetsCommandInput
  | ListDashboardsCommandInput
  | ListGatewaysCommandInput
  | ListPortalsCommandInput
  | ListProjectAssetsCommandInput
  | ListProjectsCommandInput
  | ListTagsForResourceCommandInput
  | PutLoggingOptionsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccessPolicyCommandInput
  | UpdateAssetCommandInput
  | UpdateAssetModelCommandInput
  | UpdateAssetPropertyCommandInput
  | UpdateDashboardCommandInput
  | UpdateGatewayCapabilityConfigurationCommandInput
  | UpdateGatewayCommandInput
  | UpdatePortalCommandInput
  | UpdateProjectCommandInput;

export type ServiceOutputTypes =
  | AssociateAssetsCommandOutput
  | BatchAssociateProjectAssetsCommandOutput
  | BatchDisassociateProjectAssetsCommandOutput
  | BatchPutAssetPropertyValueCommandOutput
  | CreateAccessPolicyCommandOutput
  | CreateAssetCommandOutput
  | CreateAssetModelCommandOutput
  | CreateDashboardCommandOutput
  | CreateGatewayCommandOutput
  | CreatePortalCommandOutput
  | CreateProjectCommandOutput
  | DeleteAccessPolicyCommandOutput
  | DeleteAssetCommandOutput
  | DeleteAssetModelCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteGatewayCommandOutput
  | DeletePortalCommandOutput
  | DeleteProjectCommandOutput
  | DescribeAccessPolicyCommandOutput
  | DescribeAssetCommandOutput
  | DescribeAssetModelCommandOutput
  | DescribeAssetPropertyCommandOutput
  | DescribeDashboardCommandOutput
  | DescribeGatewayCapabilityConfigurationCommandOutput
  | DescribeGatewayCommandOutput
  | DescribeLoggingOptionsCommandOutput
  | DescribePortalCommandOutput
  | DescribeProjectCommandOutput
  | DisassociateAssetsCommandOutput
  | GetAssetPropertyAggregatesCommandOutput
  | GetAssetPropertyValueCommandOutput
  | GetAssetPropertyValueHistoryCommandOutput
  | ListAccessPoliciesCommandOutput
  | ListAssetModelsCommandOutput
  | ListAssetsCommandOutput
  | ListAssociatedAssetsCommandOutput
  | ListDashboardsCommandOutput
  | ListGatewaysCommandOutput
  | ListPortalsCommandOutput
  | ListProjectAssetsCommandOutput
  | ListProjectsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutLoggingOptionsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessPolicyCommandOutput
  | UpdateAssetCommandOutput
  | UpdateAssetModelCommandOutput
  | UpdateAssetPropertyCommandOutput
  | UpdateDashboardCommandOutput
  | UpdateGatewayCapabilityConfigurationCommandOutput
  | UpdateGatewayCommandOutput
  | UpdatePortalCommandOutput
  | UpdateProjectCommandOutput;

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

export type IoTSiteWiseClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type IoTSiteWiseClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Welcome to the AWS IoT SiteWise API Reference. AWS IoT SiteWise is an AWS service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the AWS Cloud. For more information, see the
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">AWS IoT SiteWise User Guide</a>. For information about AWS IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export class IoTSiteWiseClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTSiteWiseClientResolvedConfig
> {
  readonly config: IoTSiteWiseClientResolvedConfig;

  constructor(configuration: IoTSiteWiseClientConfig) {
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
