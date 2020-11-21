
import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient.ts";
import { DescribeFlowExecutionRecordsRequest, DescribeFlowExecutionRecordsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeFlowExecutionRecordsCommand,
  serializeAws_restJson1DescribeFlowExecutionRecordsCommand,
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type DescribeFlowExecutionRecordsCommandInput = DescribeFlowExecutionRecordsRequest;
export type DescribeFlowExecutionRecordsCommandOutput = DescribeFlowExecutionRecordsResponse & __MetadataBearer;

export class DescribeFlowExecutionRecordsCommand extends $Command<
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFlowExecutionRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlowExecutionRecordsCommandInput, DescribeFlowExecutionRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeFlowExecutionRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFlowExecutionRecordsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFlowExecutionRecordsResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFlowExecutionRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFlowExecutionRecordsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFlowExecutionRecordsCommandOutput> {
    return deserializeAws_restJson1DescribeFlowExecutionRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
