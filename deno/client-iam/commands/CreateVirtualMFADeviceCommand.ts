import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { CreateVirtualMFADeviceRequest, CreateVirtualMFADeviceResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateVirtualMFADeviceCommand,
  serializeAws_queryCreateVirtualMFADeviceCommand,
} from "../protocols/Aws_query.ts";
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

export type CreateVirtualMFADeviceCommandInput = CreateVirtualMFADeviceRequest;
export type CreateVirtualMFADeviceCommandOutput = CreateVirtualMFADeviceResponse & __MetadataBearer;

/**
 * <p>Creates a new virtual MFA device for the AWS account. After creating the virtual MFA,
 *          use <a>EnableMFADevice</a> to attach the MFA device to an IAM user. For more
 *          information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a Virtual MFA
 *             Device</a> in the <i>IAM User Guide</i>.</p>
 *          <p>The number and size of IAM resources in an AWS account are limited. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS Quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <important>
 *             <p>The seed information contained in the QR code and the Base32 string should be treated
 *             like any other secret access information. In other words, protect the seed information
 *             as you would your AWS access keys or your passwords. After you provision your virtual
 *             device, you should ensure that the information is destroyed following secure
 *             procedures.</p>
 *          </important>
 */
export class CreateVirtualMFADeviceCommand extends $Command<
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVirtualMFADeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateVirtualMFADeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVirtualMFADeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualMFADeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVirtualMFADeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateVirtualMFADeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualMFADeviceCommandOutput> {
    return deserializeAws_queryCreateVirtualMFADeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
