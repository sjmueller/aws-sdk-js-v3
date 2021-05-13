import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { CreatePresignedDomainUrlRequest, CreatePresignedDomainUrlResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1CreatePresignedDomainUrlCommand,
  serializeAws_json1_1CreatePresignedDomainUrlCommand,
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

export interface CreatePresignedDomainUrlCommandInput extends CreatePresignedDomainUrlRequest {}
export interface CreatePresignedDomainUrlCommandOutput extends CreatePresignedDomainUrlResponse, __MetadataBearer {}

/**
 * <p>Creates a URL for a specified UserProfile in a Domain.  When accessed in a web browser,
 *        the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of
 *        the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume.
 *        This operation can only be called when the authentication mode equals IAM.
 *    </p>
 *          <note>
 *             <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you
 *             are directed to the AWS console sign-in page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePresignedDomainUrlCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, CreatePresignedDomainUrlCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreatePresignedDomainUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePresignedDomainUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedDomainUrlCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreatePresignedDomainUrlCommand extends $Command<
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePresignedDomainUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePresignedDomainUrlCommandInput, CreatePresignedDomainUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreatePresignedDomainUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePresignedDomainUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePresignedDomainUrlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePresignedDomainUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePresignedDomainUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePresignedDomainUrlCommandOutput> {
    return deserializeAws_json1_1CreatePresignedDomainUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
