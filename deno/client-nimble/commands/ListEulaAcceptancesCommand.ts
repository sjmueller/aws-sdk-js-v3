import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient.ts";
import { ListEulaAcceptancesRequest, ListEulaAcceptancesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListEulaAcceptancesCommand,
  serializeAws_restJson1ListEulaAcceptancesCommand,
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

export interface ListEulaAcceptancesCommandInput extends ListEulaAcceptancesRequest {}
export interface ListEulaAcceptancesCommandOutput extends ListEulaAcceptancesResponse, __MetadataBearer {}

/**
 * <p>List Eula Acceptances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListEulaAcceptancesCommand } from "../../client-nimble/mod.ts";
 * // const { NimbleClient, ListEulaAcceptancesCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListEulaAcceptancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEulaAcceptancesCommandInput} for command's `input` shape.
 * @see {@link ListEulaAcceptancesCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListEulaAcceptancesCommand extends $Command<
  ListEulaAcceptancesCommandInput,
  ListEulaAcceptancesCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEulaAcceptancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEulaAcceptancesCommandInput, ListEulaAcceptancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListEulaAcceptancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEulaAcceptancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEulaAcceptancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEulaAcceptancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEulaAcceptancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEulaAcceptancesCommandOutput> {
    return deserializeAws_restJson1ListEulaAcceptancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
