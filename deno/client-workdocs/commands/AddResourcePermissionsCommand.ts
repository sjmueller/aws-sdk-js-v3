import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkDocsClientResolvedConfig
} from "../WorkDocsClient.ts";
import {
  AddResourcePermissionsRequest,
  AddResourcePermissionsResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1AddResourcePermissionsCommand,
  serializeAws_restJson1AddResourcePermissionsCommand
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

export type AddResourcePermissionsCommandInput = AddResourcePermissionsRequest;
export type AddResourcePermissionsCommandOutput = AddResourcePermissionsResponse &
  __MetadataBearer;

export class AddResourcePermissionsCommand extends $Command<
  AddResourcePermissionsCommandInput,
  AddResourcePermissionsCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddResourcePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AddResourcePermissionsCommandInput,
    AddResourcePermissionsCommandOutput
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
    input: AddResourcePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AddResourcePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddResourcePermissionsCommandOutput> {
    return deserializeAws_restJson1AddResourcePermissionsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
