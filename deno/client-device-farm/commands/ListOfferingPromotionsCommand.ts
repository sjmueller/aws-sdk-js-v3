import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { ListOfferingPromotionsRequest, ListOfferingPromotionsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListOfferingPromotionsCommand,
  serializeAws_json1_1ListOfferingPromotionsCommand,
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

export interface ListOfferingPromotionsCommandInput extends ListOfferingPromotionsRequest {}
export interface ListOfferingPromotionsCommandOutput extends ListOfferingPromotionsResult, __MetadataBearer {}

/**
 * <p>Returns a list of offering promotions. Each offering promotion record contains the ID and description
 *             of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke
 *             the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingPromotionsCommand } from "../../client-device-farm/mod.ts";
 * // const { DeviceFarmClient, ListOfferingPromotionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListOfferingPromotionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOfferingPromotionsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingPromotionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListOfferingPromotionsCommand extends $Command<
  ListOfferingPromotionsCommandInput,
  ListOfferingPromotionsCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOfferingPromotionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOfferingPromotionsCommandInput, ListOfferingPromotionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListOfferingPromotionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOfferingPromotionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOfferingPromotionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOfferingPromotionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOfferingPromotionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOfferingPromotionsCommandOutput> {
    return deserializeAws_json1_1ListOfferingPromotionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
