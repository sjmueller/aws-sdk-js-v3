import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient.ts";
import { GetFlowTemplateRequest, GetFlowTemplateResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetFlowTemplateCommand,
  serializeAws_json1_1GetFlowTemplateCommand,
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

export interface GetFlowTemplateCommandInput extends GetFlowTemplateRequest {}
export interface GetFlowTemplateCommandOutput extends GetFlowTemplateResponse, __MetadataBearer {}

/**
 * <p>Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.</p>
 */
export class GetFlowTemplateCommand extends $Command<
  GetFlowTemplateCommandInput,
  GetFlowTemplateCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFlowTemplateCommandInput) {
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
  ): Handler<GetFlowTemplateCommandInput, GetFlowTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetFlowTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFlowTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFlowTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFlowTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFlowTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFlowTemplateCommandOutput> {
    return deserializeAws_json1_1GetFlowTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
