import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import {
  DescribeAggregateComplianceByConformancePacksRequest,
  DescribeAggregateComplianceByConformancePacksResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand,
  serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand,
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

export type DescribeAggregateComplianceByConformancePacksCommandInput = DescribeAggregateComplianceByConformancePacksRequest;
export type DescribeAggregateComplianceByConformancePacksCommandOutput = DescribeAggregateComplianceByConformancePacksResponse &
  __MetadataBearer;

/**
 * <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant AWS Config rules within each conformance pack.
 * 			Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p>
 * 		       <note>
 *             <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p>
 *          </note>
 */
export class DescribeAggregateComplianceByConformancePacksCommand extends $Command<
  DescribeAggregateComplianceByConformancePacksCommandInput,
  DescribeAggregateComplianceByConformancePacksCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAggregateComplianceByConformancePacksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAggregateComplianceByConformancePacksCommandInput,
    DescribeAggregateComplianceByConformancePacksCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeAggregateComplianceByConformancePacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAggregateComplianceByConformancePacksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAggregateComplianceByConformancePacksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAggregateComplianceByConformancePacksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput> {
    return deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
