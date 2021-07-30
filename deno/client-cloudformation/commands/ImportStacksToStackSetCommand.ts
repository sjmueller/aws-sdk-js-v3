import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { ImportStacksToStackSetInput, ImportStacksToStackSetOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryImportStacksToStackSetCommand,
  serializeAws_queryImportStacksToStackSetCommand,
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

export interface ImportStacksToStackSetCommandInput extends ImportStacksToStackSetInput {}
export interface ImportStacksToStackSetCommandOutput extends ImportStacksToStackSetOutput, __MetadataBearer {}

/**
 * <p>Import existing stacks into a new stack sets. Use the stack import operation to import
 *          up to 10 stacks into a new stack set in the same account as the source stack or in a
 *          different administrator account and Region, by specifying the stack ID of the stack you
 *          intend to import.</p>
 *          <note>
 *             <p>
 *                <code>ImportStacksToStackSet</code> is only supported by self-managed permissions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ImportStacksToStackSetCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, ImportStacksToStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ImportStacksToStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportStacksToStackSetCommandInput} for command's `input` shape.
 * @see {@link ImportStacksToStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ImportStacksToStackSetCommand extends $Command<
  ImportStacksToStackSetCommandInput,
  ImportStacksToStackSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportStacksToStackSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportStacksToStackSetCommandInput, ImportStacksToStackSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ImportStacksToStackSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportStacksToStackSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: ImportStacksToStackSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportStacksToStackSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryImportStacksToStackSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportStacksToStackSetCommandOutput> {
    return deserializeAws_queryImportStacksToStackSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
