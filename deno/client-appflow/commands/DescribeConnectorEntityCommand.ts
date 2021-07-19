import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient.ts";
import { DescribeConnectorEntityRequest, DescribeConnectorEntityResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeConnectorEntityCommand,
  serializeAws_restJson1DescribeConnectorEntityCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface DescribeConnectorEntityCommandInput extends DescribeConnectorEntityRequest {}
export interface DescribeConnectorEntityCommandOutput extends DescribeConnectorEntityResponse, __MetadataBearer {}

/**
 * <p> Provides details regarding the entity used with the connector, with a description of the
 *       data model for each entity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorEntityCommand } from "../../client-appflow/mod.ts";
 * // const { AppflowClient, DescribeConnectorEntityCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeConnectorEntityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectorEntityCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorEntityCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeConnectorEntityCommand extends $Command<
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConnectorEntityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectorEntityCommandInput, DescribeConnectorEntityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeConnectorEntityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConnectorEntityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectorEntityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConnectorEntityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeConnectorEntityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConnectorEntityCommandOutput> {
    return deserializeAws_restJson1DescribeConnectorEntityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
