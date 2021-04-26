import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { DescribeSMBSettingsInput, DescribeSMBSettingsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeSMBSettingsCommand,
  serializeAws_json1_1DescribeSMBSettingsCommand,
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

export interface DescribeSMBSettingsCommandInput extends DescribeSMBSettingsInput {}
export interface DescribeSMBSettingsCommandOutput extends DescribeSMBSettingsOutput, __MetadataBearer {}

/**
 * <p>Gets a description of a Server Message Block (SMB) file share settings from a file
 *          gateway. This operation is only supported for file gateways.</p>
 */
export class DescribeSMBSettingsCommand extends $Command<
  DescribeSMBSettingsCommandInput,
  DescribeSMBSettingsCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSMBSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSMBSettingsCommandInput, DescribeSMBSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeSMBSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSMBSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSMBSettingsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSMBSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSMBSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSMBSettingsCommandOutput> {
    return deserializeAws_json1_1DescribeSMBSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
