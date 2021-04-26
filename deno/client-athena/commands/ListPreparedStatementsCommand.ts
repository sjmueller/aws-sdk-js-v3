import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient.ts";
import { ListPreparedStatementsInput, ListPreparedStatementsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListPreparedStatementsCommand,
  serializeAws_json1_1ListPreparedStatementsCommand,
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

export interface ListPreparedStatementsCommandInput extends ListPreparedStatementsInput {}
export interface ListPreparedStatementsCommandOutput extends ListPreparedStatementsOutput, __MetadataBearer {}

/**
 * <p>Lists the prepared statements in the specfied workgroup.</p>
 */
export class ListPreparedStatementsCommand extends $Command<
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPreparedStatementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPreparedStatementsCommandInput, ListPreparedStatementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListPreparedStatementsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPreparedStatementsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListPreparedStatementsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPreparedStatementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPreparedStatementsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPreparedStatementsCommandOutput> {
    return deserializeAws_json1_1ListPreparedStatementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
