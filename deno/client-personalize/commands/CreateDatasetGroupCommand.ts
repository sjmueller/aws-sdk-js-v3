import {
  PersonalizeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PersonalizeClient.ts";
import {
  CreateDatasetGroupRequest,
  CreateDatasetGroupResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1CreateDatasetGroupCommand,
  serializeAws_json1_1CreateDatasetGroupCommand
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

export type CreateDatasetGroupCommandInput = CreateDatasetGroupRequest;
export type CreateDatasetGroupCommandOutput = CreateDatasetGroupResponse &
  __MetadataBearer;

export class CreateDatasetGroupCommand extends $Command<
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDatasetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput> {
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
    input: CreateDatasetGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDatasetGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDatasetGroupCommandOutput> {
    return deserializeAws_json1_1CreateDatasetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
