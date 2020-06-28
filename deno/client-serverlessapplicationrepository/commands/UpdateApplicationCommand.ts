import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ServerlessApplicationRepositoryClient.ts";
import {
  UpdateApplicationRequest,
  UpdateApplicationResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1UpdateApplicationCommand,
  serializeAws_restJson1UpdateApplicationCommand
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

export type UpdateApplicationCommandInput = UpdateApplicationRequest;
export type UpdateApplicationCommandOutput = UpdateApplicationResponse &
  __MetadataBearer;

export class UpdateApplicationCommand extends $Command<
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServerlessApplicationRepositoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApplicationCommandInput, UpdateApplicationCommandOutput> {
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
    input: UpdateApplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationCommandOutput> {
    return deserializeAws_restJson1UpdateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
