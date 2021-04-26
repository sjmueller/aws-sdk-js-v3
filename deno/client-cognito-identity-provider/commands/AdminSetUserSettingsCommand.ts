import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { AdminSetUserSettingsRequest, AdminSetUserSettingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AdminSetUserSettingsCommand,
  serializeAws_json1_1AdminSetUserSettingsCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { getAwsAuthPlugin } from "../../middleware-signing/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export interface AdminSetUserSettingsCommandInput extends AdminSetUserSettingsRequest {}
export interface AdminSetUserSettingsCommandOutput extends AdminSetUserSettingsResponse, __MetadataBearer {}

/**
 * <p>
 *             <i>This action is no longer supported.</i> You can use it to configure
 *             only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either
 *             type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.</p>
 */
export class AdminSetUserSettingsCommand extends $Command<
  AdminSetUserSettingsCommandInput,
  AdminSetUserSettingsCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminSetUserSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminSetUserSettingsCommandInput, AdminSetUserSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminSetUserSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminSetUserSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminSetUserSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminSetUserSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminSetUserSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminSetUserSettingsCommandOutput> {
    return deserializeAws_json1_1AdminSetUserSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
