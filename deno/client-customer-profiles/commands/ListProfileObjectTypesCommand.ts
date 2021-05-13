import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient.ts";
import { ListProfileObjectTypesRequest, ListProfileObjectTypesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListProfileObjectTypesCommand,
  serializeAws_restJson1ListProfileObjectTypesCommand,
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

export interface ListProfileObjectTypesCommandInput extends ListProfileObjectTypesRequest {}
export interface ListProfileObjectTypesCommandOutput extends ListProfileObjectTypesResponse, __MetadataBearer {}

/**
 * <p>Lists all of the templates available within the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypesCommand } from "../../client-customer-profiles/mod.ts";
 * // const { CustomerProfilesClient, ListProfileObjectTypesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListProfileObjectTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileObjectTypesCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectTypesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListProfileObjectTypesCommand extends $Command<
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProfileObjectTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProfileObjectTypesCommandInput, ListProfileObjectTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListProfileObjectTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProfileObjectTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProfileObjectTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProfileObjectTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProfileObjectTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProfileObjectTypesCommandOutput> {
    return deserializeAws_restJson1ListProfileObjectTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
