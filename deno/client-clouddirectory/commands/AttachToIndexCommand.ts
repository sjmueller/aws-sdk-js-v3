import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { AttachToIndexRequest, AttachToIndexResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AttachToIndexCommand,
  serializeAws_restJson1AttachToIndexCommand,
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

export interface AttachToIndexCommandInput extends AttachToIndexRequest {}
export interface AttachToIndexCommandOutput extends AttachToIndexResponse, __MetadataBearer {}

/**
 * <p>Attaches the specified object to the specified index.</p>
 */
export class AttachToIndexCommand extends $Command<
  AttachToIndexCommandInput,
  AttachToIndexCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachToIndexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachToIndexCommandInput, AttachToIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "AttachToIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachToIndexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachToIndexResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachToIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AttachToIndexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachToIndexCommandOutput> {
    return deserializeAws_restJson1AttachToIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
