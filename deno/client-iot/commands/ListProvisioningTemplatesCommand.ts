import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListProvisioningTemplatesRequest, ListProvisioningTemplatesResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListProvisioningTemplatesCommand,
  serializeAws_restJson1ListProvisioningTemplatesCommand,
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

export interface ListProvisioningTemplatesCommandInput extends ListProvisioningTemplatesRequest {}
export interface ListProvisioningTemplatesCommandOutput extends ListProvisioningTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists the fleet provisioning templates in your AWS account.</p>
 */
export class ListProvisioningTemplatesCommand extends $Command<
  ListProvisioningTemplatesCommandInput,
  ListProvisioningTemplatesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProvisioningTemplatesCommandInput) {
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
  ): Handler<ListProvisioningTemplatesCommandInput, ListProvisioningTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListProvisioningTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisioningTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProvisioningTemplatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProvisioningTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProvisioningTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisioningTemplatesCommandOutput> {
    return deserializeAws_restJson1ListProvisioningTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
