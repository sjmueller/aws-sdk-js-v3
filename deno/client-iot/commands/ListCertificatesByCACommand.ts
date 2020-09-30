
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListCertificatesByCARequest, ListCertificatesByCAResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListCertificatesByCACommand,
  serializeAws_restJson1ListCertificatesByCACommand,
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

export type ListCertificatesByCACommandInput = ListCertificatesByCARequest;
export type ListCertificatesByCACommandOutput = ListCertificatesByCAResponse & __MetadataBearer;

export class ListCertificatesByCACommand extends $Command<
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCertificatesByCACommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCertificatesByCACommandInput, ListCertificatesByCACommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListCertificatesByCARequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCertificatesByCAResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCertificatesByCACommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCertificatesByCACommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCertificatesByCACommandOutput> {
    return deserializeAws_restJson1ListCertificatesByCACommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
