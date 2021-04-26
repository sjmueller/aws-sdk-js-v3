import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient.ts";
import { BatchGetStreamKeyRequest, BatchGetStreamKeyResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchGetStreamKeyCommand,
  serializeAws_restJson1BatchGetStreamKeyCommand,
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

export interface BatchGetStreamKeyCommandInput extends BatchGetStreamKeyRequest {}
export interface BatchGetStreamKeyCommandOutput extends BatchGetStreamKeyResponse, __MetadataBearer {}

/**
 * <p>Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.</p>
 */
export class BatchGetStreamKeyCommand extends $Command<
  BatchGetStreamKeyCommandInput,
  BatchGetStreamKeyCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetStreamKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetStreamKeyCommandInput, BatchGetStreamKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "BatchGetStreamKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetStreamKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetStreamKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetStreamKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetStreamKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetStreamKeyCommandOutput> {
    return deserializeAws_restJson1BatchGetStreamKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
