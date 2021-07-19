import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client.ts";
import { ListEnvironmentsRequest, ListEnvironmentsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListEnvironmentsCommand,
  serializeAws_json1_1ListEnvironmentsCommand,
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

export interface ListEnvironmentsCommandInput extends ListEnvironmentsRequest {}
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsResult, __MetadataBearer {}

/**
 * <p>Gets a list of Cloud9 development environment identifiers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, ListEnvironmentsCommand } from "../../client-cloud9/mod.ts";
 * // const { Cloud9Client, ListEnvironmentsCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListEnvironmentsCommand extends $Command<
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
  Cloud9ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "ListEnvironmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnvironmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEnvironmentsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEnvironmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEnvironmentsCommandOutput> {
    return deserializeAws_json1_1ListEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
