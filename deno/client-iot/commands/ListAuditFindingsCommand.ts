import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListAuditFindingsRequest, ListAuditFindingsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListAuditFindingsCommand,
  serializeAws_restJson1ListAuditFindingsCommand,
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

export interface ListAuditFindingsCommandInput extends ListAuditFindingsRequest {}
export interface ListAuditFindingsCommandOutput extends ListAuditFindingsResponse, __MetadataBearer {}

/**
 * <p>Lists the findings (results) of a Device Defender audit or of the audits
 *         performed during a specified time period. (Findings are retained for 90 days.)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditFindingsCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, ListAuditFindingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditFindingsCommandInput} for command's `input` shape.
 * @see {@link ListAuditFindingsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAuditFindingsCommand extends $Command<
  ListAuditFindingsCommandInput,
  ListAuditFindingsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAuditFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAuditFindingsCommandInput, ListAuditFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListAuditFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAuditFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAuditFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAuditFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAuditFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAuditFindingsCommandOutput> {
    return deserializeAws_restJson1ListAuditFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
