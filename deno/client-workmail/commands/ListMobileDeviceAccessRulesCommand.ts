import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { ListMobileDeviceAccessRulesRequest, ListMobileDeviceAccessRulesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListMobileDeviceAccessRulesCommand,
  serializeAws_json1_1ListMobileDeviceAccessRulesCommand,
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

export interface ListMobileDeviceAccessRulesCommandInput extends ListMobileDeviceAccessRulesRequest {}
export interface ListMobileDeviceAccessRulesCommandOutput
  extends ListMobileDeviceAccessRulesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the mobile device access rules for the specified Amazon WorkMail organization.</p>
 */
export class ListMobileDeviceAccessRulesCommand extends $Command<
  ListMobileDeviceAccessRulesCommandInput,
  ListMobileDeviceAccessRulesCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMobileDeviceAccessRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMobileDeviceAccessRulesCommandInput, ListMobileDeviceAccessRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListMobileDeviceAccessRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMobileDeviceAccessRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMobileDeviceAccessRulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMobileDeviceAccessRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMobileDeviceAccessRulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMobileDeviceAccessRulesCommandOutput> {
    return deserializeAws_json1_1ListMobileDeviceAccessRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
