import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client.ts";
import { ListCoreDevicesRequest, ListCoreDevicesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListCoreDevicesCommand,
  serializeAws_restJson1ListCoreDevicesCommand,
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

export interface ListCoreDevicesCommandInput extends ListCoreDevicesRequest {}
export interface ListCoreDevicesCommandOutput extends ListCoreDevicesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of AWS IoT Greengrass core devices.</p>
 */
export class ListCoreDevicesCommand extends $Command<
  ListCoreDevicesCommandInput,
  ListCoreDevicesCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCoreDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "ListCoreDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCoreDevicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCoreDevicesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCoreDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCoreDevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCoreDevicesCommandOutput> {
    return deserializeAws_restJson1ListCoreDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
