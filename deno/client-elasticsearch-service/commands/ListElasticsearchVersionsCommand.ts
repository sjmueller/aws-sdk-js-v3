import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient.ts";
import { ListElasticsearchVersionsRequest, ListElasticsearchVersionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListElasticsearchVersionsCommand,
  serializeAws_restJson1ListElasticsearchVersionsCommand,
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

export interface ListElasticsearchVersionsCommandInput extends ListElasticsearchVersionsRequest {}
export interface ListElasticsearchVersionsCommandOutput extends ListElasticsearchVersionsResponse, __MetadataBearer {}

/**
 * <p>List all supported Elasticsearch versions</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListElasticsearchVersionsCommand } from "../../client-elasticsearch-service/mod.ts";
 * // const { ElasticsearchServiceClient, ListElasticsearchVersionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListElasticsearchVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListElasticsearchVersionsCommandInput} for command's `input` shape.
 * @see {@link ListElasticsearchVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListElasticsearchVersionsCommand extends $Command<
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListElasticsearchVersionsCommandInput) {
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
  ): Handler<ListElasticsearchVersionsCommandInput, ListElasticsearchVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "ListElasticsearchVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListElasticsearchVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListElasticsearchVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListElasticsearchVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListElasticsearchVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListElasticsearchVersionsCommandOutput> {
    return deserializeAws_restJson1ListElasticsearchVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
