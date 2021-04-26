import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient.ts";
import { StartWorkspacesRequest, StartWorkspacesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartWorkspacesCommand,
  serializeAws_json1_1StartWorkspacesCommand,
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

export interface StartWorkspacesCommandInput extends StartWorkspacesRequest {}
export interface StartWorkspacesCommandOutput extends StartWorkspacesResult, __MetadataBearer {}

/**
 * <p>Starts the specified WorkSpaces.</p>
 *          <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a
 *          state of <code>STOPPED</code>.</p>
 */
export class StartWorkspacesCommand extends $Command<
  StartWorkspacesCommandInput,
  StartWorkspacesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartWorkspacesCommandInput) {
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
  ): Handler<StartWorkspacesCommandInput, StartWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "StartWorkspacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartWorkspacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartWorkspacesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartWorkspacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartWorkspacesCommandOutput> {
    return deserializeAws_json1_1StartWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
