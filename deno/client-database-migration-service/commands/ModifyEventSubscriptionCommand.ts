import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DatabaseMigrationServiceClient.ts";
import {
  ModifyEventSubscriptionMessage,
  ModifyEventSubscriptionResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1ModifyEventSubscriptionCommand,
  serializeAws_json1_1ModifyEventSubscriptionCommand
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

export type ModifyEventSubscriptionCommandInput = ModifyEventSubscriptionMessage;
export type ModifyEventSubscriptionCommandOutput = ModifyEventSubscriptionResponse &
  __MetadataBearer;

export class ModifyEventSubscriptionCommand extends $Command<
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyEventSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyEventSubscriptionCommandInput,
    ModifyEventSubscriptionCommandOutput
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
    input: ModifyEventSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyEventSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyEventSubscriptionCommandOutput> {
    return deserializeAws_json1_1ModifyEventSubscriptionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
