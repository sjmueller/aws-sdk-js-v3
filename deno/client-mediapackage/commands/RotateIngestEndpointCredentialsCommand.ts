
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient.ts";
import { RotateIngestEndpointCredentialsRequest, RotateIngestEndpointCredentialsResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1RotateIngestEndpointCredentialsCommand,
  serializeAws_restJson1RotateIngestEndpointCredentialsCommand,
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

export type RotateIngestEndpointCredentialsCommandInput = RotateIngestEndpointCredentialsRequest;
export type RotateIngestEndpointCredentialsCommandOutput = RotateIngestEndpointCredentialsResponse & __MetadataBearer;

export class RotateIngestEndpointCredentialsCommand extends $Command<
  RotateIngestEndpointCredentialsCommandInput,
  RotateIngestEndpointCredentialsCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RotateIngestEndpointCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RotateIngestEndpointCredentialsCommandInput, RotateIngestEndpointCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RotateIngestEndpointCredentialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RotateIngestEndpointCredentialsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RotateIngestEndpointCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RotateIngestEndpointCredentialsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RotateIngestEndpointCredentialsCommandOutput> {
    return deserializeAws_restJson1RotateIngestEndpointCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
