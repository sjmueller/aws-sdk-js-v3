
import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { SwapEnvironmentCNAMEsMessage } from "../models/index.ts";
import {
  deserializeAws_querySwapEnvironmentCNAMEsCommand,
  serializeAws_querySwapEnvironmentCNAMEsCommand,
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

export type SwapEnvironmentCNAMEsCommandInput = SwapEnvironmentCNAMEsMessage;
export type SwapEnvironmentCNAMEsCommandOutput = __MetadataBearer;

export class SwapEnvironmentCNAMEsCommand extends $Command<
  SwapEnvironmentCNAMEsCommandInput,
  SwapEnvironmentCNAMEsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SwapEnvironmentCNAMEsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SwapEnvironmentCNAMEsCommandInput, SwapEnvironmentCNAMEsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: SwapEnvironmentCNAMEsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SwapEnvironmentCNAMEsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySwapEnvironmentCNAMEsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SwapEnvironmentCNAMEsCommandOutput> {
    return deserializeAws_querySwapEnvironmentCNAMEsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
