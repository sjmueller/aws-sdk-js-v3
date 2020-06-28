import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client.ts";
import {
  DescribeScheduledInstanceAvailabilityRequest,
  DescribeScheduledInstanceAvailabilityResult
} from "../models/index.ts";
import {
  deserializeAws_ec2DescribeScheduledInstanceAvailabilityCommand,
  serializeAws_ec2DescribeScheduledInstanceAvailabilityCommand
} from "../protocols/Aws_ec2.ts";
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

export type DescribeScheduledInstanceAvailabilityCommandInput = DescribeScheduledInstanceAvailabilityRequest;
export type DescribeScheduledInstanceAvailabilityCommandOutput = DescribeScheduledInstanceAvailabilityResult &
  __MetadataBearer;

export class DescribeScheduledInstanceAvailabilityCommand extends $Command<
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: DescribeScheduledInstanceAvailabilityCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeScheduledInstanceAvailabilityCommandInput,
    DescribeScheduledInstanceAvailabilityCommandOutput
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
    input: DescribeScheduledInstanceAvailabilityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeScheduledInstanceAvailabilityCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScheduledInstanceAvailabilityCommandOutput> {
    return deserializeAws_ec2DescribeScheduledInstanceAvailabilityCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
