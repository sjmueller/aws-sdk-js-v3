import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import { UpdateDevicePolicyConfigurationRequest, UpdateDevicePolicyConfigurationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateDevicePolicyConfigurationCommand,
  serializeAws_restJson1UpdateDevicePolicyConfigurationCommand,
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

export interface UpdateDevicePolicyConfigurationCommandInput extends UpdateDevicePolicyConfigurationRequest {}
export interface UpdateDevicePolicyConfigurationCommandOutput
  extends UpdateDevicePolicyConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the device policy configuration for the fleet.</p>
 */
export class UpdateDevicePolicyConfigurationCommand extends $Command<
  UpdateDevicePolicyConfigurationCommandInput,
  UpdateDevicePolicyConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDevicePolicyConfigurationCommandInput) {
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
  ): Handler<UpdateDevicePolicyConfigurationCommandInput, UpdateDevicePolicyConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "UpdateDevicePolicyConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDevicePolicyConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDevicePolicyConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateDevicePolicyConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDevicePolicyConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDevicePolicyConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateDevicePolicyConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
