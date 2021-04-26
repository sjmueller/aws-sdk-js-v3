import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient.ts";
import { GetFeedbackRequest, GetFeedbackResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetFeedbackCommand,
  serializeAws_restJson1GetFeedbackCommand,
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

export interface GetFeedbackCommandInput extends GetFeedbackRequest {}
export interface GetFeedbackCommandOutput extends GetFeedbackResponse, __MetadataBearer {}

/**
 * <p>Get feedback for an anomaly group.</p>
 */
export class GetFeedbackCommand extends $Command<
  GetFeedbackCommandInput,
  GetFeedbackCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFeedbackCommandInput, GetFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "GetFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFeedbackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFeedbackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFeedbackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFeedbackCommandOutput> {
    return deserializeAws_restJson1GetFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
