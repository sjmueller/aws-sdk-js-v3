import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { DescribeAvailablePatchesRequest, DescribeAvailablePatchesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAvailablePatchesCommand,
  serializeAws_json1_1DescribeAvailablePatchesCommand,
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

export interface DescribeAvailablePatchesCommandInput extends DescribeAvailablePatchesRequest {}
export interface DescribeAvailablePatchesCommandOutput extends DescribeAvailablePatchesResult, __MetadataBearer {}

/**
 * <p>Lists all patches eligible to be included in a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAvailablePatchesCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, DescribeAvailablePatchesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAvailablePatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAvailablePatchesCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailablePatchesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAvailablePatchesCommand extends $Command<
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAvailablePatchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeAvailablePatchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAvailablePatchesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAvailablePatchesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAvailablePatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAvailablePatchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAvailablePatchesCommandOutput> {
    return deserializeAws_json1_1DescribeAvailablePatchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
