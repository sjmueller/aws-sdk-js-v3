import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { DeleteRegistrationCodeRequest, DeleteRegistrationCodeResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteRegistrationCodeCommand,
  serializeAws_restJson1DeleteRegistrationCodeCommand,
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

export interface DeleteRegistrationCodeCommandInput extends DeleteRegistrationCodeRequest {}
export interface DeleteRegistrationCodeCommandOutput extends DeleteRegistrationCodeResponse, __MetadataBearer {}

/**
 * <p>Deletes a CA certificate registration code.</p>
 */
export class DeleteRegistrationCodeCommand extends $Command<
  DeleteRegistrationCodeCommandInput,
  DeleteRegistrationCodeCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRegistrationCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRegistrationCodeCommandInput, DeleteRegistrationCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteRegistrationCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRegistrationCodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRegistrationCodeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRegistrationCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRegistrationCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRegistrationCodeCommandOutput> {
    return deserializeAws_restJson1DeleteRegistrationCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
