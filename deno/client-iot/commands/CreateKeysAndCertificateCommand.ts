
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { CreateKeysAndCertificateRequest, CreateKeysAndCertificateResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1CreateKeysAndCertificateCommand,
  serializeAws_restJson1CreateKeysAndCertificateCommand,
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

export type CreateKeysAndCertificateCommandInput = CreateKeysAndCertificateRequest;
export type CreateKeysAndCertificateCommandOutput = CreateKeysAndCertificateResponse & __MetadataBearer;

export class CreateKeysAndCertificateCommand extends $Command<
  CreateKeysAndCertificateCommandInput,
  CreateKeysAndCertificateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateKeysAndCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateKeysAndCertificateCommandInput, CreateKeysAndCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateKeysAndCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateKeysAndCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateKeysAndCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateKeysAndCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeysAndCertificateCommandOutput> {
    return deserializeAws_restJson1CreateKeysAndCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
