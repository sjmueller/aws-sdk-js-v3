import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { CheckDomainTransferabilityRequest, CheckDomainTransferabilityResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CheckDomainTransferabilityCommand,
  serializeAws_json1_1CheckDomainTransferabilityCommand,
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

export interface CheckDomainTransferabilityCommandInput extends CheckDomainTransferabilityRequest {}
export interface CheckDomainTransferabilityCommandOutput extends CheckDomainTransferabilityResponse, __MetadataBearer {}

/**
 * <p>Checks whether a domain name can be transferred to Amazon Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CheckDomainTransferabilityCommand } from "../../client-route-53-domains/mod.ts";
 * // const { Route53DomainsClient, CheckDomainTransferabilityCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new CheckDomainTransferabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckDomainTransferabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDomainTransferabilityCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CheckDomainTransferabilityCommand extends $Command<
  CheckDomainTransferabilityCommandInput,
  CheckDomainTransferabilityCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckDomainTransferabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckDomainTransferabilityCommandInput, CheckDomainTransferabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "CheckDomainTransferabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckDomainTransferabilityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CheckDomainTransferabilityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckDomainTransferabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckDomainTransferabilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CheckDomainTransferabilityCommandOutput> {
    return deserializeAws_json1_1CheckDomainTransferabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
