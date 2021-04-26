import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient.ts";
import { DeleteAccessPointForObjectLambdaRequest } from "../models/models_0.ts";
import {
  deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand,
  serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand,
} from "../protocols/Aws_restXml.ts";
import { getProcessArnablesPlugin } from "../../middleware-sdk-s3-control/mod.ts";
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

export interface DeleteAccessPointForObjectLambdaCommandInput extends DeleteAccessPointForObjectLambdaRequest {}
export interface DeleteAccessPointForObjectLambdaCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified Object Lambda Access Point.</p>
 *          <p>The following actions are related to <code>DeleteAccessPointForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DeleteAccessPointForObjectLambdaCommand extends $Command<
  DeleteAccessPointForObjectLambdaCommandInput,
  DeleteAccessPointForObjectLambdaCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAccessPointForObjectLambdaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccessPointForObjectLambdaCommandInput, DeleteAccessPointForObjectLambdaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "DeleteAccessPointForObjectLambdaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccessPointForObjectLambdaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteAccessPointForObjectLambdaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAccessPointForObjectLambdaCommandOutput> {
    return deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
