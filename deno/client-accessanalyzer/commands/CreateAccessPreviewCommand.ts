import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient.ts";
import { CreateAccessPreviewRequest, CreateAccessPreviewResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateAccessPreviewCommand,
  serializeAws_restJson1CreateAccessPreviewCommand,
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

export type CreateAccessPreviewCommandInput = CreateAccessPreviewRequest;
export type CreateAccessPreviewCommandOutput = CreateAccessPreviewResponse & __MetadataBearer;

/**
 * <p>Creates an access preview that allows you to preview Access Analyzer findings for your resource
 *          before deploying resource permissions.</p>
 */
export class CreateAccessPreviewCommand extends $Command<
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccessPreviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessPreviewCommandInput, CreateAccessPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "CreateAccessPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccessPreviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccessPreviewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccessPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAccessPreviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessPreviewCommandOutput> {
    return deserializeAws_restJson1CreateAccessPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
