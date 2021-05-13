import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient.ts";
import { DescribeAcceleratorOfferingsRequest, DescribeAcceleratorOfferingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeAcceleratorOfferingsCommand,
  serializeAws_restJson1DescribeAcceleratorOfferingsCommand,
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

export interface DescribeAcceleratorOfferingsCommandInput extends DescribeAcceleratorOfferingsRequest {}
export interface DescribeAcceleratorOfferingsCommandOutput
  extends DescribeAcceleratorOfferingsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Describes the locations in which a given accelerator type or set of types is present in a given region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } from "../../client-elastic-inference/mod.ts";
 * // const { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const command = new DescribeAcceleratorOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAcceleratorOfferingsCommand extends $Command<
  DescribeAcceleratorOfferingsCommandInput,
  DescribeAcceleratorOfferingsCommandOutput,
  ElasticInferenceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAcceleratorOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticInferenceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAcceleratorOfferingsCommandInput, DescribeAcceleratorOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticInferenceClient";
    const commandName = "DescribeAcceleratorOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAcceleratorOfferingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAcceleratorOfferingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAcceleratorOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAcceleratorOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAcceleratorOfferingsCommandOutput> {
    return deserializeAws_restJson1DescribeAcceleratorOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
