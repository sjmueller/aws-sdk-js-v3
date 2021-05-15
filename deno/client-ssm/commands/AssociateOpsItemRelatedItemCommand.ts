import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { AssociateOpsItemRelatedItemRequest, AssociateOpsItemRelatedItemResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociateOpsItemRelatedItemCommand,
  serializeAws_json1_1AssociateOpsItemRelatedItemCommand,
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

export interface AssociateOpsItemRelatedItemCommandInput extends AssociateOpsItemRelatedItemRequest {}
export interface AssociateOpsItemRelatedItemCommandOutput
  extends AssociateOpsItemRelatedItemResponse,
    __MetadataBearer {}

/**
 * <p>Associates a related resource to a Systems Manager OpsCenter OpsItem. For example, you can
 *    associate an Incident Manager incident or analysis with an OpsItem. Incident Manager is a
 *    capability of AWS Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AssociateOpsItemRelatedItemCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, AssociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new AssociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link AssociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateOpsItemRelatedItemCommand extends $Command<
  AssociateOpsItemRelatedItemCommandInput,
  AssociateOpsItemRelatedItemCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateOpsItemRelatedItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateOpsItemRelatedItemCommandInput, AssociateOpsItemRelatedItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "AssociateOpsItemRelatedItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateOpsItemRelatedItemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateOpsItemRelatedItemResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateOpsItemRelatedItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateOpsItemRelatedItemCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateOpsItemRelatedItemCommandOutput> {
    return deserializeAws_json1_1AssociateOpsItemRelatedItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
