import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient.ts";
import { DeleteProgramRequest, DeleteProgramResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteProgramCommand,
  serializeAws_restJson1DeleteProgramCommand,
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

export interface DeleteProgramCommandInput extends DeleteProgramRequest {}
export interface DeleteProgramCommandOutput extends DeleteProgramResponse, __MetadataBearer {}

/**
 * <p>Deletes a specific program on a specific channel.</p>
 */
export class DeleteProgramCommand extends $Command<
  DeleteProgramCommandInput,
  DeleteProgramCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProgramCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProgramCommandInput, DeleteProgramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "DeleteProgramCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProgramRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteProgramResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteProgramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteProgramCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteProgramCommandOutput> {
    return deserializeAws_restJson1DeleteProgramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
