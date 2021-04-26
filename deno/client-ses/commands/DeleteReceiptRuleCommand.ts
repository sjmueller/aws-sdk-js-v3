import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { DeleteReceiptRuleRequest, DeleteReceiptRuleResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteReceiptRuleCommand,
  serializeAws_queryDeleteReceiptRuleCommand,
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

export interface DeleteReceiptRuleCommandInput extends DeleteReceiptRuleRequest {}
export interface DeleteReceiptRuleCommandOutput extends DeleteReceiptRuleResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified receipt rule.</p>
 *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class DeleteReceiptRuleCommand extends $Command<
  DeleteReceiptRuleCommandInput,
  DeleteReceiptRuleCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteReceiptRuleCommandInput) {
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
  ): Handler<DeleteReceiptRuleCommandInput, DeleteReceiptRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DeleteReceiptRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReceiptRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteReceiptRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteReceiptRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteReceiptRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteReceiptRuleCommandOutput> {
    return deserializeAws_queryDeleteReceiptRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
