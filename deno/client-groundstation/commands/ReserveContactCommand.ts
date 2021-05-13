import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient.ts";
import { ContactIdResponse, ReserveContactRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ReserveContactCommand,
  serializeAws_restJson1ReserveContactCommand,
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

export interface ReserveContactCommandInput extends ReserveContactRequest {}
export interface ReserveContactCommandOutput extends ContactIdResponse, __MetadataBearer {}

/**
 * <p>Reserves a contact using specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ReserveContactCommand } from "../../client-groundstation/mod.ts";
 * // const { GroundStationClient, ReserveContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ReserveContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReserveContactCommandInput} for command's `input` shape.
 * @see {@link ReserveContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ReserveContactCommand extends $Command<
  ReserveContactCommandInput,
  ReserveContactCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReserveContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReserveContactCommandInput, ReserveContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "ReserveContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReserveContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ContactIdResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReserveContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ReserveContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReserveContactCommandOutput> {
    return deserializeAws_restJson1ReserveContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
