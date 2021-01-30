import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { DeleteHumanTaskUiRequest, DeleteHumanTaskUiResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1DeleteHumanTaskUiCommand,
  serializeAws_json1_1DeleteHumanTaskUiCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type DeleteHumanTaskUiCommandInput = DeleteHumanTaskUiRequest;
export type DeleteHumanTaskUiCommandOutput = DeleteHumanTaskUiResponse & __MetadataBearer;

/**
 * <p>Use this operation to delete a human task user interface (worker task template).</p>
 *          <p>
 *       To see a list of human task user interfaces
 *       (work task templates) in your account, use .
 *       When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>
 */
export class DeleteHumanTaskUiCommand extends $Command<
  DeleteHumanTaskUiCommandInput,
  DeleteHumanTaskUiCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteHumanTaskUiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHumanTaskUiCommandInput, DeleteHumanTaskUiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteHumanTaskUiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHumanTaskUiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteHumanTaskUiResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHumanTaskUiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteHumanTaskUiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHumanTaskUiCommandOutput> {
    return deserializeAws_json1_1DeleteHumanTaskUiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
