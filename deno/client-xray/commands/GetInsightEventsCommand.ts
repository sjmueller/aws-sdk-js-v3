import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient.ts";
import { GetInsightEventsRequest, GetInsightEventsResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetInsightEventsCommand,
  serializeAws_restJson1GetInsightEventsCommand,
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

export interface GetInsightEventsCommandInput extends GetInsightEventsRequest {}
export interface GetInsightEventsCommandOutput extends GetInsightEventsResult, __MetadataBearer {}

/**
 * <p>X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
 *          event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray
 *          console.</p>
 */
export class GetInsightEventsCommand extends $Command<
  GetInsightEventsCommandInput,
  GetInsightEventsCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInsightEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInsightEventsCommandInput, GetInsightEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetInsightEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInsightEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInsightEventsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInsightEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetInsightEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightEventsCommandOutput> {
    return deserializeAws_restJson1GetInsightEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
