import {
  SESClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SESClient.ts";
import {
  DeleteTemplateRequest,
  DeleteTemplateResponse
} from "../models/index.ts";
import {
  deserializeAws_queryDeleteTemplateCommand,
  serializeAws_queryDeleteTemplateCommand
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

export type DeleteTemplateCommandInput = DeleteTemplateRequest;
export type DeleteTemplateCommandOutput = DeleteTemplateResponse &
  __MetadataBearer;

export class DeleteTemplateCommand extends $Command<
  DeleteTemplateCommandInput,
  DeleteTemplateCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTemplateCommandInput, DeleteTemplateCommandOutput> {
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
    input: DeleteTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTemplateCommandOutput> {
    return deserializeAws_queryDeleteTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
