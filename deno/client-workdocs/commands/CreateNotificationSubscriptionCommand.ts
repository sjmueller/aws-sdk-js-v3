import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkDocsClientResolvedConfig
} from "../WorkDocsClient.ts";
import {
  CreateNotificationSubscriptionRequest,
  CreateNotificationSubscriptionResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1CreateNotificationSubscriptionCommand,
  serializeAws_restJson1CreateNotificationSubscriptionCommand
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

export type CreateNotificationSubscriptionCommandInput = CreateNotificationSubscriptionRequest;
export type CreateNotificationSubscriptionCommandOutput = CreateNotificationSubscriptionResponse &
  __MetadataBearer;

export class CreateNotificationSubscriptionCommand extends $Command<
  CreateNotificationSubscriptionCommandInput,
  CreateNotificationSubscriptionCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNotificationSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateNotificationSubscriptionCommandInput,
    CreateNotificationSubscriptionCommandOutput
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
    input: CreateNotificationSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNotificationSubscriptionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNotificationSubscriptionCommandOutput> {
    return deserializeAws_restJson1CreateNotificationSubscriptionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
