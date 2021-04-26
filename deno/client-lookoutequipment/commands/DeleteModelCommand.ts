import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient.ts";
import { DeleteModelRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DeleteModelCommand,
  serializeAws_json1_0DeleteModelCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface DeleteModelCommandInput extends DeleteModelRequest {}
export interface DeleteModelCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from
 *          being used with an inference scheduler, even one that is already set up. </p>
 */
export class DeleteModelCommand extends $Command<
  DeleteModelCommandInput,
  DeleteModelCommandOutput,
  LookoutEquipmentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteModelCommandInput, DeleteModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DeleteModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteModelCommandOutput> {
    return deserializeAws_json1_0DeleteModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
