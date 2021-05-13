import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { DescribeDBProxyEndpointsRequest, DescribeDBProxyEndpointsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeDBProxyEndpointsCommand,
  serializeAws_queryDescribeDBProxyEndpointsCommand,
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

export interface DescribeDBProxyEndpointsCommandInput extends DescribeDBProxyEndpointsRequest {}
export interface DescribeDBProxyEndpointsCommandOutput extends DescribeDBProxyEndpointsResponse, __MetadataBearer {}

/**
 * <p>Returns information about DB proxy endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyEndpointsCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, DescribeDBProxyEndpointsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBProxyEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBProxyEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyEndpointsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDBProxyEndpointsCommand extends $Command<
  DescribeDBProxyEndpointsCommandInput,
  DescribeDBProxyEndpointsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBProxyEndpointsCommandInput) {
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
  ): Handler<DescribeDBProxyEndpointsCommandInput, DescribeDBProxyEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBProxyEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBProxyEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDBProxyEndpointsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBProxyEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBProxyEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBProxyEndpointsCommandOutput> {
    return deserializeAws_queryDescribeDBProxyEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
