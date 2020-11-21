
import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { GetInsightRuleReportInput, GetInsightRuleReportOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryGetInsightRuleReportCommand,
  serializeAws_queryGetInsightRuleReportCommand,
} from "../protocols/Aws_query.ts";
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

export type GetInsightRuleReportCommandInput = GetInsightRuleReportInput;
export type GetInsightRuleReportCommandOutput = GetInsightRuleReportOutput & __MetadataBearer;

export class GetInsightRuleReportCommand extends $Command<
  GetInsightRuleReportCommandInput,
  GetInsightRuleReportCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInsightRuleReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInsightRuleReportCommandInput, GetInsightRuleReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetInsightRuleReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInsightRuleReportInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetInsightRuleReportOutput.filterSensitiveLog,
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

  private serialize(input: GetInsightRuleReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetInsightRuleReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightRuleReportCommandOutput> {
    return deserializeAws_queryGetInsightRuleReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
