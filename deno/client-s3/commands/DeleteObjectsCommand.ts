import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../S3Client.ts";
import { DeleteObjectsOutput, DeleteObjectsRequest } from "../models/index.ts";
import {
  deserializeAws_restXmlDeleteObjectsCommand,
  serializeAws_restXmlDeleteObjectsCommand
} from "../protocols/Aws_restXml.ts";
import { getApplyMd5BodyChecksumPlugin } from "../../middleware-apply-body-checksum/mod.ts";
import { getBucketEndpointPlugin } from "../../middleware-bucket-endpoint/mod.ts";
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

export type DeleteObjectsCommandInput = DeleteObjectsRequest;
export type DeleteObjectsCommandOutput = DeleteObjectsOutput & __MetadataBearer;

export class DeleteObjectsCommand extends $Command<
  DeleteObjectsCommandInput,
  DeleteObjectsCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteObjectsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteObjectsCommandInput, DeleteObjectsCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

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
    input: DeleteObjectsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteObjectsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteObjectsCommandOutput> {
    return deserializeAws_restXmlDeleteObjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
