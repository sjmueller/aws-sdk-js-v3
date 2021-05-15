import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient.ts";
import { DeleteIncidentRecordInput, DeleteIncidentRecordOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteIncidentRecordCommand,
  serializeAws_restJson1DeleteIncidentRecordCommand,
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

export interface DeleteIncidentRecordCommandInput extends DeleteIncidentRecordInput {}
export interface DeleteIncidentRecordCommandOutput extends DeleteIncidentRecordOutput, __MetadataBearer {}

/**
 * <p>Delete an incident record from Incident Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, DeleteIncidentRecordCommand } from "../../client-commander/mod.ts";
 * // const { CommanderClient, DeleteIncidentRecordCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new DeleteIncidentRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteIncidentRecordCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteIncidentRecordCommand extends $Command<
  DeleteIncidentRecordCommandInput,
  DeleteIncidentRecordCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteIncidentRecordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CommanderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteIncidentRecordCommandInput, DeleteIncidentRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "DeleteIncidentRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIncidentRecordInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteIncidentRecordOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIncidentRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteIncidentRecordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIncidentRecordCommandOutput> {
    return deserializeAws_restJson1DeleteIncidentRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
