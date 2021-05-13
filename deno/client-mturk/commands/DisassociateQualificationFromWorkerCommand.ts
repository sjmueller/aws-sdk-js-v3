import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import {
  DisassociateQualificationFromWorkerRequest,
  DisassociateQualificationFromWorkerResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateQualificationFromWorkerCommand,
  serializeAws_json1_1DisassociateQualificationFromWorkerCommand,
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

export interface DisassociateQualificationFromWorkerCommandInput extends DisassociateQualificationFromWorkerRequest {}
export interface DisassociateQualificationFromWorkerCommandOutput
  extends DisassociateQualificationFromWorkerResponse,
    __MetadataBearer {}

/**
 * <p>
 *             The 	<code>DisassociateQualificationFromWorker</code>
 *             revokes a previously granted Qualification from a user.
 *         </p>
 *         <p>
 *             You can provide a text message explaining why the Qualification was
 *             revoked. The user who had the Qualification can see this message.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DisassociateQualificationFromWorkerCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, DisassociateQualificationFromWorkerCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DisassociateQualificationFromWorkerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateQualificationFromWorkerCommandInput} for command's `input` shape.
 * @see {@link DisassociateQualificationFromWorkerCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateQualificationFromWorkerCommand extends $Command<
  DisassociateQualificationFromWorkerCommandInput,
  DisassociateQualificationFromWorkerCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateQualificationFromWorkerCommandInput) {
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
  ): Handler<DisassociateQualificationFromWorkerCommandInput, DisassociateQualificationFromWorkerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "DisassociateQualificationFromWorkerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateQualificationFromWorkerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateQualificationFromWorkerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateQualificationFromWorkerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateQualificationFromWorkerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateQualificationFromWorkerCommandOutput> {
    return deserializeAws_json1_1DisassociateQualificationFromWorkerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
