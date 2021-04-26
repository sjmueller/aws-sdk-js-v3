import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { DeleteVerifiedEmailAddressRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteVerifiedEmailAddressCommand,
  serializeAws_queryDeleteVerifiedEmailAddressCommand,
} from "../protocols/Aws_query.ts";
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

export interface DeleteVerifiedEmailAddressCommandInput extends DeleteVerifiedEmailAddressRequest {}
export interface DeleteVerifiedEmailAddressCommandOutput extends __MetadataBearer {}

/**
 * <p>Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses
 *             and domains.</p>
 */
export class DeleteVerifiedEmailAddressCommand extends $Command<
  DeleteVerifiedEmailAddressCommandInput,
  DeleteVerifiedEmailAddressCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVerifiedEmailAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVerifiedEmailAddressCommandInput, DeleteVerifiedEmailAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DeleteVerifiedEmailAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVerifiedEmailAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVerifiedEmailAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteVerifiedEmailAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVerifiedEmailAddressCommandOutput> {
    return deserializeAws_queryDeleteVerifiedEmailAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
