import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DeleteAccountCustomizationRequest, DeleteAccountCustomizationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteAccountCustomizationCommand,
  serializeAws_restJson1DeleteAccountCustomizationCommand,
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

export interface DeleteAccountCustomizationCommandInput extends DeleteAccountCustomizationRequest {}
export interface DeleteAccountCustomizationCommandOutput extends DeleteAccountCustomizationResponse, __MetadataBearer {}

/**
 * <p>Deletes all Amazon QuickSight customizations in this AWS Region for the specified AWS
 *             account and QuickSight namespace.</p>
 */
export class DeleteAccountCustomizationCommand extends $Command<
  DeleteAccountCustomizationCommandInput,
  DeleteAccountCustomizationCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAccountCustomizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccountCustomizationCommandInput, DeleteAccountCustomizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteAccountCustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccountCustomizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAccountCustomizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAccountCustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAccountCustomizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAccountCustomizationCommandOutput> {
    return deserializeAws_restJson1DeleteAccountCustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
