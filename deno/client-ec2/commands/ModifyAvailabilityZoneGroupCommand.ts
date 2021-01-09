import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ModifyAvailabilityZoneGroupRequest, ModifyAvailabilityZoneGroupResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2ModifyAvailabilityZoneGroupCommand,
  serializeAws_ec2ModifyAvailabilityZoneGroupCommand,
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

export type ModifyAvailabilityZoneGroupCommandInput = ModifyAvailabilityZoneGroupRequest;
export type ModifyAvailabilityZoneGroupCommandOutput = ModifyAvailabilityZoneGroupResult & __MetadataBearer;

/**
 * <p>Changes the opt-in status of the Local Zone and Wavelength Zone group for your
 *       account.</p>
 *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">
 *   		DescribeAvailabilityZones</a> to view the value for <code>GroupName</code>.</p>
 */
export class ModifyAvailabilityZoneGroupCommand extends $Command<
  ModifyAvailabilityZoneGroupCommandInput,
  ModifyAvailabilityZoneGroupCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyAvailabilityZoneGroupCommandInput) {
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
  ): Handler<ModifyAvailabilityZoneGroupCommandInput, ModifyAvailabilityZoneGroupCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyAvailabilityZoneGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyAvailabilityZoneGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyAvailabilityZoneGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyAvailabilityZoneGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyAvailabilityZoneGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyAvailabilityZoneGroupCommandOutput> {
    return deserializeAws_ec2ModifyAvailabilityZoneGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
