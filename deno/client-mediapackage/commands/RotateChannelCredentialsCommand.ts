import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient.ts";
import { RotateChannelCredentialsRequest, RotateChannelCredentialsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RotateChannelCredentialsCommand,
  serializeAws_restJson1RotateChannelCredentialsCommand,
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

export type RotateChannelCredentialsCommandInput = RotateChannelCredentialsRequest;
export type RotateChannelCredentialsCommandOutput = RotateChannelCredentialsResponse & __MetadataBearer;

/**
 * @deprecated
 *
 * Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead
 */
export class RotateChannelCredentialsCommand extends $Command<
  RotateChannelCredentialsCommandInput,
  RotateChannelCredentialsCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RotateChannelCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RotateChannelCredentialsCommandInput, RotateChannelCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "RotateChannelCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RotateChannelCredentialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RotateChannelCredentialsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RotateChannelCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RotateChannelCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RotateChannelCredentialsCommandOutput> {
    return deserializeAws_restJson1RotateChannelCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
