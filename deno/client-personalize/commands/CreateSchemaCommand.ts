import {
  PersonalizeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PersonalizeClient.ts";
import { CreateSchemaRequest, CreateSchemaResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1CreateSchemaCommand,
  serializeAws_json1_1CreateSchemaCommand
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

export type CreateSchemaCommandInput = CreateSchemaRequest;
export type CreateSchemaCommandOutput = CreateSchemaResponse & __MetadataBearer;

export class CreateSchemaCommand extends $Command<
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSchemaCommandInput, CreateSchemaCommandOutput> {
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
    input: CreateSchemaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSchemaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSchemaCommandOutput> {
    return deserializeAws_json1_1CreateSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
