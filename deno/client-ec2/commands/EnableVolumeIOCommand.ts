import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { EnableVolumeIORequest } from "../models/models_4.ts";
import { deserializeAws_ec2EnableVolumeIOCommand, serializeAws_ec2EnableVolumeIOCommand } from "../protocols/Aws_ec2.ts";
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

export interface EnableVolumeIOCommandInput extends EnableVolumeIORequest {}
export interface EnableVolumeIOCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables I/O operations for a volume that had I/O operations disabled because the data on
 *       the volume was potentially inconsistent.</p>
 */
export class EnableVolumeIOCommand extends $Command<
  EnableVolumeIOCommandInput,
  EnableVolumeIOCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableVolumeIOCommandInput) {
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
  ): Handler<EnableVolumeIOCommandInput, EnableVolumeIOCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableVolumeIOCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableVolumeIORequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableVolumeIOCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableVolumeIOCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableVolumeIOCommandOutput> {
    return deserializeAws_ec2EnableVolumeIOCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
