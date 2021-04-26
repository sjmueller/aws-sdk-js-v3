import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { CreateProvisioningClaimRequest, CreateProvisioningClaimResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateProvisioningClaimCommand,
  serializeAws_restJson1CreateProvisioningClaimCommand,
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

export interface CreateProvisioningClaimCommandInput extends CreateProvisioningClaimRequest {}
export interface CreateProvisioningClaimCommandOutput extends CreateProvisioningClaimResponse, __MetadataBearer {}

/**
 * <p>Creates a provisioning claim.</p>
 */
export class CreateProvisioningClaimCommand extends $Command<
  CreateProvisioningClaimCommandInput,
  CreateProvisioningClaimCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateProvisioningClaimCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProvisioningClaimCommandInput, CreateProvisioningClaimCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateProvisioningClaimCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProvisioningClaimRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateProvisioningClaimResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProvisioningClaimCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateProvisioningClaimCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProvisioningClaimCommandOutput> {
    return deserializeAws_restJson1CreateProvisioningClaimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
