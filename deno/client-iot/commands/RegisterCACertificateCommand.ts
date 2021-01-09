import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { RegisterCACertificateRequest, RegisterCACertificateResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1RegisterCACertificateCommand,
  serializeAws_restJson1RegisterCACertificateCommand,
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

export type RegisterCACertificateCommandInput = RegisterCACertificateRequest;
export type RegisterCACertificateCommandOutput = RegisterCACertificateResponse & __MetadataBearer;

/**
 * <p>Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign
 *          device certificates, which can be then registered with AWS IoT. You can register up to 10
 *          CA certificates per AWS account that have the same subject field. This enables you to have
 *          up to 10 certificate authorities sign your device certificates. If you have more than one
 *          CA certificate registered, make sure you pass the CA certificate when you register your
 *          device certificates with the RegisterCertificate API.</p>
 */
export class RegisterCACertificateCommand extends $Command<
  RegisterCACertificateCommandInput,
  RegisterCACertificateCommandOutput,
  IoTClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterCACertificateCommandInput) {
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
  ): Handler<RegisterCACertificateCommandInput, RegisterCACertificateCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RegisterCACertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterCACertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterCACertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterCACertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterCACertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterCACertificateCommandOutput> {
    return deserializeAws_restJson1RegisterCACertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
