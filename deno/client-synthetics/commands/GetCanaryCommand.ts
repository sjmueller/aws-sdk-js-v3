import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient.ts";
import { GetCanaryRequest, GetCanaryResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetCanaryCommand,
  serializeAws_restJson1GetCanaryCommand,
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

export interface GetCanaryCommandInput extends GetCanaryRequest {}
export interface GetCanaryCommandOutput extends GetCanaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves complete information about one canary. You must specify
 *       the name of the canary that you want. To get a list of canaries
 *       and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
 */
export class GetCanaryCommand extends $Command<
  GetCanaryCommandInput,
  GetCanaryCommandOutput,
  SyntheticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCanaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCanaryCommandInput, GetCanaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "GetCanaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCanaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCanaryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCanaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCanaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCanaryCommandOutput> {
    return deserializeAws_restJson1GetCanaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
