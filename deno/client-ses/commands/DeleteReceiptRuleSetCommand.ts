import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { DeleteReceiptRuleSetRequest, DeleteReceiptRuleSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteReceiptRuleSetCommand,
  serializeAws_queryDeleteReceiptRuleSetCommand,
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

export interface DeleteReceiptRuleSetCommandInput extends DeleteReceiptRuleSetRequest {}
export interface DeleteReceiptRuleSetCommandOutput extends DeleteReceiptRuleSetResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified receipt rule set and all of the receipt rules it
 *             contains.</p>
 *         <note>
 *             <p>The currently active rule set cannot be deleted.</p>
 *         </note>
 *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class DeleteReceiptRuleSetCommand extends $Command<
  DeleteReceiptRuleSetCommandInput,
  DeleteReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteReceiptRuleSetCommandInput) {
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
  ): Handler<DeleteReceiptRuleSetCommandInput, DeleteReceiptRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DeleteReceiptRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReceiptRuleSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteReceiptRuleSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteReceiptRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteReceiptRuleSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteReceiptRuleSetCommandOutput> {
    return deserializeAws_queryDeleteReceiptRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
