import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient.ts";
import { ListDomainNamesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDomainNamesCommand,
  serializeAws_restJson1ListDomainNamesCommand,
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

export interface ListDomainNamesCommandInput {}
export interface ListDomainNamesCommandOutput extends ListDomainNamesResponse, __MetadataBearer {}

/**
 * <p>Returns the name of all Elasticsearch domains owned by the current user's account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListDomainNamesCommand } from "../../client-elasticsearch-service/mod.ts";
 * // const { ElasticsearchServiceClient, ListDomainNamesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListDomainNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainNamesCommandInput} for command's `input` shape.
 * @see {@link ListDomainNamesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDomainNamesCommand extends $Command<
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDomainNamesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDomainNamesCommandInput, ListDomainNamesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "ListDomainNamesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: ListDomainNamesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDomainNamesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDomainNamesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDomainNamesCommandOutput> {
    return deserializeAws_restJson1ListDomainNamesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
