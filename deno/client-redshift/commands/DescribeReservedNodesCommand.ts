import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DescribeReservedNodesMessage, ReservedNodesMessage } from "../models/models_1.ts";
import {
  deserializeAws_queryDescribeReservedNodesCommand,
  serializeAws_queryDescribeReservedNodesCommand,
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

export interface DescribeReservedNodesCommandInput extends DescribeReservedNodesMessage {}
export interface DescribeReservedNodesCommandOutput extends ReservedNodesMessage, __MetadataBearer {}

/**
 * <p>Returns the descriptions of the reserved nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeReservedNodesCommand } from "../../client-redshift/mod.ts";
 * // const { RedshiftClient, DescribeReservedNodesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeReservedNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedNodesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedNodesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeReservedNodesCommand extends $Command<
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReservedNodesCommandInput) {
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
  ): Handler<DescribeReservedNodesCommandInput, DescribeReservedNodesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeReservedNodesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedNodesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ReservedNodesMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReservedNodesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedNodesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReservedNodesCommandOutput> {
    return deserializeAws_queryDescribeReservedNodesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
