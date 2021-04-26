import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { ListIdentitiesRequest, ListIdentitiesResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListIdentitiesCommand,
  serializeAws_queryListIdentitiesCommand,
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

export interface ListIdentitiesCommandInput extends ListIdentitiesRequest {}
export interface ListIdentitiesCommandOutput extends ListIdentitiesResponse, __MetadataBearer {}

/**
 * <p>Returns a list containing all of the identities (email addresses and domains) for your
 *             AWS account in the current AWS Region, regardless of verification status.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class ListIdentitiesCommand extends $Command<
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIdentitiesCommandInput) {
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
  ): Handler<ListIdentitiesCommandInput, ListIdentitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListIdentitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIdentitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListIdentitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIdentitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListIdentitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIdentitiesCommandOutput> {
    return deserializeAws_queryListIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
