import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient.ts";
import { PutImageTagMutabilityRequest, PutImageTagMutabilityResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutImageTagMutabilityCommand,
  serializeAws_json1_1PutImageTagMutabilityCommand,
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

export interface PutImageTagMutabilityCommandInput extends PutImageTagMutabilityRequest {}
export interface PutImageTagMutabilityCommandOutput extends PutImageTagMutabilityResponse, __MetadataBearer {}

/**
 * <p>Updates the image tag mutability settings for the specified repository. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image Tag
 *                 Mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 */
export class PutImageTagMutabilityCommand extends $Command<
  PutImageTagMutabilityCommandInput,
  PutImageTagMutabilityCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutImageTagMutabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "PutImageTagMutabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutImageTagMutabilityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutImageTagMutabilityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutImageTagMutabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutImageTagMutabilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutImageTagMutabilityCommandOutput> {
    return deserializeAws_json1_1PutImageTagMutabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
