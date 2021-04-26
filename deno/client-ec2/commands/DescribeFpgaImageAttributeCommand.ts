import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeFpgaImageAttributeRequest, DescribeFpgaImageAttributeResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DescribeFpgaImageAttributeCommand,
  serializeAws_ec2DescribeFpgaImageAttributeCommand,
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

export interface DescribeFpgaImageAttributeCommandInput extends DescribeFpgaImageAttributeRequest {}
export interface DescribeFpgaImageAttributeCommandOutput extends DescribeFpgaImageAttributeResult, __MetadataBearer {}

/**
 * <p>Describes the specified attribute of the specified Amazon FPGA Image (AFI).</p>
 */
export class DescribeFpgaImageAttributeCommand extends $Command<
  DescribeFpgaImageAttributeCommandInput,
  DescribeFpgaImageAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFpgaImageAttributeCommandInput) {
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
  ): Handler<DescribeFpgaImageAttributeCommandInput, DescribeFpgaImageAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFpgaImageAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFpgaImageAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFpgaImageAttributeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFpgaImageAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeFpgaImageAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFpgaImageAttributeCommandOutput> {
    return deserializeAws_ec2DescribeFpgaImageAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
