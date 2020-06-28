import {
  GlacierClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GlacierClient.ts";
import { DeleteVaultNotificationsInput } from "../models/index.ts";
import {
  deserializeAws_restJson1DeleteVaultNotificationsCommand,
  serializeAws_restJson1DeleteVaultNotificationsCommand
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

export type DeleteVaultNotificationsCommandInput = DeleteVaultNotificationsInput;
export type DeleteVaultNotificationsCommandOutput = __MetadataBearer;

export class DeleteVaultNotificationsCommand extends $Command<
  DeleteVaultNotificationsCommandInput,
  DeleteVaultNotificationsCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVaultNotificationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteVaultNotificationsCommandInput,
    DeleteVaultNotificationsCommandOutput
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
    input: DeleteVaultNotificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteVaultNotificationsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVaultNotificationsCommandOutput> {
    return deserializeAws_restJson1DeleteVaultNotificationsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
