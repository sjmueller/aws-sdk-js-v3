import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient.ts";
import { AddFlowMediaStreamsRequest, AddFlowMediaStreamsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AddFlowMediaStreamsCommand,
  serializeAws_restJson1AddFlowMediaStreamsCommand,
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

export interface AddFlowMediaStreamsCommandInput extends AddFlowMediaStreamsRequest {}
export interface AddFlowMediaStreamsCommandOutput extends AddFlowMediaStreamsResponse, __MetadataBearer {}

/**
 * Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowMediaStreamsCommand } from "../../client-mediaconnect/mod.ts";
 * // const { MediaConnectClient, AddFlowMediaStreamsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new AddFlowMediaStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFlowMediaStreamsCommandInput} for command's `input` shape.
 * @see {@link AddFlowMediaStreamsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddFlowMediaStreamsCommand extends $Command<
  AddFlowMediaStreamsCommandInput,
  AddFlowMediaStreamsCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddFlowMediaStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddFlowMediaStreamsCommandInput, AddFlowMediaStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "AddFlowMediaStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddFlowMediaStreamsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddFlowMediaStreamsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddFlowMediaStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddFlowMediaStreamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddFlowMediaStreamsCommandOutput> {
    return deserializeAws_restJson1AddFlowMediaStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
