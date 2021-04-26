import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { ListResourceInventoryRequest, ListResourceInventoryResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListResourceInventoryCommand,
  serializeAws_json1_1ListResourceInventoryCommand,
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

export interface ListResourceInventoryCommandInput extends ListResourceInventoryRequest {}
export interface ListResourceInventoryCommandOutput extends ListResourceInventoryResponse, __MetadataBearer {}

/**
 * <p>Lists resources managed using Systems Manager inventory.</p>
 */
export class ListResourceInventoryCommand extends $Command<
  ListResourceInventoryCommandInput,
  ListResourceInventoryCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResourceInventoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceInventoryCommandInput, ListResourceInventoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListResourceInventoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceInventoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResourceInventoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourceInventoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResourceInventoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceInventoryCommandOutput> {
    return deserializeAws_json1_1ListResourceInventoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
