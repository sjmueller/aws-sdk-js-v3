import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient.ts";
import { CreateRecoveryGroupRequest, CreateRecoveryGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateRecoveryGroupCommand,
  serializeAws_restJson1CreateRecoveryGroupCommand,
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

export interface CreateRecoveryGroupCommandInput extends CreateRecoveryGroupRequest {}
export interface CreateRecoveryGroupCommandOutput extends CreateRecoveryGroupResponse, __MetadataBearer {}

/**
 * Creates a new Recovery Group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateRecoveryGroupCommand } from "../../client-route53-recovery-readiness/mod.ts";
 * // const { Route53RecoveryReadinessClient, CreateRecoveryGroupCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new CreateRecoveryGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecoveryGroupCommandInput} for command's `input` shape.
 * @see {@link CreateRecoveryGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRecoveryGroupCommand extends $Command<
  CreateRecoveryGroupCommandInput,
  CreateRecoveryGroupCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRecoveryGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryReadinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRecoveryGroupCommandInput, CreateRecoveryGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "CreateRecoveryGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRecoveryGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRecoveryGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRecoveryGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRecoveryGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRecoveryGroupCommandOutput> {
    return deserializeAws_restJson1CreateRecoveryGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
