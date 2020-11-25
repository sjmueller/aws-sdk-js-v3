import { Buffer } from "https://deno.land/std@0.79.0/node/buffer.ts";
import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient.ts";
import { PutSnapshotBlockRequest, PutSnapshotBlockResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutSnapshotBlockCommand,
  serializeAws_restJson1PutSnapshotBlockCommand,
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

export type PutSnapshotBlockCommandInput = Omit<PutSnapshotBlockRequest, "BlockData"> & {
  BlockData: PutSnapshotBlockRequest["BlockData"] | string | Uint8Array | Buffer;
};
export type PutSnapshotBlockCommandOutput = PutSnapshotBlockResponse & __MetadataBearer;

export class PutSnapshotBlockCommand extends $Command<
  PutSnapshotBlockCommandInput,
  PutSnapshotBlockCommandOutput,
  EBSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSnapshotBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSnapshotBlockCommandInput, PutSnapshotBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "PutSnapshotBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSnapshotBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSnapshotBlockResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSnapshotBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSnapshotBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSnapshotBlockCommandOutput> {
    return deserializeAws_restJson1PutSnapshotBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
