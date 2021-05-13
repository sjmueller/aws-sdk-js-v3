import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { DescribeDBProxyTargetsRequest, DescribeDBProxyTargetsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeDBProxyTargetsCommand,
  serializeAws_queryDescribeDBProxyTargetsCommand,
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

export interface DescribeDBProxyTargetsCommandInput extends DescribeDBProxyTargetsRequest {}
export interface DescribeDBProxyTargetsCommandOutput extends DescribeDBProxyTargetsResponse, __MetadataBearer {}

/**
 * <p>Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyTargetsCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, DescribeDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDBProxyTargetsCommand extends $Command<
  DescribeDBProxyTargetsCommandInput,
  DescribeDBProxyTargetsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBProxyTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBProxyTargetsCommandInput, DescribeDBProxyTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBProxyTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBProxyTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDBProxyTargetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBProxyTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBProxyTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBProxyTargetsCommandOutput> {
    return deserializeAws_queryDescribeDBProxyTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
