import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { UpdateSecurityHubConfigurationRequest, UpdateSecurityHubConfigurationResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateSecurityHubConfigurationCommand,
  serializeAws_restJson1UpdateSecurityHubConfigurationCommand,
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
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

export interface UpdateSecurityHubConfigurationCommandInput extends UpdateSecurityHubConfigurationRequest {}
export interface UpdateSecurityHubConfigurationCommandOutput
  extends UpdateSecurityHubConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates configuration options for Security Hub.</p>
 */
export class UpdateSecurityHubConfigurationCommand extends $Command<
  UpdateSecurityHubConfigurationCommandInput,
  UpdateSecurityHubConfigurationCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSecurityHubConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSecurityHubConfigurationCommandInput, UpdateSecurityHubConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateSecurityHubConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecurityHubConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecurityHubConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSecurityHubConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSecurityHubConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSecurityHubConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateSecurityHubConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
