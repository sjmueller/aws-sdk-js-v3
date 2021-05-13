import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { GetEbsDefaultKmsKeyIdRequest, GetEbsDefaultKmsKeyIdResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2GetEbsDefaultKmsKeyIdCommand,
  serializeAws_ec2GetEbsDefaultKmsKeyIdCommand,
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

export interface GetEbsDefaultKmsKeyIdCommandInput extends GetEbsDefaultKmsKeyIdRequest {}
export interface GetEbsDefaultKmsKeyIdCommandOutput extends GetEbsDefaultKmsKeyIdResult, __MetadataBearer {}

/**
 * <p>Describes the default customer master key (CMK) for EBS encryption by default for your account in this Region.
 *       You can change the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or
 *       <a>ResetEbsDefaultKmsKeyId</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetEbsDefaultKmsKeyIdCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, GetEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link GetEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEbsDefaultKmsKeyIdCommand extends $Command<
  GetEbsDefaultKmsKeyIdCommandInput,
  GetEbsDefaultKmsKeyIdCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEbsDefaultKmsKeyIdCommandInput) {
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
  ): Handler<GetEbsDefaultKmsKeyIdCommandInput, GetEbsDefaultKmsKeyIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetEbsDefaultKmsKeyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEbsDefaultKmsKeyIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEbsDefaultKmsKeyIdResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEbsDefaultKmsKeyIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetEbsDefaultKmsKeyIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEbsDefaultKmsKeyIdCommandOutput> {
    return deserializeAws_ec2GetEbsDefaultKmsKeyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
