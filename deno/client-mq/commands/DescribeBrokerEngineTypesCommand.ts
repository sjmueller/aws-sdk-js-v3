
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient.ts";
import { DescribeBrokerEngineTypesRequest, DescribeBrokerEngineTypesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeBrokerEngineTypesCommand,
  serializeAws_restJson1DescribeBrokerEngineTypesCommand,
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

export type DescribeBrokerEngineTypesCommandInput = DescribeBrokerEngineTypesRequest;
export type DescribeBrokerEngineTypesCommandOutput = DescribeBrokerEngineTypesResponse & __MetadataBearer;

export class DescribeBrokerEngineTypesCommand extends $Command<
  DescribeBrokerEngineTypesCommandInput,
  DescribeBrokerEngineTypesCommandOutput,
  MqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBrokerEngineTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBrokerEngineTypesCommandInput, DescribeBrokerEngineTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeBrokerEngineTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBrokerEngineTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBrokerEngineTypesResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBrokerEngineTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBrokerEngineTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBrokerEngineTypesCommandOutput> {
    return deserializeAws_restJson1DescribeBrokerEngineTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
