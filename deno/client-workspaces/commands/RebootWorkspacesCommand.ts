import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient.ts";
import { RebootWorkspacesRequest, RebootWorkspacesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RebootWorkspacesCommand,
  serializeAws_json1_1RebootWorkspacesCommand,
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

export interface RebootWorkspacesCommandInput extends RebootWorkspacesRequest {}
export interface RebootWorkspacesCommandOutput extends RebootWorkspacesResult, __MetadataBearer {}

/**
 * <p>Reboots the specified WorkSpaces.</p>
 *          <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or
 *             <code>UNHEALTHY</code>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
 */
export class RebootWorkspacesCommand extends $Command<
  RebootWorkspacesCommandInput,
  RebootWorkspacesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RebootWorkspacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RebootWorkspacesCommandInput, RebootWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "RebootWorkspacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootWorkspacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RebootWorkspacesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RebootWorkspacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootWorkspacesCommandOutput> {
    return deserializeAws_json1_1RebootWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
