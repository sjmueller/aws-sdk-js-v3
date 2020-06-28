import {
  DocDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DocDBClient.ts";
import {
  CreateDBInstanceMessage,
  CreateDBInstanceResult
} from "../models/index.ts";
import {
  deserializeAws_queryCreateDBInstanceCommand,
  serializeAws_queryCreateDBInstanceCommand
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

export type CreateDBInstanceCommandInput = CreateDBInstanceMessage;
export type CreateDBInstanceCommandOutput = CreateDBInstanceResult &
  __MetadataBearer;

export class CreateDBInstanceCommand extends $Command<
  CreateDBInstanceCommandInput,
  CreateDBInstanceCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput> {
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
    input: CreateDBInstanceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDBInstanceCommandOutput> {
    return deserializeAws_queryCreateDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
