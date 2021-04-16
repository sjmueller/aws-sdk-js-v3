import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client.ts";
import { GetComponentVersionArtifactRequest, GetComponentVersionArtifactResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetComponentVersionArtifactCommand,
  serializeAws_restJson1GetComponentVersionArtifactCommand,
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

export type GetComponentVersionArtifactCommandInput = GetComponentVersionArtifactRequest;
export type GetComponentVersionArtifactCommandOutput = GetComponentVersionArtifactResponse & __MetadataBearer;

/**
 * <p>Gets the pre-signed URL to download a public component artifact. Core devices call this
 *       operation to identify the URL that they can use to download an artifact to install.</p>
 */
export class GetComponentVersionArtifactCommand extends $Command<
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetComponentVersionArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComponentVersionArtifactCommandInput, GetComponentVersionArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "GetComponentVersionArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComponentVersionArtifactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetComponentVersionArtifactResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetComponentVersionArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetComponentVersionArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComponentVersionArtifactCommandOutput> {
    return deserializeAws_restJson1GetComponentVersionArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
