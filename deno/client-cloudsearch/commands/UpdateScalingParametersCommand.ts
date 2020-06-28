import {
  CloudSearchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudSearchClient.ts";
import {
  UpdateScalingParametersRequest,
  UpdateScalingParametersResponse
} from "../models/index.ts";
import {
  deserializeAws_queryUpdateScalingParametersCommand,
  serializeAws_queryUpdateScalingParametersCommand
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

export type UpdateScalingParametersCommandInput = UpdateScalingParametersRequest;
export type UpdateScalingParametersCommandOutput = UpdateScalingParametersResponse &
  __MetadataBearer;

export class UpdateScalingParametersCommand extends $Command<
  UpdateScalingParametersCommandInput,
  UpdateScalingParametersCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateScalingParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateScalingParametersCommandInput,
    UpdateScalingParametersCommandOutput
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
    input: UpdateScalingParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateScalingParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateScalingParametersCommandOutput> {
    return deserializeAws_queryUpdateScalingParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
