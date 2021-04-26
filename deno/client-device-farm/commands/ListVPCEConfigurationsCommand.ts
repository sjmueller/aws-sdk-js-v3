import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { ListVPCEConfigurationsRequest, ListVPCEConfigurationsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListVPCEConfigurationsCommand,
  serializeAws_json1_1ListVPCEConfigurationsCommand,
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

export interface ListVPCEConfigurationsCommandInput extends ListVPCEConfigurationsRequest {}
export interface ListVPCEConfigurationsCommandOutput extends ListVPCEConfigurationsResult, __MetadataBearer {}

/**
 * <p>Returns information about all Amazon Virtual Private Cloud (VPC) endpoint
 *             configurations in the AWS account.</p>
 */
export class ListVPCEConfigurationsCommand extends $Command<
  ListVPCEConfigurationsCommandInput,
  ListVPCEConfigurationsCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVPCEConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVPCEConfigurationsCommandInput, ListVPCEConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListVPCEConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVPCEConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListVPCEConfigurationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVPCEConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVPCEConfigurationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVPCEConfigurationsCommandOutput> {
    return deserializeAws_json1_1ListVPCEConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
