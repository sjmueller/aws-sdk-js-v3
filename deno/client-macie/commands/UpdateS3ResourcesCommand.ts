import {
  MacieClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MacieClient.ts";
import {
  UpdateS3ResourcesRequest,
  UpdateS3ResourcesResult
} from "../models/index.ts";
import {
  deserializeAws_json1_1UpdateS3ResourcesCommand,
  serializeAws_json1_1UpdateS3ResourcesCommand
} from "../protocols/Aws_json1_1.ts";
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

export type UpdateS3ResourcesCommandInput = UpdateS3ResourcesRequest;
export type UpdateS3ResourcesCommandOutput = UpdateS3ResourcesResult &
  __MetadataBearer;

export class UpdateS3ResourcesCommand extends $Command<
  UpdateS3ResourcesCommandInput,
  UpdateS3ResourcesCommandOutput,
  MacieClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateS3ResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput> {
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
    input: UpdateS3ResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateS3ResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateS3ResourcesCommandOutput> {
    return deserializeAws_json1_1UpdateS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
