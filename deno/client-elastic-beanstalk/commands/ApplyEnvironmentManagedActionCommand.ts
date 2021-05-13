import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { ApplyEnvironmentManagedActionRequest, ApplyEnvironmentManagedActionResult } from "../models/models_0.ts";
import {
  deserializeAws_queryApplyEnvironmentManagedActionCommand,
  serializeAws_queryApplyEnvironmentManagedActionCommand,
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

export interface ApplyEnvironmentManagedActionCommandInput extends ApplyEnvironmentManagedActionRequest {}
export interface ApplyEnvironmentManagedActionCommandOutput
  extends ApplyEnvironmentManagedActionResult,
    __MetadataBearer {}

/**
 * <p>Applies a scheduled managed action immediately. A managed action can be applied only if
 *       its status is <code>Scheduled</code>. Get the status and action ID of a managed action with
 *         <a>DescribeEnvironmentManagedActions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } from "../../client-elastic-beanstalk/mod.ts";
 * // const { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ApplyEnvironmentManagedActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyEnvironmentManagedActionCommandInput} for command's `input` shape.
 * @see {@link ApplyEnvironmentManagedActionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ApplyEnvironmentManagedActionCommand extends $Command<
  ApplyEnvironmentManagedActionCommandInput,
  ApplyEnvironmentManagedActionCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ApplyEnvironmentManagedActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApplyEnvironmentManagedActionCommandInput, ApplyEnvironmentManagedActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "ApplyEnvironmentManagedActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ApplyEnvironmentManagedActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApplyEnvironmentManagedActionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ApplyEnvironmentManagedActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryApplyEnvironmentManagedActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplyEnvironmentManagedActionCommandOutput> {
    return deserializeAws_queryApplyEnvironmentManagedActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
