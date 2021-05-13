import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient.ts";
import { DescribeLifecycleConfigurationRequest, LifecycleConfigurationDescription } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeLifecycleConfigurationCommand,
  serializeAws_restJson1DescribeLifecycleConfigurationCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface DescribeLifecycleConfigurationCommandInput extends DescribeLifecycleConfigurationRequest {}
export interface DescribeLifecycleConfigurationCommandOutput
  extends LifecycleConfigurationDescription,
    __MetadataBearer {}

/**
 * <p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon
 *       EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object
 *       to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system
 *       without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the
 *       response.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeLifecycleConfigurationCommand } from "../../client-efs/mod.ts";
 * // const { EFSClient, DescribeLifecycleConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeLifecycleConfigurationCommand extends $Command<
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLifecycleConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLifecycleConfigurationCommandInput, DescribeLifecycleConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeLifecycleConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLifecycleConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LifecycleConfigurationDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLifecycleConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeLifecycleConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLifecycleConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeLifecycleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
