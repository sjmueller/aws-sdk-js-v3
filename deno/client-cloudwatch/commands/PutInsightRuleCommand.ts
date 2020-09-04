import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { PutInsightRuleInput, PutInsightRuleOutput } from "../models/index.ts";
import {
  deserializeAws_queryPutInsightRuleCommand,
  serializeAws_queryPutInsightRuleCommand,
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

export type PutInsightRuleCommandInput = PutInsightRuleInput;
export type PutInsightRuleCommandOutput = PutInsightRuleOutput & __MetadataBearer;

export class PutInsightRuleCommand extends $Command<
  PutInsightRuleCommandInput,
  PutInsightRuleCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutInsightRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutInsightRuleCommandInput, PutInsightRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutInsightRuleInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutInsightRuleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutInsightRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutInsightRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutInsightRuleCommandOutput> {
    return deserializeAws_queryPutInsightRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
