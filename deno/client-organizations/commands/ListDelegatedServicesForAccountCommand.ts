import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient.ts";
import { ListDelegatedServicesForAccountRequest, ListDelegatedServicesForAccountResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListDelegatedServicesForAccountCommand,
  serializeAws_json1_1ListDelegatedServicesForAccountCommand,
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

export interface ListDelegatedServicesForAccountCommandInput extends ListDelegatedServicesForAccountRequest {}
export interface ListDelegatedServicesForAccountCommandOutput
  extends ListDelegatedServicesForAccountResponse,
    __MetadataBearer {}

/**
 * <p>List the AWS services for which the specified account is a delegated
 *             administrator.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListDelegatedServicesForAccountCommand } from "../../client-organizations/mod.ts";
 * // const { OrganizationsClient, ListDelegatedServicesForAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListDelegatedServicesForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDelegatedServicesForAccountCommandInput} for command's `input` shape.
 * @see {@link ListDelegatedServicesForAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDelegatedServicesForAccountCommand extends $Command<
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDelegatedServicesForAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDelegatedServicesForAccountCommandInput, ListDelegatedServicesForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListDelegatedServicesForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDelegatedServicesForAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDelegatedServicesForAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDelegatedServicesForAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDelegatedServicesForAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDelegatedServicesForAccountCommandOutput> {
    return deserializeAws_json1_1ListDelegatedServicesForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
