import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IAMClient.ts";
import { DeleteSigningCertificateRequest } from "../models/index.ts";
import {
  deserializeAws_queryDeleteSigningCertificateCommand,
  serializeAws_queryDeleteSigningCertificateCommand
} from "../protocols/Aws_query.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type DeleteSigningCertificateCommandInput = DeleteSigningCertificateRequest;
export type DeleteSigningCertificateCommandOutput = __MetadataBearer;

export class DeleteSigningCertificateCommand extends $Command<
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSigningCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteSigningCertificateCommandInput,
    DeleteSigningCertificateCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteSigningCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteSigningCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSigningCertificateCommandOutput> {
    return deserializeAws_queryDeleteSigningCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
