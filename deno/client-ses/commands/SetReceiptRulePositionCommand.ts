import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { SetReceiptRulePositionRequest, SetReceiptRulePositionResponse } from "../models/models_0.ts";
import {
  deserializeAws_querySetReceiptRulePositionCommand,
  serializeAws_querySetReceiptRulePositionCommand,
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

export type SetReceiptRulePositionCommandInput = SetReceiptRulePositionRequest;
export type SetReceiptRulePositionCommandOutput = SetReceiptRulePositionResponse & __MetadataBearer;

/**
 * <p>Sets the position of the specified receipt rule in the receipt rule set.</p>
 *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class SetReceiptRulePositionCommand extends $Command<
  SetReceiptRulePositionCommandInput,
  SetReceiptRulePositionCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetReceiptRulePositionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetReceiptRulePositionCommandInput, SetReceiptRulePositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetReceiptRulePositionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetReceiptRulePositionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetReceiptRulePositionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetReceiptRulePositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetReceiptRulePositionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetReceiptRulePositionCommandOutput> {
    return deserializeAws_querySetReceiptRulePositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
