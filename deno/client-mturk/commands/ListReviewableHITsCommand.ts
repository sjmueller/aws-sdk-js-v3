import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { ListReviewableHITsRequest, ListReviewableHITsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListReviewableHITsCommand,
  serializeAws_json1_1ListReviewableHITsCommand,
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

export interface ListReviewableHITsCommandInput extends ListReviewableHITsRequest {}
export interface ListReviewableHITsCommandOutput extends ListReviewableHITsResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to
 *             Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListReviewableHITsCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, ListReviewableHITsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListReviewableHITsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReviewableHITsCommandInput} for command's `input` shape.
 * @see {@link ListReviewableHITsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListReviewableHITsCommand extends $Command<
  ListReviewableHITsCommandInput,
  ListReviewableHITsCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReviewableHITsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListReviewableHITsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReviewableHITsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReviewableHITsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReviewableHITsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReviewableHITsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReviewableHITsCommandOutput> {
    return deserializeAws_json1_1ListReviewableHITsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
