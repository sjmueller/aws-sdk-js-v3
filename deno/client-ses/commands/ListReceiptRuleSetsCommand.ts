import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { ListReceiptRuleSetsRequest, ListReceiptRuleSetsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListReceiptRuleSetsCommand,
  serializeAws_queryListReceiptRuleSetsCommand,
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

export type ListReceiptRuleSetsCommandInput = ListReceiptRuleSetsRequest;
export type ListReceiptRuleSetsCommandOutput = ListReceiptRuleSetsResponse & __MetadataBearer;

/**
 * <p>Lists the receipt rule sets that exist under your AWS account in the current AWS
 *             Region. If there are additional receipt rule sets to be retrieved, you will receive a
 *                 <code>NextToken</code> that you can provide to the next call to
 *                 <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p>
 *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class ListReceiptRuleSetsCommand extends $Command<
  ListReceiptRuleSetsCommandInput,
  ListReceiptRuleSetsCommandOutput,
  SESClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReceiptRuleSetsCommandInput) {
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
  ): Handler<ListReceiptRuleSetsCommandInput, ListReceiptRuleSetsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListReceiptRuleSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReceiptRuleSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReceiptRuleSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReceiptRuleSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListReceiptRuleSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReceiptRuleSetsCommandOutput> {
    return deserializeAws_queryListReceiptRuleSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
