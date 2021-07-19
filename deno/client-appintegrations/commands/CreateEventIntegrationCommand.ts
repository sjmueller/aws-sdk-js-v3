import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient.ts";
import { CreateEventIntegrationRequest, CreateEventIntegrationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateEventIntegrationCommand,
  serializeAws_restJson1CreateEventIntegrationCommand,
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

export interface CreateEventIntegrationCommandInput extends CreateEventIntegrationRequest {}
export interface CreateEventIntegrationCommandOutput extends CreateEventIntegrationResponse, __MetadataBearer {}

/**
 * <p>Creates an EventIntegration, given a specified name, description, and a reference to an
 *       Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No
 *       objects are created in the your account, only metadata that is persisted on the EventIntegration
 *       control plane.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, CreateEventIntegrationCommand } from "../../client-appintegrations/mod.ts";
 * // const { AppIntegrationsClient, CreateEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new CreateEventIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateEventIntegrationCommand extends $Command<
  CreateEventIntegrationCommandInput,
  CreateEventIntegrationCommandOutput,
  AppIntegrationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEventIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppIntegrationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventIntegrationCommandInput, CreateEventIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "CreateEventIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEventIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEventIntegrationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEventIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateEventIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventIntegrationCommandOutput> {
    return deserializeAws_restJson1CreateEventIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
