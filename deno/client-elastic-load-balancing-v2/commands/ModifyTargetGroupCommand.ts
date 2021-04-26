import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client.ts";
import { ModifyTargetGroupInput, ModifyTargetGroupOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryModifyTargetGroupCommand,
  serializeAws_queryModifyTargetGroupCommand,
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

export interface ModifyTargetGroupCommandInput extends ModifyTargetGroupInput {}
export interface ModifyTargetGroupCommandOutput extends ModifyTargetGroupOutput, __MetadataBearer {}

/**
 * <p>Modifies the health checks used when evaluating the health state of the targets in the
 *       specified target group.</p>
 */
export class ModifyTargetGroupCommand extends $Command<
  ModifyTargetGroupCommandInput,
  ModifyTargetGroupCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyTargetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "ModifyTargetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTargetGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyTargetGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyTargetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyTargetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyTargetGroupCommandOutput> {
    return deserializeAws_queryModifyTargetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
