import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ResetEbsDefaultKmsKeyIdRequest, ResetEbsDefaultKmsKeyIdResult } from "../models/models_5.ts";
import {
  deserializeAws_ec2ResetEbsDefaultKmsKeyIdCommand,
  serializeAws_ec2ResetEbsDefaultKmsKeyIdCommand,
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

export interface ResetEbsDefaultKmsKeyIdCommandInput extends ResetEbsDefaultKmsKeyIdRequest {}
export interface ResetEbsDefaultKmsKeyIdCommandOutput extends ResetEbsDefaultKmsKeyIdResult, __MetadataBearer {}

/**
 * <p>Resets the default customer master key (CMK) for EBS encryption for your account in this Region
 *       to the AWS managed CMK for EBS.</p>
 *          <p>After resetting the default CMK to the AWS managed CMK, you can continue to encrypt by a
 *       customer managed CMK by specifying it when you create the volume. For more information, see
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetEbsDefaultKmsKeyIdCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, ResetEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link ResetEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResetEbsDefaultKmsKeyIdCommand extends $Command<
  ResetEbsDefaultKmsKeyIdCommandInput,
  ResetEbsDefaultKmsKeyIdCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetEbsDefaultKmsKeyIdCommandInput) {
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
  ): Handler<ResetEbsDefaultKmsKeyIdCommandInput, ResetEbsDefaultKmsKeyIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ResetEbsDefaultKmsKeyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetEbsDefaultKmsKeyIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResetEbsDefaultKmsKeyIdResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetEbsDefaultKmsKeyIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ResetEbsDefaultKmsKeyIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetEbsDefaultKmsKeyIdCommandOutput> {
    return deserializeAws_ec2ResetEbsDefaultKmsKeyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
