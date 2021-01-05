import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListAuditSuppressionsRequest, ListAuditSuppressionsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListAuditSuppressionsCommand,
  serializeAws_restJson1ListAuditSuppressionsCommand,
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

export type ListAuditSuppressionsCommandInput = ListAuditSuppressionsRequest;
export type ListAuditSuppressionsCommandOutput = ListAuditSuppressionsResponse & __MetadataBearer;

/**
 * <p>
 *       Lists your Device Defender audit listings.
 *     </p>
 */
export class ListAuditSuppressionsCommand extends $Command<
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAuditSuppressionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAuditSuppressionsCommandInput, ListAuditSuppressionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListAuditSuppressionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAuditSuppressionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAuditSuppressionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAuditSuppressionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAuditSuppressionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAuditSuppressionsCommandOutput> {
    return deserializeAws_restJson1ListAuditSuppressionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
