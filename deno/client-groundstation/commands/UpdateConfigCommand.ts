import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient.ts";
import { ConfigIdResponse, UpdateConfigRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateConfigCommand,
  serializeAws_restJson1UpdateConfigCommand,
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

export interface UpdateConfigCommandInput extends UpdateConfigRequest {}
export interface UpdateConfigCommandOutput extends ConfigIdResponse, __MetadataBearer {}

/**
 * <p>Updates the <code>Config</code> used when scheduling contacts.</p>
 *          <p>Updating a <code>Config</code> will not update the execution parameters
 *          for existing future contacts scheduled with this <code>Config</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateConfigCommand } from "../../client-groundstation/mod.ts";
 * // const { GroundStationClient, UpdateConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new UpdateConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateConfigCommand extends $Command<
  UpdateConfigCommandInput,
  UpdateConfigCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConfigCommandInput) {
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
  ): Handler<UpdateConfigCommandInput, UpdateConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "UpdateConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigIdResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConfigCommandOutput> {
    return deserializeAws_restJson1UpdateConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
