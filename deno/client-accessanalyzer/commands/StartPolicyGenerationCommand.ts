import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient.ts";
import { StartPolicyGenerationRequest, StartPolicyGenerationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StartPolicyGenerationCommand,
  serializeAws_restJson1StartPolicyGenerationCommand,
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

export type StartPolicyGenerationCommandInput = StartPolicyGenerationRequest;
export type StartPolicyGenerationCommandOutput = StartPolicyGenerationResponse & __MetadataBearer;

/**
 * <p>Starts the policy generation request.</p>
 */
export class StartPolicyGenerationCommand extends $Command<
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartPolicyGenerationCommandInput) {
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
  ): Handler<StartPolicyGenerationCommandInput, StartPolicyGenerationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "StartPolicyGenerationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartPolicyGenerationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartPolicyGenerationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartPolicyGenerationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartPolicyGenerationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartPolicyGenerationCommandOutput> {
    return deserializeAws_restJson1StartPolicyGenerationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
