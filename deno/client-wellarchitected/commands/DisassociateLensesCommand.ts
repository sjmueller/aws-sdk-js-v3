import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient.ts";
import { DisassociateLensesInput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DisassociateLensesCommand,
  serializeAws_restJson1DisassociateLensesCommand,
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

export type DisassociateLensesCommandInput = DisassociateLensesInput;
export type DisassociateLensesCommandOutput = __MetadataBearer;

/**
 * <p>Disassociate a lens from a workload.</p>
 *         <note>
 *             <p>The AWS Well-Architected Framework lens (<code>wellarchitected</code>) cannot be
 *                 removed from a workload.</p>
 *         </note>
 */
export class DisassociateLensesCommand extends $Command<
  DisassociateLensesCommandInput,
  DisassociateLensesCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateLensesCommandInput) {
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
  ): Handler<DisassociateLensesCommandInput, DisassociateLensesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "DisassociateLensesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateLensesInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateLensesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateLensesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateLensesCommandOutput> {
    return deserializeAws_restJson1DisassociateLensesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
