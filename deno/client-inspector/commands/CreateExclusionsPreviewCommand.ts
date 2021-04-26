import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { CreateExclusionsPreviewRequest, CreateExclusionsPreviewResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateExclusionsPreviewCommand,
  serializeAws_json1_1CreateExclusionsPreviewCommand,
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

export interface CreateExclusionsPreviewCommandInput extends CreateExclusionsPreviewRequest {}
export interface CreateExclusionsPreviewCommandOutput extends CreateExclusionsPreviewResponse, __MetadataBearer {}

/**
 * <p>Starts the generation of an exclusions preview for the specified assessment template.
 *          The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can
 *          detect before it runs the assessment. </p>
 */
export class CreateExclusionsPreviewCommand extends $Command<
  CreateExclusionsPreviewCommandInput,
  CreateExclusionsPreviewCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateExclusionsPreviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExclusionsPreviewCommandInput, CreateExclusionsPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "CreateExclusionsPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExclusionsPreviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateExclusionsPreviewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateExclusionsPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateExclusionsPreviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExclusionsPreviewCommandOutput> {
    return deserializeAws_json1_1CreateExclusionsPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
