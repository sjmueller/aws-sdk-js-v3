
import {
  KinesisVideoSignalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoSignalingClient.ts";
import { SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1SendAlexaOfferToMasterCommand,
  serializeAws_restJson1SendAlexaOfferToMasterCommand,
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

export type SendAlexaOfferToMasterCommandInput = SendAlexaOfferToMasterRequest;
export type SendAlexaOfferToMasterCommandOutput = SendAlexaOfferToMasterResponse & __MetadataBearer;

export class SendAlexaOfferToMasterCommand extends $Command<
  SendAlexaOfferToMasterCommandInput,
  SendAlexaOfferToMasterCommandOutput,
  KinesisVideoSignalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendAlexaOfferToMasterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoSignalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: SendAlexaOfferToMasterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendAlexaOfferToMasterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendAlexaOfferToMasterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendAlexaOfferToMasterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendAlexaOfferToMasterCommandOutput> {
    return deserializeAws_restJson1SendAlexaOfferToMasterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
