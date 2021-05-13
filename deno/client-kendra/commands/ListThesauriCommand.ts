import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient.ts";
import { ListThesauriRequest, ListThesauriResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListThesauriCommand,
  serializeAws_json1_1ListThesauriCommand,
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

export interface ListThesauriCommandInput extends ListThesauriRequest {}
export interface ListThesauriCommandOutput extends ListThesauriResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon Kendra thesauri associated with an index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListThesauriCommand } from "../../client-kendra/mod.ts";
 * // const { KendraClient, ListThesauriCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListThesauriCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThesauriCommandInput} for command's `input` shape.
 * @see {@link ListThesauriCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListThesauriCommand extends $Command<
  ListThesauriCommandInput,
  ListThesauriCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListThesauriCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListThesauriCommandInput, ListThesauriCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ListThesauriCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThesauriRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListThesauriResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListThesauriCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListThesauriCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListThesauriCommandOutput> {
    return deserializeAws_json1_1ListThesauriCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
