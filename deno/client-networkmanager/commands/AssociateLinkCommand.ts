import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient.ts";
import { AssociateLinkRequest, AssociateLinkResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AssociateLinkCommand,
  serializeAws_restJson1AssociateLinkCommand,
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

export interface AssociateLinkCommandInput extends AssociateLinkRequest {}
export interface AssociateLinkCommandOutput extends AssociateLinkResponse, __MetadataBearer {}

/**
 * <p>Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.</p>
 */
export class AssociateLinkCommand extends $Command<
  AssociateLinkCommandInput,
  AssociateLinkCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateLinkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateLinkCommandInput, AssociateLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "AssociateLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateLinkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateLinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateLinkCommandOutput> {
    return deserializeAws_restJson1AssociateLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
