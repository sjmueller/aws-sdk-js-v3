import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient.ts";
import { ListReadinessChecksRequest, ListReadinessChecksResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListReadinessChecksCommand,
  serializeAws_restJson1ListReadinessChecksCommand,
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

export interface ListReadinessChecksCommandInput extends ListReadinessChecksRequest {}
export interface ListReadinessChecksCommandOutput extends ListReadinessChecksResponse, __MetadataBearer {}

/**
 * Returns a collection of Readiness Checks.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, ListReadinessChecksCommand } from "../../client-route53-recovery-readiness/mod.ts";
 * // const { Route53RecoveryReadinessClient, ListReadinessChecksCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new ListReadinessChecksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReadinessChecksCommandInput} for command's `input` shape.
 * @see {@link ListReadinessChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListReadinessChecksCommand extends $Command<
  ListReadinessChecksCommandInput,
  ListReadinessChecksCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReadinessChecksCommandInput) {
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
  ): Handler<ListReadinessChecksCommandInput, ListReadinessChecksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "ListReadinessChecksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReadinessChecksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReadinessChecksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReadinessChecksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListReadinessChecksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReadinessChecksCommandOutput> {
    return deserializeAws_restJson1ListReadinessChecksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
