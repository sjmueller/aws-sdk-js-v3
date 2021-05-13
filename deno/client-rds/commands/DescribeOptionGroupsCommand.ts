import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { DescribeOptionGroupsMessage, OptionGroups } from "../models/models_1.ts";
import {
  deserializeAws_queryDescribeOptionGroupsCommand,
  serializeAws_queryDescribeOptionGroupsCommand,
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

export interface DescribeOptionGroupsCommandInput extends DescribeOptionGroupsMessage {}
export interface DescribeOptionGroupsCommandOutput extends OptionGroups, __MetadataBearer {}

/**
 * <p>Describes the available option groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupsCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, DescribeOptionGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeOptionGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOptionGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeOptionGroupsCommand extends $Command<
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOptionGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOptionGroupsCommandInput, DescribeOptionGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeOptionGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOptionGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: OptionGroups.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOptionGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeOptionGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOptionGroupsCommandOutput> {
    return deserializeAws_queryDescribeOptionGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
