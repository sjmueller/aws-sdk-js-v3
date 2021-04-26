import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient.ts";
import { CreateDiscovererRequest, CreateDiscovererResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateDiscovererCommand,
  serializeAws_restJson1CreateDiscovererCommand,
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

export interface CreateDiscovererCommandInput extends CreateDiscovererRequest {}
export interface CreateDiscovererCommandOutput extends CreateDiscovererResponse, __MetadataBearer {}

/**
 * <p>Creates a discoverer.</p>
 */
export class CreateDiscovererCommand extends $Command<
  CreateDiscovererCommandInput,
  CreateDiscovererCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDiscovererCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDiscovererCommandInput, CreateDiscovererCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "CreateDiscovererCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDiscovererRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDiscovererResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDiscovererCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDiscovererCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDiscovererCommandOutput> {
    return deserializeAws_restJson1CreateDiscovererCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
