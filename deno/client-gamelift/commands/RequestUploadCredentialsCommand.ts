import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { RequestUploadCredentialsInput, RequestUploadCredentialsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RequestUploadCredentialsCommand,
  serializeAws_json1_1RequestUploadCredentialsCommand,
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

export type RequestUploadCredentialsCommandInput = RequestUploadCredentialsInput;
export type RequestUploadCredentialsCommandOutput = RequestUploadCredentialsOutput & __MetadataBearer;

/**
 * <p>Retrieves a fresh set of credentials for use when uploading a new set of game build
 *             files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see
 *                 <a>CreateBuild</a>.</p>
 *         <p>To request new credentials, specify the build ID as returned with an initial
 *                 <code>CreateBuild</code> request. If successful, a new set of credentials are
 *             returned, along with the S3 storage location associated with the build ID.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build">
 *             Create a Build with Files in S3</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateBuild</a> |
 *                     <a>ListBuilds</a> |
 *                     <a>DescribeBuild</a> |
 *                     <a>UpdateBuild</a> |
 *                     <a>DeleteBuild</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class RequestUploadCredentialsCommand extends $Command<
  RequestUploadCredentialsCommandInput,
  RequestUploadCredentialsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RequestUploadCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RequestUploadCredentialsCommandInput, RequestUploadCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "RequestUploadCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestUploadCredentialsInput.filterSensitiveLog,
      outputFilterSensitiveLog: RequestUploadCredentialsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestUploadCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RequestUploadCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestUploadCredentialsCommandOutput> {
    return deserializeAws_json1_1RequestUploadCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
