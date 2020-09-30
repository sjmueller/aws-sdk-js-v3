
import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient.ts";
import { ChangeMessageVisibilityRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryChangeMessageVisibilityCommand,
  serializeAws_queryChangeMessageVisibilityCommand,
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

export type ChangeMessageVisibilityCommandInput = ChangeMessageVisibilityRequest;
export type ChangeMessageVisibilityCommandOutput = __MetadataBearer;

export class ChangeMessageVisibilityCommand extends $Command<
  ChangeMessageVisibilityCommandInput,
  ChangeMessageVisibilityCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ChangeMessageVisibilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ChangeMessageVisibilityCommandInput, ChangeMessageVisibilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ChangeMessageVisibilityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ChangeMessageVisibilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryChangeMessageVisibilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangeMessageVisibilityCommandOutput> {
    return deserializeAws_queryChangeMessageVisibilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
