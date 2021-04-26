import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient.ts";
import { ListByoipCidrsRequest, ListByoipCidrsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListByoipCidrsCommand,
  serializeAws_json1_1ListByoipCidrsCommand,
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

export interface ListByoipCidrsCommandInput extends ListByoipCidrsRequest {}
export interface ListByoipCidrsCommandOutput extends ListByoipCidrsResponse, __MetadataBearer {}

/**
 * <p>Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including
 * 			the current state and a history of state changes.</p>
 */
export class ListByoipCidrsCommand extends $Command<
  ListByoipCidrsCommandInput,
  ListByoipCidrsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListByoipCidrsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListByoipCidrsCommandInput, ListByoipCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListByoipCidrsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListByoipCidrsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListByoipCidrsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListByoipCidrsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListByoipCidrsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListByoipCidrsCommandOutput> {
    return deserializeAws_json1_1ListByoipCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
