import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient.ts";
import { DeleteFlowTemplateRequest, DeleteFlowTemplateResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteFlowTemplateCommand,
  serializeAws_json1_1DeleteFlowTemplateCommand,
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

export interface DeleteFlowTemplateCommandInput extends DeleteFlowTemplateRequest {}
export interface DeleteFlowTemplateCommandOutput extends DeleteFlowTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy.
 *          Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).</p>
 */
export class DeleteFlowTemplateCommand extends $Command<
  DeleteFlowTemplateCommandInput,
  DeleteFlowTemplateCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFlowTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "DeleteFlowTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFlowTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFlowTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFlowTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFlowTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFlowTemplateCommandOutput> {
    return deserializeAws_json1_1DeleteFlowTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
