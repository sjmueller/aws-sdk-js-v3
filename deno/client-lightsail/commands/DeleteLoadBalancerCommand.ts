import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { DeleteLoadBalancerRequest, DeleteLoadBalancerResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteLoadBalancerCommand,
  serializeAws_json1_1DeleteLoadBalancerCommand,
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

export interface DeleteLoadBalancerCommandInput extends DeleteLoadBalancerRequest {}
export interface DeleteLoadBalancerCommandOutput extends DeleteLoadBalancerResult, __MetadataBearer {}

/**
 * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the
 *       load balancer is deleted, you will need to create a new load balancer, create a new
 *       certificate, and verify domain ownership again.</p>
 *          <p>The <code>delete load balancer</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>load balancer name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteLoadBalancerCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, DeleteLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteLoadBalancerCommand extends $Command<
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLoadBalancerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLoadBalancerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLoadBalancerResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLoadBalancerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteLoadBalancerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLoadBalancerCommandOutput> {
    return deserializeAws_json1_1DeleteLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
