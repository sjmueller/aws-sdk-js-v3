import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListScheduledAuditsRequest, ListScheduledAuditsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListScheduledAuditsCommand,
  serializeAws_restJson1ListScheduledAuditsCommand,
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

export interface ListScheduledAuditsCommandInput extends ListScheduledAuditsRequest {}
export interface ListScheduledAuditsCommandOutput extends ListScheduledAuditsResponse, __MetadataBearer {}

/**
 * <p>Lists all of your scheduled audits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListScheduledAuditsCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, ListScheduledAuditsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListScheduledAuditsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListScheduledAuditsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledAuditsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListScheduledAuditsCommand extends $Command<
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListScheduledAuditsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListScheduledAuditsCommandInput, ListScheduledAuditsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListScheduledAuditsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListScheduledAuditsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListScheduledAuditsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListScheduledAuditsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListScheduledAuditsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScheduledAuditsCommandOutput> {
    return deserializeAws_restJson1ListScheduledAuditsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
