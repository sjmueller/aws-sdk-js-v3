import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import {
  UpdateCompanyNetworkConfigurationRequest,
  UpdateCompanyNetworkConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommand,
  serializeAws_restJson1UpdateCompanyNetworkConfigurationCommand,
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

export interface UpdateCompanyNetworkConfigurationCommandInput extends UpdateCompanyNetworkConfigurationRequest {}
export interface UpdateCompanyNetworkConfigurationCommandOutput
  extends UpdateCompanyNetworkConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the company network configuration for the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateCompanyNetworkConfigurationCommand } from "../../client-worklink/mod.ts";
 * // const { WorkLinkClient, UpdateCompanyNetworkConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateCompanyNetworkConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCompanyNetworkConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateCompanyNetworkConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateCompanyNetworkConfigurationCommand extends $Command<
  UpdateCompanyNetworkConfigurationCommandInput,
  UpdateCompanyNetworkConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCompanyNetworkConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCompanyNetworkConfigurationCommandInput, UpdateCompanyNetworkConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "UpdateCompanyNetworkConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCompanyNetworkConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCompanyNetworkConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateCompanyNetworkConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateCompanyNetworkConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCompanyNetworkConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
