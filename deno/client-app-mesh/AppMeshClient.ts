import {
  CreateMeshCommandInput,
  CreateMeshCommandOutput
} from "./commands/CreateMeshCommand.ts";
import {
  CreateRouteCommandInput,
  CreateRouteCommandOutput
} from "./commands/CreateRouteCommand.ts";
import {
  CreateVirtualNodeCommandInput,
  CreateVirtualNodeCommandOutput
} from "./commands/CreateVirtualNodeCommand.ts";
import {
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput
} from "./commands/CreateVirtualRouterCommand.ts";
import {
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput
} from "./commands/CreateVirtualServiceCommand.ts";
import {
  DeleteMeshCommandInput,
  DeleteMeshCommandOutput
} from "./commands/DeleteMeshCommand.ts";
import {
  DeleteMeshPolicyCommandInput,
  DeleteMeshPolicyCommandOutput
} from "./commands/DeleteMeshPolicyCommand.ts";
import {
  DeleteRouteCommandInput,
  DeleteRouteCommandOutput
} from "./commands/DeleteRouteCommand.ts";
import {
  DeleteVirtualNodeCommandInput,
  DeleteVirtualNodeCommandOutput
} from "./commands/DeleteVirtualNodeCommand.ts";
import {
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput
} from "./commands/DeleteVirtualRouterCommand.ts";
import {
  DeleteVirtualServiceCommandInput,
  DeleteVirtualServiceCommandOutput
} from "./commands/DeleteVirtualServiceCommand.ts";
import {
  DescribeMeshCommandInput,
  DescribeMeshCommandOutput
} from "./commands/DescribeMeshCommand.ts";
import {
  DescribeRouteCommandInput,
  DescribeRouteCommandOutput
} from "./commands/DescribeRouteCommand.ts";
import {
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput
} from "./commands/DescribeVirtualNodeCommand.ts";
import {
  DescribeVirtualRouterCommandInput,
  DescribeVirtualRouterCommandOutput
} from "./commands/DescribeVirtualRouterCommand.ts";
import {
  DescribeVirtualServiceCommandInput,
  DescribeVirtualServiceCommandOutput
} from "./commands/DescribeVirtualServiceCommand.ts";
import {
  GetMeshPolicyCommandInput,
  GetMeshPolicyCommandOutput
} from "./commands/GetMeshPolicyCommand.ts";
import {
  ListMeshesCommandInput,
  ListMeshesCommandOutput
} from "./commands/ListMeshesCommand.ts";
import {
  ListRoutesCommandInput,
  ListRoutesCommandOutput
} from "./commands/ListRoutesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListVirtualNodesCommandInput,
  ListVirtualNodesCommandOutput
} from "./commands/ListVirtualNodesCommand.ts";
import {
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput
} from "./commands/ListVirtualRoutersCommand.ts";
import {
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput
} from "./commands/ListVirtualServicesCommand.ts";
import {
  PutMeshPolicyCommandInput,
  PutMeshPolicyCommandOutput
} from "./commands/PutMeshPolicyCommand.ts";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand.ts";
import {
  UpdateMeshCommandInput,
  UpdateMeshCommandOutput
} from "./commands/UpdateMeshCommand.ts";
import {
  UpdateRouteCommandInput,
  UpdateRouteCommandOutput
} from "./commands/UpdateRouteCommand.ts";
import {
  UpdateVirtualNodeCommandInput,
  UpdateVirtualNodeCommandOutput
} from "./commands/UpdateVirtualNodeCommand.ts";
import {
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput
} from "./commands/UpdateVirtualRouterCommand.ts";
import {
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput
} from "./commands/UpdateVirtualServiceCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "../middleware-host-header/mod.ts";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "../smithy-client/mod.ts";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateMeshCommandInput
  | CreateRouteCommandInput
  | CreateVirtualNodeCommandInput
  | CreateVirtualRouterCommandInput
  | CreateVirtualServiceCommandInput
  | DeleteMeshCommandInput
  | DeleteMeshPolicyCommandInput
  | DeleteRouteCommandInput
  | DeleteVirtualNodeCommandInput
  | DeleteVirtualRouterCommandInput
  | DeleteVirtualServiceCommandInput
  | DescribeMeshCommandInput
  | DescribeRouteCommandInput
  | DescribeVirtualNodeCommandInput
  | DescribeVirtualRouterCommandInput
  | DescribeVirtualServiceCommandInput
  | GetMeshPolicyCommandInput
  | ListMeshesCommandInput
  | ListRoutesCommandInput
  | ListTagsForResourceCommandInput
  | ListVirtualNodesCommandInput
  | ListVirtualRoutersCommandInput
  | ListVirtualServicesCommandInput
  | PutMeshPolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateMeshCommandInput
  | UpdateRouteCommandInput
  | UpdateVirtualNodeCommandInput
  | UpdateVirtualRouterCommandInput
  | UpdateVirtualServiceCommandInput;

export type ServiceOutputTypes =
  | CreateMeshCommandOutput
  | CreateRouteCommandOutput
  | CreateVirtualNodeCommandOutput
  | CreateVirtualRouterCommandOutput
  | CreateVirtualServiceCommandOutput
  | DeleteMeshCommandOutput
  | DeleteMeshPolicyCommandOutput
  | DeleteRouteCommandOutput
  | DeleteVirtualNodeCommandOutput
  | DeleteVirtualRouterCommandOutput
  | DeleteVirtualServiceCommandOutput
  | DescribeMeshCommandOutput
  | DescribeRouteCommandOutput
  | DescribeVirtualNodeCommandOutput
  | DescribeVirtualRouterCommandOutput
  | DescribeVirtualServiceCommandOutput
  | GetMeshPolicyCommandOutput
  | ListMeshesCommandOutput
  | ListRoutesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVirtualNodesCommandOutput
  | ListVirtualRoutersCommandOutput
  | ListVirtualServicesCommandOutput
  | PutMeshPolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateMeshCommandOutput
  | UpdateRouteCommandOutput
  | UpdateVirtualNodeCommandOutput
  | UpdateVirtualRouterCommandOutput
  | UpdateVirtualServiceCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type AppMeshClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type AppMeshClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>AWS App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and
 *          control microservices. App Mesh standardizes how your microservices communicate, giving you
 *          end-to-end visibility and helping to ensure high availability for your applications.</p>
 *          <p>App Mesh gives you consistent visibility and network traffic controls for every
 *          microservice in an application. You can use App Mesh with AWS Fargate, Amazon ECS, Amazon EKS,
 *          Kubernetes on AWS, and Amazon EC2.</p>
 *          <note>
 *             <p>App Mesh supports microservice applications that use service discovery naming for their
 *             components. For more information about service discovery on Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes
 *                <code>kube-dns</code> and <code>coredns</code> are supported. For more information,
 *             see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
 *                for Services and Pods</a> in the Kubernetes documentation.</p>
 *          </note>
 */
export class AppMeshClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppMeshClientResolvedConfig
> {
  readonly config: AppMeshClientResolvedConfig;

  constructor(configuration: AppMeshClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
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
  }

  destroy(): void {
    super.destroy();
  }
}
