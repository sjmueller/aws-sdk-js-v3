import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { UpdatePartnerAccountRequest, UpdatePartnerAccountResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdatePartnerAccountCommand,
  serializeAws_restJson1UpdatePartnerAccountCommand,
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

export type UpdatePartnerAccountCommandInput = UpdatePartnerAccountRequest;
export type UpdatePartnerAccountCommandOutput = UpdatePartnerAccountResponse & __MetadataBearer;

/**
 * <p>Updates properties of a partner account.</p>
 */
export class UpdatePartnerAccountCommand extends $Command<
  UpdatePartnerAccountCommandInput,
  UpdatePartnerAccountCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePartnerAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePartnerAccountCommandInput, UpdatePartnerAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdatePartnerAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePartnerAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePartnerAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePartnerAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePartnerAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePartnerAccountCommandOutput> {
    return deserializeAws_restJson1UpdatePartnerAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
