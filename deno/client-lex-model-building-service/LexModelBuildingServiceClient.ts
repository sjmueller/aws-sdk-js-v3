import { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "./commands/CreateBotVersionCommand.ts";
import {
  CreateIntentVersionCommandInput,
  CreateIntentVersionCommandOutput,
} from "./commands/CreateIntentVersionCommand.ts";
import {
  CreateSlotTypeVersionCommandInput,
  CreateSlotTypeVersionCommandOutput,
} from "./commands/CreateSlotTypeVersionCommand.ts";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "./commands/DeleteBotAliasCommand.ts";
import {
  DeleteBotChannelAssociationCommandInput,
  DeleteBotChannelAssociationCommandOutput,
} from "./commands/DeleteBotChannelAssociationCommand.ts";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand.ts";
import { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "./commands/DeleteBotVersionCommand.ts";
import { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "./commands/DeleteIntentCommand.ts";
import {
  DeleteIntentVersionCommandInput,
  DeleteIntentVersionCommandOutput,
} from "./commands/DeleteIntentVersionCommand.ts";
import { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "./commands/DeleteSlotTypeCommand.ts";
import {
  DeleteSlotTypeVersionCommandInput,
  DeleteSlotTypeVersionCommandOutput,
} from "./commands/DeleteSlotTypeVersionCommand.ts";
import { DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput } from "./commands/DeleteUtterancesCommand.ts";
import { GetBotAliasCommandInput, GetBotAliasCommandOutput } from "./commands/GetBotAliasCommand.ts";
import { GetBotAliasesCommandInput, GetBotAliasesCommandOutput } from "./commands/GetBotAliasesCommand.ts";
import {
  GetBotChannelAssociationCommandInput,
  GetBotChannelAssociationCommandOutput,
} from "./commands/GetBotChannelAssociationCommand.ts";
import {
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput,
} from "./commands/GetBotChannelAssociationsCommand.ts";
import { GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand.ts";
import { GetBotVersionsCommandInput, GetBotVersionsCommandOutput } from "./commands/GetBotVersionsCommand.ts";
import { GetBotsCommandInput, GetBotsCommandOutput } from "./commands/GetBotsCommand.ts";
import { GetBuiltinIntentCommandInput, GetBuiltinIntentCommandOutput } from "./commands/GetBuiltinIntentCommand.ts";
import { GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput } from "./commands/GetBuiltinIntentsCommand.ts";
import {
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "./commands/GetBuiltinSlotTypesCommand.ts";
import { GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand.ts";
import { GetImportCommandInput, GetImportCommandOutput } from "./commands/GetImportCommand.ts";
import { GetIntentCommandInput, GetIntentCommandOutput } from "./commands/GetIntentCommand.ts";
import { GetIntentVersionsCommandInput, GetIntentVersionsCommandOutput } from "./commands/GetIntentVersionsCommand.ts";
import { GetIntentsCommandInput, GetIntentsCommandOutput } from "./commands/GetIntentsCommand.ts";
import { GetSlotTypeCommandInput, GetSlotTypeCommandOutput } from "./commands/GetSlotTypeCommand.ts";
import {
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
} from "./commands/GetSlotTypeVersionsCommand.ts";
import { GetSlotTypesCommandInput, GetSlotTypesCommandOutput } from "./commands/GetSlotTypesCommand.ts";
import { GetUtterancesViewCommandInput, GetUtterancesViewCommandOutput } from "./commands/GetUtterancesViewCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { PutBotAliasCommandInput, PutBotAliasCommandOutput } from "./commands/PutBotAliasCommand.ts";
import { PutBotCommandInput, PutBotCommandOutput } from "./commands/PutBotCommand.ts";
import { PutIntentCommandInput, PutIntentCommandOutput } from "./commands/PutIntentCommand.ts";
import { PutSlotTypeCommandInput, PutSlotTypeCommandOutput } from "./commands/PutSlotTypeCommand.ts";
import { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
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
  | CreateBotVersionCommandInput
  | CreateIntentVersionCommandInput
  | CreateSlotTypeVersionCommandInput
  | DeleteBotAliasCommandInput
  | DeleteBotChannelAssociationCommandInput
  | DeleteBotCommandInput
  | DeleteBotVersionCommandInput
  | DeleteIntentCommandInput
  | DeleteIntentVersionCommandInput
  | DeleteSlotTypeCommandInput
  | DeleteSlotTypeVersionCommandInput
  | DeleteUtterancesCommandInput
  | GetBotAliasCommandInput
  | GetBotAliasesCommandInput
  | GetBotChannelAssociationCommandInput
  | GetBotChannelAssociationsCommandInput
  | GetBotCommandInput
  | GetBotVersionsCommandInput
  | GetBotsCommandInput
  | GetBuiltinIntentCommandInput
  | GetBuiltinIntentsCommandInput
  | GetBuiltinSlotTypesCommandInput
  | GetExportCommandInput
  | GetImportCommandInput
  | GetIntentCommandInput
  | GetIntentVersionsCommandInput
  | GetIntentsCommandInput
  | GetSlotTypeCommandInput
  | GetSlotTypeVersionsCommandInput
  | GetSlotTypesCommandInput
  | GetUtterancesViewCommandInput
  | ListTagsForResourceCommandInput
  | PutBotAliasCommandInput
  | PutBotCommandInput
  | PutIntentCommandInput
  | PutSlotTypeCommandInput
  | StartImportCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | CreateBotVersionCommandOutput
  | CreateIntentVersionCommandOutput
  | CreateSlotTypeVersionCommandOutput
  | DeleteBotAliasCommandOutput
  | DeleteBotChannelAssociationCommandOutput
  | DeleteBotCommandOutput
  | DeleteBotVersionCommandOutput
  | DeleteIntentCommandOutput
  | DeleteIntentVersionCommandOutput
  | DeleteSlotTypeCommandOutput
  | DeleteSlotTypeVersionCommandOutput
  | DeleteUtterancesCommandOutput
  | GetBotAliasCommandOutput
  | GetBotAliasesCommandOutput
  | GetBotChannelAssociationCommandOutput
  | GetBotChannelAssociationsCommandOutput
  | GetBotCommandOutput
  | GetBotVersionsCommandOutput
  | GetBotsCommandOutput
  | GetBuiltinIntentCommandOutput
  | GetBuiltinIntentsCommandOutput
  | GetBuiltinSlotTypesCommandOutput
  | GetExportCommandOutput
  | GetImportCommandOutput
  | GetIntentCommandOutput
  | GetIntentVersionsCommandOutput
  | GetIntentsCommandOutput
  | GetSlotTypeCommandOutput
  | GetSlotTypeVersionsCommandOutput
  | GetSlotTypesCommandOutput
  | GetUtterancesViewCommandOutput
  | ListTagsForResourceCommandOutput
  | PutBotAliasCommandOutput
  | PutBotCommandOutput
  | PutIntentCommandOutput
  | PutSlotTypeCommandOutput
  | StartImportCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

export type LexModelBuildingServiceClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type LexModelBuildingServiceClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Amazon Lex Build-Time Actions</fullname>
 *          <p> Amazon Lex is an AWS service for building conversational voice and text interfaces. Use
 *       these actions to create, update, and delete conversational bots for new and existing client
 *       applications. </p>
 */
export class LexModelBuildingServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LexModelBuildingServiceClientResolvedConfig
> {
  readonly config: LexModelBuildingServiceClientResolvedConfig;

  constructor(configuration: LexModelBuildingServiceClientConfig) {
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
