import {
  InspectorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../InspectorClient.ts";
import {
  DescribeAssessmentTargetsRequest,
  DescribeAssessmentTargetsResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeAssessmentTargetsCommand,
  serializeAws_json1_1DescribeAssessmentTargetsCommand
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

export type DescribeAssessmentTargetsCommandInput = DescribeAssessmentTargetsRequest;
export type DescribeAssessmentTargetsCommandOutput = DescribeAssessmentTargetsResponse &
  __MetadataBearer;

export class DescribeAssessmentTargetsCommand extends $Command<
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAssessmentTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAssessmentTargetsCommandInput,
    DescribeAssessmentTargetsCommandOutput
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
    input: DescribeAssessmentTargetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAssessmentTargetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAssessmentTargetsCommandOutput> {
    return deserializeAws_json1_1DescribeAssessmentTargetsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
