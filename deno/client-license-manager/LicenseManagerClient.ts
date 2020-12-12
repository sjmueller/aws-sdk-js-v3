import { AcceptGrantCommandInput, AcceptGrantCommandOutput } from "./commands/AcceptGrantCommand.ts";
import { CheckInLicenseCommandInput, CheckInLicenseCommandOutput } from "./commands/CheckInLicenseCommand.ts";
import {
  CheckoutBorrowLicenseCommandInput,
  CheckoutBorrowLicenseCommandOutput,
} from "./commands/CheckoutBorrowLicenseCommand.ts";
import { CheckoutLicenseCommandInput, CheckoutLicenseCommandOutput } from "./commands/CheckoutLicenseCommand.ts";
import { CreateGrantCommandInput, CreateGrantCommandOutput } from "./commands/CreateGrantCommand.ts";
import { CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput } from "./commands/CreateGrantVersionCommand.ts";
import { CreateLicenseCommandInput, CreateLicenseCommandOutput } from "./commands/CreateLicenseCommand.ts";
import {
  CreateLicenseConfigurationCommandInput,
  CreateLicenseConfigurationCommandOutput,
} from "./commands/CreateLicenseConfigurationCommand.ts";
import {
  CreateLicenseVersionCommandInput,
  CreateLicenseVersionCommandOutput,
} from "./commands/CreateLicenseVersionCommand.ts";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand.ts";
import { DeleteGrantCommandInput, DeleteGrantCommandOutput } from "./commands/DeleteGrantCommand.ts";
import { DeleteLicenseCommandInput, DeleteLicenseCommandOutput } from "./commands/DeleteLicenseCommand.ts";
import {
  DeleteLicenseConfigurationCommandInput,
  DeleteLicenseConfigurationCommandOutput,
} from "./commands/DeleteLicenseConfigurationCommand.ts";
import { DeleteTokenCommandInput, DeleteTokenCommandOutput } from "./commands/DeleteTokenCommand.ts";
import {
  ExtendLicenseConsumptionCommandInput,
  ExtendLicenseConsumptionCommandOutput,
} from "./commands/ExtendLicenseConsumptionCommand.ts";
import { GetAccessTokenCommandInput, GetAccessTokenCommandOutput } from "./commands/GetAccessTokenCommand.ts";
import { GetGrantCommandInput, GetGrantCommandOutput } from "./commands/GetGrantCommand.ts";
import { GetLicenseCommandInput, GetLicenseCommandOutput } from "./commands/GetLicenseCommand.ts";
import {
  GetLicenseConfigurationCommandInput,
  GetLicenseConfigurationCommandOutput,
} from "./commands/GetLicenseConfigurationCommand.ts";
import { GetLicenseUsageCommandInput, GetLicenseUsageCommandOutput } from "./commands/GetLicenseUsageCommand.ts";
import { GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput } from "./commands/GetServiceSettingsCommand.ts";
import {
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput,
} from "./commands/ListAssociationsForLicenseConfigurationCommand.ts";
import {
  ListDistributedGrantsCommandInput,
  ListDistributedGrantsCommandOutput,
} from "./commands/ListDistributedGrantsCommand.ts";
import {
  ListFailuresForLicenseConfigurationOperationsCommandInput,
  ListFailuresForLicenseConfigurationOperationsCommandOutput,
} from "./commands/ListFailuresForLicenseConfigurationOperationsCommand.ts";
import {
  ListLicenseConfigurationsCommandInput,
  ListLicenseConfigurationsCommandOutput,
} from "./commands/ListLicenseConfigurationsCommand.ts";
import {
  ListLicenseSpecificationsForResourceCommandInput,
  ListLicenseSpecificationsForResourceCommandOutput,
} from "./commands/ListLicenseSpecificationsForResourceCommand.ts";
import {
  ListLicenseVersionsCommandInput,
  ListLicenseVersionsCommandOutput,
} from "./commands/ListLicenseVersionsCommand.ts";
import { ListLicensesCommandInput, ListLicensesCommandOutput } from "./commands/ListLicensesCommand.ts";
import { ListReceivedGrantsCommandInput, ListReceivedGrantsCommandOutput } from "./commands/ListReceivedGrantsCommand.ts";
import {
  ListReceivedLicensesCommandInput,
  ListReceivedLicensesCommandOutput,
} from "./commands/ListReceivedLicensesCommand.ts";
import {
  ListResourceInventoryCommandInput,
  ListResourceInventoryCommandOutput,
} from "./commands/ListResourceInventoryCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListTokensCommandInput, ListTokensCommandOutput } from "./commands/ListTokensCommand.ts";
import {
  ListUsageForLicenseConfigurationCommandInput,
  ListUsageForLicenseConfigurationCommandOutput,
} from "./commands/ListUsageForLicenseConfigurationCommand.ts";
import { RejectGrantCommandInput, RejectGrantCommandOutput } from "./commands/RejectGrantCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateLicenseConfigurationCommandInput,
  UpdateLicenseConfigurationCommandOutput,
} from "./commands/UpdateLicenseConfigurationCommand.ts";
import {
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput,
} from "./commands/UpdateLicenseSpecificationsForResourceCommand.ts";
import {
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "./commands/UpdateServiceSettingsCommand.ts";
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
  | AcceptGrantCommandInput
  | CheckInLicenseCommandInput
  | CheckoutBorrowLicenseCommandInput
  | CheckoutLicenseCommandInput
  | CreateGrantCommandInput
  | CreateGrantVersionCommandInput
  | CreateLicenseCommandInput
  | CreateLicenseConfigurationCommandInput
  | CreateLicenseVersionCommandInput
  | CreateTokenCommandInput
  | DeleteGrantCommandInput
  | DeleteLicenseCommandInput
  | DeleteLicenseConfigurationCommandInput
  | DeleteTokenCommandInput
  | ExtendLicenseConsumptionCommandInput
  | GetAccessTokenCommandInput
  | GetGrantCommandInput
  | GetLicenseCommandInput
  | GetLicenseConfigurationCommandInput
  | GetLicenseUsageCommandInput
  | GetServiceSettingsCommandInput
  | ListAssociationsForLicenseConfigurationCommandInput
  | ListDistributedGrantsCommandInput
  | ListFailuresForLicenseConfigurationOperationsCommandInput
  | ListLicenseConfigurationsCommandInput
  | ListLicenseSpecificationsForResourceCommandInput
  | ListLicenseVersionsCommandInput
  | ListLicensesCommandInput
  | ListReceivedGrantsCommandInput
  | ListReceivedLicensesCommandInput
  | ListResourceInventoryCommandInput
  | ListTagsForResourceCommandInput
  | ListTokensCommandInput
  | ListUsageForLicenseConfigurationCommandInput
  | RejectGrantCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateLicenseConfigurationCommandInput
  | UpdateLicenseSpecificationsForResourceCommandInput
  | UpdateServiceSettingsCommandInput;

export type ServiceOutputTypes =
  | AcceptGrantCommandOutput
  | CheckInLicenseCommandOutput
  | CheckoutBorrowLicenseCommandOutput
  | CheckoutLicenseCommandOutput
  | CreateGrantCommandOutput
  | CreateGrantVersionCommandOutput
  | CreateLicenseCommandOutput
  | CreateLicenseConfigurationCommandOutput
  | CreateLicenseVersionCommandOutput
  | CreateTokenCommandOutput
  | DeleteGrantCommandOutput
  | DeleteLicenseCommandOutput
  | DeleteLicenseConfigurationCommandOutput
  | DeleteTokenCommandOutput
  | ExtendLicenseConsumptionCommandOutput
  | GetAccessTokenCommandOutput
  | GetGrantCommandOutput
  | GetLicenseCommandOutput
  | GetLicenseConfigurationCommandOutput
  | GetLicenseUsageCommandOutput
  | GetServiceSettingsCommandOutput
  | ListAssociationsForLicenseConfigurationCommandOutput
  | ListDistributedGrantsCommandOutput
  | ListFailuresForLicenseConfigurationOperationsCommandOutput
  | ListLicenseConfigurationsCommandOutput
  | ListLicenseSpecificationsForResourceCommandOutput
  | ListLicenseVersionsCommandOutput
  | ListLicensesCommandOutput
  | ListReceivedGrantsCommandOutput
  | ListReceivedLicensesCommandOutput
  | ListResourceInventoryCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTokensCommandOutput
  | ListUsageForLicenseConfigurationCommandOutput
  | RejectGrantCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateLicenseConfigurationCommandOutput
  | UpdateLicenseSpecificationsForResourceCommandOutput
  | UpdateServiceSettingsCommandOutput;

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

export type LicenseManagerClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type LicenseManagerClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname> AWS License Manager </fullname>
 *          <p>AWS License Manager makes it easier to manage licenses from software vendors across multiple
 *          AWS accounts and on-premises servers.</p>
 */
export class LicenseManagerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LicenseManagerClientResolvedConfig
> {
  readonly config: LicenseManagerClientResolvedConfig;

  constructor(configuration: LicenseManagerClientConfig) {
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
