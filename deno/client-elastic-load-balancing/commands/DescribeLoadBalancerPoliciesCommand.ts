import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient.ts";
import { DescribeLoadBalancerPoliciesInput, DescribeLoadBalancerPoliciesOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeLoadBalancerPoliciesCommand,
  serializeAws_queryDescribeLoadBalancerPoliciesCommand,
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

export type DescribeLoadBalancerPoliciesCommandInput = DescribeLoadBalancerPoliciesInput;
export type DescribeLoadBalancerPoliciesCommandOutput = DescribeLoadBalancerPoliciesOutput & __MetadataBearer;

/**
 * <p>Describes the specified policies.</p>
 *          <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer.
 *     If you specify a policy name associated with your load balancer, the action returns the description of that policy.
 *     If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies.
 *     The names of the sample policies have the <code>ELBSample-</code> prefix.</p>
 */
export class DescribeLoadBalancerPoliciesCommand extends $Command<
  DescribeLoadBalancerPoliciesCommandInput,
  DescribeLoadBalancerPoliciesCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLoadBalancerPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoadBalancerPoliciesCommandInput, DescribeLoadBalancerPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DescribeLoadBalancerPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoadBalancerPoliciesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLoadBalancerPoliciesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLoadBalancerPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLoadBalancerPoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoadBalancerPoliciesCommandOutput> {
    return deserializeAws_queryDescribeLoadBalancerPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
