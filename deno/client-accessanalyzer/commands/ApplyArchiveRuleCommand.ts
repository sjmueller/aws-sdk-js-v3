import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient.ts";
import { ApplyArchiveRuleRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ApplyArchiveRuleCommand,
  serializeAws_restJson1ApplyArchiveRuleCommand,
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

export interface ApplyArchiveRuleCommandInput extends ApplyArchiveRuleRequest {}
export interface ApplyArchiveRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Retroactively applies the archive rule to existing findings that meet the archive rule
 *          criteria.</p>
 */
export class ApplyArchiveRuleCommand extends $Command<
  ApplyArchiveRuleCommandInput,
  ApplyArchiveRuleCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ApplyArchiveRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ApplyArchiveRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ApplyArchiveRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ApplyArchiveRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ApplyArchiveRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ApplyArchiveRuleCommandOutput> {
    return deserializeAws_restJson1ApplyArchiveRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
