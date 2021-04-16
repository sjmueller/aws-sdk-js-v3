import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "./commands/CreateApiKeyCommand.ts";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand.ts";
import {
  CreateBasePathMappingCommandInput,
  CreateBasePathMappingCommandOutput,
} from "./commands/CreateBasePathMappingCommand.ts";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand.ts";
import {
  CreateDocumentationPartCommandInput,
  CreateDocumentationPartCommandOutput,
} from "./commands/CreateDocumentationPartCommand.ts";
import {
  CreateDocumentationVersionCommandInput,
  CreateDocumentationVersionCommandOutput,
} from "./commands/CreateDocumentationVersionCommand.ts";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand.ts";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand.ts";
import {
  CreateRequestValidatorCommandInput,
  CreateRequestValidatorCommandOutput,
} from "./commands/CreateRequestValidatorCommand.ts";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "./commands/CreateResourceCommand.ts";
import { CreateRestApiCommandInput, CreateRestApiCommandOutput } from "./commands/CreateRestApiCommand.ts";
import { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand.ts";
import { CreateUsagePlanCommandInput, CreateUsagePlanCommandOutput } from "./commands/CreateUsagePlanCommand.ts";
import { CreateUsagePlanKeyCommandInput, CreateUsagePlanKeyCommandOutput } from "./commands/CreateUsagePlanKeyCommand.ts";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "./commands/CreateVpcLinkCommand.ts";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "./commands/DeleteApiKeyCommand.ts";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand.ts";
import {
  DeleteBasePathMappingCommandInput,
  DeleteBasePathMappingCommandOutput,
} from "./commands/DeleteBasePathMappingCommand.ts";
import {
  DeleteClientCertificateCommandInput,
  DeleteClientCertificateCommandOutput,
} from "./commands/DeleteClientCertificateCommand.ts";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand.ts";
import {
  DeleteDocumentationPartCommandInput,
  DeleteDocumentationPartCommandOutput,
} from "./commands/DeleteDocumentationPartCommand.ts";
import {
  DeleteDocumentationVersionCommandInput,
  DeleteDocumentationVersionCommandOutput,
} from "./commands/DeleteDocumentationVersionCommand.ts";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand.ts";
import {
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
} from "./commands/DeleteGatewayResponseCommand.ts";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand.ts";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand.ts";
import { DeleteMethodCommandInput, DeleteMethodCommandOutput } from "./commands/DeleteMethodCommand.ts";
import {
  DeleteMethodResponseCommandInput,
  DeleteMethodResponseCommandOutput,
} from "./commands/DeleteMethodResponseCommand.ts";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand.ts";
import {
  DeleteRequestValidatorCommandInput,
  DeleteRequestValidatorCommandOutput,
} from "./commands/DeleteRequestValidatorCommand.ts";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "./commands/DeleteResourceCommand.ts";
import { DeleteRestApiCommandInput, DeleteRestApiCommandOutput } from "./commands/DeleteRestApiCommand.ts";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand.ts";
import { DeleteUsagePlanCommandInput, DeleteUsagePlanCommandOutput } from "./commands/DeleteUsagePlanCommand.ts";
import { DeleteUsagePlanKeyCommandInput, DeleteUsagePlanKeyCommandOutput } from "./commands/DeleteUsagePlanKeyCommand.ts";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "./commands/DeleteVpcLinkCommand.ts";
import {
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
} from "./commands/FlushStageAuthorizersCacheCommand.ts";
import { FlushStageCacheCommandInput, FlushStageCacheCommandOutput } from "./commands/FlushStageCacheCommand.ts";
import {
  GenerateClientCertificateCommandInput,
  GenerateClientCertificateCommandOutput,
} from "./commands/GenerateClientCertificateCommand.ts";
import { GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand.ts";
import { GetApiKeyCommandInput, GetApiKeyCommandOutput } from "./commands/GetApiKeyCommand.ts";
import { GetApiKeysCommandInput, GetApiKeysCommandOutput } from "./commands/GetApiKeysCommand.ts";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "./commands/GetAuthorizerCommand.ts";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "./commands/GetAuthorizersCommand.ts";
import { GetBasePathMappingCommandInput, GetBasePathMappingCommandOutput } from "./commands/GetBasePathMappingCommand.ts";
import {
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "./commands/GetBasePathMappingsCommand.ts";
import {
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
} from "./commands/GetClientCertificateCommand.ts";
import {
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "./commands/GetClientCertificatesCommand.ts";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand.ts";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "./commands/GetDeploymentsCommand.ts";
import {
  GetDocumentationPartCommandInput,
  GetDocumentationPartCommandOutput,
} from "./commands/GetDocumentationPartCommand.ts";
import {
  GetDocumentationPartsCommandInput,
  GetDocumentationPartsCommandOutput,
} from "./commands/GetDocumentationPartsCommand.ts";
import {
  GetDocumentationVersionCommandInput,
  GetDocumentationVersionCommandOutput,
} from "./commands/GetDocumentationVersionCommand.ts";
import {
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
} from "./commands/GetDocumentationVersionsCommand.ts";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand.ts";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "./commands/GetDomainNamesCommand.ts";
import { GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand.ts";
import { GetGatewayResponseCommandInput, GetGatewayResponseCommandOutput } from "./commands/GetGatewayResponseCommand.ts";
import {
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
} from "./commands/GetGatewayResponsesCommand.ts";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand.ts";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand.ts";
import { GetMethodCommandInput, GetMethodCommandOutput } from "./commands/GetMethodCommand.ts";
import { GetMethodResponseCommandInput, GetMethodResponseCommandOutput } from "./commands/GetMethodResponseCommand.ts";
import { GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand.ts";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "./commands/GetModelTemplateCommand.ts";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand.ts";
import {
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
} from "./commands/GetRequestValidatorCommand.ts";
import {
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
} from "./commands/GetRequestValidatorsCommand.ts";
import { GetResourceCommandInput, GetResourceCommandOutput } from "./commands/GetResourceCommand.ts";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "./commands/GetResourcesCommand.ts";
import { GetRestApiCommandInput, GetRestApiCommandOutput } from "./commands/GetRestApiCommand.ts";
import { GetRestApisCommandInput, GetRestApisCommandOutput } from "./commands/GetRestApisCommand.ts";
import { GetSdkCommandInput, GetSdkCommandOutput } from "./commands/GetSdkCommand.ts";
import { GetSdkTypeCommandInput, GetSdkTypeCommandOutput } from "./commands/GetSdkTypeCommand.ts";
import { GetSdkTypesCommandInput, GetSdkTypesCommandOutput } from "./commands/GetSdkTypesCommand.ts";
import { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand.ts";
import { GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand.ts";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand.ts";
import { GetUsageCommandInput, GetUsageCommandOutput } from "./commands/GetUsageCommand.ts";
import { GetUsagePlanCommandInput, GetUsagePlanCommandOutput } from "./commands/GetUsagePlanCommand.ts";
import { GetUsagePlanKeyCommandInput, GetUsagePlanKeyCommandOutput } from "./commands/GetUsagePlanKeyCommand.ts";
import { GetUsagePlanKeysCommandInput, GetUsagePlanKeysCommandOutput } from "./commands/GetUsagePlanKeysCommand.ts";
import { GetUsagePlansCommandInput, GetUsagePlansCommandOutput } from "./commands/GetUsagePlansCommand.ts";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand.ts";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand.ts";
import { ImportApiKeysCommandInput, ImportApiKeysCommandOutput } from "./commands/ImportApiKeysCommand.ts";
import {
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
} from "./commands/ImportDocumentationPartsCommand.ts";
import { ImportRestApiCommandInput, ImportRestApiCommandOutput } from "./commands/ImportRestApiCommand.ts";
import { PutGatewayResponseCommandInput, PutGatewayResponseCommandOutput } from "./commands/PutGatewayResponseCommand.ts";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand.ts";
import {
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
} from "./commands/PutIntegrationResponseCommand.ts";
import { PutMethodCommandInput, PutMethodCommandOutput } from "./commands/PutMethodCommand.ts";
import { PutMethodResponseCommandInput, PutMethodResponseCommandOutput } from "./commands/PutMethodResponseCommand.ts";
import { PutRestApiCommandInput, PutRestApiCommandOutput } from "./commands/PutRestApiCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import {
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand.ts";
import { TestInvokeMethodCommandInput, TestInvokeMethodCommandOutput } from "./commands/TestInvokeMethodCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateAccountCommandInput, UpdateAccountCommandOutput } from "./commands/UpdateAccountCommand.ts";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "./commands/UpdateApiKeyCommand.ts";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand.ts";
import {
  UpdateBasePathMappingCommandInput,
  UpdateBasePathMappingCommandOutput,
} from "./commands/UpdateBasePathMappingCommand.ts";
import {
  UpdateClientCertificateCommandInput,
  UpdateClientCertificateCommandOutput,
} from "./commands/UpdateClientCertificateCommand.ts";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "./commands/UpdateDeploymentCommand.ts";
import {
  UpdateDocumentationPartCommandInput,
  UpdateDocumentationPartCommandOutput,
} from "./commands/UpdateDocumentationPartCommand.ts";
import {
  UpdateDocumentationVersionCommandInput,
  UpdateDocumentationVersionCommandOutput,
} from "./commands/UpdateDocumentationVersionCommand.ts";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand.ts";
import {
  UpdateGatewayResponseCommandInput,
  UpdateGatewayResponseCommandOutput,
} from "./commands/UpdateGatewayResponseCommand.ts";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "./commands/UpdateIntegrationCommand.ts";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand.ts";
import { UpdateMethodCommandInput, UpdateMethodCommandOutput } from "./commands/UpdateMethodCommand.ts";
import {
  UpdateMethodResponseCommandInput,
  UpdateMethodResponseCommandOutput,
} from "./commands/UpdateMethodResponseCommand.ts";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand.ts";
import {
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
} from "./commands/UpdateRequestValidatorCommand.ts";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand.ts";
import { UpdateRestApiCommandInput, UpdateRestApiCommandOutput } from "./commands/UpdateRestApiCommand.ts";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand.ts";
import { UpdateUsageCommandInput, UpdateUsageCommandOutput } from "./commands/UpdateUsageCommand.ts";
import { UpdateUsagePlanCommandInput, UpdateUsagePlanCommandOutput } from "./commands/UpdateUsagePlanCommand.ts";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "./commands/UpdateVpcLinkCommand.ts";
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
import { getAcceptHeaderPlugin } from "../middleware-sdk-api-gateway/mod.ts";
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
  | CreateApiKeyCommandInput
  | CreateAuthorizerCommandInput
  | CreateBasePathMappingCommandInput
  | CreateDeploymentCommandInput
  | CreateDocumentationPartCommandInput
  | CreateDocumentationVersionCommandInput
  | CreateDomainNameCommandInput
  | CreateModelCommandInput
  | CreateRequestValidatorCommandInput
  | CreateResourceCommandInput
  | CreateRestApiCommandInput
  | CreateStageCommandInput
  | CreateUsagePlanCommandInput
  | CreateUsagePlanKeyCommandInput
  | CreateVpcLinkCommandInput
  | DeleteApiKeyCommandInput
  | DeleteAuthorizerCommandInput
  | DeleteBasePathMappingCommandInput
  | DeleteClientCertificateCommandInput
  | DeleteDeploymentCommandInput
  | DeleteDocumentationPartCommandInput
  | DeleteDocumentationVersionCommandInput
  | DeleteDomainNameCommandInput
  | DeleteGatewayResponseCommandInput
  | DeleteIntegrationCommandInput
  | DeleteIntegrationResponseCommandInput
  | DeleteMethodCommandInput
  | DeleteMethodResponseCommandInput
  | DeleteModelCommandInput
  | DeleteRequestValidatorCommandInput
  | DeleteResourceCommandInput
  | DeleteRestApiCommandInput
  | DeleteStageCommandInput
  | DeleteUsagePlanCommandInput
  | DeleteUsagePlanKeyCommandInput
  | DeleteVpcLinkCommandInput
  | FlushStageAuthorizersCacheCommandInput
  | FlushStageCacheCommandInput
  | GenerateClientCertificateCommandInput
  | GetAccountCommandInput
  | GetApiKeyCommandInput
  | GetApiKeysCommandInput
  | GetAuthorizerCommandInput
  | GetAuthorizersCommandInput
  | GetBasePathMappingCommandInput
  | GetBasePathMappingsCommandInput
  | GetClientCertificateCommandInput
  | GetClientCertificatesCommandInput
  | GetDeploymentCommandInput
  | GetDeploymentsCommandInput
  | GetDocumentationPartCommandInput
  | GetDocumentationPartsCommandInput
  | GetDocumentationVersionCommandInput
  | GetDocumentationVersionsCommandInput
  | GetDomainNameCommandInput
  | GetDomainNamesCommandInput
  | GetExportCommandInput
  | GetGatewayResponseCommandInput
  | GetGatewayResponsesCommandInput
  | GetIntegrationCommandInput
  | GetIntegrationResponseCommandInput
  | GetMethodCommandInput
  | GetMethodResponseCommandInput
  | GetModelCommandInput
  | GetModelTemplateCommandInput
  | GetModelsCommandInput
  | GetRequestValidatorCommandInput
  | GetRequestValidatorsCommandInput
  | GetResourceCommandInput
  | GetResourcesCommandInput
  | GetRestApiCommandInput
  | GetRestApisCommandInput
  | GetSdkCommandInput
  | GetSdkTypeCommandInput
  | GetSdkTypesCommandInput
  | GetStageCommandInput
  | GetStagesCommandInput
  | GetTagsCommandInput
  | GetUsageCommandInput
  | GetUsagePlanCommandInput
  | GetUsagePlanKeyCommandInput
  | GetUsagePlanKeysCommandInput
  | GetUsagePlansCommandInput
  | GetVpcLinkCommandInput
  | GetVpcLinksCommandInput
  | ImportApiKeysCommandInput
  | ImportDocumentationPartsCommandInput
  | ImportRestApiCommandInput
  | PutGatewayResponseCommandInput
  | PutIntegrationCommandInput
  | PutIntegrationResponseCommandInput
  | PutMethodCommandInput
  | PutMethodResponseCommandInput
  | PutRestApiCommandInput
  | TagResourceCommandInput
  | TestInvokeAuthorizerCommandInput
  | TestInvokeMethodCommandInput
  | UntagResourceCommandInput
  | UpdateAccountCommandInput
  | UpdateApiKeyCommandInput
  | UpdateAuthorizerCommandInput
  | UpdateBasePathMappingCommandInput
  | UpdateClientCertificateCommandInput
  | UpdateDeploymentCommandInput
  | UpdateDocumentationPartCommandInput
  | UpdateDocumentationVersionCommandInput
  | UpdateDomainNameCommandInput
  | UpdateGatewayResponseCommandInput
  | UpdateIntegrationCommandInput
  | UpdateIntegrationResponseCommandInput
  | UpdateMethodCommandInput
  | UpdateMethodResponseCommandInput
  | UpdateModelCommandInput
  | UpdateRequestValidatorCommandInput
  | UpdateResourceCommandInput
  | UpdateRestApiCommandInput
  | UpdateStageCommandInput
  | UpdateUsageCommandInput
  | UpdateUsagePlanCommandInput
  | UpdateVpcLinkCommandInput;

export type ServiceOutputTypes =
  | CreateApiKeyCommandOutput
  | CreateAuthorizerCommandOutput
  | CreateBasePathMappingCommandOutput
  | CreateDeploymentCommandOutput
  | CreateDocumentationPartCommandOutput
  | CreateDocumentationVersionCommandOutput
  | CreateDomainNameCommandOutput
  | CreateModelCommandOutput
  | CreateRequestValidatorCommandOutput
  | CreateResourceCommandOutput
  | CreateRestApiCommandOutput
  | CreateStageCommandOutput
  | CreateUsagePlanCommandOutput
  | CreateUsagePlanKeyCommandOutput
  | CreateVpcLinkCommandOutput
  | DeleteApiKeyCommandOutput
  | DeleteAuthorizerCommandOutput
  | DeleteBasePathMappingCommandOutput
  | DeleteClientCertificateCommandOutput
  | DeleteDeploymentCommandOutput
  | DeleteDocumentationPartCommandOutput
  | DeleteDocumentationVersionCommandOutput
  | DeleteDomainNameCommandOutput
  | DeleteGatewayResponseCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteIntegrationResponseCommandOutput
  | DeleteMethodCommandOutput
  | DeleteMethodResponseCommandOutput
  | DeleteModelCommandOutput
  | DeleteRequestValidatorCommandOutput
  | DeleteResourceCommandOutput
  | DeleteRestApiCommandOutput
  | DeleteStageCommandOutput
  | DeleteUsagePlanCommandOutput
  | DeleteUsagePlanKeyCommandOutput
  | DeleteVpcLinkCommandOutput
  | FlushStageAuthorizersCacheCommandOutput
  | FlushStageCacheCommandOutput
  | GenerateClientCertificateCommandOutput
  | GetAccountCommandOutput
  | GetApiKeyCommandOutput
  | GetApiKeysCommandOutput
  | GetAuthorizerCommandOutput
  | GetAuthorizersCommandOutput
  | GetBasePathMappingCommandOutput
  | GetBasePathMappingsCommandOutput
  | GetClientCertificateCommandOutput
  | GetClientCertificatesCommandOutput
  | GetDeploymentCommandOutput
  | GetDeploymentsCommandOutput
  | GetDocumentationPartCommandOutput
  | GetDocumentationPartsCommandOutput
  | GetDocumentationVersionCommandOutput
  | GetDocumentationVersionsCommandOutput
  | GetDomainNameCommandOutput
  | GetDomainNamesCommandOutput
  | GetExportCommandOutput
  | GetGatewayResponseCommandOutput
  | GetGatewayResponsesCommandOutput
  | GetIntegrationCommandOutput
  | GetIntegrationResponseCommandOutput
  | GetMethodCommandOutput
  | GetMethodResponseCommandOutput
  | GetModelCommandOutput
  | GetModelTemplateCommandOutput
  | GetModelsCommandOutput
  | GetRequestValidatorCommandOutput
  | GetRequestValidatorsCommandOutput
  | GetResourceCommandOutput
  | GetResourcesCommandOutput
  | GetRestApiCommandOutput
  | GetRestApisCommandOutput
  | GetSdkCommandOutput
  | GetSdkTypeCommandOutput
  | GetSdkTypesCommandOutput
  | GetStageCommandOutput
  | GetStagesCommandOutput
  | GetTagsCommandOutput
  | GetUsageCommandOutput
  | GetUsagePlanCommandOutput
  | GetUsagePlanKeyCommandOutput
  | GetUsagePlanKeysCommandOutput
  | GetUsagePlansCommandOutput
  | GetVpcLinkCommandOutput
  | GetVpcLinksCommandOutput
  | ImportApiKeysCommandOutput
  | ImportDocumentationPartsCommandOutput
  | ImportRestApiCommandOutput
  | PutGatewayResponseCommandOutput
  | PutIntegrationCommandOutput
  | PutIntegrationResponseCommandOutput
  | PutMethodCommandOutput
  | PutMethodResponseCommandOutput
  | PutRestApiCommandOutput
  | TagResourceCommandOutput
  | TestInvokeAuthorizerCommandOutput
  | TestInvokeMethodCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountCommandOutput
  | UpdateApiKeyCommandOutput
  | UpdateAuthorizerCommandOutput
  | UpdateBasePathMappingCommandOutput
  | UpdateClientCertificateCommandOutput
  | UpdateDeploymentCommandOutput
  | UpdateDocumentationPartCommandOutput
  | UpdateDocumentationVersionCommandOutput
  | UpdateDomainNameCommandOutput
  | UpdateGatewayResponseCommandOutput
  | UpdateIntegrationCommandOutput
  | UpdateIntegrationResponseCommandOutput
  | UpdateMethodCommandOutput
  | UpdateMethodResponseCommandOutput
  | UpdateModelCommandOutput
  | UpdateRequestValidatorCommandOutput
  | UpdateResourceCommandOutput
  | UpdateRestApiCommandOutput
  | UpdateStageCommandOutput
  | UpdateUsageCommandOutput
  | UpdateUsagePlanCommandOutput
  | UpdateVpcLinkCommandOutput;

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

export type APIGatewayClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type APIGatewayClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>Amazon API Gateway</fullname>
 *         <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>
 */
export class APIGatewayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  APIGatewayClientResolvedConfig
> {
  readonly config: APIGatewayClientResolvedConfig;

  constructor(configuration: APIGatewayClientConfig) {
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
    this.middlewareStack.use(getAcceptHeaderPlugin(this.config));
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
