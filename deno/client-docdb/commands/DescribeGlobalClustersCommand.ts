import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient.ts";
import { DescribeGlobalClustersMessage, GlobalClustersMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeGlobalClustersCommand,
  serializeAws_queryDescribeGlobalClustersCommand,
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

export interface DescribeGlobalClustersCommandInput extends DescribeGlobalClustersMessage {}
export interface DescribeGlobalClustersCommandOutput extends GlobalClustersMessage, __MetadataBearer {}

/**
 * <p>Returns information about Amazon DocumentDB global  clusters. This API supports pagination.</p>
 *         <note>
 *             <p>This action only applies to Amazon DocumentDB clusters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeGlobalClustersCommand } from "../../client-docdb/mod.ts";
 * // const { DocDBClient, DescribeGlobalClustersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeGlobalClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalClustersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeGlobalClustersCommand extends $Command<
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGlobalClustersCommandInput) {
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
  ): Handler<DescribeGlobalClustersCommandInput, DescribeGlobalClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeGlobalClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGlobalClustersMessage.filterSensitiveLog,
      outputFilterSensitiveLog: GlobalClustersMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGlobalClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeGlobalClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGlobalClustersCommandOutput> {
    return deserializeAws_queryDescribeGlobalClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
