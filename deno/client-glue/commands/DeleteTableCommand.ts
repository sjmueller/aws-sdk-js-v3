import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { DeleteTableRequest, DeleteTableResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteTableCommand,
  serializeAws_json1_1DeleteTableCommand,
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

export interface DeleteTableCommandInput extends DeleteTableRequest {}
export interface DeleteTableCommandOutput extends DeleteTableResponse, __MetadataBearer {}

/**
 * <p>Removes a table definition from the Data Catalog.</p>
 *          <note>
 *             <p>After completing this operation, you no longer have access to the table versions and
 *         partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources
 *         asynchronously in a timely manner, at the discretion of the service.</p>
 *             <p>To ensure the immediate deletion of all related resources, before calling
 *           <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or
 *           <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or
 *           <code>BatchDeletePartition</code>, to delete any resources that belong to the
 *         table.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteTableCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, DeleteTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteTableCommand extends $Command<
  DeleteTableCommandInput,
  DeleteTableCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTableCommandInput, DeleteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTableResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTableCommandOutput> {
    return deserializeAws_json1_1DeleteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
