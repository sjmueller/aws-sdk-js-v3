import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient.ts";
import { ListImagePipelineImagesRequest, ListImagePipelineImagesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListImagePipelineImagesCommand,
  serializeAws_restJson1ListImagePipelineImagesCommand,
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

export type ListImagePipelineImagesCommandInput = ListImagePipelineImagesRequest;
export type ListImagePipelineImagesCommandOutput = ListImagePipelineImagesResponse & __MetadataBearer;

/**
 * <p> Returns a list of images created by the specified pipeline.</p>
 */
export class ListImagePipelineImagesCommand extends $Command<
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListImagePipelineImagesCommandInput) {
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
  ): Handler<ListImagePipelineImagesCommandInput, ListImagePipelineImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListImagePipelineImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListImagePipelineImagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListImagePipelineImagesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListImagePipelineImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListImagePipelineImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImagePipelineImagesCommandOutput> {
    return deserializeAws_restJson1ListImagePipelineImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
