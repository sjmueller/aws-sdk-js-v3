import { Buffer } from "../../buffer/mod.ts";
import {
  CloudSearchDomainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudSearchDomainClient.ts";
import {
  UploadDocumentsRequest,
  UploadDocumentsResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1UploadDocumentsCommand,
  serializeAws_restJson1UploadDocumentsCommand
} from "../protocols/Aws_restJson1.ts";
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

export type UploadDocumentsCommandInput = Omit<
  UploadDocumentsRequest,
  "documents"
> & {
  documents: UploadDocumentsRequest["documents"] | string | Uint8Array | Buffer;
};
export type UploadDocumentsCommandOutput = UploadDocumentsResponse &
  __MetadataBearer;

export class UploadDocumentsCommand extends $Command<
  UploadDocumentsCommandInput,
  UploadDocumentsCommandOutput,
  CloudSearchDomainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UploadDocumentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchDomainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadDocumentsCommandInput, UploadDocumentsCommandOutput> {
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
    input: UploadDocumentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UploadDocumentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UploadDocumentsCommandOutput> {
    return deserializeAws_restJson1UploadDocumentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
