import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { CreateIntegrationAssociationRequest, CreateIntegrationAssociationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateIntegrationAssociationCommand,
  serializeAws_restJson1CreateIntegrationAssociationCommand,
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

export interface CreateIntegrationAssociationCommandInput extends CreateIntegrationAssociationRequest {}
export interface CreateIntegrationAssociationCommandOutput
  extends CreateIntegrationAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Create an AppIntegration association with an Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateIntegrationAssociationCommand } from "../../client-connect/mod.ts";
 * // const { ConnectClient, CreateIntegrationAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateIntegrationAssociationCommand extends $Command<
  CreateIntegrationAssociationCommandInput,
  CreateIntegrationAssociationCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateIntegrationAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIntegrationAssociationCommandInput, CreateIntegrationAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateIntegrationAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIntegrationAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateIntegrationAssociationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIntegrationAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIntegrationAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateIntegrationAssociationCommandOutput> {
    return deserializeAws_restJson1CreateIntegrationAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
