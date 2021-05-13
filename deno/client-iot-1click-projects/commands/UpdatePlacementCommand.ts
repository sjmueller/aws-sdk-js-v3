import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient.ts";
import { UpdatePlacementRequest, UpdatePlacementResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdatePlacementCommand,
  serializeAws_restJson1UpdatePlacementCommand,
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

export interface UpdatePlacementCommandInput extends UpdatePlacementRequest {}
export interface UpdatePlacementCommandOutput extends UpdatePlacementResponse, __MetadataBearer {}

/**
 * <p>Updates a placement with the given attributes. To clear an attribute, pass an empty value
 *       (i.e., "").</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, UpdatePlacementCommand } from "../../client-iot-1click-projects/mod.ts";
 * // const { IoT1ClickProjectsClient, UpdatePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new UpdatePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePlacementCommandInput} for command's `input` shape.
 * @see {@link UpdatePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdatePlacementCommand extends $Command<
  UpdatePlacementCommandInput,
  UpdatePlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePlacementCommandInput, UpdatePlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "UpdatePlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePlacementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePlacementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePlacementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePlacementCommandOutput> {
    return deserializeAws_restJson1UpdatePlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
