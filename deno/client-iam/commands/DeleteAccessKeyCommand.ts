import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { DeleteAccessKeyRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteAccessKeyCommand,
  serializeAws_queryDeleteAccessKeyCommand,
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

export type DeleteAccessKeyCommandInput = DeleteAccessKeyRequest;
export type DeleteAccessKeyCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the access key pair associated with the specified IAM user.</p>
 *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the AWS access key ID signing the request. This operation works for access keys under
 *             the AWS account. Consequently, you can use this operation to manage AWS account root
 *             user credentials even if the AWS account has no associated users.</p>
 */
export class DeleteAccessKeyCommand extends $Command<
  DeleteAccessKeyCommandInput,
  DeleteAccessKeyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAccessKeyCommandInput) {
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
  ): Handler<DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteAccessKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccessKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAccessKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteAccessKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccessKeyCommandOutput> {
    return deserializeAws_queryDeleteAccessKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
