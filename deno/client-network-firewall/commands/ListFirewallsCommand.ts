import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient.ts";
import { ListFirewallsRequest, ListFirewallsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0ListFirewallsCommand,
  serializeAws_json1_0ListFirewallsCommand,
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

export interface ListFirewallsCommandInput extends ListFirewallsRequest {}
export interface ListFirewallsCommandOutput extends ListFirewallsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC
 *          identifiers in your request, this returns only the firewalls for those VPCs.</p>
 *          <p>Depending on your setting for max results and the number of firewalls, a single call
 *          might not return the full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFirewallsCommand } from "../../client-network-firewall/mod.ts";
 * // const { NetworkFirewallClient, ListFirewallsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new ListFirewallsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFirewallsCommand extends $Command<
  ListFirewallsCommandInput,
  ListFirewallsCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFirewallsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFirewallsCommandInput, ListFirewallsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "ListFirewallsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFirewallsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFirewallsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFirewallsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListFirewallsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFirewallsCommandOutput> {
    return deserializeAws_json1_0ListFirewallsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
