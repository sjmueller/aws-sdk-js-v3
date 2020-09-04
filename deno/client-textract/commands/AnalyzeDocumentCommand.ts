import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient.ts";
import { AnalyzeDocumentRequest, AnalyzeDocumentResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1AnalyzeDocumentCommand,
  serializeAws_json1_1AnalyzeDocumentCommand,
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

export type AnalyzeDocumentCommandInput = AnalyzeDocumentRequest;
export type AnalyzeDocumentCommandOutput = AnalyzeDocumentResponse & __MetadataBearer;

export class AnalyzeDocumentCommand extends $Command<
  AnalyzeDocumentCommandInput,
  AnalyzeDocumentCommandOutput,
  TextractClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AnalyzeDocumentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TextractClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AnalyzeDocumentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AnalyzeDocumentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AnalyzeDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AnalyzeDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AnalyzeDocumentCommandOutput> {
    return deserializeAws_json1_1AnalyzeDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
