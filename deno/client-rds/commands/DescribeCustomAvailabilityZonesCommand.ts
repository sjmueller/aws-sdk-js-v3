import {
  RDSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSClient.ts";
import {
  CustomAvailabilityZoneMessage,
  DescribeCustomAvailabilityZonesMessage
} from "../models/index.ts";
import {
  deserializeAws_queryDescribeCustomAvailabilityZonesCommand,
  serializeAws_queryDescribeCustomAvailabilityZonesCommand
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

export type DescribeCustomAvailabilityZonesCommandInput = DescribeCustomAvailabilityZonesMessage;
export type DescribeCustomAvailabilityZonesCommandOutput = CustomAvailabilityZoneMessage &
  __MetadataBearer;

export class DescribeCustomAvailabilityZonesCommand extends $Command<
  DescribeCustomAvailabilityZonesCommandInput,
  DescribeCustomAvailabilityZonesCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomAvailabilityZonesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeCustomAvailabilityZonesCommandInput,
    DescribeCustomAvailabilityZonesCommandOutput
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
    input: DescribeCustomAvailabilityZonesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeCustomAvailabilityZonesCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomAvailabilityZonesCommandOutput> {
    return deserializeAws_queryDescribeCustomAvailabilityZonesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
