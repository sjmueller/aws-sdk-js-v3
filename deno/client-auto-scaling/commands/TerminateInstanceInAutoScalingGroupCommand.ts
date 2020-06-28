import {
  AutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AutoScalingClient.ts";
import {
  ActivityType,
  TerminateInstanceInAutoScalingGroupType
} from "../models/index.ts";
import {
  deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand,
  serializeAws_queryTerminateInstanceInAutoScalingGroupCommand
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

export type TerminateInstanceInAutoScalingGroupCommandInput = TerminateInstanceInAutoScalingGroupType;
export type TerminateInstanceInAutoScalingGroupCommandOutput = ActivityType &
  __MetadataBearer;

export class TerminateInstanceInAutoScalingGroupCommand extends $Command<
  TerminateInstanceInAutoScalingGroupCommandInput,
  TerminateInstanceInAutoScalingGroupCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TerminateInstanceInAutoScalingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    TerminateInstanceInAutoScalingGroupCommandInput,
    TerminateInstanceInAutoScalingGroupCommandOutput
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
    input: TerminateInstanceInAutoScalingGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryTerminateInstanceInAutoScalingGroupCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> {
    return deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
