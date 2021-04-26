import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { AcceptReservedNodeExchangeInputMessage, AcceptReservedNodeExchangeOutputMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryAcceptReservedNodeExchangeCommand,
  serializeAws_queryAcceptReservedNodeExchangeCommand,
} from "../protocols/Aws_query.ts";
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

export interface AcceptReservedNodeExchangeCommandInput extends AcceptReservedNodeExchangeInputMessage {}
export interface AcceptReservedNodeExchangeCommandOutput
  extends AcceptReservedNodeExchangeOutputMessage,
    __MetadataBearer {}

/**
 * <p>Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the
 *             configuration (term, payment type, or number of nodes) and no additional costs.
 *         </p>
 */
export class AcceptReservedNodeExchangeCommand extends $Command<
  AcceptReservedNodeExchangeCommandInput,
  AcceptReservedNodeExchangeCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptReservedNodeExchangeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptReservedNodeExchangeCommandInput, AcceptReservedNodeExchangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AcceptReservedNodeExchangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptReservedNodeExchangeInputMessage.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptReservedNodeExchangeOutputMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptReservedNodeExchangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAcceptReservedNodeExchangeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptReservedNodeExchangeCommandOutput> {
    return deserializeAws_queryAcceptReservedNodeExchangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
