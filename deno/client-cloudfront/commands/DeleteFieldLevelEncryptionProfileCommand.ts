import {
  CloudFrontClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFrontClient.ts";
import { DeleteFieldLevelEncryptionProfileRequest } from "../models/index.ts";
import {
  deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand,
  serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand
} from "../protocols/Aws_restXml.ts";
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

export type DeleteFieldLevelEncryptionProfileCommandInput = DeleteFieldLevelEncryptionProfileRequest;
export type DeleteFieldLevelEncryptionProfileCommandOutput = __MetadataBearer;

export class DeleteFieldLevelEncryptionProfileCommand extends $Command<
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFieldLevelEncryptionProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteFieldLevelEncryptionProfileCommandInput,
    DeleteFieldLevelEncryptionProfileCommandOutput
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
    input: DeleteFieldLevelEncryptionProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFieldLevelEncryptionProfileCommandOutput> {
    return deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
