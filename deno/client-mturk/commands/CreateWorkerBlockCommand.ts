
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { CreateWorkerBlockRequest, CreateWorkerBlockResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateWorkerBlockCommand,
  serializeAws_json1_1CreateWorkerBlockCommand,
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

export type CreateWorkerBlockCommandInput = CreateWorkerBlockRequest;
export type CreateWorkerBlockCommandOutput = CreateWorkerBlockResponse & __MetadataBearer;

export class CreateWorkerBlockCommand extends $Command<
  CreateWorkerBlockCommandInput,
  CreateWorkerBlockCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorkerBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkerBlockCommandInput, CreateWorkerBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "CreateWorkerBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkerBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkerBlockResponse.filterSensitiveLog,
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

  private serialize(input: CreateWorkerBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWorkerBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkerBlockCommandOutput> {
    return deserializeAws_json1_1CreateWorkerBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
