import {
  AutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AutoScalingClient.ts";
import { DeleteAutoScalingGroupType } from "../models/index.ts";
import {
  deserializeAws_queryDeleteAutoScalingGroupCommand,
  serializeAws_queryDeleteAutoScalingGroupCommand
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

export type DeleteAutoScalingGroupCommandInput = DeleteAutoScalingGroupType;
export type DeleteAutoScalingGroupCommandOutput = __MetadataBearer;

export class DeleteAutoScalingGroupCommand extends $Command<
  DeleteAutoScalingGroupCommandInput,
  DeleteAutoScalingGroupCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAutoScalingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteAutoScalingGroupCommandInput,
    DeleteAutoScalingGroupCommandOutput
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
    input: DeleteAutoScalingGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteAutoScalingGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAutoScalingGroupCommandOutput> {
    return deserializeAws_queryDeleteAutoScalingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
