
import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient.ts";
import { UnsubscribeFromDatasetRequest, UnsubscribeFromDatasetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UnsubscribeFromDatasetCommand,
  serializeAws_restJson1UnsubscribeFromDatasetCommand,
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

export type UnsubscribeFromDatasetCommandInput = UnsubscribeFromDatasetRequest;
export type UnsubscribeFromDatasetCommandOutput = UnsubscribeFromDatasetResponse & __MetadataBearer;

export class UnsubscribeFromDatasetCommand extends $Command<
  UnsubscribeFromDatasetCommandInput,
  UnsubscribeFromDatasetCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnsubscribeFromDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnsubscribeFromDatasetCommandInput, UnsubscribeFromDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UnsubscribeFromDatasetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UnsubscribeFromDatasetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnsubscribeFromDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnsubscribeFromDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnsubscribeFromDatasetCommandOutput> {
    return deserializeAws_restJson1UnsubscribeFromDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
