import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient.ts";
import { ListAccessPointsForObjectLambdaRequest, ListAccessPointsForObjectLambdaResult } from "../models/models_0.ts";
import {
  deserializeAws_restXmlListAccessPointsForObjectLambdaCommand,
  serializeAws_restXmlListAccessPointsForObjectLambdaCommand,
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

export interface ListAccessPointsForObjectLambdaCommandInput extends ListAccessPointsForObjectLambdaRequest {}
export interface ListAccessPointsForObjectLambdaCommandOutput
  extends ListAccessPointsForObjectLambdaResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of the access points associated with the Object Lambda Access Point. You
 *          can retrieve up to 1000 access points per call. If there are more than 1,000
 *          access points (or the number specified in <code>maxResults</code>, whichever is less), the
 *          response will include a continuation token that you can use to list the additional access
 *          points.</p>
 *          <p>The following actions are related to <code>ListAccessPointsForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ListAccessPointsForObjectLambdaCommand extends $Command<
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccessPointsForObjectLambdaCommandInput) {
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
  ): Handler<ListAccessPointsForObjectLambdaCommandInput, ListAccessPointsForObjectLambdaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "ListAccessPointsForObjectLambdaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccessPointsForObjectLambdaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccessPointsForObjectLambdaResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAccessPointsForObjectLambdaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListAccessPointsForObjectLambdaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAccessPointsForObjectLambdaCommandOutput> {
    return deserializeAws_restXmlListAccessPointsForObjectLambdaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
