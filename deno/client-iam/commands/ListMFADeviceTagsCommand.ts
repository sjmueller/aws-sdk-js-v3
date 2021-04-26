import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { ListMFADeviceTagsRequest, ListMFADeviceTagsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListMFADeviceTagsCommand,
  serializeAws_queryListMFADeviceTagsCommand,
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

export interface ListMFADeviceTagsCommandInput extends ListMFADeviceTagsRequest {}
export interface ListMFADeviceTagsCommandOutput extends ListMFADeviceTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is
 *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 */
export class ListMFADeviceTagsCommand extends $Command<
  ListMFADeviceTagsCommandInput,
  ListMFADeviceTagsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMFADeviceTagsCommandInput) {
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
  ): Handler<ListMFADeviceTagsCommandInput, ListMFADeviceTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListMFADeviceTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMFADeviceTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMFADeviceTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMFADeviceTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListMFADeviceTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMFADeviceTagsCommandOutput> {
    return deserializeAws_queryListMFADeviceTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
