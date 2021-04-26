import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient.ts";
import { StartImagePipelineExecutionRequest, StartImagePipelineExecutionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StartImagePipelineExecutionCommand,
  serializeAws_restJson1StartImagePipelineExecutionCommand,
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

export interface StartImagePipelineExecutionCommandInput extends StartImagePipelineExecutionRequest {}
export interface StartImagePipelineExecutionCommandOutput
  extends StartImagePipelineExecutionResponse,
    __MetadataBearer {}

/**
 * <p> Manually triggers a pipeline to create an image.</p>
 */
export class StartImagePipelineExecutionCommand extends $Command<
  StartImagePipelineExecutionCommandInput,
  StartImagePipelineExecutionCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartImagePipelineExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartImagePipelineExecutionCommandInput, StartImagePipelineExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "StartImagePipelineExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartImagePipelineExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartImagePipelineExecutionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartImagePipelineExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartImagePipelineExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartImagePipelineExecutionCommandOutput> {
    return deserializeAws_restJson1StartImagePipelineExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
