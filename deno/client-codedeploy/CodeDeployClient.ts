import {
  AddTagsToOnPremisesInstancesCommandInput,
  AddTagsToOnPremisesInstancesCommandOutput,
} from "./commands/AddTagsToOnPremisesInstancesCommand.ts";
import {
  BatchGetApplicationRevisionsCommandInput,
  BatchGetApplicationRevisionsCommandOutput,
} from "./commands/BatchGetApplicationRevisionsCommand.ts";
import {
  BatchGetApplicationsCommandInput,
  BatchGetApplicationsCommandOutput,
} from "./commands/BatchGetApplicationsCommand.ts";
import {
  BatchGetDeploymentGroupsCommandInput,
  BatchGetDeploymentGroupsCommandOutput,
} from "./commands/BatchGetDeploymentGroupsCommand.ts";
import {
  BatchGetDeploymentInstancesCommandInput,
  BatchGetDeploymentInstancesCommandOutput,
} from "./commands/BatchGetDeploymentInstancesCommand.ts";
import {
  BatchGetDeploymentTargetsCommandInput,
  BatchGetDeploymentTargetsCommandOutput,
} from "./commands/BatchGetDeploymentTargetsCommand.ts";
import {
  BatchGetDeploymentsCommandInput,
  BatchGetDeploymentsCommandOutput,
} from "./commands/BatchGetDeploymentsCommand.ts";
import {
  BatchGetOnPremisesInstancesCommandInput,
  BatchGetOnPremisesInstancesCommandOutput,
} from "./commands/BatchGetOnPremisesInstancesCommand.ts";
import {
  ContinueDeploymentCommandInput,
  ContinueDeploymentCommandOutput,
} from "./commands/ContinueDeploymentCommand.ts";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand.ts";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand.ts";
import {
  CreateDeploymentConfigCommandInput,
  CreateDeploymentConfigCommandOutput,
} from "./commands/CreateDeploymentConfigCommand.ts";
import {
  CreateDeploymentGroupCommandInput,
  CreateDeploymentGroupCommandOutput,
} from "./commands/CreateDeploymentGroupCommand.ts";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand.ts";
import {
  DeleteDeploymentConfigCommandInput,
  DeleteDeploymentConfigCommandOutput,
} from "./commands/DeleteDeploymentConfigCommand.ts";
import {
  DeleteDeploymentGroupCommandInput,
  DeleteDeploymentGroupCommandOutput,
} from "./commands/DeleteDeploymentGroupCommand.ts";
import {
  DeleteGitHubAccountTokenCommandInput,
  DeleteGitHubAccountTokenCommandOutput,
} from "./commands/DeleteGitHubAccountTokenCommand.ts";
import {
  DeleteResourcesByExternalIdCommandInput,
  DeleteResourcesByExternalIdCommandOutput,
} from "./commands/DeleteResourcesByExternalIdCommand.ts";
import {
  DeregisterOnPremisesInstanceCommandInput,
  DeregisterOnPremisesInstanceCommandOutput,
} from "./commands/DeregisterOnPremisesInstanceCommand.ts";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand.ts";
import {
  GetApplicationRevisionCommandInput,
  GetApplicationRevisionCommandOutput,
} from "./commands/GetApplicationRevisionCommand.ts";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand.ts";
import {
  GetDeploymentConfigCommandInput,
  GetDeploymentConfigCommandOutput,
} from "./commands/GetDeploymentConfigCommand.ts";
import {
  GetDeploymentGroupCommandInput,
  GetDeploymentGroupCommandOutput,
} from "./commands/GetDeploymentGroupCommand.ts";
import {
  GetDeploymentInstanceCommandInput,
  GetDeploymentInstanceCommandOutput,
} from "./commands/GetDeploymentInstanceCommand.ts";
import {
  GetDeploymentTargetCommandInput,
  GetDeploymentTargetCommandOutput,
} from "./commands/GetDeploymentTargetCommand.ts";
import {
  GetOnPremisesInstanceCommandInput,
  GetOnPremisesInstanceCommandOutput,
} from "./commands/GetOnPremisesInstanceCommand.ts";
import {
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput,
} from "./commands/ListApplicationRevisionsCommand.ts";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand.ts";
import {
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput,
} from "./commands/ListDeploymentConfigsCommand.ts";
import {
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput,
} from "./commands/ListDeploymentGroupsCommand.ts";
import {
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
} from "./commands/ListDeploymentInstancesCommand.ts";
import {
  ListDeploymentTargetsCommandInput,
  ListDeploymentTargetsCommandOutput,
} from "./commands/ListDeploymentTargetsCommand.ts";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand.ts";
import {
  ListGitHubAccountTokenNamesCommandInput,
  ListGitHubAccountTokenNamesCommandOutput,
} from "./commands/ListGitHubAccountTokenNamesCommand.ts";
import {
  ListOnPremisesInstancesCommandInput,
  ListOnPremisesInstancesCommandOutput,
} from "./commands/ListOnPremisesInstancesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutLifecycleEventHookExecutionStatusCommandInput,
  PutLifecycleEventHookExecutionStatusCommandOutput,
} from "./commands/PutLifecycleEventHookExecutionStatusCommand.ts";
import {
  RegisterApplicationRevisionCommandInput,
  RegisterApplicationRevisionCommandOutput,
} from "./commands/RegisterApplicationRevisionCommand.ts";
import {
  RegisterOnPremisesInstanceCommandInput,
  RegisterOnPremisesInstanceCommandOutput,
} from "./commands/RegisterOnPremisesInstanceCommand.ts";
import {
  RemoveTagsFromOnPremisesInstancesCommandInput,
  RemoveTagsFromOnPremisesInstancesCommandOutput,
} from "./commands/RemoveTagsFromOnPremisesInstancesCommand.ts";
import {
  SkipWaitTimeForInstanceTerminationCommandInput,
  SkipWaitTimeForInstanceTerminationCommandOutput,
} from "./commands/SkipWaitTimeForInstanceTerminationCommand.ts";
import { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "./commands/StopDeploymentCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand.ts";
import {
  UpdateDeploymentGroupCommandInput,
  UpdateDeploymentGroupCommandOutput,
} from "./commands/UpdateDeploymentGroupCommand.ts";
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
  | AddTagsToOnPremisesInstancesCommandInput
  | BatchGetApplicationRevisionsCommandInput
  | BatchGetApplicationsCommandInput
  | BatchGetDeploymentGroupsCommandInput
  | BatchGetDeploymentInstancesCommandInput
  | BatchGetDeploymentTargetsCommandInput
  | BatchGetDeploymentsCommandInput
  | BatchGetOnPremisesInstancesCommandInput
  | ContinueDeploymentCommandInput
  | CreateApplicationCommandInput
  | CreateDeploymentCommandInput
  | CreateDeploymentConfigCommandInput
  | CreateDeploymentGroupCommandInput
  | DeleteApplicationCommandInput
  | DeleteDeploymentConfigCommandInput
  | DeleteDeploymentGroupCommandInput
  | DeleteGitHubAccountTokenCommandInput
  | DeleteResourcesByExternalIdCommandInput
  | DeregisterOnPremisesInstanceCommandInput
  | GetApplicationCommandInput
  | GetApplicationRevisionCommandInput
  | GetDeploymentCommandInput
  | GetDeploymentConfigCommandInput
  | GetDeploymentGroupCommandInput
  | GetDeploymentInstanceCommandInput
  | GetDeploymentTargetCommandInput
  | GetOnPremisesInstanceCommandInput
  | ListApplicationRevisionsCommandInput
  | ListApplicationsCommandInput
  | ListDeploymentConfigsCommandInput
  | ListDeploymentGroupsCommandInput
  | ListDeploymentInstancesCommandInput
  | ListDeploymentTargetsCommandInput
  | ListDeploymentsCommandInput
  | ListGitHubAccountTokenNamesCommandInput
  | ListOnPremisesInstancesCommandInput
  | ListTagsForResourceCommandInput
  | PutLifecycleEventHookExecutionStatusCommandInput
  | RegisterApplicationRevisionCommandInput
  | RegisterOnPremisesInstanceCommandInput
  | RemoveTagsFromOnPremisesInstancesCommandInput
  | SkipWaitTimeForInstanceTerminationCommandInput
  | StopDeploymentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateDeploymentGroupCommandInput;

export type ServiceOutputTypes =
  | AddTagsToOnPremisesInstancesCommandOutput
  | BatchGetApplicationRevisionsCommandOutput
  | BatchGetApplicationsCommandOutput
  | BatchGetDeploymentGroupsCommandOutput
  | BatchGetDeploymentInstancesCommandOutput
  | BatchGetDeploymentTargetsCommandOutput
  | BatchGetDeploymentsCommandOutput
  | BatchGetOnPremisesInstancesCommandOutput
  | ContinueDeploymentCommandOutput
  | CreateApplicationCommandOutput
  | CreateDeploymentCommandOutput
  | CreateDeploymentConfigCommandOutput
  | CreateDeploymentGroupCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteDeploymentConfigCommandOutput
  | DeleteDeploymentGroupCommandOutput
  | DeleteGitHubAccountTokenCommandOutput
  | DeleteResourcesByExternalIdCommandOutput
  | DeregisterOnPremisesInstanceCommandOutput
  | GetApplicationCommandOutput
  | GetApplicationRevisionCommandOutput
  | GetDeploymentCommandOutput
  | GetDeploymentConfigCommandOutput
  | GetDeploymentGroupCommandOutput
  | GetDeploymentInstanceCommandOutput
  | GetDeploymentTargetCommandOutput
  | GetOnPremisesInstanceCommandOutput
  | ListApplicationRevisionsCommandOutput
  | ListApplicationsCommandOutput
  | ListDeploymentConfigsCommandOutput
  | ListDeploymentGroupsCommandOutput
  | ListDeploymentInstancesCommandOutput
  | ListDeploymentTargetsCommandOutput
  | ListDeploymentsCommandOutput
  | ListGitHubAccountTokenNamesCommandOutput
  | ListOnPremisesInstancesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutLifecycleEventHookExecutionStatusCommandOutput
  | RegisterApplicationRevisionCommandOutput
  | RegisterOnPremisesInstanceCommandOutput
  | RemoveTagsFromOnPremisesInstancesCommandOutput
  | SkipWaitTimeForInstanceTerminationCommandOutput
  | StopDeploymentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateDeploymentGroupCommandOutput;

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
   * The service name with which to sign requests.
   */
  signingName?: string;

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

export type CodeDeployClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CodeDeployClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS CodeDeploy</fullname>
 *         <p>AWS CodeDeploy is a deployment service that automates application deployments to
 *             Amazon EC2 instances, on-premises instances running in your own facility, serverless
 *             AWS Lambda functions, or applications in an Amazon ECS service.</p>
 *         <p>You can deploy a nearly unlimited variety of application content, such as an updated
 *             Lambda function, updated applications in an Amazon ECS service, code, web and configuration
 *             files, executables, packages, scripts,
 *             multimedia files, and so on. AWS CodeDeploy can deploy application content stored in
 *             Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to
 *             make changes to your existing code before you can use AWS CodeDeploy.</p>
 *         <p>AWS CodeDeploy makes it easier for you to rapidly release new features, helps you
 *             avoid downtime during application deployment, and handles the complexity of updating
 *             your applications, without many of the risks associated with error-prone manual
 *             deployments.</p>
 *         <p>
 *             <b>AWS CodeDeploy Components</b>
 *         </p>
 *         <p>Use the information in this guide to help you work with the following AWS CodeDeploy
 *             components:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Application</b>: A name that uniquely identifies
 *                     the application you want to deploy. AWS CodeDeploy uses this name, which
 *                     functions as a container, to ensure the correct combination of revision,
 *                     deployment configuration, and deployment group are referenced during a
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment group</b>: A set of individual
 *                     instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS
 *                     service and network details. A Lambda deployment group specifies how to route
 *                     traffic to a new version of a Lambda function. An Amazon ECS deployment group
 *                     specifies the service created in Amazon ECS to deploy, a load balancer, and a
 *                     listener to reroute production traffic to an updated containerized application.
 *                     An EC2/On-premises deployment group contains individually tagged instances,
 *                     Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment
 *                     groups can specify optional trigger, alarm, and rollback settings.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment configuration</b>: A set of deployment
 *                     rules and deployment success and failure conditions used by AWS CodeDeploy
 *                     during a deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment</b>: The process and the components used
 *                     when updating a Lambda function, a containerized application in an Amazon ECS
 *                     service, or of installing content on one or more instances. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Application revisions</b>: For an AWS Lambda
 *                     deployment, this is an AppSpec file that specifies the Lambda function to be
 *                     updated and one or more functions to validate deployment lifecycle events. For
 *                     an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS
 *                     task definition, container, and port where production traffic is rerouted. For
 *                     an EC2/On-premises deployment, this is an archive file that contains source
 *                     content—source code, webpages, executable files, and deployment scripts—along
 *                     with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub
 *                     repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3
 *                     object key and its ETag, version, or both. For GitHub, a revision is uniquely
 *                     identified by its commit ID.</p>
 *             </li>
 *          </ul>
 *         <p>This guide also contains information to help you get details about the instances in
 *             your deployments, to make on-premises instances available for AWS CodeDeploy
 *             deployments, to get details about a Lambda function deployment, and to get details about
 *             Amazon ECS service deployments.</p>
 *         <p>
 *             <b>AWS CodeDeploy Information Resources</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy
 *                         User Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">AWS
 *                         CodeDeploy API Reference Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">AWS
 *                         CLI Reference for AWS CodeDeploy</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">AWS CodeDeploy
 *                         Developer Forum</a>
 *                 </p>
 *             </li>
 *          </ul>
 */
export class CodeDeployClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeDeployClientResolvedConfig
> {
  readonly config: CodeDeployClientResolvedConfig;

  constructor(configuration: CodeDeployClientConfig) {
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
