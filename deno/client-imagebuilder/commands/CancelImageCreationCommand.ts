import {
  ServiceInputTypes,
  ServiceOutputTypes,
  imagebuilderClientResolvedConfig
} from "../imagebuilderClient.ts";
import {
  CancelImageCreationRequest,
  CancelImageCreationResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1CancelImageCreationCommand,
  serializeAws_restJson1CancelImageCreationCommand
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

export type CancelImageCreationCommandInput = CancelImageCreationRequest;
export type CancelImageCreationCommandOutput = CancelImageCreationResponse &
  __MetadataBearer;

export class CancelImageCreationCommand extends $Command<
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
  imagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelImageCreationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: imagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CancelImageCreationCommandInput,
    CancelImageCreationCommandOutput
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
    input: CancelImageCreationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelImageCreationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelImageCreationCommandOutput> {
    return deserializeAws_restJson1CancelImageCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
