import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { ListWorkersWithQualificationTypeRequest, ListWorkersWithQualificationTypeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListWorkersWithQualificationTypeCommand,
  serializeAws_json1_1ListWorkersWithQualificationTypeCommand,
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

export interface ListWorkersWithQualificationTypeCommandInput extends ListWorkersWithQualificationTypeRequest {}
export interface ListWorkersWithQualificationTypeCommandOutput
  extends ListWorkersWithQualificationTypeResponse,
    __MetadataBearer {}

/**
 * <p>
 *             The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers
 *             that have been associated with a given Qualification type.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkersWithQualificationTypeCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, ListWorkersWithQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListWorkersWithQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkersWithQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link ListWorkersWithQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListWorkersWithQualificationTypeCommand extends $Command<
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorkersWithQualificationTypeCommandInput) {
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
  ): Handler<ListWorkersWithQualificationTypeCommandInput, ListWorkersWithQualificationTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListWorkersWithQualificationTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkersWithQualificationTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkersWithQualificationTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListWorkersWithQualificationTypeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListWorkersWithQualificationTypeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWorkersWithQualificationTypeCommandOutput> {
    return deserializeAws_json1_1ListWorkersWithQualificationTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
