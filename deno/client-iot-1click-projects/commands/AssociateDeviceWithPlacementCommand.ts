import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient.ts";
import { AssociateDeviceWithPlacementRequest, AssociateDeviceWithPlacementResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AssociateDeviceWithPlacementCommand,
  serializeAws_restJson1AssociateDeviceWithPlacementCommand,
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

export interface AssociateDeviceWithPlacementCommandInput extends AssociateDeviceWithPlacementRequest {}
export interface AssociateDeviceWithPlacementCommandOutput
  extends AssociateDeviceWithPlacementResponse,
    __MetadataBearer {}

/**
 * <p>Associates a physical device with a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, AssociateDeviceWithPlacementCommand } from "../../client-iot-1click-projects/mod.ts";
 * // const { IoT1ClickProjectsClient, AssociateDeviceWithPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new AssociateDeviceWithPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDeviceWithPlacementCommandInput} for command's `input` shape.
 * @see {@link AssociateDeviceWithPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateDeviceWithPlacementCommand extends $Command<
  AssociateDeviceWithPlacementCommandInput,
  AssociateDeviceWithPlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDeviceWithPlacementCommandInput) {
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
  ): Handler<AssociateDeviceWithPlacementCommandInput, AssociateDeviceWithPlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "AssociateDeviceWithPlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDeviceWithPlacementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateDeviceWithPlacementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDeviceWithPlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateDeviceWithPlacementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDeviceWithPlacementCommandOutput> {
    return deserializeAws_restJson1AssociateDeviceWithPlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
