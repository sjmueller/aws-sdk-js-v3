import { AddFacetToObjectCommandInput, AddFacetToObjectCommandOutput } from "./commands/AddFacetToObjectCommand.ts";
import { ApplySchemaCommandInput, ApplySchemaCommandOutput } from "./commands/ApplySchemaCommand.ts";
import { AttachObjectCommandInput, AttachObjectCommandOutput } from "./commands/AttachObjectCommand.ts";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand.ts";
import { AttachToIndexCommandInput, AttachToIndexCommandOutput } from "./commands/AttachToIndexCommand.ts";
import { AttachTypedLinkCommandInput, AttachTypedLinkCommandOutput } from "./commands/AttachTypedLinkCommand.ts";
import { BatchReadCommandInput, BatchReadCommandOutput } from "./commands/BatchReadCommand.ts";
import { BatchWriteCommandInput, BatchWriteCommandOutput } from "./commands/BatchWriteCommand.ts";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand.ts";
import { CreateFacetCommandInput, CreateFacetCommandOutput } from "./commands/CreateFacetCommand.ts";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand.ts";
import { CreateObjectCommandInput, CreateObjectCommandOutput } from "./commands/CreateObjectCommand.ts";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand.ts";
import {
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
} from "./commands/CreateTypedLinkFacetCommand.ts";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand.ts";
import { DeleteFacetCommandInput, DeleteFacetCommandOutput } from "./commands/DeleteFacetCommand.ts";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand.ts";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand.ts";
import {
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput,
} from "./commands/DeleteTypedLinkFacetCommand.ts";
import { DetachFromIndexCommandInput, DetachFromIndexCommandOutput } from "./commands/DetachFromIndexCommand.ts";
import { DetachObjectCommandInput, DetachObjectCommandOutput } from "./commands/DetachObjectCommand.ts";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand.ts";
import { DetachTypedLinkCommandInput, DetachTypedLinkCommandOutput } from "./commands/DetachTypedLinkCommand.ts";
import { DisableDirectoryCommandInput, DisableDirectoryCommandOutput } from "./commands/DisableDirectoryCommand.ts";
import { EnableDirectoryCommandInput, EnableDirectoryCommandOutput } from "./commands/EnableDirectoryCommand.ts";
import {
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
} from "./commands/GetAppliedSchemaVersionCommand.ts";
import { GetDirectoryCommandInput, GetDirectoryCommandOutput } from "./commands/GetDirectoryCommand.ts";
import { GetFacetCommandInput, GetFacetCommandOutput } from "./commands/GetFacetCommand.ts";
import { GetLinkAttributesCommandInput, GetLinkAttributesCommandOutput } from "./commands/GetLinkAttributesCommand.ts";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand.ts";
import {
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput,
} from "./commands/GetObjectInformationCommand.ts";
import { GetSchemaAsJsonCommandInput, GetSchemaAsJsonCommandOutput } from "./commands/GetSchemaAsJsonCommand.ts";
import {
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
} from "./commands/GetTypedLinkFacetInformationCommand.ts";
import {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "./commands/ListAppliedSchemaArnsCommand.ts";
import {
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "./commands/ListAttachedIndicesCommand.ts";
import {
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
} from "./commands/ListDevelopmentSchemaArnsCommand.ts";
import { ListDirectoriesCommandInput, ListDirectoriesCommandOutput } from "./commands/ListDirectoriesCommand.ts";
import {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "./commands/ListFacetAttributesCommand.ts";
import { ListFacetNamesCommandInput, ListFacetNamesCommandOutput } from "./commands/ListFacetNamesCommand.ts";
import {
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput,
} from "./commands/ListIncomingTypedLinksCommand.ts";
import { ListIndexCommandInput, ListIndexCommandOutput } from "./commands/ListIndexCommand.ts";
import {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "./commands/ListManagedSchemaArnsCommand.ts";
import {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "./commands/ListObjectAttributesCommand.ts";
import { ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput } from "./commands/ListObjectChildrenCommand.ts";
import {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "./commands/ListObjectParentPathsCommand.ts";
import { ListObjectParentsCommandInput, ListObjectParentsCommandOutput } from "./commands/ListObjectParentsCommand.ts";
import { ListObjectPoliciesCommandInput, ListObjectPoliciesCommandOutput } from "./commands/ListObjectPoliciesCommand.ts";
import {
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
} from "./commands/ListOutgoingTypedLinksCommand.ts";
import {
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "./commands/ListPolicyAttachmentsCommand.ts";
import {
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "./commands/ListPublishedSchemaArnsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "./commands/ListTypedLinkFacetAttributesCommand.ts";
import {
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
} from "./commands/ListTypedLinkFacetNamesCommand.ts";
import { LookupPolicyCommandInput, LookupPolicyCommandOutput } from "./commands/LookupPolicyCommand.ts";
import { PublishSchemaCommandInput, PublishSchemaCommandOutput } from "./commands/PublishSchemaCommand.ts";
import { PutSchemaFromJsonCommandInput, PutSchemaFromJsonCommandOutput } from "./commands/PutSchemaFromJsonCommand.ts";
import {
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
} from "./commands/RemoveFacetFromObjectCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateFacetCommandInput, UpdateFacetCommandOutput } from "./commands/UpdateFacetCommand.ts";
import {
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput,
} from "./commands/UpdateLinkAttributesCommand.ts";
import {
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput,
} from "./commands/UpdateObjectAttributesCommand.ts";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand.ts";
import {
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
} from "./commands/UpdateTypedLinkFacetCommand.ts";
import {
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput,
} from "./commands/UpgradeAppliedSchemaCommand.ts";
import {
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput,
} from "./commands/UpgradePublishedSchemaCommand.ts";
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
  | AddFacetToObjectCommandInput
  | ApplySchemaCommandInput
  | AttachObjectCommandInput
  | AttachPolicyCommandInput
  | AttachToIndexCommandInput
  | AttachTypedLinkCommandInput
  | BatchReadCommandInput
  | BatchWriteCommandInput
  | CreateDirectoryCommandInput
  | CreateFacetCommandInput
  | CreateIndexCommandInput
  | CreateObjectCommandInput
  | CreateSchemaCommandInput
  | CreateTypedLinkFacetCommandInput
  | DeleteDirectoryCommandInput
  | DeleteFacetCommandInput
  | DeleteObjectCommandInput
  | DeleteSchemaCommandInput
  | DeleteTypedLinkFacetCommandInput
  | DetachFromIndexCommandInput
  | DetachObjectCommandInput
  | DetachPolicyCommandInput
  | DetachTypedLinkCommandInput
  | DisableDirectoryCommandInput
  | EnableDirectoryCommandInput
  | GetAppliedSchemaVersionCommandInput
  | GetDirectoryCommandInput
  | GetFacetCommandInput
  | GetLinkAttributesCommandInput
  | GetObjectAttributesCommandInput
  | GetObjectInformationCommandInput
  | GetSchemaAsJsonCommandInput
  | GetTypedLinkFacetInformationCommandInput
  | ListAppliedSchemaArnsCommandInput
  | ListAttachedIndicesCommandInput
  | ListDevelopmentSchemaArnsCommandInput
  | ListDirectoriesCommandInput
  | ListFacetAttributesCommandInput
  | ListFacetNamesCommandInput
  | ListIncomingTypedLinksCommandInput
  | ListIndexCommandInput
  | ListManagedSchemaArnsCommandInput
  | ListObjectAttributesCommandInput
  | ListObjectChildrenCommandInput
  | ListObjectParentPathsCommandInput
  | ListObjectParentsCommandInput
  | ListObjectPoliciesCommandInput
  | ListOutgoingTypedLinksCommandInput
  | ListPolicyAttachmentsCommandInput
  | ListPublishedSchemaArnsCommandInput
  | ListTagsForResourceCommandInput
  | ListTypedLinkFacetAttributesCommandInput
  | ListTypedLinkFacetNamesCommandInput
  | LookupPolicyCommandInput
  | PublishSchemaCommandInput
  | PutSchemaFromJsonCommandInput
  | RemoveFacetFromObjectCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFacetCommandInput
  | UpdateLinkAttributesCommandInput
  | UpdateObjectAttributesCommandInput
  | UpdateSchemaCommandInput
  | UpdateTypedLinkFacetCommandInput
  | UpgradeAppliedSchemaCommandInput
  | UpgradePublishedSchemaCommandInput;

export type ServiceOutputTypes =
  | AddFacetToObjectCommandOutput
  | ApplySchemaCommandOutput
  | AttachObjectCommandOutput
  | AttachPolicyCommandOutput
  | AttachToIndexCommandOutput
  | AttachTypedLinkCommandOutput
  | BatchReadCommandOutput
  | BatchWriteCommandOutput
  | CreateDirectoryCommandOutput
  | CreateFacetCommandOutput
  | CreateIndexCommandOutput
  | CreateObjectCommandOutput
  | CreateSchemaCommandOutput
  | CreateTypedLinkFacetCommandOutput
  | DeleteDirectoryCommandOutput
  | DeleteFacetCommandOutput
  | DeleteObjectCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteTypedLinkFacetCommandOutput
  | DetachFromIndexCommandOutput
  | DetachObjectCommandOutput
  | DetachPolicyCommandOutput
  | DetachTypedLinkCommandOutput
  | DisableDirectoryCommandOutput
  | EnableDirectoryCommandOutput
  | GetAppliedSchemaVersionCommandOutput
  | GetDirectoryCommandOutput
  | GetFacetCommandOutput
  | GetLinkAttributesCommandOutput
  | GetObjectAttributesCommandOutput
  | GetObjectInformationCommandOutput
  | GetSchemaAsJsonCommandOutput
  | GetTypedLinkFacetInformationCommandOutput
  | ListAppliedSchemaArnsCommandOutput
  | ListAttachedIndicesCommandOutput
  | ListDevelopmentSchemaArnsCommandOutput
  | ListDirectoriesCommandOutput
  | ListFacetAttributesCommandOutput
  | ListFacetNamesCommandOutput
  | ListIncomingTypedLinksCommandOutput
  | ListIndexCommandOutput
  | ListManagedSchemaArnsCommandOutput
  | ListObjectAttributesCommandOutput
  | ListObjectChildrenCommandOutput
  | ListObjectParentPathsCommandOutput
  | ListObjectParentsCommandOutput
  | ListObjectPoliciesCommandOutput
  | ListOutgoingTypedLinksCommandOutput
  | ListPolicyAttachmentsCommandOutput
  | ListPublishedSchemaArnsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTypedLinkFacetAttributesCommandOutput
  | ListTypedLinkFacetNamesCommandOutput
  | LookupPolicyCommandOutput
  | PublishSchemaCommandOutput
  | PutSchemaFromJsonCommandOutput
  | RemoveFacetFromObjectCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFacetCommandOutput
  | UpdateLinkAttributesCommandOutput
  | UpdateObjectAttributesCommandOutput
  | UpdateSchemaCommandOutput
  | UpdateTypedLinkFacetCommandOutput
  | UpgradeAppliedSchemaCommandOutput
  | UpgradePublishedSchemaCommandOutput;

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

type CloudDirectoryClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CloudDirectoryClient class constructor that set the region, credentials and other options.
 */
export interface CloudDirectoryClientConfig extends CloudDirectoryClientConfigType {}

type CloudDirectoryClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CloudDirectoryClient class. This is resolved and normalized from the {@link CloudDirectoryClientConfig | constructor configuration interface}.
 */
export interface CloudDirectoryClientResolvedConfig extends CloudDirectoryClientResolvedConfigType {}

/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 */
export class CloudDirectoryClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudDirectoryClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudDirectoryClient class. This is resolved and normalized from the {@link CloudDirectoryClientConfig | constructor configuration interface}.
   */
  readonly config: CloudDirectoryClientResolvedConfig;

  constructor(configuration: CloudDirectoryClientConfig) {
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
