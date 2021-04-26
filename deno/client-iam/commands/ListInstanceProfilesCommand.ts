import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { ListInstanceProfilesRequest, ListInstanceProfilesResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListInstanceProfilesCommand,
  serializeAws_queryListInstanceProfilesCommand,
} from "../protocols/Aws_query.ts";
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

export interface ListInstanceProfilesCommandInput extends ListInstanceProfilesRequest {}
export interface ListInstanceProfilesCommandOutput extends ListInstanceProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists the instance profiles that have the specified path prefix. If there are none,
 *             the operation returns an empty list. For more information about instance profiles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
 *                 instance profiles</a>.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p>
 *         </note>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 */
export class ListInstanceProfilesCommand extends $Command<
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstanceProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListInstanceProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceProfilesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListInstanceProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceProfilesCommandOutput> {
    return deserializeAws_queryListInstanceProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
