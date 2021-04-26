import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient.ts";
import { DescribeExecutionInput, DescribeExecutionOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DescribeExecutionCommand,
  serializeAws_json1_0DescribeExecutionCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface DescribeExecutionCommandInput extends DescribeExecutionInput {}
export interface DescribeExecutionCommandOutput extends DescribeExecutionOutput, __MetadataBearer {}

/**
 * <p>Describes an execution.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 */
export class DescribeExecutionCommand extends $Command<
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExecutionCommandInput, DescribeExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DescribeExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExecutionCommandOutput> {
    return deserializeAws_json1_0DescribeExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
