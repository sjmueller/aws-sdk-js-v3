import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient.ts";
import { CreateReadinessCheckRequest, CreateReadinessCheckResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateReadinessCheckCommand,
  serializeAws_restJson1CreateReadinessCheckCommand,
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

export interface CreateReadinessCheckCommandInput extends CreateReadinessCheckRequest {}
export interface CreateReadinessCheckCommandOutput extends CreateReadinessCheckResponse, __MetadataBearer {}

/**
 * Creates a new Readiness Check.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateReadinessCheckCommand } from "../../client-route53-recovery-readiness/mod.ts";
 * // const { Route53RecoveryReadinessClient, CreateReadinessCheckCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new CreateReadinessCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReadinessCheckCommandInput} for command's `input` shape.
 * @see {@link CreateReadinessCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateReadinessCheckCommand extends $Command<
  CreateReadinessCheckCommandInput,
  CreateReadinessCheckCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReadinessCheckCommandInput) {
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
  ): Handler<CreateReadinessCheckCommandInput, CreateReadinessCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "CreateReadinessCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReadinessCheckRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReadinessCheckResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReadinessCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateReadinessCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReadinessCheckCommandOutput> {
    return deserializeAws_restJson1CreateReadinessCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
