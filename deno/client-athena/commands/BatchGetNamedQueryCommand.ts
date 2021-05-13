import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient.ts";
import { BatchGetNamedQueryInput, BatchGetNamedQueryOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchGetNamedQueryCommand,
  serializeAws_json1_1BatchGetNamedQueryCommand,
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

export interface BatchGetNamedQueryCommandInput extends BatchGetNamedQueryInput {}
export interface BatchGetNamedQueryCommandOutput extends BatchGetNamedQueryOutput, __MetadataBearer {}

/**
 * <p>Returns the details of a single named query or a list of up to 50 queries, which you
 *             provide as an array of query ID strings. Requires you to have access to the workgroup in
 *             which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the
 *             list of named query IDs in the specified workgroup. If information could not be
 *             retrieved for a submitted query ID, information about the query ID submitted is listed
 *             under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed
 *             queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each
 *             unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of
 *             query execution IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetNamedQueryCommand } from "../../client-athena/mod.ts";
 * // const { AthenaClient, BatchGetNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new BatchGetNamedQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetNamedQueryCommandInput} for command's `input` shape.
 * @see {@link BatchGetNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchGetNamedQueryCommand extends $Command<
  BatchGetNamedQueryCommandInput,
  BatchGetNamedQueryCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetNamedQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "BatchGetNamedQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetNamedQueryInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetNamedQueryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetNamedQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetNamedQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetNamedQueryCommandOutput> {
    return deserializeAws_json1_1BatchGetNamedQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
