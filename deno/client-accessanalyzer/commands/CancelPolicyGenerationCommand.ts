import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient.ts";
import { CancelPolicyGenerationRequest, CancelPolicyGenerationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CancelPolicyGenerationCommand,
  serializeAws_restJson1CancelPolicyGenerationCommand,
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

export interface CancelPolicyGenerationCommandInput extends CancelPolicyGenerationRequest {}
export interface CancelPolicyGenerationCommandOutput extends CancelPolicyGenerationResponse, __MetadataBearer {}

/**
 * <p>Cancels the requested policy generation.</p>
 */
export class CancelPolicyGenerationCommand extends $Command<
  CancelPolicyGenerationCommandInput,
  CancelPolicyGenerationCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelPolicyGenerationCommandInput) {
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
  ): Handler<CancelPolicyGenerationCommandInput, CancelPolicyGenerationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "CancelPolicyGenerationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelPolicyGenerationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelPolicyGenerationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelPolicyGenerationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelPolicyGenerationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelPolicyGenerationCommandOutput> {
    return deserializeAws_restJson1CancelPolicyGenerationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
