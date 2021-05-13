import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient.ts";
import { DescribeAnomalyRequest, DescribeAnomalyResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeAnomalyCommand,
  serializeAws_restJson1DescribeAnomalyCommand,
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

export interface DescribeAnomalyCommandInput extends DescribeAnomalyRequest {}
export interface DescribeAnomalyCommandOutput extends DescribeAnomalyResponse, __MetadataBearer {}

/**
 * <p>
 *    		Returns details about an anomaly that you specify using its ID.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAnomalyCommand } from "../../client-devops-guru/mod.ts";
 * // const { DevOpsGuruClient, DescribeAnomalyCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAnomalyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnomalyCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAnomalyCommand extends $Command<
  DescribeAnomalyCommandInput,
  DescribeAnomalyCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAnomalyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAnomalyCommandInput, DescribeAnomalyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeAnomalyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAnomalyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAnomalyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAnomalyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAnomalyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAnomalyCommandOutput> {
    return deserializeAws_restJson1DescribeAnomalyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
