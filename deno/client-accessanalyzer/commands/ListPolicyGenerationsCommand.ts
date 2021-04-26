import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient.ts";
import { ListPolicyGenerationsRequest, ListPolicyGenerationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListPolicyGenerationsCommand,
  serializeAws_restJson1ListPolicyGenerationsCommand,
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

export interface ListPolicyGenerationsCommandInput extends ListPolicyGenerationsRequest {}
export interface ListPolicyGenerationsCommandOutput extends ListPolicyGenerationsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the policy generations requested in the last seven days.</p>
 */
export class ListPolicyGenerationsCommand extends $Command<
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPolicyGenerationsCommandInput) {
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
  ): Handler<ListPolicyGenerationsCommandInput, ListPolicyGenerationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ListPolicyGenerationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPolicyGenerationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPolicyGenerationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPolicyGenerationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPolicyGenerationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPolicyGenerationsCommandOutput> {
    return deserializeAws_restJson1ListPolicyGenerationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
