import {
  AcceptDirectConnectGatewayAssociationProposalCommandInput,
  AcceptDirectConnectGatewayAssociationProposalCommandOutput,
} from "./commands/AcceptDirectConnectGatewayAssociationProposalCommand.ts";
import {
  AllocateConnectionOnInterconnectCommandInput,
  AllocateConnectionOnInterconnectCommandOutput,
} from "./commands/AllocateConnectionOnInterconnectCommand.ts";
import {
  AllocateHostedConnectionCommandInput,
  AllocateHostedConnectionCommandOutput,
} from "./commands/AllocateHostedConnectionCommand.ts";
import {
  AllocatePrivateVirtualInterfaceCommandInput,
  AllocatePrivateVirtualInterfaceCommandOutput,
} from "./commands/AllocatePrivateVirtualInterfaceCommand.ts";
import {
  AllocatePublicVirtualInterfaceCommandInput,
  AllocatePublicVirtualInterfaceCommandOutput,
} from "./commands/AllocatePublicVirtualInterfaceCommand.ts";
import {
  AllocateTransitVirtualInterfaceCommandInput,
  AllocateTransitVirtualInterfaceCommandOutput,
} from "./commands/AllocateTransitVirtualInterfaceCommand.ts";
import {
  AssociateConnectionWithLagCommandInput,
  AssociateConnectionWithLagCommandOutput,
} from "./commands/AssociateConnectionWithLagCommand.ts";
import {
  AssociateHostedConnectionCommandInput,
  AssociateHostedConnectionCommandOutput,
} from "./commands/AssociateHostedConnectionCommand.ts";
import { AssociateMacSecKeyCommandInput, AssociateMacSecKeyCommandOutput } from "./commands/AssociateMacSecKeyCommand.ts";
import {
  AssociateVirtualInterfaceCommandInput,
  AssociateVirtualInterfaceCommandOutput,
} from "./commands/AssociateVirtualInterfaceCommand.ts";
import { ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput } from "./commands/ConfirmConnectionCommand.ts";
import {
  ConfirmPrivateVirtualInterfaceCommandInput,
  ConfirmPrivateVirtualInterfaceCommandOutput,
} from "./commands/ConfirmPrivateVirtualInterfaceCommand.ts";
import {
  ConfirmPublicVirtualInterfaceCommandInput,
  ConfirmPublicVirtualInterfaceCommandOutput,
} from "./commands/ConfirmPublicVirtualInterfaceCommand.ts";
import {
  ConfirmTransitVirtualInterfaceCommandInput,
  ConfirmTransitVirtualInterfaceCommandOutput,
} from "./commands/ConfirmTransitVirtualInterfaceCommand.ts";
import { CreateBGPPeerCommandInput, CreateBGPPeerCommandOutput } from "./commands/CreateBGPPeerCommand.ts";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand.ts";
import {
  CreateDirectConnectGatewayAssociationCommandInput,
  CreateDirectConnectGatewayAssociationCommandOutput,
} from "./commands/CreateDirectConnectGatewayAssociationCommand.ts";
import {
  CreateDirectConnectGatewayAssociationProposalCommandInput,
  CreateDirectConnectGatewayAssociationProposalCommandOutput,
} from "./commands/CreateDirectConnectGatewayAssociationProposalCommand.ts";
import {
  CreateDirectConnectGatewayCommandInput,
  CreateDirectConnectGatewayCommandOutput,
} from "./commands/CreateDirectConnectGatewayCommand.ts";
import { CreateInterconnectCommandInput, CreateInterconnectCommandOutput } from "./commands/CreateInterconnectCommand.ts";
import { CreateLagCommandInput, CreateLagCommandOutput } from "./commands/CreateLagCommand.ts";
import {
  CreatePrivateVirtualInterfaceCommandInput,
  CreatePrivateVirtualInterfaceCommandOutput,
} from "./commands/CreatePrivateVirtualInterfaceCommand.ts";
import {
  CreatePublicVirtualInterfaceCommandInput,
  CreatePublicVirtualInterfaceCommandOutput,
} from "./commands/CreatePublicVirtualInterfaceCommand.ts";
import {
  CreateTransitVirtualInterfaceCommandInput,
  CreateTransitVirtualInterfaceCommandOutput,
} from "./commands/CreateTransitVirtualInterfaceCommand.ts";
import { DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput } from "./commands/DeleteBGPPeerCommand.ts";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand.ts";
import {
  DeleteDirectConnectGatewayAssociationCommandInput,
  DeleteDirectConnectGatewayAssociationCommandOutput,
} from "./commands/DeleteDirectConnectGatewayAssociationCommand.ts";
import {
  DeleteDirectConnectGatewayAssociationProposalCommandInput,
  DeleteDirectConnectGatewayAssociationProposalCommandOutput,
} from "./commands/DeleteDirectConnectGatewayAssociationProposalCommand.ts";
import {
  DeleteDirectConnectGatewayCommandInput,
  DeleteDirectConnectGatewayCommandOutput,
} from "./commands/DeleteDirectConnectGatewayCommand.ts";
import { DeleteInterconnectCommandInput, DeleteInterconnectCommandOutput } from "./commands/DeleteInterconnectCommand.ts";
import { DeleteLagCommandInput, DeleteLagCommandOutput } from "./commands/DeleteLagCommand.ts";
import {
  DeleteVirtualInterfaceCommandInput,
  DeleteVirtualInterfaceCommandOutput,
} from "./commands/DeleteVirtualInterfaceCommand.ts";
import {
  DescribeConnectionLoaCommandInput,
  DescribeConnectionLoaCommandOutput,
} from "./commands/DescribeConnectionLoaCommand.ts";
import {
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "./commands/DescribeConnectionsCommand.ts";
import {
  DescribeConnectionsOnInterconnectCommandInput,
  DescribeConnectionsOnInterconnectCommandOutput,
} from "./commands/DescribeConnectionsOnInterconnectCommand.ts";
import {
  DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  DescribeDirectConnectGatewayAssociationProposalsCommandOutput,
} from "./commands/DescribeDirectConnectGatewayAssociationProposalsCommand.ts";
import {
  DescribeDirectConnectGatewayAssociationsCommandInput,
  DescribeDirectConnectGatewayAssociationsCommandOutput,
} from "./commands/DescribeDirectConnectGatewayAssociationsCommand.ts";
import {
  DescribeDirectConnectGatewayAttachmentsCommandInput,
  DescribeDirectConnectGatewayAttachmentsCommandOutput,
} from "./commands/DescribeDirectConnectGatewayAttachmentsCommand.ts";
import {
  DescribeDirectConnectGatewaysCommandInput,
  DescribeDirectConnectGatewaysCommandOutput,
} from "./commands/DescribeDirectConnectGatewaysCommand.ts";
import {
  DescribeHostedConnectionsCommandInput,
  DescribeHostedConnectionsCommandOutput,
} from "./commands/DescribeHostedConnectionsCommand.ts";
import {
  DescribeInterconnectLoaCommandInput,
  DescribeInterconnectLoaCommandOutput,
} from "./commands/DescribeInterconnectLoaCommand.ts";
import {
  DescribeInterconnectsCommandInput,
  DescribeInterconnectsCommandOutput,
} from "./commands/DescribeInterconnectsCommand.ts";
import { DescribeLagsCommandInput, DescribeLagsCommandOutput } from "./commands/DescribeLagsCommand.ts";
import { DescribeLoaCommandInput, DescribeLoaCommandOutput } from "./commands/DescribeLoaCommand.ts";
import { DescribeLocationsCommandInput, DescribeLocationsCommandOutput } from "./commands/DescribeLocationsCommand.ts";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand.ts";
import {
  DescribeVirtualGatewaysCommandInput,
  DescribeVirtualGatewaysCommandOutput,
} from "./commands/DescribeVirtualGatewaysCommand.ts";
import {
  DescribeVirtualInterfacesCommandInput,
  DescribeVirtualInterfacesCommandOutput,
} from "./commands/DescribeVirtualInterfacesCommand.ts";
import {
  DisassociateConnectionFromLagCommandInput,
  DisassociateConnectionFromLagCommandOutput,
} from "./commands/DisassociateConnectionFromLagCommand.ts";
import {
  DisassociateMacSecKeyCommandInput,
  DisassociateMacSecKeyCommandOutput,
} from "./commands/DisassociateMacSecKeyCommand.ts";
import {
  ListVirtualInterfaceTestHistoryCommandInput,
  ListVirtualInterfaceTestHistoryCommandOutput,
} from "./commands/ListVirtualInterfaceTestHistoryCommand.ts";
import {
  StartBgpFailoverTestCommandInput,
  StartBgpFailoverTestCommandOutput,
} from "./commands/StartBgpFailoverTestCommand.ts";
import {
  StopBgpFailoverTestCommandInput,
  StopBgpFailoverTestCommandOutput,
} from "./commands/StopBgpFailoverTestCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand.ts";
import {
  UpdateDirectConnectGatewayAssociationCommandInput,
  UpdateDirectConnectGatewayAssociationCommandOutput,
} from "./commands/UpdateDirectConnectGatewayAssociationCommand.ts";
import { UpdateLagCommandInput, UpdateLagCommandOutput } from "./commands/UpdateLagCommand.ts";
import {
  UpdateVirtualInterfaceAttributesCommandInput,
  UpdateVirtualInterfaceAttributesCommandOutput,
} from "./commands/UpdateVirtualInterfaceAttributesCommand.ts";
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
  | AcceptDirectConnectGatewayAssociationProposalCommandInput
  | AllocateConnectionOnInterconnectCommandInput
  | AllocateHostedConnectionCommandInput
  | AllocatePrivateVirtualInterfaceCommandInput
  | AllocatePublicVirtualInterfaceCommandInput
  | AllocateTransitVirtualInterfaceCommandInput
  | AssociateConnectionWithLagCommandInput
  | AssociateHostedConnectionCommandInput
  | AssociateMacSecKeyCommandInput
  | AssociateVirtualInterfaceCommandInput
  | ConfirmConnectionCommandInput
  | ConfirmPrivateVirtualInterfaceCommandInput
  | ConfirmPublicVirtualInterfaceCommandInput
  | ConfirmTransitVirtualInterfaceCommandInput
  | CreateBGPPeerCommandInput
  | CreateConnectionCommandInput
  | CreateDirectConnectGatewayAssociationCommandInput
  | CreateDirectConnectGatewayAssociationProposalCommandInput
  | CreateDirectConnectGatewayCommandInput
  | CreateInterconnectCommandInput
  | CreateLagCommandInput
  | CreatePrivateVirtualInterfaceCommandInput
  | CreatePublicVirtualInterfaceCommandInput
  | CreateTransitVirtualInterfaceCommandInput
  | DeleteBGPPeerCommandInput
  | DeleteConnectionCommandInput
  | DeleteDirectConnectGatewayAssociationCommandInput
  | DeleteDirectConnectGatewayAssociationProposalCommandInput
  | DeleteDirectConnectGatewayCommandInput
  | DeleteInterconnectCommandInput
  | DeleteLagCommandInput
  | DeleteVirtualInterfaceCommandInput
  | DescribeConnectionLoaCommandInput
  | DescribeConnectionsCommandInput
  | DescribeConnectionsOnInterconnectCommandInput
  | DescribeDirectConnectGatewayAssociationProposalsCommandInput
  | DescribeDirectConnectGatewayAssociationsCommandInput
  | DescribeDirectConnectGatewayAttachmentsCommandInput
  | DescribeDirectConnectGatewaysCommandInput
  | DescribeHostedConnectionsCommandInput
  | DescribeInterconnectLoaCommandInput
  | DescribeInterconnectsCommandInput
  | DescribeLagsCommandInput
  | DescribeLoaCommandInput
  | DescribeLocationsCommandInput
  | DescribeTagsCommandInput
  | DescribeVirtualGatewaysCommandInput
  | DescribeVirtualInterfacesCommandInput
  | DisassociateConnectionFromLagCommandInput
  | DisassociateMacSecKeyCommandInput
  | ListVirtualInterfaceTestHistoryCommandInput
  | StartBgpFailoverTestCommandInput
  | StopBgpFailoverTestCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateConnectionCommandInput
  | UpdateDirectConnectGatewayAssociationCommandInput
  | UpdateLagCommandInput
  | UpdateVirtualInterfaceAttributesCommandInput;

export type ServiceOutputTypes =
  | AcceptDirectConnectGatewayAssociationProposalCommandOutput
  | AllocateConnectionOnInterconnectCommandOutput
  | AllocateHostedConnectionCommandOutput
  | AllocatePrivateVirtualInterfaceCommandOutput
  | AllocatePublicVirtualInterfaceCommandOutput
  | AllocateTransitVirtualInterfaceCommandOutput
  | AssociateConnectionWithLagCommandOutput
  | AssociateHostedConnectionCommandOutput
  | AssociateMacSecKeyCommandOutput
  | AssociateVirtualInterfaceCommandOutput
  | ConfirmConnectionCommandOutput
  | ConfirmPrivateVirtualInterfaceCommandOutput
  | ConfirmPublicVirtualInterfaceCommandOutput
  | ConfirmTransitVirtualInterfaceCommandOutput
  | CreateBGPPeerCommandOutput
  | CreateConnectionCommandOutput
  | CreateDirectConnectGatewayAssociationCommandOutput
  | CreateDirectConnectGatewayAssociationProposalCommandOutput
  | CreateDirectConnectGatewayCommandOutput
  | CreateInterconnectCommandOutput
  | CreateLagCommandOutput
  | CreatePrivateVirtualInterfaceCommandOutput
  | CreatePublicVirtualInterfaceCommandOutput
  | CreateTransitVirtualInterfaceCommandOutput
  | DeleteBGPPeerCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteDirectConnectGatewayAssociationCommandOutput
  | DeleteDirectConnectGatewayAssociationProposalCommandOutput
  | DeleteDirectConnectGatewayCommandOutput
  | DeleteInterconnectCommandOutput
  | DeleteLagCommandOutput
  | DeleteVirtualInterfaceCommandOutput
  | DescribeConnectionLoaCommandOutput
  | DescribeConnectionsCommandOutput
  | DescribeConnectionsOnInterconnectCommandOutput
  | DescribeDirectConnectGatewayAssociationProposalsCommandOutput
  | DescribeDirectConnectGatewayAssociationsCommandOutput
  | DescribeDirectConnectGatewayAttachmentsCommandOutput
  | DescribeDirectConnectGatewaysCommandOutput
  | DescribeHostedConnectionsCommandOutput
  | DescribeInterconnectLoaCommandOutput
  | DescribeInterconnectsCommandOutput
  | DescribeLagsCommandOutput
  | DescribeLoaCommandOutput
  | DescribeLocationsCommandOutput
  | DescribeTagsCommandOutput
  | DescribeVirtualGatewaysCommandOutput
  | DescribeVirtualInterfacesCommandOutput
  | DisassociateConnectionFromLagCommandOutput
  | DisassociateMacSecKeyCommandOutput
  | ListVirtualInterfaceTestHistoryCommandOutput
  | StartBgpFailoverTestCommandOutput
  | StopBgpFailoverTestCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateConnectionCommandOutput
  | UpdateDirectConnectGatewayAssociationCommandOutput
  | UpdateLagCommandOutput
  | UpdateVirtualInterfaceAttributesCommandOutput;

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
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

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

type DirectConnectClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of DirectConnectClient class constructor that set the region, credentials and other options.
 */
export interface DirectConnectClientConfig extends DirectConnectClientConfigType {}

type DirectConnectClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of DirectConnectClient class. This is resolved and normalized from the {@link DirectConnectClientConfig | constructor configuration interface}.
 */
export interface DirectConnectClientResolvedConfig extends DirectConnectClientResolvedConfigType {}

/**
 * <p>AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable.
 *       One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection
 *       in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon EC2
 *       and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A
 *       connection provides access to all AWS Regions except the China (Beijing) and (China) Ningxia Regions.
 *       AWS resources in the China Regions can only be accessed through locations associated with those Regions.</p>
 */
export class DirectConnectClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DirectConnectClientResolvedConfig
> {
  /**
   * The resolved configuration of DirectConnectClient class. This is resolved and normalized from the {@link DirectConnectClientConfig | constructor configuration interface}.
   */
  readonly config: DirectConnectClientResolvedConfig;

  constructor(configuration: DirectConnectClientConfig) {
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
