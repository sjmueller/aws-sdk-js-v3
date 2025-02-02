import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { GetCapacityReservationUsageRequest, GetCapacityReservationUsageResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2GetCapacityReservationUsageCommand,
  serializeAws_ec2GetCapacityReservationUsageCommand,
} from "../protocols/Aws_ec2.ts";
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

export interface GetCapacityReservationUsageCommandInput extends GetCapacityReservationUsageRequest {}
export interface GetCapacityReservationUsageCommandOutput extends GetCapacityReservationUsageResult, __MetadataBearer {}

/**
 * <p>Gets usage information about a Capacity Reservation. If the Capacity Reservation is shared, it shows usage information for the Capacity Reservation owner
 * 			and each Amazon Web Services account that is currently using the shared capacity. If the Capacity Reservation is not shared, it shows only
 * 			the Capacity Reservation owner's usage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCapacityReservationUsageCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, GetCapacityReservationUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetCapacityReservationUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCapacityReservationUsageCommandInput} for command's `input` shape.
 * @see {@link GetCapacityReservationUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCapacityReservationUsageCommand extends $Command<
  GetCapacityReservationUsageCommandInput,
  GetCapacityReservationUsageCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCapacityReservationUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCapacityReservationUsageCommandInput, GetCapacityReservationUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetCapacityReservationUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCapacityReservationUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCapacityReservationUsageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCapacityReservationUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetCapacityReservationUsageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCapacityReservationUsageCommandOutput> {
    return deserializeAws_ec2GetCapacityReservationUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
