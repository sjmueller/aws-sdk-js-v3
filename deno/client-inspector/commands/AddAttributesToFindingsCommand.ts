import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { AddAttributesToFindingsRequest, AddAttributesToFindingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AddAttributesToFindingsCommand,
  serializeAws_json1_1AddAttributesToFindingsCommand,
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

export interface AddAttributesToFindingsCommandInput extends AddAttributesToFindingsRequest {}
export interface AddAttributesToFindingsCommandOutput extends AddAttributesToFindingsResponse, __MetadataBearer {}

/**
 * <p>Assigns attributes (key and value pairs) to the findings that are specified by the
 *          ARNs of the findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, AddAttributesToFindingsCommand } from "../../client-inspector/mod.ts";
 * // const { InspectorClient, AddAttributesToFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new AddAttributesToFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddAttributesToFindingsCommandInput} for command's `input` shape.
 * @see {@link AddAttributesToFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddAttributesToFindingsCommand extends $Command<
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddAttributesToFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddAttributesToFindingsCommandInput, AddAttributesToFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "AddAttributesToFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddAttributesToFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddAttributesToFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddAttributesToFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddAttributesToFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddAttributesToFindingsCommandOutput> {
    return deserializeAws_json1_1AddAttributesToFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
