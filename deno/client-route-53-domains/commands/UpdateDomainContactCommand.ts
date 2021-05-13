import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { UpdateDomainContactRequest, UpdateDomainContactResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateDomainContactCommand,
  serializeAws_json1_1UpdateDomainContactCommand,
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

export interface UpdateDomainContactCommandInput extends UpdateDomainContactRequest {}
export interface UpdateDomainContactCommandOutput extends UpdateDomainContactResponse, __MetadataBearer {}

/**
 * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact:
 * 			registrant, administrator, or technical.</p>
 * 		       <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action.
 * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainContactCommand } from "../../client-route-53-domains/mod.ts";
 * // const { Route53DomainsClient, UpdateDomainContactCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new UpdateDomainContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainContactCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainContactCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDomainContactCommand extends $Command<
  UpdateDomainContactCommandInput,
  UpdateDomainContactCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDomainContactCommandInput) {
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
  ): Handler<UpdateDomainContactCommandInput, UpdateDomainContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "UpdateDomainContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainContactResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDomainContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDomainContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDomainContactCommandOutput> {
    return deserializeAws_json1_1UpdateDomainContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
