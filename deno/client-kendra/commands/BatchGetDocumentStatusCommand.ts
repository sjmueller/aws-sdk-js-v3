import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient.ts";
import { BatchGetDocumentStatusRequest, BatchGetDocumentStatusResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchGetDocumentStatusCommand,
  serializeAws_json1_1BatchGetDocumentStatusCommand,
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

export interface BatchGetDocumentStatusCommandInput extends BatchGetDocumentStatusRequest {}
export interface BatchGetDocumentStatusCommandOutput extends BatchGetDocumentStatusResponse, __MetadataBearer {}

/**
 * <p>Returns the indexing status for one or more documents submitted
 *             with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">
 *                 BatchPutDocument</a> operation.</p>
 *         <p>When you use the <code>BatchPutDocument</code> operation,
 *             documents are indexed asynchronously. You can use the
 *                 <code>BatchGetDocumentStatus</code> operation to get the current
 *             status of a list of documents so that you can determine if they have
 *             been successfully indexed.</p>
 *         <p>You can also use the <code>BatchGetDocumentStatus</code> operation
 *             to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html">
 *                 BatchDeleteDocument</a> operation. When a document is
 *             deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the
 *             status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchGetDocumentStatusCommand } from "../../client-kendra/mod.ts";
 * // const { KendraClient, BatchGetDocumentStatusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new BatchGetDocumentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetDocumentStatusCommandInput} for command's `input` shape.
 * @see {@link BatchGetDocumentStatusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchGetDocumentStatusCommand extends $Command<
  BatchGetDocumentStatusCommandInput,
  BatchGetDocumentStatusCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetDocumentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetDocumentStatusCommandInput, BatchGetDocumentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "BatchGetDocumentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetDocumentStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetDocumentStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetDocumentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetDocumentStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetDocumentStatusCommandOutput> {
    return deserializeAws_json1_1BatchGetDocumentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
