import { AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput } from "./commands/AcceptHandshakeCommand.ts";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand.ts";
import { CancelHandshakeCommandInput, CancelHandshakeCommandOutput } from "./commands/CancelHandshakeCommand.ts";
import { CreateAccountCommandInput, CreateAccountCommandOutput } from "./commands/CreateAccountCommand.ts";
import {
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput,
} from "./commands/CreateGovCloudAccountCommand.ts";
import { CreateOrganizationCommandInput, CreateOrganizationCommandOutput } from "./commands/CreateOrganizationCommand.ts";
import {
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput,
} from "./commands/CreateOrganizationalUnitCommand.ts";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand.ts";
import { DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput } from "./commands/DeclineHandshakeCommand.ts";
import { DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput } from "./commands/DeleteOrganizationCommand.ts";
import {
  DeleteOrganizationalUnitCommandInput,
  DeleteOrganizationalUnitCommandOutput,
} from "./commands/DeleteOrganizationalUnitCommand.ts";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand.ts";
import {
  DeregisterDelegatedAdministratorCommandInput,
  DeregisterDelegatedAdministratorCommandOutput,
} from "./commands/DeregisterDelegatedAdministratorCommand.ts";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "./commands/DescribeAccountCommand.ts";
import {
  DescribeCreateAccountStatusCommandInput,
  DescribeCreateAccountStatusCommandOutput,
} from "./commands/DescribeCreateAccountStatusCommand.ts";
import {
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput,
} from "./commands/DescribeEffectivePolicyCommand.ts";
import { DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput } from "./commands/DescribeHandshakeCommand.ts";
import {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand.ts";
import {
  DescribeOrganizationalUnitCommandInput,
  DescribeOrganizationalUnitCommandOutput,
} from "./commands/DescribeOrganizationalUnitCommand.ts";
import { DescribePolicyCommandInput, DescribePolicyCommandOutput } from "./commands/DescribePolicyCommand.ts";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand.ts";
import {
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput,
} from "./commands/DisableAWSServiceAccessCommand.ts";
import { DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput } from "./commands/DisablePolicyTypeCommand.ts";
import {
  EnableAWSServiceAccessCommandInput,
  EnableAWSServiceAccessCommandOutput,
} from "./commands/EnableAWSServiceAccessCommand.ts";
import { EnableAllFeaturesCommandInput, EnableAllFeaturesCommandOutput } from "./commands/EnableAllFeaturesCommand.ts";
import { EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput } from "./commands/EnablePolicyTypeCommand.ts";
import {
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
} from "./commands/InviteAccountToOrganizationCommand.ts";
import { LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput } from "./commands/LeaveOrganizationCommand.ts";
import {
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "./commands/ListAWSServiceAccessForOrganizationCommand.ts";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "./commands/ListAccountsCommand.ts";
import {
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "./commands/ListAccountsForParentCommand.ts";
import { ListChildrenCommandInput, ListChildrenCommandOutput } from "./commands/ListChildrenCommand.ts";
import {
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
} from "./commands/ListCreateAccountStatusCommand.ts";
import {
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "./commands/ListDelegatedAdministratorsCommand.ts";
import {
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "./commands/ListDelegatedServicesForAccountCommand.ts";
import {
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "./commands/ListHandshakesForAccountCommand.ts";
import {
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "./commands/ListHandshakesForOrganizationCommand.ts";
import {
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
} from "./commands/ListOrganizationalUnitsForParentCommand.ts";
import { ListParentsCommandInput, ListParentsCommandOutput } from "./commands/ListParentsCommand.ts";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand.ts";
import {
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
} from "./commands/ListPoliciesForTargetCommand.ts";
import { ListRootsCommandInput, ListRootsCommandOutput } from "./commands/ListRootsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "./commands/ListTargetsForPolicyCommand.ts";
import { MoveAccountCommandInput, MoveAccountCommandOutput } from "./commands/MoveAccountCommand.ts";
import {
  RegisterDelegatedAdministratorCommandInput,
  RegisterDelegatedAdministratorCommandOutput,
} from "./commands/RegisterDelegatedAdministratorCommand.ts";
import {
  RemoveAccountFromOrganizationCommandInput,
  RemoveAccountFromOrganizationCommandOutput,
} from "./commands/RemoveAccountFromOrganizationCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput,
} from "./commands/UpdateOrganizationalUnitCommand.ts";
import { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "./commands/UpdatePolicyCommand.ts";
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
  | AcceptHandshakeCommandInput
  | AttachPolicyCommandInput
  | CancelHandshakeCommandInput
  | CreateAccountCommandInput
  | CreateGovCloudAccountCommandInput
  | CreateOrganizationCommandInput
  | CreateOrganizationalUnitCommandInput
  | CreatePolicyCommandInput
  | DeclineHandshakeCommandInput
  | DeleteOrganizationCommandInput
  | DeleteOrganizationalUnitCommandInput
  | DeletePolicyCommandInput
  | DeregisterDelegatedAdministratorCommandInput
  | DescribeAccountCommandInput
  | DescribeCreateAccountStatusCommandInput
  | DescribeEffectivePolicyCommandInput
  | DescribeHandshakeCommandInput
  | DescribeOrganizationCommandInput
  | DescribeOrganizationalUnitCommandInput
  | DescribePolicyCommandInput
  | DetachPolicyCommandInput
  | DisableAWSServiceAccessCommandInput
  | DisablePolicyTypeCommandInput
  | EnableAWSServiceAccessCommandInput
  | EnableAllFeaturesCommandInput
  | EnablePolicyTypeCommandInput
  | InviteAccountToOrganizationCommandInput
  | LeaveOrganizationCommandInput
  | ListAWSServiceAccessForOrganizationCommandInput
  | ListAccountsCommandInput
  | ListAccountsForParentCommandInput
  | ListChildrenCommandInput
  | ListCreateAccountStatusCommandInput
  | ListDelegatedAdministratorsCommandInput
  | ListDelegatedServicesForAccountCommandInput
  | ListHandshakesForAccountCommandInput
  | ListHandshakesForOrganizationCommandInput
  | ListOrganizationalUnitsForParentCommandInput
  | ListParentsCommandInput
  | ListPoliciesCommandInput
  | ListPoliciesForTargetCommandInput
  | ListRootsCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetsForPolicyCommandInput
  | MoveAccountCommandInput
  | RegisterDelegatedAdministratorCommandInput
  | RemoveAccountFromOrganizationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateOrganizationalUnitCommandInput
  | UpdatePolicyCommandInput;

export type ServiceOutputTypes =
  | AcceptHandshakeCommandOutput
  | AttachPolicyCommandOutput
  | CancelHandshakeCommandOutput
  | CreateAccountCommandOutput
  | CreateGovCloudAccountCommandOutput
  | CreateOrganizationCommandOutput
  | CreateOrganizationalUnitCommandOutput
  | CreatePolicyCommandOutput
  | DeclineHandshakeCommandOutput
  | DeleteOrganizationCommandOutput
  | DeleteOrganizationalUnitCommandOutput
  | DeletePolicyCommandOutput
  | DeregisterDelegatedAdministratorCommandOutput
  | DescribeAccountCommandOutput
  | DescribeCreateAccountStatusCommandOutput
  | DescribeEffectivePolicyCommandOutput
  | DescribeHandshakeCommandOutput
  | DescribeOrganizationCommandOutput
  | DescribeOrganizationalUnitCommandOutput
  | DescribePolicyCommandOutput
  | DetachPolicyCommandOutput
  | DisableAWSServiceAccessCommandOutput
  | DisablePolicyTypeCommandOutput
  | EnableAWSServiceAccessCommandOutput
  | EnableAllFeaturesCommandOutput
  | EnablePolicyTypeCommandOutput
  | InviteAccountToOrganizationCommandOutput
  | LeaveOrganizationCommandOutput
  | ListAWSServiceAccessForOrganizationCommandOutput
  | ListAccountsCommandOutput
  | ListAccountsForParentCommandOutput
  | ListChildrenCommandOutput
  | ListCreateAccountStatusCommandOutput
  | ListDelegatedAdministratorsCommandOutput
  | ListDelegatedServicesForAccountCommandOutput
  | ListHandshakesForAccountCommandOutput
  | ListHandshakesForOrganizationCommandOutput
  | ListOrganizationalUnitsForParentCommandOutput
  | ListParentsCommandOutput
  | ListPoliciesCommandOutput
  | ListPoliciesForTargetCommandOutput
  | ListRootsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetsForPolicyCommandOutput
  | MoveAccountCommandOutput
  | RegisterDelegatedAdministratorCommandOutput
  | RemoveAccountFromOrganizationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateOrganizationalUnitCommandOutput
  | UpdatePolicyCommandOutput;

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

type OrganizationsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of OrganizationsClient class constructor that set the region, credentials and other options.
 */
export interface OrganizationsClientConfig extends OrganizationsClientConfigType {}

type OrganizationsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of OrganizationsClient class. This is resolved and normalized from the {@link OrganizationsClientConfig | constructor configuration interface}.
 */
export interface OrganizationsClientResolvedConfig extends OrganizationsClientResolvedConfigType {}

/**
 * <p>AWS Organizations is a web service that enables you to consolidate your multiple AWS accounts
 *             into an <i>organization</i> and centrally manage your accounts and their
 *             resources.</p>
 *         <p>This guide provides descriptions of the Organizations operations. For more information about
 *             using this service, see the <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">AWS Organizations User Guide</a>.</p>
 *         <p>
 *             <b>Support and feedback for AWS Organizations</b>
 *          </p>
 *         <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in
 *             the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">AWS Organizations support forum</a>. For
 *             more information about the AWS support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
 *         <p>
 *             <b>Endpoint to call When using the AWS CLI or the AWS
 *                 SDK</b>
 *          </p>
 *         <p>For the current release of Organizations, specify the <code>us-east-1</code> region for all
 *             AWS API and AWS CLI calls made from the commercial AWS Regions outside of China. If
 *             calling from one of the AWS Regions in China, then specify
 *             <code>cn-northwest-1</code>. You can do this in the AWS CLI by using these parameters and
 *             commands:</p>
 *         <ul>
 *             <li>
 *                 <p>Use the following parameter with each command to specify both the endpoint and
 *                     its region:</p>
 *                 <p>
 *                   <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code>
 *                     <i>(from commercial AWS Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>--endpoint-url
 *                         https://organizations.cn-northwest-1.amazonaws.com.cn</code>
 *                     <i>(from AWS Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>Use the default endpoint, but configure your default region with this
 *                     command:</p>
 *                 <p>
 *                   <code>aws configure set default.region us-east-1</code>
 *                     <i>(from commercial AWS Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>aws configure set default.region cn-northwest-1</code>
 *                     <i>(from AWS Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>Use the following parameter with each command to specify the endpoint:</p>
 *                 <p>
 *                   <code>--region us-east-1</code>
 *                     <i>(from commercial AWS Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>--region cn-northwest-1</code>
 *                     <i>(from AWS Regions in China)</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Recording API Requests</b>
 *         </p>
 *         <p>AWS Organizations supports AWS CloudTrail, a service that records AWS API calls for your AWS
 *             account and delivers log files to an Amazon S3 bucket. By using information collected by
 *             AWS CloudTrail, you can determine which requests the Organizations service received, who made the request
 *             and when, and so on. For more about AWS Organizations and its support for AWS CloudTrail, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging
 *                 AWS Organizations Events with AWS CloudTrail</a> in the <i>AWS Organizations User Guide</i>.
 *             To learn more about AWS CloudTrail, including how to turn it on and find your log files, see the
 *                 <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>
 */
export class OrganizationsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OrganizationsClientResolvedConfig
> {
  /**
   * The resolved configuration of OrganizationsClient class. This is resolved and normalized from the {@link OrganizationsClientConfig | constructor configuration interface}.
   */
  readonly config: OrganizationsClientResolvedConfig;

  constructor(configuration: OrganizationsClientConfig) {
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
