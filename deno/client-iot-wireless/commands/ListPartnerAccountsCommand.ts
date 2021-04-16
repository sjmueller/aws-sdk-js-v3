import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { ListPartnerAccountsRequest, ListPartnerAccountsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListPartnerAccountsCommand,
  serializeAws_restJson1ListPartnerAccountsCommand,
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

export type ListPartnerAccountsCommandInput = ListPartnerAccountsRequest;
export type ListPartnerAccountsCommandOutput = ListPartnerAccountsResponse & __MetadataBearer;

/**
 * <p>Lists the partner accounts associated with your AWS account.</p>
 */
export class ListPartnerAccountsCommand extends $Command<
  ListPartnerAccountsCommandInput,
  ListPartnerAccountsCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPartnerAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPartnerAccountsCommandInput, ListPartnerAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListPartnerAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPartnerAccountsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPartnerAccountsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPartnerAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPartnerAccountsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPartnerAccountsCommandOutput> {
    return deserializeAws_restJson1ListPartnerAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
