import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../S3Client.ts";
import { GetObjectAclOutput, GetObjectAclRequest } from "../models/index.ts";
import {
  deserializeAws_restXmlGetObjectAclCommand,
  serializeAws_restXmlGetObjectAclCommand
} from "../protocols/Aws_restXml.ts";
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

export type GetObjectAclCommandInput = GetObjectAclRequest;
export type GetObjectAclCommandOutput = GetObjectAclOutput & __MetadataBearer;

export class GetObjectAclCommand extends $Command<
  GetObjectAclCommandInput,
  GetObjectAclCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetObjectAclCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectAclCommandInput, GetObjectAclCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

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
    input: GetObjectAclCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetObjectAclCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetObjectAclCommandOutput> {
    return deserializeAws_restXmlGetObjectAclCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
