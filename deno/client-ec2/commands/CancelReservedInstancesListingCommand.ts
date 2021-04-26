import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { CancelReservedInstancesListingRequest, CancelReservedInstancesListingResult } from "../models/models_0.ts";
import {
  deserializeAws_ec2CancelReservedInstancesListingCommand,
  serializeAws_ec2CancelReservedInstancesListingCommand,
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

export interface CancelReservedInstancesListingCommandInput extends CancelReservedInstancesListingRequest {}
export interface CancelReservedInstancesListingCommandOutput
  extends CancelReservedInstancesListingResult,
    __MetadataBearer {}

/**
 * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p>
 *          <p>For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *         in the <i>Amazon EC2 User Guide</i>.</p>
 */
export class CancelReservedInstancesListingCommand extends $Command<
  CancelReservedInstancesListingCommandInput,
  CancelReservedInstancesListingCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelReservedInstancesListingCommandInput) {
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
  ): Handler<CancelReservedInstancesListingCommandInput, CancelReservedInstancesListingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelReservedInstancesListingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelReservedInstancesListingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelReservedInstancesListingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelReservedInstancesListingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CancelReservedInstancesListingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelReservedInstancesListingCommandOutput> {
    return deserializeAws_ec2CancelReservedInstancesListingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
