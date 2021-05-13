import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient.ts";
import { SearchAddressBooksRequest, SearchAddressBooksResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1SearchAddressBooksCommand,
  serializeAws_json1_1SearchAddressBooksCommand,
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

export interface SearchAddressBooksCommandInput extends SearchAddressBooksRequest {}
export interface SearchAddressBooksCommandOutput extends SearchAddressBooksResponse, __MetadataBearer {}

/**
 * <p>Searches address books and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchAddressBooksCommand } from "../../client-alexa-for-business/mod.ts";
 * // const { AlexaForBusinessClient, SearchAddressBooksCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new SearchAddressBooksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchAddressBooksCommandInput} for command's `input` shape.
 * @see {@link SearchAddressBooksCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SearchAddressBooksCommand extends $Command<
  SearchAddressBooksCommandInput,
  SearchAddressBooksCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchAddressBooksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchAddressBooksCommandInput, SearchAddressBooksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchAddressBooksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchAddressBooksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchAddressBooksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchAddressBooksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchAddressBooksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchAddressBooksCommandOutput> {
    return deserializeAws_json1_1SearchAddressBooksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
