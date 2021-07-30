import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient.ts";
import {
  ListAccountAssignmentDeletionStatusRequest,
  ListAccountAssignmentDeletionStatusResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommand,
  serializeAws_json1_1ListAccountAssignmentDeletionStatusCommand,
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

export interface ListAccountAssignmentDeletionStatusCommandInput extends ListAccountAssignmentDeletionStatusRequest {}
export interface ListAccountAssignmentDeletionStatusCommandOutput
  extends ListAccountAssignmentDeletionStatusResponse,
    __MetadataBearer {}

/**
 * <p>Lists the status of the Amazon Web Services account assignment deletion requests for a specified SSO
 *       instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentDeletionStatusCommand } from "../../client-sso-admin/mod.ts";
 * // const { SSOAdminClient, ListAccountAssignmentDeletionStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListAccountAssignmentDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAssignmentDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAccountAssignmentDeletionStatusCommand extends $Command<
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountAssignmentDeletionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountAssignmentDeletionStatusCommandInput, ListAccountAssignmentDeletionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListAccountAssignmentDeletionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountAssignmentDeletionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountAssignmentDeletionStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAccountAssignmentDeletionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAccountAssignmentDeletionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAccountAssignmentDeletionStatusCommandOutput> {
    return deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
