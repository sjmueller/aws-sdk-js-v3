import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { ConfirmDeviceRequest, ConfirmDeviceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ConfirmDeviceCommand,
  serializeAws_json1_1ConfirmDeviceCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { getAwsAuthPlugin } from "../../middleware-signing/mod.ts";
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

export interface ConfirmDeviceCommandInput extends ConfirmDeviceRequest {}
export interface ConfirmDeviceCommandOutput extends ConfirmDeviceResponse, __MetadataBearer {}

/**
 * <p>Confirms tracking of the device. This API call is the call that begins device
 *             tracking.</p>
 */
export class ConfirmDeviceCommand extends $Command<
  ConfirmDeviceCommandInput,
  ConfirmDeviceCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfirmDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "ConfirmDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfirmDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ConfirmDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmDeviceCommandOutput> {
    return deserializeAws_json1_1ConfirmDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
