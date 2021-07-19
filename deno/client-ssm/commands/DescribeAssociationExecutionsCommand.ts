import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { DescribeAssociationExecutionsRequest, DescribeAssociationExecutionsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAssociationExecutionsCommand,
  serializeAws_json1_1DescribeAssociationExecutionsCommand,
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

export interface DescribeAssociationExecutionsCommandInput extends DescribeAssociationExecutionsRequest {}
export interface DescribeAssociationExecutionsCommandOutput
  extends DescribeAssociationExecutionsResult,
    __MetadataBearer {}

/**
 * <p>Views all executions for a specific association ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAssociationExecutionsCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, DescribeAssociationExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAssociationExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssociationExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssociationExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAssociationExecutionsCommand extends $Command<
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAssociationExecutionsCommandInput) {
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
  ): Handler<DescribeAssociationExecutionsCommandInput, DescribeAssociationExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeAssociationExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAssociationExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAssociationExecutionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAssociationExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAssociationExecutionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAssociationExecutionsCommandOutput> {
    return deserializeAws_json1_1DescribeAssociationExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
