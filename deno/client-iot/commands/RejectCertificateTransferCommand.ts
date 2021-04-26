import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { RejectCertificateTransferRequest } from "../models/models_2.ts";
import {
  deserializeAws_restJson1RejectCertificateTransferCommand,
  serializeAws_restJson1RejectCertificateTransferCommand,
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

export interface RejectCertificateTransferCommandInput extends RejectCertificateTransferRequest {}
export interface RejectCertificateTransferCommandOutput extends __MetadataBearer {}

/**
 * <p>Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer,
 *          the certificate status changes from <b>PENDING_TRANSFER</b> to
 *             <b>INACTIVE</b>.</p>
 *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
 *          to enumerate your certificates.</p>
 *          <p>This operation can only be called by the transfer destination. After it is called,
 *          the certificate will be returned to the source's account in the INACTIVE state.</p>
 */
export class RejectCertificateTransferCommand extends $Command<
  RejectCertificateTransferCommandInput,
  RejectCertificateTransferCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectCertificateTransferCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectCertificateTransferCommandInput, RejectCertificateTransferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RejectCertificateTransferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectCertificateTransferRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectCertificateTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RejectCertificateTransferCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectCertificateTransferCommandOutput> {
    return deserializeAws_restJson1RejectCertificateTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
