import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { DeleteLifecycleHookAnswer, DeleteLifecycleHookType } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteLifecycleHookCommand,
  serializeAws_queryDeleteLifecycleHookCommand,
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

export interface DeleteLifecycleHookCommandInput extends DeleteLifecycleHookType {}
export interface DeleteLifecycleHookCommandOutput extends DeleteLifecycleHookAnswer, __MetadataBearer {}

/**
 * <p>Deletes the specified lifecycle hook.</p>
 *         <p>If there are any outstanding lifecycle actions, they are completed first
 *                 (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating
 *             instances).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteLifecycleHookCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, DeleteLifecycleHookCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DeleteLifecycleHookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLifecycleHookCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecycleHookCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteLifecycleHookCommand extends $Command<
  DeleteLifecycleHookCommandInput,
  DeleteLifecycleHookCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLifecycleHookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLifecycleHookCommandInput, DeleteLifecycleHookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DeleteLifecycleHookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLifecycleHookType.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLifecycleHookAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLifecycleHookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteLifecycleHookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLifecycleHookCommandOutput> {
    return deserializeAws_queryDeleteLifecycleHookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
