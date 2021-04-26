import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient.ts";
import { GetAccessPreviewRequest, GetAccessPreviewResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetAccessPreviewCommand,
  serializeAws_restJson1GetAccessPreviewCommand,
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

export interface GetAccessPreviewCommandInput extends GetAccessPreviewRequest {}
export interface GetAccessPreviewCommandOutput extends GetAccessPreviewResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an access preview for the specified analyzer.</p>
 */
export class GetAccessPreviewCommand extends $Command<
  GetAccessPreviewCommandInput,
  GetAccessPreviewCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccessPreviewCommandInput) {
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
  ): Handler<GetAccessPreviewCommandInput, GetAccessPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "GetAccessPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccessPreviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccessPreviewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccessPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAccessPreviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccessPreviewCommandOutput> {
    return deserializeAws_restJson1GetAccessPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
