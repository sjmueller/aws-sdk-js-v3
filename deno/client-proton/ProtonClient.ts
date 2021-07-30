import {
  AcceptEnvironmentAccountConnectionCommandInput,
  AcceptEnvironmentAccountConnectionCommandOutput,
} from "./commands/AcceptEnvironmentAccountConnectionCommand.ts";
import {
  CancelEnvironmentDeploymentCommandInput,
  CancelEnvironmentDeploymentCommandOutput,
} from "./commands/CancelEnvironmentDeploymentCommand.ts";
import {
  CancelServiceInstanceDeploymentCommandInput,
  CancelServiceInstanceDeploymentCommandOutput,
} from "./commands/CancelServiceInstanceDeploymentCommand.ts";
import {
  CancelServicePipelineDeploymentCommandInput,
  CancelServicePipelineDeploymentCommandOutput,
} from "./commands/CancelServicePipelineDeploymentCommand.ts";
import {
  CreateEnvironmentAccountConnectionCommandInput,
  CreateEnvironmentAccountConnectionCommandOutput,
} from "./commands/CreateEnvironmentAccountConnectionCommand.ts";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand.ts";
import {
  CreateEnvironmentTemplateCommandInput,
  CreateEnvironmentTemplateCommandOutput,
} from "./commands/CreateEnvironmentTemplateCommand.ts";
import {
  CreateEnvironmentTemplateVersionCommandInput,
  CreateEnvironmentTemplateVersionCommandOutput,
} from "./commands/CreateEnvironmentTemplateVersionCommand.ts";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand.ts";
import {
  CreateServiceTemplateCommandInput,
  CreateServiceTemplateCommandOutput,
} from "./commands/CreateServiceTemplateCommand.ts";
import {
  CreateServiceTemplateVersionCommandInput,
  CreateServiceTemplateVersionCommandOutput,
} from "./commands/CreateServiceTemplateVersionCommand.ts";
import {
  DeleteEnvironmentAccountConnectionCommandInput,
  DeleteEnvironmentAccountConnectionCommandOutput,
} from "./commands/DeleteEnvironmentAccountConnectionCommand.ts";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand.ts";
import {
  DeleteEnvironmentTemplateCommandInput,
  DeleteEnvironmentTemplateCommandOutput,
} from "./commands/DeleteEnvironmentTemplateCommand.ts";
import {
  DeleteEnvironmentTemplateVersionCommandInput,
  DeleteEnvironmentTemplateVersionCommandOutput,
} from "./commands/DeleteEnvironmentTemplateVersionCommand.ts";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand.ts";
import {
  DeleteServiceTemplateCommandInput,
  DeleteServiceTemplateCommandOutput,
} from "./commands/DeleteServiceTemplateCommand.ts";
import {
  DeleteServiceTemplateVersionCommandInput,
  DeleteServiceTemplateVersionCommandOutput,
} from "./commands/DeleteServiceTemplateVersionCommand.ts";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand.ts";
import {
  GetEnvironmentAccountConnectionCommandInput,
  GetEnvironmentAccountConnectionCommandOutput,
} from "./commands/GetEnvironmentAccountConnectionCommand.ts";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand.ts";
import {
  GetEnvironmentTemplateCommandInput,
  GetEnvironmentTemplateCommandOutput,
} from "./commands/GetEnvironmentTemplateCommand.ts";
import {
  GetEnvironmentTemplateVersionCommandInput,
  GetEnvironmentTemplateVersionCommandOutput,
} from "./commands/GetEnvironmentTemplateVersionCommand.ts";
import { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand.ts";
import { GetServiceInstanceCommandInput, GetServiceInstanceCommandOutput } from "./commands/GetServiceInstanceCommand.ts";
import { GetServiceTemplateCommandInput, GetServiceTemplateCommandOutput } from "./commands/GetServiceTemplateCommand.ts";
import {
  GetServiceTemplateVersionCommandInput,
  GetServiceTemplateVersionCommandOutput,
} from "./commands/GetServiceTemplateVersionCommand.ts";
import {
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput,
} from "./commands/ListEnvironmentAccountConnectionsCommand.ts";
import {
  ListEnvironmentTemplateVersionsCommandInput,
  ListEnvironmentTemplateVersionsCommandOutput,
} from "./commands/ListEnvironmentTemplateVersionsCommand.ts";
import {
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput,
} from "./commands/ListEnvironmentTemplatesCommand.ts";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand.ts";
import {
  ListServiceInstancesCommandInput,
  ListServiceInstancesCommandOutput,
} from "./commands/ListServiceInstancesCommand.ts";
import {
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
} from "./commands/ListServiceTemplateVersionsCommand.ts";
import {
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput,
} from "./commands/ListServiceTemplatesCommand.ts";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  RejectEnvironmentAccountConnectionCommandInput,
  RejectEnvironmentAccountConnectionCommandOutput,
} from "./commands/RejectEnvironmentAccountConnectionCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand.ts";
import {
  UpdateEnvironmentAccountConnectionCommandInput,
  UpdateEnvironmentAccountConnectionCommandOutput,
} from "./commands/UpdateEnvironmentAccountConnectionCommand.ts";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand.ts";
import {
  UpdateEnvironmentTemplateCommandInput,
  UpdateEnvironmentTemplateCommandOutput,
} from "./commands/UpdateEnvironmentTemplateCommand.ts";
import {
  UpdateEnvironmentTemplateVersionCommandInput,
  UpdateEnvironmentTemplateVersionCommandOutput,
} from "./commands/UpdateEnvironmentTemplateVersionCommand.ts";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand.ts";
import {
  UpdateServiceInstanceCommandInput,
  UpdateServiceInstanceCommandOutput,
} from "./commands/UpdateServiceInstanceCommand.ts";
import {
  UpdateServicePipelineCommandInput,
  UpdateServicePipelineCommandOutput,
} from "./commands/UpdateServicePipelineCommand.ts";
import {
  UpdateServiceTemplateCommandInput,
  UpdateServiceTemplateCommandOutput,
} from "./commands/UpdateServiceTemplateCommand.ts";
import {
  UpdateServiceTemplateVersionCommandInput,
  UpdateServiceTemplateVersionCommandOutput,
} from "./commands/UpdateServiceTemplateVersionCommand.ts";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig.ts";
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
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | AcceptEnvironmentAccountConnectionCommandInput
  | CancelEnvironmentDeploymentCommandInput
  | CancelServiceInstanceDeploymentCommandInput
  | CancelServicePipelineDeploymentCommandInput
  | CreateEnvironmentAccountConnectionCommandInput
  | CreateEnvironmentCommandInput
  | CreateEnvironmentTemplateCommandInput
  | CreateEnvironmentTemplateVersionCommandInput
  | CreateServiceCommandInput
  | CreateServiceTemplateCommandInput
  | CreateServiceTemplateVersionCommandInput
  | DeleteEnvironmentAccountConnectionCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteEnvironmentTemplateCommandInput
  | DeleteEnvironmentTemplateVersionCommandInput
  | DeleteServiceCommandInput
  | DeleteServiceTemplateCommandInput
  | DeleteServiceTemplateVersionCommandInput
  | GetAccountSettingsCommandInput
  | GetEnvironmentAccountConnectionCommandInput
  | GetEnvironmentCommandInput
  | GetEnvironmentTemplateCommandInput
  | GetEnvironmentTemplateVersionCommandInput
  | GetServiceCommandInput
  | GetServiceInstanceCommandInput
  | GetServiceTemplateCommandInput
  | GetServiceTemplateVersionCommandInput
  | ListEnvironmentAccountConnectionsCommandInput
  | ListEnvironmentTemplateVersionsCommandInput
  | ListEnvironmentTemplatesCommandInput
  | ListEnvironmentsCommandInput
  | ListServiceInstancesCommandInput
  | ListServiceTemplateVersionsCommandInput
  | ListServiceTemplatesCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | RejectEnvironmentAccountConnectionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateEnvironmentAccountConnectionCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateEnvironmentTemplateCommandInput
  | UpdateEnvironmentTemplateVersionCommandInput
  | UpdateServiceCommandInput
  | UpdateServiceInstanceCommandInput
  | UpdateServicePipelineCommandInput
  | UpdateServiceTemplateCommandInput
  | UpdateServiceTemplateVersionCommandInput;

