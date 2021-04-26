import { CreateDevicePoolCommandInput, CreateDevicePoolCommandOutput } from "./commands/CreateDevicePoolCommand.ts";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand.ts";
import {
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
} from "./commands/CreateNetworkProfileCommand.ts";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand.ts";
import {
  CreateRemoteAccessSessionCommandInput,
  CreateRemoteAccessSessionCommandOutput,
} from "./commands/CreateRemoteAccessSessionCommand.ts";
import {
  CreateTestGridProjectCommandInput,
  CreateTestGridProjectCommandOutput,
} from "./commands/CreateTestGridProjectCommand.ts";
import { CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput } from "./commands/CreateTestGridUrlCommand.ts";
import { CreateUploadCommandInput, CreateUploadCommandOutput } from "./commands/CreateUploadCommand.ts";
import {
  CreateVPCEConfigurationCommandInput,
  CreateVPCEConfigurationCommandOutput,
} from "./commands/CreateVPCEConfigurationCommand.ts";
import { DeleteDevicePoolCommandInput, DeleteDevicePoolCommandOutput } from "./commands/DeleteDevicePoolCommand.ts";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand.ts";
import {
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
} from "./commands/DeleteNetworkProfileCommand.ts";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand.ts";
import {
  DeleteRemoteAccessSessionCommandInput,
  DeleteRemoteAccessSessionCommandOutput,
} from "./commands/DeleteRemoteAccessSessionCommand.ts";
import { DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand.ts";
import {
  DeleteTestGridProjectCommandInput,
  DeleteTestGridProjectCommandOutput,
} from "./commands/DeleteTestGridProjectCommand.ts";
import { DeleteUploadCommandInput, DeleteUploadCommandOutput } from "./commands/DeleteUploadCommand.ts";
import {
  DeleteVPCEConfigurationCommandInput,
  DeleteVPCEConfigurationCommandOutput,
} from "./commands/DeleteVPCEConfigurationCommand.ts";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand.ts";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand.ts";
import { GetDeviceInstanceCommandInput, GetDeviceInstanceCommandOutput } from "./commands/GetDeviceInstanceCommand.ts";
import { GetDevicePoolCommandInput, GetDevicePoolCommandOutput } from "./commands/GetDevicePoolCommand.ts";
import {
  GetDevicePoolCompatibilityCommandInput,
  GetDevicePoolCompatibilityCommandOutput,
} from "./commands/GetDevicePoolCompatibilityCommand.ts";
import { GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput } from "./commands/GetInstanceProfileCommand.ts";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand.ts";
import { GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput } from "./commands/GetNetworkProfileCommand.ts";
import { GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput } from "./commands/GetOfferingStatusCommand.ts";
import { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand.ts";
import {
  GetRemoteAccessSessionCommandInput,
  GetRemoteAccessSessionCommandOutput,
} from "./commands/GetRemoteAccessSessionCommand.ts";
import { GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand.ts";
import { GetSuiteCommandInput, GetSuiteCommandOutput } from "./commands/GetSuiteCommand.ts";
import { GetTestCommandInput, GetTestCommandOutput } from "./commands/GetTestCommand.ts";
import { GetTestGridProjectCommandInput, GetTestGridProjectCommandOutput } from "./commands/GetTestGridProjectCommand.ts";
import { GetTestGridSessionCommandInput, GetTestGridSessionCommandOutput } from "./commands/GetTestGridSessionCommand.ts";
import { GetUploadCommandInput, GetUploadCommandOutput } from "./commands/GetUploadCommand.ts";
import {
  GetVPCEConfigurationCommandInput,
  GetVPCEConfigurationCommandOutput,
} from "./commands/GetVPCEConfigurationCommand.ts";
import {
  InstallToRemoteAccessSessionCommandInput,
  InstallToRemoteAccessSessionCommandOutput,
} from "./commands/InstallToRemoteAccessSessionCommand.ts";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "./commands/ListArtifactsCommand.ts";
import {
  ListDeviceInstancesCommandInput,
  ListDeviceInstancesCommandOutput,
} from "./commands/ListDeviceInstancesCommand.ts";
import { ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput } from "./commands/ListDevicePoolsCommand.ts";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand.ts";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand.ts";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand.ts";
import {
  ListNetworkProfilesCommandInput,
  ListNetworkProfilesCommandOutput,
} from "./commands/ListNetworkProfilesCommand.ts";
import {
  ListOfferingPromotionsCommandInput,
  ListOfferingPromotionsCommandOutput,
} from "./commands/ListOfferingPromotionsCommand.ts";
import {
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
} from "./commands/ListOfferingTransactionsCommand.ts";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand.ts";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand.ts";
import {
  ListRemoteAccessSessionsCommandInput,
  ListRemoteAccessSessionsCommandOutput,
} from "./commands/ListRemoteAccessSessionsCommand.ts";
import { ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand.ts";
import { ListSamplesCommandInput, ListSamplesCommandOutput } from "./commands/ListSamplesCommand.ts";
import { ListSuitesCommandInput, ListSuitesCommandOutput } from "./commands/ListSuitesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput,
} from "./commands/ListTestGridProjectsCommand.ts";
import {
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
} from "./commands/ListTestGridSessionActionsCommand.ts";
import {
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
} from "./commands/ListTestGridSessionArtifactsCommand.ts";
import {
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput,
} from "./commands/ListTestGridSessionsCommand.ts";
import { ListTestsCommandInput, ListTestsCommandOutput } from "./commands/ListTestsCommand.ts";
import { ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput } from "./commands/ListUniqueProblemsCommand.ts";
import { ListUploadsCommandInput, ListUploadsCommandOutput } from "./commands/ListUploadsCommand.ts";
import {
  ListVPCEConfigurationsCommandInput,
  ListVPCEConfigurationsCommandOutput,
} from "./commands/ListVPCEConfigurationsCommand.ts";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand.ts";
import { RenewOfferingCommandInput, RenewOfferingCommandOutput } from "./commands/RenewOfferingCommand.ts";
import { ScheduleRunCommandInput, ScheduleRunCommandOutput } from "./commands/ScheduleRunCommand.ts";
import { StopJobCommandInput, StopJobCommandOutput } from "./commands/StopJobCommand.ts";
import {
  StopRemoteAccessSessionCommandInput,
  StopRemoteAccessSessionCommandOutput,
} from "./commands/StopRemoteAccessSessionCommand.ts";
import { StopRunCommandInput, StopRunCommandOutput } from "./commands/StopRunCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateDeviceInstanceCommandInput,
  UpdateDeviceInstanceCommandOutput,
} from "./commands/UpdateDeviceInstanceCommand.ts";
import { UpdateDevicePoolCommandInput, UpdateDevicePoolCommandOutput } from "./commands/UpdateDevicePoolCommand.ts";
import {
  UpdateInstanceProfileCommandInput,
  UpdateInstanceProfileCommandOutput,
} from "./commands/UpdateInstanceProfileCommand.ts";
import {
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
} from "./commands/UpdateNetworkProfileCommand.ts";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand.ts";
import {
  UpdateTestGridProjectCommandInput,
  UpdateTestGridProjectCommandOutput,
} from "./commands/UpdateTestGridProjectCommand.ts";
import { UpdateUploadCommandInput, UpdateUploadCommandOutput } from "./commands/UpdateUploadCommand.ts";
import {
  UpdateVPCEConfigurationCommandInput,
  UpdateVPCEConfigurationCommandOutput,
} from "./commands/UpdateVPCEConfigurationCommand.ts";
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
  | CreateDevicePoolCommandInput
  | CreateInstanceProfileCommandInput
  | CreateNetworkProfileCommandInput
  | CreateProjectCommandInput
  | CreateRemoteAccessSessionCommandInput
  | CreateTestGridProjectCommandInput
  | CreateTestGridUrlCommandInput
  | CreateUploadCommandInput
  | CreateVPCEConfigurationCommandInput
  | DeleteDevicePoolCommandInput
  | DeleteInstanceProfileCommandInput
  | DeleteNetworkProfileCommandInput
  | DeleteProjectCommandInput
  | DeleteRemoteAccessSessionCommandInput
  | DeleteRunCommandInput
  | DeleteTestGridProjectCommandInput
  | DeleteUploadCommandInput
  | DeleteVPCEConfigurationCommandInput
  | GetAccountSettingsCommandInput
  | GetDeviceCommandInput
  | GetDeviceInstanceCommandInput
  | GetDevicePoolCommandInput
  | GetDevicePoolCompatibilityCommandInput
  | GetInstanceProfileCommandInput
  | GetJobCommandInput
  | GetNetworkProfileCommandInput
  | GetOfferingStatusCommandInput
  | GetProjectCommandInput
  | GetRemoteAccessSessionCommandInput
  | GetRunCommandInput
  | GetSuiteCommandInput
  | GetTestCommandInput
  | GetTestGridProjectCommandInput
  | GetTestGridSessionCommandInput
  | GetUploadCommandInput
  | GetVPCEConfigurationCommandInput
  | InstallToRemoteAccessSessionCommandInput
  | ListArtifactsCommandInput
  | ListDeviceInstancesCommandInput
  | ListDevicePoolsCommandInput
  | ListDevicesCommandInput
  | ListInstanceProfilesCommandInput
  | ListJobsCommandInput
  | ListNetworkProfilesCommandInput
  | ListOfferingPromotionsCommandInput
  | ListOfferingTransactionsCommandInput
  | ListOfferingsCommandInput
  | ListProjectsCommandInput
  | ListRemoteAccessSessionsCommandInput
  | ListRunsCommandInput
  | ListSamplesCommandInput
  | ListSuitesCommandInput
  | ListTagsForResourceCommandInput
  | ListTestGridProjectsCommandInput
  | ListTestGridSessionActionsCommandInput
  | ListTestGridSessionArtifactsCommandInput
  | ListTestGridSessionsCommandInput
  | ListTestsCommandInput
  | ListUniqueProblemsCommandInput
  | ListUploadsCommandInput
  | ListVPCEConfigurationsCommandInput
  | PurchaseOfferingCommandInput
  | RenewOfferingCommandInput
  | ScheduleRunCommandInput
  | StopJobCommandInput
  | StopRemoteAccessSessionCommandInput
  | StopRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDeviceInstanceCommandInput
  | UpdateDevicePoolCommandInput
  | UpdateInstanceProfileCommandInput
  | UpdateNetworkProfileCommandInput
  | UpdateProjectCommandInput
  | UpdateTestGridProjectCommandInput
  | UpdateUploadCommandInput
  | UpdateVPCEConfigurationCommandInput;

export type ServiceOutputTypes =
  | CreateDevicePoolCommandOutput
  | CreateInstanceProfileCommandOutput
  | CreateNetworkProfileCommandOutput
  | CreateProjectCommandOutput
  | CreateRemoteAccessSessionCommandOutput
  | CreateTestGridProjectCommandOutput
  | CreateTestGridUrlCommandOutput
  | CreateUploadCommandOutput
  | CreateVPCEConfigurationCommandOutput
  | DeleteDevicePoolCommandOutput
  | DeleteInstanceProfileCommandOutput
  | DeleteNetworkProfileCommandOutput
  | DeleteProjectCommandOutput
  | DeleteRemoteAccessSessionCommandOutput
  | DeleteRunCommandOutput
  | DeleteTestGridProjectCommandOutput
  | DeleteUploadCommandOutput
  | DeleteVPCEConfigurationCommandOutput
  | GetAccountSettingsCommandOutput
  | GetDeviceCommandOutput
  | GetDeviceInstanceCommandOutput
  | GetDevicePoolCommandOutput
  | GetDevicePoolCompatibilityCommandOutput
  | GetInstanceProfileCommandOutput
  | GetJobCommandOutput
  | GetNetworkProfileCommandOutput
  | GetOfferingStatusCommandOutput
  | GetProjectCommandOutput
  | GetRemoteAccessSessionCommandOutput
  | GetRunCommandOutput
  | GetSuiteCommandOutput
  | GetTestCommandOutput
  | GetTestGridProjectCommandOutput
  | GetTestGridSessionCommandOutput
  | GetUploadCommandOutput
  | GetVPCEConfigurationCommandOutput
  | InstallToRemoteAccessSessionCommandOutput
  | ListArtifactsCommandOutput
  | ListDeviceInstancesCommandOutput
  | ListDevicePoolsCommandOutput
  | ListDevicesCommandOutput
  | ListInstanceProfilesCommandOutput
  | ListJobsCommandOutput
  | ListNetworkProfilesCommandOutput
  | ListOfferingPromotionsCommandOutput
  | ListOfferingTransactionsCommandOutput
  | ListOfferingsCommandOutput
  | ListProjectsCommandOutput
  | ListRemoteAccessSessionsCommandOutput
  | ListRunsCommandOutput
  | ListSamplesCommandOutput
  | ListSuitesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTestGridProjectsCommandOutput
  | ListTestGridSessionActionsCommandOutput
  | ListTestGridSessionArtifactsCommandOutput
  | ListTestGridSessionsCommandOutput
  | ListTestsCommandOutput
  | ListUniqueProblemsCommandOutput
  | ListUploadsCommandOutput
  | ListVPCEConfigurationsCommandOutput
  | PurchaseOfferingCommandOutput
  | RenewOfferingCommandOutput
  | ScheduleRunCommandOutput
  | StopJobCommandOutput
  | StopRemoteAccessSessionCommandOutput
  | StopRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDeviceInstanceCommandOutput
  | UpdateDevicePoolCommandOutput
  | UpdateInstanceProfileCommandOutput
  | UpdateNetworkProfileCommandOutput
  | UpdateProjectCommandOutput
  | UpdateTestGridProjectCommandOutput
  | UpdateUploadCommandOutput
  | UpdateVPCEConfigurationCommandOutput;

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

type DeviceFarmClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of DeviceFarmClient class constructor that set the region, credentials and other options.
 */
export interface DeviceFarmClientConfig extends DeviceFarmClientConfigType {}

type DeviceFarmClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of DeviceFarmClient class. This is resolved and normalized from the {@link DeviceFarmClientConfig | constructor configuration interface}.
 */
export interface DeviceFarmClientResolvedConfig extends DeviceFarmClientResolvedConfigType {}

/**
 * <p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p>
 *         <ul>
 *             <li>
 *                 <p>Testing on desktop browsers</p>
 *                 <p> Device Farm makes it possible for you to test your web applications on desktop browsers using
 *                     Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For
 *                     more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web
 *                         Applications on Selenium with Device Farm</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Testing on real mobile devices</p>
 *                 <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other
 *                     devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 */
export class DeviceFarmClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DeviceFarmClientResolvedConfig
> {
  /**
   * The resolved configuration of DeviceFarmClient class. This is resolved and normalized from the {@link DeviceFarmClientConfig | constructor configuration interface}.
   */
  readonly config: DeviceFarmClientResolvedConfig;

  constructor(configuration: DeviceFarmClientConfig) {
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
