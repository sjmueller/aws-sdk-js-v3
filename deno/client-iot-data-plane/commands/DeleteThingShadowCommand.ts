import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient.ts";
import { DeleteThingShadowRequest, DeleteThingShadowResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteThingShadowCommand,
  serializeAws_restJson1DeleteThingShadowCommand,
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

export interface DeleteThingShadowCommandInput extends DeleteThingShadowRequest {}
export interface DeleteThingShadowCommandOutput extends DeleteThingShadowResponse, __MetadataBearer {}

/**
 * <p>Deletes the shadow for the specified thing.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the AWS IoT Developer Guide.</p>
 */
export class DeleteThingShadowCommand extends $Command<
  DeleteThingShadowCommandInput,
  DeleteThingShadowCommandOutput,
  IoTDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteThingShadowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "DeleteThingShadowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteThingShadowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteThingShadowResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteThingShadowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteThingShadowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteThingShadowCommandOutput> {
    return deserializeAws_restJson1DeleteThingShadowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
