import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { GetDomainDetailRequest, GetDomainDetailResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDomainDetailCommand,
  serializeAws_json1_1GetDomainDetailCommand,
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

export interface GetDomainDetailCommandInput extends GetDomainDetailRequest {}
export interface GetDomainDetailCommandOutput extends GetDomainDetailResponse, __MetadataBearer {}

/**
 * <p>This operation returns detailed information about a specified domain that is associated with the current AWS account.
 * 			Contact information for the domain is also returned as part of the output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetDomainDetailCommand } from "../../client-route-53-domains/mod.ts";
 * // const { Route53DomainsClient, GetDomainDetailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetDomainDetailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainDetailCommandInput} for command's `input` shape.
 * @see {@link GetDomainDetailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDomainDetailCommand extends $Command<
  GetDomainDetailCommandInput,
  GetDomainDetailCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDomainDetailCommandInput) {
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
  ): Handler<GetDomainDetailCommandInput, GetDomainDetailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "GetDomainDetailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDomainDetailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDomainDetailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDomainDetailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDomainDetailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDomainDetailCommandOutput> {
    return deserializeAws_json1_1GetDomainDetailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
