import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { ListRulesPackagesRequest, ListRulesPackagesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListRulesPackagesCommand,
  serializeAws_json1_1ListRulesPackagesCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface ListRulesPackagesCommandInput extends ListRulesPackagesRequest {}
export interface ListRulesPackagesCommandOutput extends ListRulesPackagesResponse, __MetadataBearer {}

/**
 * <p>Lists all available Amazon Inspector rules packages.</p>
 */
export class ListRulesPackagesCommand extends $Command<
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRulesPackagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListRulesPackagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRulesPackagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRulesPackagesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRulesPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRulesPackagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRulesPackagesCommandOutput> {
    return deserializeAws_json1_1ListRulesPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
