import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { DescribeActivationsRequest, DescribeActivationsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeActivationsCommand,
  serializeAws_json1_1DescribeActivationsCommand,
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

export interface DescribeActivationsCommandInput extends DescribeActivationsRequest {}
export interface DescribeActivationsCommandOutput extends DescribeActivationsResult, __MetadataBearer {}

/**
 * <p>Describes details about the activation, such as the date and time the activation was
 *    created, its expiration date, the IAM role assigned to the instances in the activation, and the
 *    number of instances registered by using this activation.</p>
 */
export class DescribeActivationsCommand extends $Command<
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeActivationsCommandInput) {
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
  ): Handler<DescribeActivationsCommandInput, DescribeActivationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeActivationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeActivationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeActivationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeActivationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeActivationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeActivationsCommandOutput> {
    return deserializeAws_json1_1DescribeActivationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
