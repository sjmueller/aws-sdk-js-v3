import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { ListQualificationTypesRequest, ListQualificationTypesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListQualificationTypesCommand,
  serializeAws_json1_1ListQualificationTypesCommand,
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

export interface ListQualificationTypesCommandInput extends ListQualificationTypesRequest {}
export interface ListQualificationTypesCommandOutput extends ListQualificationTypesResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListQualificationTypes</code>
 *             operation returns a list of Qualification types, filtered by
 *             an optional search term.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListQualificationTypesCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, ListQualificationTypesCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListQualificationTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQualificationTypesCommandInput} for command's `input` shape.
 * @see {@link ListQualificationTypesCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListQualificationTypesCommand extends $Command<
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListQualificationTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListQualificationTypesCommandInput, ListQualificationTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListQualificationTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQualificationTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListQualificationTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQualificationTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListQualificationTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQualificationTypesCommandOutput> {
    return deserializeAws_json1_1ListQualificationTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
