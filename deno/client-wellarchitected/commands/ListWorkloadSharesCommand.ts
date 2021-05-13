import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient.ts";
import { ListWorkloadSharesInput, ListWorkloadSharesOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListWorkloadSharesCommand,
  serializeAws_restJson1ListWorkloadSharesCommand,
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

export interface ListWorkloadSharesCommandInput extends ListWorkloadSharesInput {}
export interface ListWorkloadSharesCommandOutput extends ListWorkloadSharesOutput, __MetadataBearer {}

/**
 * <p>List the workload shares associated with the workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListWorkloadSharesCommand } from "../../client-wellarchitected/mod.ts";
 * // const { WellArchitectedClient, ListWorkloadSharesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListWorkloadSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkloadSharesCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadSharesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListWorkloadSharesCommand extends $Command<
  ListWorkloadSharesCommandInput,
  ListWorkloadSharesCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorkloadSharesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListWorkloadSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkloadSharesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkloadSharesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkloadSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWorkloadSharesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkloadSharesCommandOutput> {
    return deserializeAws_restJson1ListWorkloadSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
