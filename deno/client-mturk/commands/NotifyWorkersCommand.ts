import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { NotifyWorkersRequest, NotifyWorkersResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1NotifyWorkersCommand,
  serializeAws_json1_1NotifyWorkersCommand,
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

export type NotifyWorkersCommandInput = NotifyWorkersRequest;
export type NotifyWorkersCommandOutput = NotifyWorkersResponse & __MetadataBearer;

/**
 * <p>
 *             The
 *             <code>NotifyWorkers</code>
 *             operation sends an email to one or more Workers that you specify with
 *             the Worker ID. You can specify up to 100 Worker IDs to send the same
 *             message with a single call to the NotifyWorkers operation. The
 *             NotifyWorkers operation will send a notification email to a Worker
 *             only if you have previously approved or rejected work from the
 *             Worker.
 *         </p>
 */
export class NotifyWorkersCommand extends $Command<
  NotifyWorkersCommandInput,
  NotifyWorkersCommandOutput,
  MTurkClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NotifyWorkersCommandInput) {
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
  ): Handler<NotifyWorkersCommandInput, NotifyWorkersCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "NotifyWorkersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyWorkersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: NotifyWorkersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyWorkersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyWorkersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyWorkersCommandOutput> {
    return deserializeAws_json1_1NotifyWorkersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
