import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient.ts";
import { DBSubnetGroupMessage, DescribeDBSubnetGroupsMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeDBSubnetGroupsCommand,
  serializeAws_queryDescribeDBSubnetGroupsCommand,
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

export interface DescribeDBSubnetGroupsCommandInput extends DescribeDBSubnetGroupsMessage {}
export interface DescribeDBSubnetGroupsCommandOutput extends DBSubnetGroupMessage, __MetadataBearer {}

/**
 * <p>Returns a list of <code>DBSubnetGroup</code> descriptions. If a
 *                 <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBSubnetGroupsCommand } from "../../client-docdb/mod.ts";
 * // const { DocDBClient, DescribeDBSubnetGroupsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeDBSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDBSubnetGroupsCommand extends $Command<
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBSubnetGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeDBSubnetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBSubnetGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBSubnetGroupMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBSubnetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBSubnetGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBSubnetGroupsCommandOutput> {
    return deserializeAws_queryDescribeDBSubnetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
