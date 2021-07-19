import { CancelKeyDeletionCommandInput, CancelKeyDeletionCommandOutput } from "./commands/CancelKeyDeletionCommand.ts";
import {
  ConnectCustomKeyStoreCommandInput,
  ConnectCustomKeyStoreCommandOutput,
} from "./commands/ConnectCustomKeyStoreCommand.ts";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand.ts";
import {
  CreateCustomKeyStoreCommandInput,
  CreateCustomKeyStoreCommandOutput,
} from "./commands/CreateCustomKeyStoreCommand.ts";
import { CreateGrantCommandInput, CreateGrantCommandOutput } from "./commands/CreateGrantCommand.ts";
import { CreateKeyCommandInput, CreateKeyCommandOutput } from "./commands/CreateKeyCommand.ts";
import { DecryptCommandInput, DecryptCommandOutput } from "./commands/DecryptCommand.ts";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand.ts";
import {
  DeleteCustomKeyStoreCommandInput,
  DeleteCustomKeyStoreCommandOutput,
} from "./commands/DeleteCustomKeyStoreCommand.ts";
import {
  DeleteImportedKeyMaterialCommandInput,
  DeleteImportedKeyMaterialCommandOutput,
} from "./commands/DeleteImportedKeyMaterialCommand.ts";
import {
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
} from "./commands/DescribeCustomKeyStoresCommand.ts";
import { DescribeKeyCommandInput, DescribeKeyCommandOutput } from "./commands/DescribeKeyCommand.ts";
import { DisableKeyCommandInput, DisableKeyCommandOutput } from "./commands/DisableKeyCommand.ts";
import { DisableKeyRotationCommandInput, DisableKeyRotationCommandOutput } from "./commands/DisableKeyRotationCommand.ts";
import {
  DisconnectCustomKeyStoreCommandInput,
  DisconnectCustomKeyStoreCommandOutput,
} from "./commands/DisconnectCustomKeyStoreCommand.ts";
import { EnableKeyCommandInput, EnableKeyCommandOutput } from "./commands/EnableKeyCommand.ts";
import { EnableKeyRotationCommandInput, EnableKeyRotationCommandOutput } from "./commands/EnableKeyRotationCommand.ts";
import { EncryptCommandInput, EncryptCommandOutput } from "./commands/EncryptCommand.ts";
import { GenerateDataKeyCommandInput, GenerateDataKeyCommandOutput } from "./commands/GenerateDataKeyCommand.ts";
import {
  GenerateDataKeyPairCommandInput,
  GenerateDataKeyPairCommandOutput,
} from "./commands/GenerateDataKeyPairCommand.ts";
import {
  GenerateDataKeyPairWithoutPlaintextCommandInput,
  GenerateDataKeyPairWithoutPlaintextCommandOutput,
} from "./commands/GenerateDataKeyPairWithoutPlaintextCommand.ts";
import {
  GenerateDataKeyWithoutPlaintextCommandInput,
  GenerateDataKeyWithoutPlaintextCommandOutput,
} from "./commands/GenerateDataKeyWithoutPlaintextCommand.ts";
import { GenerateRandomCommandInput, GenerateRandomCommandOutput } from "./commands/GenerateRandomCommand.ts";
import { GetKeyPolicyCommandInput, GetKeyPolicyCommandOutput } from "./commands/GetKeyPolicyCommand.ts";
import {
  GetKeyRotationStatusCommandInput,
  GetKeyRotationStatusCommandOutput,
} from "./commands/GetKeyRotationStatusCommand.ts";
import {
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
} from "./commands/GetParametersForImportCommand.ts";
import { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "./commands/GetPublicKeyCommand.ts";
import { ImportKeyMaterialCommandInput, ImportKeyMaterialCommandOutput } from "./commands/ImportKeyMaterialCommand.ts";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand.ts";
import { ListGrantsCommandInput, ListGrantsCommandOutput } from "./commands/ListGrantsCommand.ts";
import { ListKeyPoliciesCommandInput, ListKeyPoliciesCommandOutput } from "./commands/ListKeyPoliciesCommand.ts";
import { ListKeysCommandInput, ListKeysCommandOutput } from "./commands/ListKeysCommand.ts";
import { ListResourceTagsCommandInput, ListResourceTagsCommandOutput } from "./commands/ListResourceTagsCommand.ts";
import {
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
} from "./commands/ListRetirableGrantsCommand.ts";
import { PutKeyPolicyCommandInput, PutKeyPolicyCommandOutput } from "./commands/PutKeyPolicyCommand.ts";
import { ReEncryptCommandInput, ReEncryptCommandOutput } from "./commands/ReEncryptCommand.ts";
import { ReplicateKeyCommandInput, ReplicateKeyCommandOutput } from "./commands/ReplicateKeyCommand.ts";
import { RetireGrantCommandInput, RetireGrantCommandOutput } from "./commands/RetireGrantCommand.ts";
import { RevokeGrantCommandInput, RevokeGrantCommandOutput } from "./commands/RevokeGrantCommand.ts";
import {
  ScheduleKeyDeletionCommandInput,
  ScheduleKeyDeletionCommandOutput,
} from "./commands/ScheduleKeyDeletionCommand.ts";
import { SignCommandInput, SignCommandOutput } from "./commands/SignCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand.ts";
import {
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput,
} from "./commands/UpdateCustomKeyStoreCommand.ts";
import {
  UpdateKeyDescriptionCommandInput,
  UpdateKeyDescriptionCommandOutput,
} from "./commands/UpdateKeyDescriptionCommand.ts";
import {
  UpdatePrimaryRegionCommandInput,
  UpdatePrimaryRegionCommandOutput,
} from "./commands/UpdatePrimaryRegionCommand.ts";
import { VerifyCommandInput, VerifyCommandOutput } from "./commands/VerifyCommand.ts";
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
  | CancelKeyDeletionCommandInput
  | ConnectCustomKeyStoreCommandInput
  | CreateAliasCommandInput
  | CreateCustomKeyStoreCommandInput
  | CreateGrantCommandInput
  | CreateKeyCommandInput
  | DecryptCommandInput
  | DeleteAliasCommandInput
  | DeleteCustomKeyStoreCommandInput
  | DeleteImportedKeyMaterialCommandInput
  | DescribeCustomKeyStoresCommandInput
  | DescribeKeyCommandInput
  | DisableKeyCommandInput
  | DisableKeyRotationCommandInput
  | DisconnectCustomKeyStoreCommandInput
  | EnableKeyCommandInput
  | EnableKeyRotationCommandInput
  | EncryptCommandInput
  | GenerateDataKeyCommandInput
  | GenerateDataKeyPairCommandInput
  | GenerateDataKeyPairWithoutPlaintextCommandInput
  | GenerateDataKeyWithoutPlaintextCommandInput
  | GenerateRandomCommandInput
  | GetKeyPolicyCommandInput
  | GetKeyRotationStatusCommandInput
  | GetParametersForImportCommandInput
  | GetPublicKeyCommandInput
  | ImportKeyMaterialCommandInput
  | ListAliasesCommandInput
  | ListGrantsCommandInput
  | ListKeyPoliciesCommandInput
  | ListKeysCommandInput
  | ListResourceTagsCommandInput
  | ListRetirableGrantsCommandInput
  | PutKeyPolicyCommandInput
  | ReEncryptCommandInput
  | ReplicateKeyCommandInput
  | RetireGrantCommandInput
  | RevokeGrantCommandInput
  | ScheduleKeyDeletionCommandInput
  | SignCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAliasCommandInput
  | UpdateCustomKeyStoreCommandInput
  | UpdateKeyDescriptionCommandInput
  | UpdatePrimaryRegionCommandInput
  | VerifyCommandInput;

export type ServiceOutputTypes =
  | CancelKeyDeletionCommandOutput
  | ConnectCustomKeyStoreCommandOutput
  | CreateAliasCommandOutput
  | CreateCustomKeyStoreCommandOutput
  | CreateGrantCommandOutput
  | CreateKeyCommandOutput
  | DecryptCommandOutput
  | DeleteAliasCommandOutput
  | DeleteCustomKeyStoreCommandOutput
  | DeleteImportedKeyMaterialCommandOutput
  | DescribeCustomKeyStoresCommandOutput
  | DescribeKeyCommandOutput
  | DisableKeyCommandOutput
  | DisableKeyRotationCommandOutput
  | DisconnectCustomKeyStoreCommandOutput
  | EnableKeyCommandOutput
  | EnableKeyRotationCommandOutput
  | EncryptCommandOutput
  | GenerateDataKeyCommandOutput
  | GenerateDataKeyPairCommandOutput
  | GenerateDataKeyPairWithoutPlaintextCommandOutput
  | GenerateDataKeyWithoutPlaintextCommandOutput
  | GenerateRandomCommandOutput
  | GetKeyPolicyCommandOutput
  | GetKeyRotationStatusCommandOutput
  | GetParametersForImportCommandOutput
  | GetPublicKeyCommandOutput
  | ImportKeyMaterialCommandOutput
  | ListAliasesCommandOutput
  | ListGrantsCommandOutput
  | ListKeyPoliciesCommandOutput
  | ListKeysCommandOutput
  | ListResourceTagsCommandOutput
  | ListRetirableGrantsCommandOutput
  | PutKeyPolicyCommandOutput
  | ReEncryptCommandOutput
  | ReplicateKeyCommandOutput
  | RetireGrantCommandOutput
  | RevokeGrantCommandOutput
  | ScheduleKeyDeletionCommandOutput
  | SignCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAliasCommandOutput
  | UpdateCustomKeyStoreCommandOutput
  | UpdateKeyDescriptionCommandOutput
  | UpdatePrimaryRegionCommandOutput
  | VerifyCommandOutput;

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

type KMSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of KMSClient class constructor that set the region, credentials and other options.
 */
export interface KMSClientConfig extends KMSClientConfigType {}

type KMSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of KMSClient class. This is resolved and normalized from the {@link KMSClientConfig | constructor configuration interface}.
 */
export interface KMSClientResolvedConfig extends KMSClientResolvedConfigType {}

/**
 * <fullname>AWS Key Management Service</fullname>
 *          <p>AWS Key Management Service (AWS KMS) is an encryption and key management web service. This guide describes
 *       the AWS KMS operations that you can call programmatically. For general information about AWS KMS,
 *       see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/">
 *                <i>AWS Key Management Service Developer Guide</i>
 *             </a>.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a
 *         convenient way to create programmatic access to AWS KMS and other AWS services. For example,
 *         the SDKs take care of tasks such as signing requests (see below), managing errors, and
 *         retrying requests automatically. For more information about the AWS SDKs, including how to
 *         download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *           Services</a>.</p>
 *          </note>
 *          <p>We recommend that you use the AWS SDKs to make programmatic API calls to AWS KMS.</p>
 *          <p>Clients must support TLS (Transport Layer Security) 1.0. We recommend TLS 1.2. Clients
 *       must also support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral
 *       Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems
 *       such as Java 7 and later support these modes.</p>
 *          <p>
 *             <b>Signing Requests</b>
 *          </p>
 *          <p>Requests must be signed by using an access key ID and a secret access key. We strongly
 *       recommend that you <i>do not</i> use your AWS account (root) access key ID and
 *       secret key for everyday work with AWS KMS. Instead, use the access key ID and secret access key
 *       for an IAM user. You can also use the AWS Security Token Service to generate temporary
 *       security credentials that you can use to sign requests.</p>
 *          <p>All AWS KMS operations require <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>AWS KMS supports AWS CloudTrail, a service that logs AWS API calls and related events for your AWS
 *       account and delivers them to an Amazon S3 bucket that you specify. By using the information
 *       collected by CloudTrail, you can determine what requests were made to AWS KMS, who made the request,
 *       when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find
 *       your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">AWS CloudTrail User Guide</a>.</p>
 *          <p>
 *             <b>Additional Resources</b>
 *          </p>
 *          <p>For more information about credentials and request signing, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS Security
 *             Credentials</a> - This topic provides general information about the types of
 *           credentials used for accessing AWS.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary
 *             Security Credentials</a> - This section of the <i>IAM User Guide</i>
 *           describes how to create and use temporary security credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version
 *             4 Signing Process</a> - This set of topics walks you through the process of signing
 *           a request using an access key ID and a secret access key.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Commonly Used API Operations</b>
 *          </p>
 *          <p>Of the API operations discussed in this guide, the following will prove the most useful
 *       for most applications. You will likely perform operations other than these, such as creating
 *       keys and assigning policies, by using the console.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Decrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class KMSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KMSClientResolvedConfig
> {
  /**
   * The resolved configuration of KMSClient class. This is resolved and normalized from the {@link KMSClientConfig | constructor configuration interface}.
   */
  readonly config: KMSClientResolvedConfig;

  constructor(configuration: KMSClientConfig) {
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