export type ServiceOutputTypes =
  | AcceptEnvironmentAccountConnectionCommandOutput
  | CancelEnvironmentDeploymentCommandOutput
  | CancelServiceInstanceDeploymentCommandOutput
  | CancelServicePipelineDeploymentCommandOutput
  | CreateEnvironmentAccountConnectionCommandOutput
  | CreateEnvironmentCommandOutput
  | CreateEnvironmentTemplateCommandOutput
  | CreateEnvironmentTemplateVersionCommandOutput
  | CreateServiceCommandOutput
  | CreateServiceTemplateCommandOutput
  | CreateServiceTemplateVersionCommandOutput
  | DeleteEnvironmentAccountConnectionCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteEnvironmentTemplateCommandOutput
  | DeleteEnvironmentTemplateVersionCommandOutput
  | DeleteServiceCommandOutput
  | DeleteServiceTemplateCommandOutput
  | DeleteServiceTemplateVersionCommandOutput
  | GetAccountSettingsCommandOutput
  | GetEnvironmentAccountConnectionCommandOutput
  | GetEnvironmentCommandOutput
  | GetEnvironmentTemplateCommandOutput
  | GetEnvironmentTemplateVersionCommandOutput
  | GetServiceCommandOutput
  | GetServiceInstanceCommandOutput
  | GetServiceTemplateCommandOutput
  | GetServiceTemplateVersionCommandOutput
  | ListEnvironmentAccountConnectionsCommandOutput
  | ListEnvironmentTemplateVersionsCommandOutput
  | ListEnvironmentTemplatesCommandOutput
  | ListEnvironmentsCommandOutput
  | ListServiceInstancesCommandOutput
  | ListServiceTemplateVersionsCommandOutput
  | ListServiceTemplatesCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | RejectEnvironmentAccountConnectionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateEnvironmentAccountConnectionCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateEnvironmentTemplateCommandOutput
  | UpdateEnvironmentTemplateVersionCommandOutput
  | UpdateServiceCommandOutput
  | UpdateServiceInstanceCommandOutput
  | UpdateServicePipelineCommandOutput
  | UpdateServiceTemplateCommandOutput
  | UpdateServiceTemplateVersionCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
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
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

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

type ProtonClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ProtonClient class constructor that set the region, credentials and other options.
 */
export interface ProtonClientConfig extends ProtonClientConfigType {}

type ProtonClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ProtonClient class. This is resolved and normalized from the {@link ProtonClientConfig | constructor configuration interface}.
 */
export interface ProtonClientResolvedConfig extends ProtonClientResolvedConfigType {}

/**
 * <p>This is the AWS Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the AWS Proton service.</p>
 *         <p>The documentation for each action shows the Query API request parameters and the XML response.</p>
 *         <p>Alternatively, you can use the AWS CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS Command Line Interface User Guide</a>.</p>
 *         <p>The AWS Proton service is a two-pronged automation framework. Administrators create service templates to provide standardized
 *             infrastructure and deployment tooling for serverless and container based applications. Developers, in turn, select from the available
 *             service templates to automate their application or service deployments.</p>
 *         <p>Because administrators define the infrastructure and tooling that AWS Proton deploys and manages, they need permissions to use all of the
 *             listed API operations.</p>
 *         <p>When developers select a specific infrastructure and tooling set, AWS Proton deploys their applications. To monitor their applications
 *             that are running on AWS Proton, developers need permissions to the service <i>create</i>, <i>list</i>,
 *                 <i>update</i> and <i>delete</i> API operations and the service instance <i>list</i> and
 *                 <i>update</i> API operations.</p>
 *         <p>To learn more about AWS Proton administration, see the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/Welcome.html">AWS Proton
 *                 Administrator Guide</a>.</p>
 *         <p>To learn more about deploying serverless and containerized applications on AWS Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">AWS Proton User Guide</a>.</p>
 *         <p>
 *             <b>Ensuring Idempotency</b>
 *          </p>
 *         <p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows of the operation are
 *             complete. Operations might also time out or encounter other server issues before they're complete, even if the request already returned a
 *             result. This might make it difficult to determine whether the request succeeded. Moreover, you might need to retry the request multiple
 *             times to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the
 *             operation occurs multiple times. This means that you might create more resources than you intended.</p>
 *         <p>
 *             <i>Idempotency</i> ensures that an API request action completes no more than one time. With an idempotent request, if the
 *             original request action completes successfully, any subsequent retries complete successfully without performing any further actions.
 *             However, the result might contain updated information, such as the current creation status.</p>
 *         <p>The following lists of APIs are grouped according to methods that ensure idempotency.</p>
 *         <p>
 *             <b>Idempotent create APIs with a client token</b>
 *          </p>
 *         <p>The API actions in this list support idempotency with the use of a <i>client token</i>. The corresponding AWS CLI
 *             commands also support idempotency using a client token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. To
 *             make an idempotent API request using one of these actions, specify a client token in the request. We recommend that you
 *                 <i>don't</i> reuse the same client token for other API requests. If you don’t provide a client token for these APIs, a
 *             default client token is automatically provided by SDKs.</p>
 *         <p>Given a request action that has succeeded:</p>
 *         <p>If you retry the request using the same client token and the same parameters, the retry succeeds without performing any further actions
 *             other than returning the original resource detail data in the response.</p>
 *         <p>If you retry the request using the same client token, but one or more of the parameters are different, the retry throws a
 *                 <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p>
 *         <p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new resource is
 *             created.</p>
 *         <p>If the original resource is deleted and you retry the request, a new resource is created.</p>
 *         <p>Idempotent create APIs with a client token:</p>
 *         <ul>
 *             <li>
 *                 <p>CreateEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                 <p>CreateServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                 <p>CreateEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Idempotent delete APIs</b>
 *          </p>
 *         <p>Given a request action that has succeeded:</p>
 *         <p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in the response.</p>
 *         <p>If you retry and the resource doesn't exist, the response is empty.</p>
 *         <p>In both cases, the retry succeeds.</p>
 *         <p>Idempotent delete APIs:</p>
 *         <ul>
 *             <li>
 *                 <p>DeleteEnvironmentTemplate</p>
 *             </li>
 *             <li>
 *                 <p>DeleteEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                 <p>DeleteServiceTemplate</p>
 *             </li>
 *             <li>
 *                 <p>DeleteServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                 <p>DeleteEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Asynchronous idempotent delete APIs</b>
 *          </p>
 *         <p>Given a request action that has succeeded:</p>
 *         <p>If you retry the request with an API from this group, if the original request delete operation status is
 *             <code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any further actions.</p>
 *         <p>If the original request delete operation is complete, a retry returns an empty response.</p>
 *         <p>Asynchronous idempotent delete APIs:</p>
 *         <ul>
 *             <li>
 *                 <p>DeleteEnvironment</p>
 *             </li>
 *             <li>
 *                 <p>DeleteService</p>
 *             </li>
 *          </ul>
 */
export class ProtonClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ProtonClientResolvedConfig
> {
  /**
   * The resolved configuration of ProtonClient class. This is resolved and normalized from the {@link ProtonClientConfig | constructor configuration interface}.
   */
  readonly config: ProtonClientResolvedConfig;

  constructor(configuration: ProtonClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
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
