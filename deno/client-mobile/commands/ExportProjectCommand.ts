import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient.ts";
import { ExportProjectRequest, ExportProjectResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ExportProjectCommand,
  serializeAws_restJson1ExportProjectCommand,
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

export interface ExportProjectCommandInput extends ExportProjectRequest {}
export interface ExportProjectCommandOutput extends ExportProjectResult, __MetadataBearer {}

/**
 * <p>
 *             Exports project configuration to a snapshot which can be downloaded and shared.
 *             Note that mobile app push credentials are encrypted in exported projects, so they
 *             can only be shared successfully within the same AWS account.
 *         </p>
 */
export class ExportProjectCommand extends $Command<
  ExportProjectCommandInput,
  ExportProjectCommandOutput,
  MobileClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportProjectCommandInput, ExportProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MobileClient";
    const commandName = "ExportProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportProjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportProjectResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportProjectCommandOutput> {
    return deserializeAws_restJson1ExportProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
