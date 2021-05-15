import {
  CreateAnomalyMonitorCommandInput,
  CreateAnomalyMonitorCommandOutput,
} from "./commands/CreateAnomalyMonitorCommand.ts";
import {
  CreateAnomalySubscriptionCommandInput,
  CreateAnomalySubscriptionCommandOutput,
} from "./commands/CreateAnomalySubscriptionCommand.ts";
import {
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput,
} from "./commands/CreateCostCategoryDefinitionCommand.ts";
import {
  DeleteAnomalyMonitorCommandInput,
  DeleteAnomalyMonitorCommandOutput,
} from "./commands/DeleteAnomalyMonitorCommand.ts";
import {
  DeleteAnomalySubscriptionCommandInput,
  DeleteAnomalySubscriptionCommandOutput,
} from "./commands/DeleteAnomalySubscriptionCommand.ts";
import {
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput,
} from "./commands/DeleteCostCategoryDefinitionCommand.ts";
import {
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput,
} from "./commands/DescribeCostCategoryDefinitionCommand.ts";
import { GetAnomaliesCommandInput, GetAnomaliesCommandOutput } from "./commands/GetAnomaliesCommand.ts";
import { GetAnomalyMonitorsCommandInput, GetAnomalyMonitorsCommandOutput } from "./commands/GetAnomalyMonitorsCommand.ts";
import {
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput,
} from "./commands/GetAnomalySubscriptionsCommand.ts";
import { GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput } from "./commands/GetCostAndUsageCommand.ts";
import {
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput,
} from "./commands/GetCostAndUsageWithResourcesCommand.ts";
import { GetCostCategoriesCommandInput, GetCostCategoriesCommandOutput } from "./commands/GetCostCategoriesCommand.ts";
import { GetCostForecastCommandInput, GetCostForecastCommandOutput } from "./commands/GetCostForecastCommand.ts";
import { GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput } from "./commands/GetDimensionValuesCommand.ts";
import {
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput,
} from "./commands/GetReservationCoverageCommand.ts";
import {
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput,
} from "./commands/GetReservationPurchaseRecommendationCommand.ts";
import {
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput,
} from "./commands/GetReservationUtilizationCommand.ts";
import {
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput,
} from "./commands/GetRightsizingRecommendationCommand.ts";
import {
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
} from "./commands/GetSavingsPlansCoverageCommand.ts";
import {
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput,
} from "./commands/GetSavingsPlansPurchaseRecommendationCommand.ts";
import {
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput,
} from "./commands/GetSavingsPlansUtilizationCommand.ts";
import {
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput,
} from "./commands/GetSavingsPlansUtilizationDetailsCommand.ts";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand.ts";
import { GetUsageForecastCommandInput, GetUsageForecastCommandOutput } from "./commands/GetUsageForecastCommand.ts";
import {
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "./commands/ListCostCategoryDefinitionsCommand.ts";
import {
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
} from "./commands/ProvideAnomalyFeedbackCommand.ts";
import {
  UpdateAnomalyMonitorCommandInput,
  UpdateAnomalyMonitorCommandOutput,
} from "./commands/UpdateAnomalyMonitorCommand.ts";
import {
  UpdateAnomalySubscriptionCommandInput,
  UpdateAnomalySubscriptionCommandOutput,
} from "./commands/UpdateAnomalySubscriptionCommand.ts";
import {
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput,
} from "./commands/UpdateCostCategoryDefinitionCommand.ts";
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
  | CreateAnomalyMonitorCommandInput
  | CreateAnomalySubscriptionCommandInput
  | CreateCostCategoryDefinitionCommandInput
  | DeleteAnomalyMonitorCommandInput
  | DeleteAnomalySubscriptionCommandInput
  | DeleteCostCategoryDefinitionCommandInput
  | DescribeCostCategoryDefinitionCommandInput
  | GetAnomaliesCommandInput
  | GetAnomalyMonitorsCommandInput
  | GetAnomalySubscriptionsCommandInput
  | GetCostAndUsageCommandInput
  | GetCostAndUsageWithResourcesCommandInput
  | GetCostCategoriesCommandInput
  | GetCostForecastCommandInput
  | GetDimensionValuesCommandInput
  | GetReservationCoverageCommandInput
  | GetReservationPurchaseRecommendationCommandInput
  | GetReservationUtilizationCommandInput
  | GetRightsizingRecommendationCommandInput
  | GetSavingsPlansCoverageCommandInput
  | GetSavingsPlansPurchaseRecommendationCommandInput
  | GetSavingsPlansUtilizationCommandInput
  | GetSavingsPlansUtilizationDetailsCommandInput
  | GetTagsCommandInput
  | GetUsageForecastCommandInput
  | ListCostCategoryDefinitionsCommandInput
  | ProvideAnomalyFeedbackCommandInput
  | UpdateAnomalyMonitorCommandInput
  | UpdateAnomalySubscriptionCommandInput
  | UpdateCostCategoryDefinitionCommandInput;

export type ServiceOutputTypes =
  | CreateAnomalyMonitorCommandOutput
  | CreateAnomalySubscriptionCommandOutput
  | CreateCostCategoryDefinitionCommandOutput
  | DeleteAnomalyMonitorCommandOutput
  | DeleteAnomalySubscriptionCommandOutput
  | DeleteCostCategoryDefinitionCommandOutput
  | DescribeCostCategoryDefinitionCommandOutput
  | GetAnomaliesCommandOutput
  | GetAnomalyMonitorsCommandOutput
  | GetAnomalySubscriptionsCommandOutput
  | GetCostAndUsageCommandOutput
  | GetCostAndUsageWithResourcesCommandOutput
  | GetCostCategoriesCommandOutput
  | GetCostForecastCommandOutput
  | GetDimensionValuesCommandOutput
  | GetReservationCoverageCommandOutput
  | GetReservationPurchaseRecommendationCommandOutput
  | GetReservationUtilizationCommandOutput
  | GetRightsizingRecommendationCommandOutput
  | GetSavingsPlansCoverageCommandOutput
  | GetSavingsPlansPurchaseRecommendationCommandOutput
  | GetSavingsPlansUtilizationCommandOutput
  | GetSavingsPlansUtilizationDetailsCommandOutput
  | GetTagsCommandOutput
  | GetUsageForecastCommandOutput
  | ListCostCategoryDefinitionsCommandOutput
  | ProvideAnomalyFeedbackCommandOutput
  | UpdateAnomalyMonitorCommandOutput
  | UpdateAnomalySubscriptionCommandOutput
  | UpdateCostCategoryDefinitionCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
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
   * The AWS region to which this client will send requests or use as signingRegion
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
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type CostExplorerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CostExplorerClient class constructor that set the region, credentials and other options.
 */
export interface CostExplorerClientConfig extends CostExplorerClientConfigType {}

type CostExplorerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CostExplorerClient class. This is resolved and normalized from the {@link CostExplorerClientConfig | constructor configuration interface}.
 */
export interface CostExplorerClientResolvedConfig extends CostExplorerClientResolvedConfigType {}

/**
 * <p>The Cost Explorer API enables you to programmatically query your cost and usage data. You can query for aggregated data
 * 			such as total monthly costs or total daily usage. You can also query for granular data, such as the number of
 * 			daily write operations for Amazon DynamoDB database tables in your production environment. </p>
 * 		       <p>Service Endpoint</p>
 * 		       <p>The Cost Explorer API provides the following endpoint:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>https://ce.us-east-1.amazonaws.com</code>
 *                </p>
 * 			         </li>
 *          </ul>
 * 		       <p>For information about costs associated with the Cost Explorer API, see
 * 			<a href="http://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>
 */
export class CostExplorerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CostExplorerClientResolvedConfig
> {
  /**
   * The resolved configuration of CostExplorerClient class. This is resolved and normalized from the {@link CostExplorerClientConfig | constructor configuration interface}.
   */
  readonly config: CostExplorerClientResolvedConfig;

  constructor(configuration: CostExplorerClientConfig) {
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
