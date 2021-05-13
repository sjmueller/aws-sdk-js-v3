import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { DescribePatchGroupStateRequest, DescribePatchGroupStateResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1DescribePatchGroupStateCommand,
  serializeAws_json1_1DescribePatchGroupStateCommand,
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

export interface DescribePatchGroupStateCommandInput extends DescribePatchGroupStateRequest {}
export interface DescribePatchGroupStateCommandOutput extends DescribePatchGroupStateResult, __MetadataBearer {}

/**
 * <p>Returns high-level aggregated patch compliance state for a patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupStateCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, DescribePatchGroupStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchGroupStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchGroupStateCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribePatchGroupStateCommand extends $Command<
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePatchGroupStateCommandInput) {
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
  ): Handler<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribePatchGroupStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePatchGroupStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePatchGroupStateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePatchGroupStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePatchGroupStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePatchGroupStateCommandOutput> {
    return deserializeAws_json1_1DescribePatchGroupStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
